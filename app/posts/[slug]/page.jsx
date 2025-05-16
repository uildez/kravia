import Image from 'next/image';
import { sanity } from '../../../sanity/api'
import { urlFor } from '../../../sanity/image'

export default async function Post({ params }) {
  const { slug } = params;

  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      imagem {
        asset->{
          url
        },
        alt
      }
    }`,
    { slug }
  );

  if (!post) return <p>Post não encontrado.</p>;

  return (
    <div>
      <Image
        src={urlFor(post.imagem).width(1200).url()}
        width={1200}
        height={1200}
        className="min-w-full h-[40vh] object-cover object-center bg-purple-light"
        alt={post.imagem.alt || 'Imagem do post'}
      />
      <div className='flex flex-col w-full mt-12 px-8 lg:px-20 2xl:px-40 min-h-[60vh]'>
        <div className='flex flex-col items-start gap-4'>
          <h1 className="text-3xl lg:text-5xl font-bold font-aeonik text-center">{post.title}</h1>
          <p style={{ whiteSpace: 'pre-wrap' }}>{post.body}</p>
        </div>
      </div>
    </div>
  );
}