import { Post } from '@/lib/posts';
import Image from 'next/image';
import React from 'react';
import styles from './PostPreview.module.css';
import Link from 'next/link';

export default function PostPreview({ slug, category, desc, date, thumbnail, title, content, url }: Post) {
  return (
    <Link href={url}>
      <div className={`${styles.postPreview} group`}>
        <span className={styles.categoryLabel}>{category}</span>
        <div className="flex flex-row justify-start items-center mb-3">
          <Image className={styles.thumbnail} src={thumbnail} alt={title} width={60} height={60} />
          <h1 className={`${styles.title} group-hover:text-mainColor`}>{title}</h1>
        </div>
        <p className="mb-2">{desc}</p>
        <p className="mb-2">{content.slice(0, 100)}...</p>
        <span className="block mb-2">{new Date(date).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
