import { Post } from '@/lib/posts';
import dayjs from 'dayjs';
import React from 'react';

export default function PostHeader({ post }: { post: Post }) {
  return (
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
          <span> • {dayjs(post.date).locale('ko').format('YYYY년 MM월 DD일')}</span>
        </div>
      </section>
    </div>
  );
}
