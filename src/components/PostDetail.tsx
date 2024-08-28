// 'use client';

import { PostBody } from './PostBody';
import { Post } from '@/lib/posts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PostHeader from './PostHeader';

export default function PostDetail({ post }: { post: Post }) {
  // const pathname = usePathname();
  // console.log('pathname: ', pathname);
  // /posts/vanilla_JavaScript/content
  // console.log('post: ', post); // 콘솔에서 데이터 확인

  return (
    <>
      <PostHeader post={post} />
      <nav></nav>
      <PostBody contents={post.content} />
    </>
  );
}
