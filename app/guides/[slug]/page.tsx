import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {articles, getArticle, headingId, categoryId} from '../../../lib/content';
import {pageMetadata, site} from '../../../lib/site';
import ArticleBody from '../../../components/ArticleBody';
import GuideCard from '../../../components/GuideCard';
import JsonLd from '../../../components/JsonLd';
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(a=>({slug:a.slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params; const a=getArticle(slug); if(!a) return {};
  const meta=pageMetadata(a.title,a.description,`/guides/${a.slug}`);
  return {...meta,openGraph:{...meta.openGraph,type:'article',modifiedTime:`${a.updated}T00:00:00+07:00`,section:a.category}};
}
export default async function Guide({params}: {params: Promise<{slug:string}>}) {
  const {slug}=await params; const a=getArticle(slug); if(!a) notFound();
  const headings=a.body.split('\n').filter(l=>l.startsWith('## ')).map(l=>l.slice(3));
  const url=`${site.origin}/guides/${a.slug}`;
  return <main id="main"><JsonLd data={{'@context':'https://schema.org','@graph':[{'@type':'Article','@id':`${url}#article`,headline:a.heading,description:a.description,mainEntityOfPage:url,dateModified:`${a.updated}T00:00:00+07:00`,inLanguage:'en',articleSection:a.category,wordCount:a.words,publisher:{'@type':'Organization',name:site.name,url:site.origin}},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.origin},{'@type':'ListItem',position:2,name:'Guides',item:`${site.origin}/guides`},{'@type':'ListItem',position:3,name:a.heading,item:url}]}]}}/>
  <div className="article-header"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides">Guides</Link><span>/</span><Link href={`/guides#${categoryId(a.category)}`}>{a.category}</Link></nav><span className="eyebrow">{a.kicker}</span><h1>{a.heading}</h1><div className="article-meta"><span>{Math.ceil(a.words/220)} min read</span><span aria-hidden="true">·</span><span>Updated <time dateTime={a.updated}>21 September 2026</time></span></div></div>
  <div className="article-layout"><aside className="toc"><span className="eyebrow">ON THIS PAGE</span><nav aria-label="On this page">{headings.map(h=><a key={h} href={`#${headingId(h)}`}>{h}</a>)}</nav><a className="toc-cta" href={site.demo}>Try the Veyro demo ↗</a></aside><article><ArticleBody body={a.body}/><div className="article-end"><span className="eyebrow">SEE IT FOR YOURSELF</span><h2>Your task. Your limit.</h2><p>Explore the current Veyro experience, or get to know the product first.</p><div className="hero-actions"><a className="button" href={site.demo}>Try Veyro ↗</a><a className="text-link" href={site.product}>About Veyro ↗</a></div></div></article></div>
  <section className="section related"><div className="section-heading"><div><span className="eyebrow">KEEP EXPLORING</span><h2>A useful next read.</h2></div><Link href="/guides" className="text-link">All guides ↗</Link></div><div className="guide-grid">{a.related.map(slug=>{const related=getArticle(slug);return related?<GuideCard key={slug} article={related}/>:null;})}</div></section></main>;
}
