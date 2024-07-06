import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const BASE_PATH = path.join(process.cwd(), 'src/posts');

export interface Post {
  url: string;
  category: string;
  slug: string;
  title: string;
  date: string;
  desc: string;
  thumbnail: string;
  content: string;
}

// 모든 MDX 파일 경로 조회 (재귀적으로 탐색)
const getAllPostPaths = async (folder: string): Promise<string[]> => {
  const entries = await fs.promises.readdir(folder, { withFileTypes: true });
  const paths = entries.map(async (entry) => {
    const res = path.resolve(folder, entry.name);
    if (entry.isDirectory()) {
      return getAllPostPaths(res);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      return [res];
    }
    return [];
  });

  const results = await Promise.all(paths);
  return results.flat();
};

// 특정 카테고리의 MDX 파일 경로 조회
const getCategoryPostPaths = async (category: string): Promise<string[]> => {
  const folder = path.join(BASE_PATH, category);
  const entries = await fs.promises.readdir(folder, { withFileTypes: true });
  const paths = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => path.join(folder, entry.name));

  return paths;
};

// 포스트 경로 조회
export const getPostPaths = async (category?: string): Promise<string[]> => {
  if (category) {
    return getCategoryPostPaths(category);
  }
  return getAllPostPaths(BASE_PATH);
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = await getPostPaths(category);
  const posts = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));
  return posts;
};

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const fileContents = await fs.promises.readFile(postPath, 'utf8');
  const { data, content } = matter(fileContents);
  const category = path.basename(path.dirname(postPath));
  const slug = path.basename(postPath, '.mdx');
  const url = `/blog/${category}/${slug}`;

  return {
    url,
    category,
    slug,
    title: data.title,
    date: data.date,
    desc: data.desc,
    thumbnail: data.thumbnail,
    content,
  };
};
