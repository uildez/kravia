import React from 'react'
import { getAllPosts } from '../../sanity/api'
import BlogSection from '../components/blogSection';

export default async function Blog () {
  const posts = await getAllPosts();

  return (
    <div id='blog' className='flex flex-col w-full items-center justify-center my-12 lg:my-20 px-8 lg:px-20 2xl:px-40'>
      <span className="gradient-text uppercase text-xl font-grotesk tracking-[3px]">
        Blog
      </span>
      <div className='w-[10%] mt-2 min-h-[2px] bg-gradient-to-r from-purple-medium to-purple-dark' />
      <BlogSection posts={posts} />
    </div>
  )
}
