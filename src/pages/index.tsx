import type { NextPage, GetStaticProps } from "next"
import React from "react"
import Head from "next/head"
import { getCountries } from "hooks/useCountries"
import { Country } from "types/country"

type Props = {
  countries?: Country[]
}

const Home: NextPage = ({ countries }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {countries?.map((country: Country, index: number) => {
          return <div key={index}>{country.name.common}</div>
        })}
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

export const getStaticProps: GetStaticProps = async () => {
  const countries: Country[] = await getCountries()
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common))

  return { props: { countries } }
}

export default Home
