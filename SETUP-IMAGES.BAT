@echo off
echo ==========================================
echo   Shoelace Studios - Image Tool Setup
echo ==========================================
echo.

echo Creating folder structure...

if not exist "images" (
    mkdir "images"
    echo Created images folder
)

if not exist "images\raw" (
    mkdir "images\raw"
    echo Created raw folder
)

if not exist "images\optimized" (
    mkdir "images\optimized"
    echo Created optimized folder
)

if not exist "scripts" (
    mkdir "scripts"
    echo Created scripts folder
)

echo.
echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Folder structure created:
echo   images\raw\        ^<-- Put your raw images here
echo   images\optimized\  ^<-- Optimized images appear here
echo.
echo Next steps:
echo 1. Make sure you have the optimize-images.js file in the scripts folder
echo 2. Put images in images\raw\
echo 3. Run OPTIMIZE-IMAGES.bat in the images folder
echo.
echo If you get errors, run 'npm install' manually first.
echo.
pause