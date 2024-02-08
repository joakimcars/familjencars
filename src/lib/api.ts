import { NewsArticle } from "@/interfaces/newsarticle";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const articlesDirectory = join(process.cwd(), "_news");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as NewsArticle;
}

export function getAllNews(): NewsArticle[] {
  const articlesSlug = getArticleSlugs();
  const articles = articlesSlug
    .map((slug) => getArticleBySlug(slug))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}
