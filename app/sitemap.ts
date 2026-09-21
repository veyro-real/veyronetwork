import type {MetadataRoute} from 'next';
import {articles} from '../lib/content';
import {site} from '../lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{url:site.origin},{url:`${site.origin}/guides`},{url:`${site.origin}/about`},...articles.map(a=>({url:`${site.origin}/guides/${a.slug}`,lastModified:a.updated}))];
}
