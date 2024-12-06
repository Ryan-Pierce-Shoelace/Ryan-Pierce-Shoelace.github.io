import { defineCollection, z } from 'astro:content';

export const collections = {
    games: defineCollection({
        type: 'content',
        schema: ({image}) => ({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            main_image: image(),
            game_page_url: z.string().url().optional(),
            gallery_images: z.array(image()).optional()
        })
    }),

    blog: defineCollection({
        type: 'content',
        schema: ({image}) => ({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            main_image: image().optional()
        })
    }),

    team: defineCollection({
        type: 'content',
        schema: ({image}) => ({
            name: z.string(),
            role: z.string(),
            avatar: image(),
            order: z.number().optional(),
            links: z.object({
                github: z.string().url().optional(),
                itchio: z.string().url().optional(),
                twitter: z.string().url().optional(),
                youtube: z.string().url().optional(),
                twitch: z.string().url().optional()
            }),
            skills: z.array(z.string())
        })
    })
};