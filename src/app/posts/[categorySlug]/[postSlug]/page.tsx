import PostDetail from '@/components/PostDetail';
import { getCategoryPostList, getPostByCategoryAndSlug } from '@/lib/posts';

/**
 * PostPage 컴포넌트
 * ! Next.js의 App Router에서 페이지 컴포넌트는 default export로 내보내야 합니다.
 * ! Next.js는 props 객체를 전달하기 때문에 각 속성을 직접 받을 수 없습니다.(ex. PostPage({ categorySlug, postSlug })
 * 동적 라우트 파라미터를 이용해 특정 카테고리와 포스트의 상세 페이지를 렌더링합니다.
 * params로 categorySlug와 postSlug를 받아 해당 포스트의 데이터를 가져와 표시합니다.
 */
export default async function PostPage({ params }: { params: { categorySlug: string; postSlug: string } }) {
  const post = await getPostByCategoryAndSlug(params.categorySlug, params.postSlug);
  if (!post) {
    return <div>Post not found</div>;
  }
  return <PostDetail post={post} />;
}

/** 
/**
 * generateStaticParams 함수
 * Next.js 13 이상의 App Router에서 정적 경로 생성을 위해 사용됩니다.
 * 빌드 시점에 생성할 모든 가능한 [categorySlug]/[postSlug] 조합을 반환합니다.
 * 이를 통해 Next.js는 미리 정적 페이지를 생성할 수 있습니다.
 */
export const generateStaticParams = async () => {
  const categories = ['Next.js_blog', 'vanilla_JavaScript'];
  let paths: { categorySlug: string; postSlug: string }[] = [];

  for (const category of categories) {
    const posts = await getCategoryPostList(category);
    const categoryPaths = posts.map((post) => ({
      categorySlug: category,
      postSlug: post.slug,
    }));
    paths = [...paths, ...categoryPaths];
  }

  return paths;
};
