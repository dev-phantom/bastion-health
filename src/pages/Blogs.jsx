import Homepage from '@/pages/system/home/Homepage'
import Header from '@/components/common/Header'
import Head from 'next/head'
import Blog from '@/pages/system/Blog/Blog'



export default function Blogs() {
  return (
    <div className="text-textColor">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Blog />
    </div>
  )
}