import { getPostList } from '@/lib/posts';
import PostPreview from '@/components/PostPreview';
import Banner from '@/components/Banner';

interface Post {
  url: string;
  category: string;
  slug: string;
  title: string;
  date: string;
  desc: string;
  thumbnail: string;
  content: string;
}

export default async function Home() {
  const postList: Post[] = await getPostList();

  return (
    <main className="flex min-h-screen flex-col items-center px-24 bg-background2">
      <Banner />
      <section className="min-w-96 w-full">
        <ul>
          {postList.map((post, idx) => (
            <li key={`${post.slug}-${idx}`} className="mb-3">
              <PostPreview {...post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
