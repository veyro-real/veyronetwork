import Link from 'next/link';
export default function NotFound(){return <main id="main" className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This path ends here.</h1><p>The guide may have moved, or the address may be incomplete.</p><Link className="button" href="/guides">Explore the guides →</Link></main>}
