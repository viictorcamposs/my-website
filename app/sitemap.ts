import type { MetadataRoute } from 'next'

import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = allPosts.map(post => ({
    url: `https://victorcampos.vercel.app/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5
  }))

  return [
    {
      url: `https://victorcampos.vercel.app`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...blogUrls
  ]
}
