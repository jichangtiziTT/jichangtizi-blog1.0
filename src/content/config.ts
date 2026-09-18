import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    topic: z.string(),
    primaryKeyword: z.string(),
    keywords: z.array(z.string()),
    longTailKeywords: z.array(z.string()),
    publishedDate: z.string(),
    updatedDate: z.string(),
    author: z.string().default('机场梯子调查编辑部'),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
    canonical: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
      intent: z.enum([
        'definition',
        'howto',
        'troubleshooting',
        'compatibility',
        'selection',
        'cost',
        'risk',
        'difference',
        'other'
      ]),
      keyword: z.string().optional()
    })).default([])
  })
});

export const collections = {
  blog: blogCollection,
};
