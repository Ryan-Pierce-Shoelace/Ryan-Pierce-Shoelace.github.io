@echo off
echo ==========================================
echo   Shoelace Studios - Image Optimizer
echo ==========================================
echo.

echo Checking folder structure...

if not exist "raw" (
    echo ERROR: raw folder not found!
    echo This script should be in the images folder.
    echo Current location: %CD%
    echo.
    pause
    exit /b 1
)
echo ✓ Raw folder found

if not exist "..\scripts\optimize-images.js" (
    echo ERROR: optimize-images.js not found!
    echo Looking for: %CD%\..\scripts\optimize-images.js
    echo Make sure the scripts folder exists one level up.
    echo.
    pause
    exit /b 1
)
echo ✓ Optimization script found

echo Counting images in raw folder...
set count=0
for %%f in (raw\*.jpg raw\*.jpeg raw\*.png raw\*.gif raw\*.bmp raw\*.tiff) do (
    set /a count+=1
)

if %count%==0 (
    echo No images found in the raw folder.
    echo Looking in: %CD%\raw\
    echo.
    echo Please add some images to the 'raw' folder and try again.
    echo Supported formats: JPG, PNG, GIF, BMP, TIFF
    echo.
    pause
    exit /b 1
)

echo Found %count% image(s) to process
echo.

:MENU
echo Select image size to create:
echo.
echo 1. Thumbnail (400x400px)
echo 2. Small (800x600px)
echo 3. Medium (1200x900px)
echo 4. Large (1920x1080px)
echo 5. Hero (2560x1440px)
echo 6. Web-ready (1920px wide, keeps ratio)
echo 7. All sizes
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" set size=thumbnail
if "%choice%"=="2" set size=small  
if "%choice%"=="3" set size=medium
if "%choice%"=="4" set size=large
if "%choice%"=="5" set size=hero
if "%choice%"=="6" set size=web-ready
if "%choice%"=="7" set size=all

if "%size%"=="" (
    echo.
    echo Invalid choice! Please enter 1-7.
    echo.
    goto MENU
)

echo.
echo Processing images at %size% size...
echo.

cd ..
echo Current directory: %CD%
echo Running: node scripts\optimize-images.js %size%
echo.

node scripts\optimize-images.js %size%

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Image processing failed!
    echo Error code: %errorlevel%
    echo.
    echo Possible solutions:
    echo 1. Run 'npm install' in the project root
    echo 2. Check that all images are in supported formats
    echo 3. Make sure Node.js is installed
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Processing Complete!
echo ==========================================
echo.
echo Your optimized images are in: images\optimized\
echo.
echo You can now copy them to your assets folder.
echo.
pause