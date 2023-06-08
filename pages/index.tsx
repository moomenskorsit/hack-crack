import DisplayCard from "@/components/DisplayCard";
import Head from "next/head";
import MrIncredible from "@/components/MrIncredible";
import React, {useState} from "react";
import Image from "next/image";
import _default from "chart.js/dist/plugins/plugin.tooltip";

import numbers = _default.defaults.animations.numbers;
// import useSWR from 'swr'

export default function Home() {
  // const { data } = useSWR('https://pokeapi.co/api/v2/');



  const failed = 100;
  return (
    <>
    <Head>
      <title>OLRT Crack Hack</title>
    </Head>
    <main className="w-screen h-screen flex justify-center shadow-2xl items-center bg-cover bg-[url('/back.png')]">
      <DisplayCard></DisplayCard>
      <MrIncredible failCount={300}></MrIncredible>
    </main>
    </>
  )
}
