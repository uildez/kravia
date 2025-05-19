import Image from 'next/image';
import Link from 'next/link';
import { sanity } from '../../sanity/api';
import { urlFor } from '../../sanity/image';
import RecentPostsWithSearch from '@/app/components/recentPostsWithSearch';

const POSTS_PER_PAGE = 12;

export default async function BlogPage({ searchParams }) {
    const currentPage = parseInt(searchParams?.page || '1');
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;

    const allPosts = await sanity.fetch(`*[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    imagem {
      asset->{ url },
      alt
    },
    body
  }`);

    const paginatedPosts = allPosts.slice(start, end);
    const recentPosts = allPosts.slice(3, 10); // Ignora os 3 primeiros

    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    return (
        <div>
            <Image
                src={"/blog-bg.jpeg"}
                width={1200}
                height={1200}
                className="min-w-full h-[40vh] object-cover object-center bg-purple-light"
                alt={'Imagem do post'}
            />
            <div className="px-6 lg:px-20 2xl:px-40 mt-12 min-h-screen">
                <h1 className='z-2 w-full lg:w-[50%] 2xl:w-[30%] text-3xl lg:text-5xl font-aeonik font-bold mt-8 lg:mt-20 mb-8'>Blog</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-20">
                    <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {paginatedPosts.map((post) => (
                            <Link
                                href={`/posts/${post.slug.current}`}
                                key={post.slug.current}
                                className="bg-white h-full rounded-[30px] border-1 border-gray-400/70 overflow-hidden hover:scale-[102%] hover:shadow-lg transition duration-500 group"
                            >
                                <Image
                                    src={urlFor(post.imagem).width(800).height(500).url()}
                                    alt={post.imagem.alt || 'Imagem do post'}
                                    width={800}
                                    height={500}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-8">
                                    <h2 className="font-bold text-lg text-purple-medium">{post.title}</h2>
                                    <p className="text-sm mt-2 text-gray-600 line-clamp-3">
                                        {post.body?.substring(0, 120)}...
                                    </p>
                                </div>
                            </Link>
                        ))}
                        {/* PAGINAÇÃO */}
                        <div className="flex justify-center gap-4">
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <Link
                                        key={page}
                                        href={`/posts?page=${page}`}
                                        className={`px-4 py-2 border rounded-xl ${page === currentPage
                                            ? 'bg-purple-500 text-white'
                                            : 'text-purple-600 hover:bg-purple-100'
                                            }`}
                                    >
                                        {page}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-10 mt-10 lg:mt-0">
                        {/* Campo de busca */}
                        <RecentPostsWithSearch posts={allPosts} />

                        {/* Últimos artigos */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-3xl font-bold font-aeonik">Últimos artigos</h2>
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
        </div>
    );
}
