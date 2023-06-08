import Head from "next/head";
import useSWR from 'swr'

export default function Home() {
  const { data } = useSWR('https://pokeapi.co/api/v2/generation/3/');

  return (
    <>
    <Head>
      <title>OLRT Crack</title>
    </Head>
    <main>
      <h1>Verifications:</h1>

      <div>{ JSON.stringify(data) }</div>
    </main>
    </>
  )
}
