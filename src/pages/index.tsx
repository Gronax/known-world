import type { NextPage } from "next"
import React from "react"
import CountryItem from "components/CountryItem"
import useCountries from "hooks/useCountries"
import { Country } from "types/country"

const Home: NextPage = () => {
  const { isSuccess, data, isLoading, isError } = useCountries()
  const countries = data?.sort((a, b) => a.name.common.localeCompare(b.name.common))

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <ul>
          {countries?.map((country: Country, index: number) => (
            <CountryItem key={index} country={country} />
          ))}
        </ul>
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
