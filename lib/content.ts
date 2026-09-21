import data from './articles.generated.json';
export const articles = data;
export type Article = typeof articles[number];
export const categories = ['The basics', 'Using an agent', 'Your controls', 'On Solana', 'The wider picture'];
export const categoryId = (name: string) => name.toLowerCase().replaceAll(' ', '-');
export const getArticle = (slug: string) => articles.find(article => article.slug === slug);
export const headingId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
