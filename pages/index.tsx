import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
// import useSWR from 'swr'

export default function Home() {
  // const { data } = useSWR('https://pokeapi.co/api/v2/');

  return (
    <>
    <Head>
      <title>OLRT Crack Hack</title>
    </Head>
    <main className="w-screen h-screen flex justify-center shadow-2xl items-center bg-cover bg-[url('/back.png')]">
      <DisplayCard></DisplayCard>
    </main>
    </>
  )
}
