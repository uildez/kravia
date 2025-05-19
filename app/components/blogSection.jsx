import Image from 'next/image';
import Link from 'next/link';

export default function BlogSection({ posts }) {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-3/4 rounded-lg mt-8 lg:mt-12">
        {posts.map(post => (
          <Link href={`/posts/${post.slug.current}`} key={post._id} className="cursor-pointer">
            <div className="bg-white h-full rounded-[43px] border-1 border-gray-400/70 overflow-hidden hover:scale-[102%] hover:shadow-lg transition duration-500 group">
              <Image
                src={post.imagem.asset.url}
                alt={post.imagem.alt || post.title}
                width={800}
                height={500}
                className="w-full h-[200px] lg:h-[300px] 2xl:h-[400px] object-cover rounded-[43px]"
              />
              <div className="p-8">
                <h3 className="text-xl font-aeonik font-bold leading-6">{post.title}</h3>
                <p className="text-sm font-aeonik font-bold text-gray-500 mt-2 group-hover:translate-x-4 transition duration-500">Leia agora no blog &gt;</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href={"/blog"}
        className={`z-2 relative hover:scale-105 min-w-[100%] lg:min-w-[30%] group text-white font-bold bg-purple-light rounded-lg px-12 py-8 mt-12 font-grotesk overflow-hidden transition-transform ease-in-out duration-500`}
      >
        <span
          className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out"
        >
          <span className="text-lg">Ver todos artigos</span>
        </span>
        <span
          className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        >
          <span className="text-lg">Ver todos artigos</span>
        </span>
      </Link>
    </div>
  );
}