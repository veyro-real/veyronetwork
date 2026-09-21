import Link from 'next/link';
import type {Article} from '../lib/content';
export default function GuideCard({article, number}: {article: Article; number?: number}) {
  return <Link href={`/guides/${article.slug}`} className="guide-card"><div className="card-meta"><span>{article.category}</span><span>{number !== undefined ? String(number).padStart(2,'0') : `${Math.ceil(article.words / 220)} min`}</span></div><h3>{article.heading}</h3><p>{article.description}</p><span className="read-link">Read the guide <span aria-hidden="true">↗</span></span></Link>;
}
