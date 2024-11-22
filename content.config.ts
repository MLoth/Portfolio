import { defineCollection, z } from '@nuxt/content'

export const collections = {
  blog: defineCollection({
    type: 'page',
    source: 'blog/**/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      createdAt: z.date(),
      cover: z.string(),
      categories: z.array(z.string()),
    }),
  }),

  projects: defineCollection({
    type: 'page',
    source: 'projects/**/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      createdAt: z.date(),
      cover: z.string(),
      categories: z.array(z.string()),
    }),
  }),
}
