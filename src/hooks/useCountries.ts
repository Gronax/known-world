import { useQuery } from "react-query"
import axios from "axios"
import { Country } from "types/country"

export default function useCountries() {
  return useQuery(["countries"], async (): Promise<Array<Country>> => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca3")
    return data
  })
}
