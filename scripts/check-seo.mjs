import fs from 'node:fs';
const index=JSON.parse(fs.readFileSync(new URL('../content/index.json',import.meta.url),'utf8'));
const seen=new Set();
for(const a of index){
 if(seen.has(a.slug)) throw Error(`Duplicate slug: ${a.slug}`); seen.add(a.slug);
 if(a.title.length<30||a.title.length>65) console.warn(`Title length: ${a.slug} (${a.title.length})`);
 if(a.description.length<80||a.description.length>165) console.warn(`Description length: ${a.slug} (${a.description.length})`);
}
console.log(`SEO metadata checked: ${index.length} guides`);
