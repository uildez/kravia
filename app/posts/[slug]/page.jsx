import Image from 'next/image';
import { sanity } from '../../../sanity/api'
import { urlFor } from '../../../sanity/image'
import RecentPostsWithSearch from '@/app/components/recentPostsWithSearch';

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

  const recentPosts = await sanity.fetch(
    `*[_type == "post" && slug.current != $slug] | order(_createdAt desc)[0...3]{
    title,
    slug,
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
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-20 w-full mt-12 px-8 lg:px-20 2xl:px-40 min-h-[60vh]'>
        <div className='flex flex-col items-start col-span-1 lg:col-span-3 gap-4'>
          <h1 className="text-3xl lg:text-5xl font-bold font-aeonik text-center lg:text-left">{post.title}</h1>
          <p style={{ whiteSpace: 'pre-wrap' }}>{post.body}</p>
        </div>
        <div className='flex flex-col gap-8 col-span-1 lg:col-span-2'>
          <RecentPostsWithSearch posts={recentPosts} />

          <div className="flex flex-col gap-4">
            <h2 className="text-xl lg:text-3xl font-bold font-aeonik text-center lg:text-left">Últimos artigos</h2>
            {recentPosts.map((recent) => (
              <a
                href={`/posts/${recent.slug.current}`}
                key={recent.slug.current}
                className="flex flex-col lg:flex-row bg-white h-full items-center justify-center gap-8 lg:gap-12 rounded-[20px] border-1 border-gray-400/70 overflow-hidden hover:scale-[102%] hover:shadow-lg transition duration-500 group lg:pr-8"
              >
                <Image
                  src={urlFor(recent.imagem).width(500).height(500).url()}
                  width={500}
                  height={500}
                  alt={recent.imagem.alt || "Imagem do post"}
                  className="rounded-md object-cover w-full lg:w-[40%] h-[200px]"
                />
                <p className="text-lg font-aeonik font-bold text-purple-medium text-center lg:text-left mb-4 px-4 -mt-4 lg:mt-0 lg:px-0 lg:mb-0 leading-[20px]">
                  {recent.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}