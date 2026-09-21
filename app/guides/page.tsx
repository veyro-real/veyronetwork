import Link from 'next/link';
import {articles, categories, categoryId} from '../../lib/content';
import {pageMetadata, site} from '../../lib/site';
import GuideCard from '../../components/GuideCard';
import JsonLd from '../../components/JsonLd';
export const metadata = pageMetadata('Guides to Agentic Payments, Solana & User Control', 'Explore 21 practical guides to agentic payments: searching X, setting a spend limit, understanding your result, and the wider world of agentic commerce.', '/guides');
export default function Guides() {
  return <main id="main" className="library"><JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:'Veyro Network guides',url:`${site.origin}/guides`,hasPart:articles.map(a=>({'@type':'Article',headline:a.heading,url:`${site.origin}/guides/${a.slug}`}))}}/><div className="library-head"><span className="eyebrow">THE VEYRO NETWORK LIBRARY</span><h1>A little context.<br/><span>A clearer next move.</span></h1><p>Agentic payments, explained through the things you actually want to do.</p><nav className="category-nav" aria-label="Guide topics">{categories.map(c=><a key={c} href={`#${categoryId(c)}`}>{c} <span>{articles.filter(a=>a.category===c).length}</span></a>)}</nav></div>{categories.map(category=><section className="library-section" id={categoryId(category)} key={category}><div className="section-heading"><h2>{category}</h2><Link href="#main" className="tiny">Back to top ↑</Link></div><div className="guide-grid">{articles.filter(a=>a.category===category).map(a=><GuideCard key={a.slug} article={a}/>)}</div></section>)}</main>;
}
