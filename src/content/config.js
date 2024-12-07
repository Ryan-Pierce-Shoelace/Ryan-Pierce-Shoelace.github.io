import { defineCollection, reference, z } from 'astro:content';

const team = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string(),
        avatar: z.string(),
        order: z.number(),
        links: z.object({
            github: z.string().optional(),
            itchio: z.string().optional(),
            twitter: z.string().optional(),
            youtube: z.string().optional(),
            twitch: z.string().optional()
        }).optional(),
        experience: z.array(z.object({
            title: z.string(),
            company: z.string(),
            location: z.string(),
            period: z.string(),
            description: z.string()
        })).optional(),
        education: z.array(z.object({
            degree: z.string(),
            school: z.string(),
            period: z.string()
        })).optional(),
        skills: z.array(z.string())
    })
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: reference('team'),  // References team collection
        cover_image: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
});

const games = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        main_image: z.string(),
        game_page_url: z.string(),
        status: z.string(),
        gallery_images: z.array(z.string()).optional()
    })
});

export const collections = { team, blog, games };