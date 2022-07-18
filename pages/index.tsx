import type { NextPage } from "next"
import Head from "next/head"

import { useQuery } from "react-query"
import axios from "axios"

const getPosts = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all")
  return data
}

const Home: NextPage = () => {
  const { data } = useQuery(["posts"], getPosts)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        sa
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by me
        </a>
      </footer>
    </div>
  )
}

export default Home
