import {Fragment} from 'react';
import Link from 'next/link';
import {headingId} from '../lib/content';
function Inline({text}: {text: string}) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part,i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <Fragment key={i}>{part}</Fragment>;
    const [, label, href] = match;
    if (href.startsWith('/')) return <Link key={i} href={href}>{label}</Link>;
    if (!href.startsWith('https://')) return <Fragment key={i}>{label}</Fragment>;
    return <a key={i} href={href}>{label}</a>;
  })}</>;
}
export default function ArticleBody({body}: {body: string}) {
  return <div className="prose">{body.split(/\n\s*\n/).map((block,i) => block.startsWith('## ') ? <h2 key={i} id={headingId(block.slice(3))}>{block.slice(3)}</h2> : <p key={i}><Inline text={block}/></p>)}</div>;
}
