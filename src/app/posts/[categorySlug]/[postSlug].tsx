import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/lib/posts';
import PostDetail from '@/components/PostDetail';
import { getCategoryPostList, getPostByCategoryAndSlug } from '@/lib/posts';

export default function PostPage({ post }: { post: Post }) {
  // console.log('post: ', post);
  return <PostDetail post={post} />;
}

/** 
 * GetStaticPaths
 * 모든 가능한 경로를 미리 생성하여 정적 페이지로 빌드합니다.
    각 카테고리를 읽어와서 해당 카테고리 내의 모든 포스트의 경로를 생성합니다.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ['Next.js_blog', 'vanilla_JavaScript']; // 여기에 추가적인 카테고리를 포함
  let paths: { params: { categorySlug: string; postSlug: string } }[] = [];

  for (const category of categories) {
    const posts = await getCategoryPostList(category);
    const categoryPaths = posts.map((post) => ({
      params: { categorySlug: category, postSlug: post.slug },
    }));
    paths = [...paths, ...categoryPaths];
  }

  return {
    paths,
    fallback: false,
  };
};

/**
 * GetStaticProps
 * getStaticPaths에서 생성한 각 경로에 대해 정적 props를 제공합니다.
  특정 카테고리와 슬러그에 해당하는 포스트 데이터를 읽어와 페이지에 props로 전달합니다.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostByCategoryAndSlug(params?.categorySlug as string, params?.postSlug as string);
  return {
    props: { post },
  };
};
