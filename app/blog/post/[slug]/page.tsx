import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import remarkGfm from 'remark-gfm';
import { getSinglePost } from '../../../../services/notion';
export default async function Post({ params: post }: { params: { slug: string } }) {
  const postData = await getSinglePost(post.slug);
  const { metadata } = postData;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
      <div className="w-5/12 mx-auto gap-y-3  flex flex-col items-start">
        <div className="flex mt-20 flex-col">
          <h1 className="text-dark dark:text-white text-5xl font-bold ">{metadata.title}</h1>
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
          <article className="prose  mt-8  prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.markdown}</ReactMarkdown>;
          </article>
        </div>
      </div>
    </div>
  );
}
