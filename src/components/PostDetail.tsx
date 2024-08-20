'use client';

import { Post } from '@/lib/posts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PostDetail({ post }: { post: Post }) {
  const pathname = usePathname();
  // console.log('pathname: ', pathname);
  // /posts/vanilla_JavaScript/content
  // console.log('post: ', post); // 콘솔에서 데이터 확인

  return (
    <>
      <div className="article-title pl-20 pr-20 ">
        <section>
          <div className="mb-3 text-mainColor font-roboto-mono">
            <span># {post.category}</span>
          </div>
          <span>
            <h1
              className="text-3xl font-bold p-2 inline"
              style={{ color: 'var(--background)', backgroundColor: 'var(--foreground)' }}
            >
              {post.title}
            </h1>
          </span>
          <div className="mt-3 font-roboto-mono">
            <span>
              {'//'} {post.desc}
            </span>

            <span> • {new Date(post.date).toLocaleDateString()}</span>
          </div>
        </section>
      </div>

      <nav></nav>
      <div className="article-contents"></div>
    </>
    // <div className="bg-background rounded-3xl p-5 shadow-sm transition-all duration-300 dark:shadow-dark">
    //   <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
    //   <Image className="shadow-lg mb-4" src={post.thumbnail} alt={post.title} width={800} height={400} />
    //   <div className="mb-4 text-gray-600">{new Date(post.date).toLocaleDateString()}</div>
    //   <div className="prose prose-lg dark:prose-dark" dangerouslySetInnerHTML={{ __html: post.content }} />
    // </div>
  );
}
