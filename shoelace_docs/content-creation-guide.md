# Content Creation Guide for Shoelace Studios

*How to create blog posts, game pages, tutorials, and team profiles*

---

## File Basics

### Where Files Live
All content files go in the `src/content/` folder:
- **Blog posts:** `src/content/blog/`
- **Games:** `src/content/games/`
- **Tutorials:** `src/content/tutorials/`
- **Team members:** `src/content/team/`

### File Naming Rules
- Use lowercase letters, numbers, and hyphens only
- End with `.md`
- Be descriptive but concise

**Good examples:**
- `factual-front.md`
- `hitched.md`
- `john-smith.md`

**Bad examples:**
- `My Tutorial!!!.md` (spaces, capitals, special characters)
- `tutorial.md` (not descriptive)

---

## Creating Game Pages

### Step 1: Copy the Template
1. Copy `game-template.md` to `src/content/games/`
2. Rename it to match your game (e.g., `space-shooter.md`)

### Step 2: Fill Out the Frontmatter

The section between the `---` lines is the frontmatter. Fill it out like this:

```markdown
---
title: "Space Shooter Deluxe"
description: "A fast-paced arcade shooter with retro graphics"
date: 2024-02-20
main_image: "/assets/images/games/space-shooter/main.webp"
game_page_url: "https://shoelace.itch.io/space-shooter"
status: "Released"
gallery_images:
  - "/assets/images/games/space-shooter/1.webp"
  - "/assets/images/games/space-shooter/2.webp"
  - "/assets/images/games/space-shooter/3.webp"
---
```

**Status options — use exactly one of these (spelling matters):**
- `"Released"` — game is finished and available
- `"In Development"` — currently being worked on
- `"Coming Soon"` — finished but not yet released
- `"Prototype"` — early experimental build

**`game_page_url` is optional.** Leave it out entirely if the game has no public page yet.

**Image tips:**
- All images should be `.webp` format from the image optimizer
- `main_image` — your best screenshot
- `gallery_images` — 3 to 7 screenshots, medium size from optimizer

### Step 3: Write the Game Description

Below the closing `---`, write your content in markdown. Use `##` for all section headings:

```markdown
Created during [event name], this game is about [core concept].

## About the Game
Describe the game's premise and what players do...

## Key Features
- Feature one and why it matters
- Feature two and why it matters
- Feature three and why it matters
```

**Important:** Do not use a single `#` heading anywhere in the body. All headings must be `##` or `###`. A single `#` will render incorrectly.

---

## Creating Blog Posts

### Step 1: Copy the Template
1. Copy `blog-post-template.md` to `src/content/blog/`
2. Rename it to something like `my-post-title.md`

### Step 2: Fill Out the Frontmatter

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
- `date` — use YYYY-MM-DD format
- `author` — must exactly match a filename in `src/content/team/` without the `.md` extension (e.g. `ryan-pierce` for `ryan-pierce.md`)
- `cover_image` — optional, but recommended
- `tags` — optional, see tag list below

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

### Step 3: Write Your Content

```markdown
## Introduction
Start with a hook that draws readers in...

## Main Content
Break into clear sections with ## headings...

### Code Examples
Use three backticks followed by the language name:

    ```csharp
    public class MyScript : MonoBehaviour {
        void Start() {
            Debug.Log("Hello!");
        }
    }
    ```

## Adding Images
![Description of image](/assets/images/blog/my-post-slug/image1.webp)
```

---

## Creating Tutorials

### Step 1: Copy the Template
1. Copy `tutorial-template.md` to `src/content/tutorials/`
2. Rename descriptively (e.g., `unity-player-movement.md`)

### Step 2: Fill Out the Frontmatter

```markdown
---
title: "Creating Player Movement in Unity"
description: "Learn how to implement smooth, responsive player movement"
date: 2024-02-20
author: "ryan-pierce"
type: "written"
difficulty: "Beginner"
estimated_time: 45
prerequisites:
  - "Basic C# knowledge"
  - "Unity Editor familiarity"
thumbnail: "/assets/images/tutorials/unity-movement/thumbnail.webp"
---
```

**Type options — must be exactly one of:**
- `"written"` — text-based tutorial
- `"video"` — YouTube video (requires `youtube_id` field)

**For video tutorials, add this field:**
```markdown
youtube_id: "dQw4w9WgXcQ"  # The ID from the YouTube URL
```

**Difficulty options — must be exactly one of:**
- `"Beginner"`
- `"Intermediate"`
- `"Advanced"`

**`prerequisites` is optional.** Remove the field entirely if there are none.

**`thumbnail` is optional.** Remove it if you don't have one.

### Step 3: Write Your Tutorial

```markdown
## Overview
Explain what the reader will learn and build...

## Step 1: Setting Up
Clear, numbered steps work best...

### Code Example

    ```csharp
    public class PlayerMovement : MonoBehaviour {
        // Explain what each part does
    }
    ```

## Step 2: Adding Movement Logic

## Common Issues
Problems readers might face and how to fix them...

## Next Steps
What should they learn next?
```

---

## Creating Team Member Profiles

### Step 1: Copy the Template
1. Copy `team-member-template.md` to `src/content/team/`
2. Rename to `firstname-lastname.md`

### Step 2: Fill Out the Frontmatter

```markdown
---
name: "Jane Smith"
role: "Artist"
bio: "A short bio that appears on the About page. Keep it to a few sentences."
avatar: "/assets/images/team/jane-smith/bio-photo.webp"
order: 3
links:
  github: "https://github.com/janesmith"
  itchio: "https://janesmith.itch.io/"
  bluesky: "https://bsky.app/profile/janesmith.bsky.social"
  youtube: "https://www.youtube.com/@janesmith"
  twitch: "https://www.twitch.tv/janesmith"
experience:
  - title: "Current Position"
    company: "Studio Name"
    location: "City, Country"
    period: "2022 - Present"
    description: "What you do here."
education:
  - degree: "Degree Name"
    school: "School Name"
    period: "2018 - 2022"
skills:
  - "Unity Development"
  - "C# Programming"
  - "Pixel Art"
---
```

**Important notes:**
- `bio` — this is what appears on the About page in the profile card. Write it here in the frontmatter, not below the `---`
- `order` — controls sort order on the About page. Lower numbers appear first
- `links` — only include platforms you actually use. Delete any you don't
- `experience` and `education` — both optional, remove the sections if not needed
- `skills` — required, include at least one

**The body content below the closing `---` is not used anywhere on the site.** Everything shown on the About page comes from the frontmatter fields above.

### Avatar Images
- Use "thumbnail" size from image optimizer (400x400)
- Should be a clear photo
- Use `.webp` format

---

## Image Guidelines

### Always Optimize Before Using
Raw screenshots are often 5–15MB. The website needs small files. Always run images through the optimizer first.

### Recommended Sizes
| Use case | Optimizer size | Approximate output |
|---|---|---|
| Team avatar | Thumbnail (400x400) | ~30KB |
| Tutorial thumbnail | Medium (1200x900) | ~100KB |
| Game screenshots | Large (1920x1080) | ~200KB |
| Game main image | Large or Web-ready | ~200KB |
| Blog cover | Large or Web-ready | ~200KB |

### File Path Structure
All images go in the `public/` folder and are referenced with `/assets/images/...`:

- **Game images:** `/assets/images/games/[game-slug]/image-name.webp`
- **Blog images:** `/assets/images/blog/[post-slug]/image-name.webp`
- **Tutorial images:** `/assets/images/tutorials/[tutorial-slug]/image-name.webp`
- **Team photos:** `/assets/images/team/[firstname-lastname]/bio-photo.webp`

The game slug in the image path must match the game's `.md` filename. For example, `factual-front.md` → `/assets/images/games/factual-front/`.

---

## Common Mistakes to Avoid

### Frontmatter Errors
-  Leaving template comments inside the frontmatter (lines starting with `#` inside the `---` block)
-  Wrong date format — use `YYYY-MM-DD`, not `Feb 20, 2024`
-  Author value doesn't match a team member filename exactly
-  Status value spelled wrong — must match one of the four exact options
-  Wrong indentation in lists (use 2 spaces)

### Image Issues
-  Using raw unoptimized images
-  Wrong image path (file doesn't exist in `public/`)
-  Using `.jpg` or `.png` — use `.webp` whenever possible

### Content Problems
-  Using a single `#` heading in game or blog body content — use `##` or lower
-  Backtick comments left in from the template (e.g. in skills: `` `Business Stuff` ``)
-  Stray `---` at the bottom of a file — only use `---` for opening and closing the frontmatter at the top

---

## Quick Checklist

Before saving any content file:

-  File is in the correct `src/content/[type]/` folder
-  Filename uses lowercase, hyphens only, ends in `.md`
-  All template placeholder comments removed from inside the frontmatter
-  Date is in `YYYY-MM-DD` format
-  Author matches a team member filename exactly (blog and tutorials only)
-  Status is one of the four exact allowed values (games only)
-  Images are `.webp`, optimized, and in the correct `public/assets/` folder
-  Image paths start with `/assets/images/`
-  No single `#` headings in body content
-  No stray `---` at the bottom of the file

---

## Getting Help

If something looks wrong after saving:
1. Check for typos in the frontmatter — YAML is strict about spacing and quotes
2. Make sure all image files actually exist at the path you typed
3. Ask Xuul on Discord with a screenshot of the error
