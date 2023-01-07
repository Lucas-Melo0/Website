import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { getSinglePost } from '../../../../services/notion';
export default async function Post({ params: post }: { params: { slug: string } }) {
  const postData = await getSinglePost(post.slug);

  console.log(postData);
  //@ts-ignore
  return (
    <article className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.markdown}</ReactMarkdown>;
    </article>
  );
}
