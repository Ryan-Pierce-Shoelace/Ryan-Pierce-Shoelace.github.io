# Image Optimization Guide for Shoelace Studios

This guide will help you take large, raw images (like screenshots from games or photos) and turn them into web-ready images that load fast and look great on our website.

## Why We Need to Optimize Images

- **Raw images are HUGE** - A single screenshot might be 10MB or more
- **Websites need small files** - Large images make pages load slowly
- **We need multiple sizes** - Thumbnails, medium images, and full-size versions
- **WebP format is better** - Much smaller files than JPG or PNG with same quality

## One-Time Setup (Do This Once)

### Step 1: Install Node.js

**What is Node.js?** It's a program that lets us run our image optimization script. You only need to install it once.

1. **Go to** [nodejs.org](https://nodejs.org)
2. **Click** the big green "Download Node.js (LTS)" button
3. **Run the downloaded file** and follow the installer
4. **Restart your computer** when done

**To check if it worked:**
- Press `Windows key + R`, type `cmd`, press Enter, then type `node --version`
- **You should see** something like `v18.17.0`

### Step 2: Set Up the Project
####  This should exist already so only do it if missing an images folder as show below
```
your-project/
├── images/
│   ├── raw/              ← Put your original images here
│   ├── optimized/        ← Optimized images appear here
│   └── OPTIMIZE-IMAGES.bat ← Double-click this to optimize
└── other project files...
```

1. **Open your project folder** on your computer
2. **Double-click** the file called `SETUP-IMAGES.bat`
3. **Wait** for it to finish (you'll see "Setup complete!" when done)


## How to Optimize Images (Every Time)

### Step 1: Prepare Your Raw Images

1. **Gather all images** you want to optimize
2. **Name them clearly** - Use descriptive names like:
   - `the-list-gameplay.png`
   - `main.jpg`
   - `feilds-of-flame-level-3.png`
3. **Avoid special characters** - Stick to letters, numbers, and hyphens

### Step 2: Put Images in the Raw Folder

1. **Navigate to your project folder**
2. **Go into the `images` folder**
3. **Open the `raw` folder**
4. **Copy all your raw images** into this `raw` folder

### Step 3: Run the Optimization Tool

1. **Go back to the `images` folder** (one level up from `raw`)
2. **Double-click** `OPTIMIZE-IMAGES.bat`
3. **Choose your size** from the menu:

**Size Options:**
- **1. Thumbnail (400x400)** - Perfect for profile pics, small previews
- **2. Small (800x600)** - Good for blog images, small screenshots
- **3. Medium (1200x900)** - Great for main content images
- **4. Large (1920x1080)** - Perfect for hero images, large screenshots
- **5. Hero (2560x1440)** - Ultra-wide banners and backgrounds
- **6. Web-ready (1920px wide)** - Keeps original aspect ratio, good for most uses
- **7. All sizes** - Creates all of the above

4. **Type the number** (1-7) and press Enter
5. **Wait** for processing to complete
6. **Press any key** when it says "Press any key to continue"

### Step 4: Check Your Results

1. **Look in the `images/optimized/` folder**
2. **You should see** your optimized images with names like:
   - `your-image-name-thumbnail.webp`
   - `your-image-name-medium.webp`
   - `your-image-name.webp` (if you chose web-ready)
   - Multiple versions (if you chose "all sizes")

### Step 5: Move Images to Your Website

**For Game Images:**
1. **Create a folder** in `public/assets/images/games/[game-name]/`
2. **Copy the optimized images** from `images/optimized/` to this folder
3. **Use them** in your game content files

**For Blog Images:**
1. **Create a folder** in `public/assets/images/blog/[post-name]/`
2. **Copy the optimized images** from `images/optimized/` to this folder

**For Bio Photos:**
1. **Copy to** `public/assets/images/team/[firstname-lastname]/`

## File Naming Practices
- **Avoid spaces:** Use hyphens instead (`team-photo-2024.jpg`)
- **Be consistent:** Pick a naming style and stick to it
- **Include context:** `space-shooter-boss-battle.png` is better than `screenshot1.png`

## Troubleshooting

### "Node.js not found" error
- **Solution:** Install Node.js from nodejs.org and restart your computer

### "No images found" message
- **Solution:** Make sure you put images in the `images/raw/` folder, not just `images/`

### Images look blurry or low quality
- **Solution:** Start with higher quality raw images if possible

### Script closes immediately
- **Solution:** Make sure you're double-clicking `OPTIMIZE-IMAGES.bat` from inside the `images/` folder

### "Permission denied" errors
- **Solution:** Make sure the `images/optimized/` folder isn't open in another program


*## Need Help?

If you get stuck:
1. **Take a screenshot** of any error messages
2. **Note exactly what step** you were on
3. **Check that you followed the folder structure** correctly
4. **Ask Xuul on Discord** for help - I can probably figure it out.