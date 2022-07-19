import { useQuery } from "react-query"
import axios from "axios"
import { Country } from "types/country"

const getCountryById = async (id: string): Promise<Country> => {
  const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
  return data[0]
}

export default function useCountry(id: string) {
  return useQuery(["country", id], () => getCountryById(id), {
    enabled: !!id,
  })
}
