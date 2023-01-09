import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { getSinglePost } from '../../../../services/notion';
export default async function Post({ params: post }: { params: { slug: string } }) {
  const postData = await getSinglePost(post.slug);

  return (
    <div className="min-h-screen">
      <div className="w-5/12 mx-auto gap-y-3   mt-20 flex flex-col items-start">
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.markdown}</ReactMarkdown>;
        </article>
      </div>
    </div>
  );
}
