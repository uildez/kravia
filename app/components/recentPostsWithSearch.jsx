'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../sanity/image';

export default function RecentPostsWithSearch({ posts }) {
    const [search, setSearch] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (search.trim() === '') {
            setFilteredPosts([]);
            return;
        }

        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPosts(filtered);
    }, [search, posts]);

    return (
        <div className="flex relative flex-col gap-8 mt-8 lg:mt-0">
            <input
                type="text"
                placeholder="Pesquisar artigos..."
                className="w-full border border-gray-300 px-8 py-4 font-aeonik rounded-2xl focus:outline-none ring-2 focus:ring-2 focus:ring-purple-light font-bold"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search.trim() !== '' && filteredPosts.length > 0 && (
                <div
                    ref={wrapperRef}
                    className="absolute top-[65px] left-0 right-0 bg-purple-light border border-gray-200 shadow-2xl rounded-2xl z-50 max-h-96 overflow-y-auto"
                >
                    {filteredPosts.map((recent) => (
                        <Link
                            href={`/posts/${recent.slug.current}`}
                            key={recent.slug.current}
                            className="flex gap-4 items-center px-4 py-3 hover:bg-gray-50 transition-all group"
                        >
                            <Image
                                src={urlFor(recent.imagem).width(100).height(100).url()}
                                width={100}
                                height={100}
                                alt={recent.imagem.alt || 'Imagem do post'}
                                className="rounded-md object-cover w-[60px] h-[60px]"
                            />
                            <p className="text-sm font-medium text-white group-hover:text-gray-800">
                                {recent.title}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
