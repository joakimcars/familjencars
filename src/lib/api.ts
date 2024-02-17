import { NewsArticle } from "@/interfaces/newsarticle";
import { Post } from "@/interfaces/post";
import { PhotoAlbum } from "@/interfaces/photoalbums";
import { ContactCard } from "@/interfaces/contactcard";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const articlesDirectory = join(process.cwd(), "_news");
const photoAlbumsDirectory = join(process.cwd(), "_photoalbums");
const contactsDirectory = join(process.cwd(), "_contacts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getPhotoAlbumsSlugs() {
  return fs.readdirSync(photoAlbumsDirectory);
}

export function getContactsSlugs() {
  return fs.readdirSync(contactsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as NewsArticle;
}

export function getPhotoAlbumsBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(photoAlbumsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as PhotoAlbum;
}

export function getContactsBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contactsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as ContactCard;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}



export function getAllNews(): NewsArticle[] {
  const articlesSlug = getArticleSlugs();
  const articles = articlesSlug
    .map((slug) => getArticleBySlug(slug))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}

export function getAllPhotoAlbums(): PhotoAlbum[] {
  const photoAlbumsSlug = getPhotoAlbumsSlugs();
  const photoAlbums = photoAlbumsSlug
    .map((slug) => getPhotoAlbumsBySlug(slug))
    // sort photoAlbums by date in descending order
    .sort((photoAlbums1, photoAlbums2) => (photoAlbums1.date > photoAlbums2.date ? -1 : 1));
  return photoAlbums;
}

export function getAllContacts(): ContactCard[] {
  const contactsSlug = getContactsSlugs();
  const contacts = contactsSlug
    .map((slug) => getContactsBySlug(slug))
    // sort photoAlbums by date in descending order
    .sort((contacts1, contacts2) => (contacts1.date > contacts2.date ? -1 : 1));
  return contacts;
}
