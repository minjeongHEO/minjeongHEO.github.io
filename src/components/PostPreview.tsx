import { Post } from '@/lib/posts';
import Image from 'next/image';
import React from 'react';

export default function PostPreview({ slug, desc, thumbnail, title, content, url }: Post) {
  return (
    <div className="bg-background rounded-3xl h-40 p-5">
      <div className="flex flex-row justify-start items-center mb-3">
        <Image className="shadow-lg mr-2" src={thumbnail} alt={title} width={60} height={60} />
        <h1>{title}</h1>
      </div>
      <p>{desc}</p>
      <p>{content.slice(0, 100)}...</p>
      <span></span>
      <a href={url}>📓 Read more</a>
    </div>
  );
}
