import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Trivia } from "@/components/trivia";
export default function Home() {
  return (
    <>
      <Head>
        <title>Trivia Game</title>
        <meta
          name="description"
          content="Trivia Game for Dunes Ventures Technical Task"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Trivia />
    </>
  );
}
