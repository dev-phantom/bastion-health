import Homepage from '@/system/home/Homepage'
import Header from '@/components/common/Header'
import Head from 'next/head'
import HealthPlan from '@/system/HealthPlan/HealthPlan'


export default function Home() {
  return (
    <>
      <Head>
        <title>Health Plans</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HealthPlan />
    </>
  )
}
