# Content Creation Guide for Shoelace Studios

*How to create blog posts, game pages, tutorials, and team profiles*

## File Basics

### Where Files Live
All content files go in the `src/content/` folder:
- **Blog posts:** `src/content/blog/`
- **Games:** `src/content/games/`
- **Tutorials:** `src/content/tutorials/`
- **Team members:** `src/content/team/`

### File Naming Rules
- **Use lowercase letters, numbers, and hyphens only**
- **End with `.md`**
- **Be descriptive but concise**

**Good examples:**
- `factual-front.md`
- `hitched.md`
- `john-smith.md`

**Bad examples:**
- `My Tutorial!!!.md` (spaces, capitals, special characters)
- `tutorial.md` (not descriptive)

## Creating Blog Posts

### Step 1: Copy the Template
1. **Find:** `blog-post-template.md`
2. **Copy it** to `src/content/blog/`
3. **Rename** to something like `my-post-title.md`

### Step 2: Fill Out the Metadata (Top Section)

The section between the `---` lines is called "frontmatter" - it's like filling out a form:

```markdown
---
title: "How I Built My First Unity Game"
description: "A beginner's journey through Unity development, from concept to completion"
date: 2024-02-20
author: "ryan-pierce"
cover_image: "/assets/images/blog/my-first-unity-game/cover.webp"
tags:
  - "Game Development"
  - "Unity"
  - "Beginner"
---
```

**Important notes:**
- **title:** Make it catchy and descriptive
- **description:** This appears in previews and at the top of the post
- **date:** Use YYYY-MM-DD format
- **author:** Must match a team member file (without `.md`)
- **cover_image:** Optional, but recommended - use `.webp` format from your optimized images
- **tags:** Use our standard tags (see list below)

### Step 3: Write Your Content

Below the `---` line, write your blog post using markdown:

```markdown
## Introduction
Start with a hook that draws readers in...

## What I Learned
Break your content into clear sections...

### Code Examples
Use three backticks for code:
```csharp
public class MyScript : MonoBehaviour {
    // Your code here
}
``` (add another three backticks to close)

## Adding Images
![Description of image](/assets/images/blog/my-post-slug/image1.webp)
```

### Common Tags for Blog Posts
- "Game Development"
- "Unity"
- "Tutorial"
- "Beginner"
- "Intermediate"
- "Advanced"
- "Art"
- "Programming"
- "Design"

## Creating Game Pages

### Step 1: Copy the Template
1. **Copy:** `game-template.md`
2. **Save to:** `src/content/games/`
3. **Rename:** to match your game (e.g., `space-shooter.md`)

### Step 2: Fill Out Game Information

```markdown
---
title: "Space Shooter Deluxe"
description: "A fast-paced arcade shooter with retro graphics"
date: 2024-02-20
main_image: "/assets/images/games/space-shooter/main.webp"
game_page_url: "https://shoelace.itch.io/space-shooter"
status: "Released"
gallery_images:
  - "/assets/images/games/space-shooter/screenshot1.webp"
  - "/assets/images/games/space-shooter/screenshot2.webp"
  - "/assets/images/games/space-shooter/screenshot3.webp"
---
```

**Image Requirements:**
- **main_image:** Should be your best screenshot (use "large" or "web-ready" from image optimizer)
- **gallery_images:** Use "medium" size from image optimizer for best results
- **All images should be .webp format** from your optimization tool

**Status Options:**
- "Released" - Game is finished and available
- "In Development" - Currently working on it
- "Coming Soon" - Finished but not yet released

### Step 3: Write Game Description

```markdown
Created during the 7-Day Game Jam, Space Shooter Deluxe is a love letter to classic arcade games.

Built in just one week, this game challenges players to survive waves of increasingly difficult enemies while collecting power-ups and achieving high scores.

## About the Game
Space Shooter Deluxe puts you in control of a lone fighter ship...

## Key Features
- 10 different enemy types with unique behaviors
- 5 powerful weapon upgrades
- Retro pixel art graphics
- Dynamic difficulty scaling
```

## Creating Tutorials

### Step 1: Copy the Template
1. **Copy:** `tutorial-template.md`
2. **Save to:** `src/content/tutorials/`
3. **Rename:** descriptively (e.g., `unity-player-movement.md`)

### Step 2: Fill Out Tutorial Metadata

```markdown
---
title: "Creating Player Movement in Unity"
description: "Learn how to implement smooth, responsive player movement"
date: 2024-02-20
author: "ryan-pierce"
type: "written"
thumbnail: "/assets/images/tutorials/unity-movement/thumbnail.webp"
difficulty: "Beginner"
prerequisites:
  - "Basic C# knowledge"
  - "Unity Editor familiarity"
estimated_time: 45
---
```

**Type Options:**
- "written" - Text-based tutorial
- "video" - YouTube video (requires youtube_id field)

**For Video Tutorials, add:**
```markdown
youtube_id: "dQw4w9WgXcQ"  # The ID from your YouTube URL
```

**Difficulty Levels:**
- "Beginner"
- "Intermediate" 
- "Advanced"

**Thumbnail Images:**
- Use "Medium" size from your image optimizer
- Should clearly show what the tutorial is about

### Step 3: Structure Your Tutorial

```markdown
## Overview
Explain what students will learn and build...

## Prerequisites Details
Expand on what knowledge is needed...

## Step 1: Setting Up the Project
Break down into clear, numbered steps...

### Code Example
```csharp
public class PlayerMovement : MonoBehaviour {
    // Include commented code examples
}
``` (close with three backticks)

## Step 2: Adding Movement Logic
Continue with more steps...

## Common Issues
List problems students might face...

## Next Steps
What should they learn next?
```

## Creating Team Member Profiles

### Step 1: Copy the Template
1. **Copy:** `team-member-template.md`
2. **Save to:** `src/content/team/`
3. **Rename:** to `firstname-lastname.md`

### Step 2: Fill Out Your Information

```markdown
---
name: "Ryan Pierce"
role: "Lead Developer"
bio: "Passionate indie game developer with 5 years of Unity experience"
avatar: "/assets/images/team/ryan-pierce/bio-photo.webp"
order: 1
links:
  github: "https://github.com/ryanpierce"
  itchio: "https://ryanpierce.itch.io/"
  twitter: "https://twitter.com/ryanpierce"
experience:
  - title: "Lead Developer"
    company: "Shoelace Studios"
    location: "Remote"
    period: "2023 - Present"
    description: "Leading development of indie games using Unity"
education:
  - degree: "Computer Science"
    school: "University of Example"
    period: "2018 - 2022"
skills:
  - "Unity Development"
  - "C# Programming"
  - "Game Design"
---
```

**Avatar Images:**
- Use "thumbnail" size from image optimizer (400x400px)
- Should be a clear, professional-looking photo
- Use .webp format

**Social Links:**
Only include the platforms you actually use. Remove any you don't need.

### Step 3: Write Your Bio

```markdown
I've been passionate about games since childhood, starting with simple Flash games and eventually moving to Unity development.

My favorite projects involve puzzle mechanics and innovative gameplay systems. When I'm not coding, you can find me playing indie games or sketching game concepts.
```

## Image Guidelines

### Optimized Images Are Required
**Always use images from your image optimization tool!** Raw images are too large for websites.

### Recommended Workflow
1. **Put raw images** in `images/raw/`
2. **Run the image optimizer** and choose appropriate sizes:
    - **Thumbnails:** Use "thumbnail" (400x400px)
    - **Blog/tutorial images:** Use "medium" (1200x900px)
    - **Game screenshots:** Use "large" (1920x1080px) or "web-ready"
    - **Cover images:** Use "large" or "web-ready"
3. **Copy optimized .webp files** to the correct assets folder
4. **Reference them** in your content with `/assets/images/...` paths

### File Path Structure
- **Blog images:** `/assets/images/blog/[post-slug]/image-name.webp`
- **Game images:** `/assets/images/games/[game-slug]/image-name.webp`
- **Tutorial images:** `/assets/images/tutorials/[tutorial-slug]/image-name.webp`
- **Team photos:** `/assets/images/team/[firstname-lastname]/bio-photo.webp`

## Publishing Your Content

### Step 1: Save Your File
1. **Make sure** your file is saved in the correct folder
2. **Check** that the filename follows our naming rules
3. **Verify** all image paths are correct and images exist

### Step 2: Test Locally (Ask a Developer)
Before publishing, have a developer:
1. **Run the local server** to preview your content
2. **Check for errors** in the content structure
3. **Verify images** load correctly

### Step 3: Publish
Once everything looks good:
1. **Commit your changes** to Git (ask for help if needed)
2. **The website** will automatically update when changes are pushed

## Common Mistakes to Avoid

### Metadata Errors
- ❌ **Missing quotes** around text values
- ❌ **Wrong date format** (use YYYY-MM-DD)
- ❌ **Incorrect author reference** (must match team member file)
- ❌ **Wrong indentation** in lists

### Image Issues
- ❌ **Using raw, unoptimized images** (they're too big!)
- ❌ **Wrong image paths** (file doesn't exist)
- ❌ **Missing alt text** for images
- ❌ **Using .jpg or .png instead of .webp**

### Content Problems
- ❌ **Inconsistent heading structure** (don't skip from # to ###)
- ❌ **Missing sections** (every tutorial needs Prerequisites, Overview, etc.)

### File Organization
- ❌ **Files in wrong folders**
- ❌ **Incorrect file naming** (spaces, capitals, special characters)
- ❌ **Missing .md extension**

## Content Quality Tips

### Writing Style
- **Break up long paragraphs** - 3-4 sentences max
- **Use headings to organize** - readers should be able to scan quickly
- **Include examples** - seriously, I hate anything without examples

### Images
- **Use images to break up text** - especially in long tutorials
- **Always include alt text** - describe what the image shows
- **Optimize before using** - never use raw images directly
- **Make images relevant** - each image should add value

### Code Examples
- **Include comments** - explain what the code does
- **Use proper syntax highlighting** - specify the language
- **Keep examples focused** - one concept per code block
- **Test your code** - make sure it actually works

## Getting Help

### Before Asking for Help
1. **Double-check** your file is in the right folder
2. **Verify** all image paths are correct and images exist
3. **Check** for typos in the metadata section

### When You Need Help
1. **Save your work** before asking for assistance
2. **Describe** exactly what you're trying to do
3. **Share** any error messages you see with Xuul
4. **Be specific** about which step isn't working

Remember: It's better to ask questions than to guess! The development team is here to help you create great content.

## Quick Checklist

Before submitting any content:

**✅ File is in correct folder (`src/content/[type]/`)**  
**✅ Filename uses lowercase, hyphens, and .md extension**  
**✅ All required metadata fields are filled out**  
**✅ Images are optimized .webp files in correct asset folders**  
**✅ Image paths start with `/assets/images/`**  
**✅ Content is well-organized with clear headings**  
**✅ No spelling or grammar errors**  
**✅ All links work and go to the right places**