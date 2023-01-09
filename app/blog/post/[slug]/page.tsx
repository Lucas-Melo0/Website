import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import remarkGfm from 'remark-gfm';
import { getSinglePost } from '../../../../services/notion';
export default async function Post({ params: post }: { params: { slug: string } }) {
  const postData = await getSinglePost(post.slug);
  const { metadata } = postData;
  return (
    <div className="min-h-screen">
      <div className="w-5/12 mx-auto gap-y-3   mt-20 flex flex-col items-start">
        <div className="flex flex-col">
          <h1 className="text-white text-5xl font-bold ">{metadata.title}</h1>
          <div className="flex my-4 gap-x-4 flex-row">
            <div className="flex  items-center gap-x-2">
              <AiOutlineCalendar color="gray" />
              <p className="text-gray-600">{metadata.date}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <AiOutlineUser color="gray" />
              <h5 className="text-gray-600">Lucas Melo</h5>
            </div>
          </div>
          <article className="prose mt-8 prose-invert prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.markdown}</ReactMarkdown>;
          </article>
        </div>
      </div>
    </div>
  );
}
