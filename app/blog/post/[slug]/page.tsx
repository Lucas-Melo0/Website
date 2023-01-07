export default function Post({ params: slug }: { params: { slug: string } }) {
  return <h1>{slug.slug}</h1>;
}
