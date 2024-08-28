'use server';

import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'; //서버컴포넌트를 위한 것
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
// @ts-ignore
import remarkA11yEmoji from '@fec/remark-a11y-emoji';

const components = {
  h1: (props: any) => <h1 style={{ fontSize: '2em', fontWeight: 'bold' }} {...props} />,
  h2: (props: any) => <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }} {...props} />,
  h3: (props: any) => <h3 style={{ fontSize: '1.17em', fontWeight: 'bold' }} {...props} />,
  // 필요한 다른 요소들도 여기에 추가할 수 있습니다.
};

export const PostBody = async ({ contents }: { contents: string }) => {
  // const { content } = await compileMDX({
  //   source: contents,
  //   // components,
  //   options: {
  //     mdxOptions: {
  //       remarkPlugins: [remarkGfm, remarkBreaks, remarkA11yEmoji],
  //       rehypePlugins: [
  //         [rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }],
  //         rehypeSlug,
  //       ],
  //       format: 'mdx',
  //     },
  //   },
  // });

  // return <div className="article-content">{content}</div>;
  return (
    <MDXRemote
      source={contents}
      //  components={MdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }],
            rehypeSlug,
          ],
        },
      }}
    />
  );
};
