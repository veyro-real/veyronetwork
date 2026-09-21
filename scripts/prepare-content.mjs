import fs from 'node:fs';
const index = JSON.parse(fs.readFileSync(new URL('../content/index.json', import.meta.url), 'utf8'));
const articles = index.map(item => {
  const text = fs.readFileSync(new URL(`../content/${item.slug}.md`, import.meta.url), 'utf8').trim();
  const [heading, ...lines] = text.split('\n');
  if (!heading.startsWith('# ')) throw Error(`Missing heading: ${item.slug}`);
  const body = lines.join('\n').trim();
  return {...item, heading: heading.slice(2), body, words: body.split(/\s+/).length};
});
if (new Set(articles.map(a => a.slug)).size !== articles.length) throw Error('Duplicate slug');
for (const a of articles) {
  if (a.words < 450) throw Error(`Article needs more substance: ${a.slug} (${a.words})`);
  for (const slug of a.related) if (!articles.some(b => b.slug === slug)) throw Error(`Invalid related guide: ${slug}`);
  for (const [,slug] of a.body.matchAll(/\]\(\/guides\/([^\)]+)\)/g)) if (!articles.some(b => b.slug === slug)) throw Error(`Broken link in ${a.slug}: ${slug}`);
}
fs.writeFileSync(new URL('../lib/articles.generated.json', import.meta.url), JSON.stringify(articles, null, 2)+'\n');
console.log(`${articles.length} guides · ${articles.reduce((sum,a)=>sum+a.words,0).toLocaleString()} words`);
