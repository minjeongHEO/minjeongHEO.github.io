'use client';

import { Post } from '@/lib/posts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function PostDetail({ post }: { post: Post }) {
  const pathname = usePathname();

  // console.log(pathname);
  return (
    <div className="bg-background rounded-3xl p-5 shadow-sm transition-all duration-300 dark:shadow-dark">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image className="shadow-lg mb-4" src={post.thumbnail} alt={post.title} width={800} height={400} />
      <div className="mb-4 text-gray-600">{new Date(post.date).toLocaleDateString()}</div>
      <div className="prose prose-lg dark:prose-dark" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
