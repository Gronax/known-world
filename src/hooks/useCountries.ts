import axios from "axios"
import { useQuery } from "react-query"

const getCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all")
  return data
}

const useCountries = () => {
  return useQuery(["countries"], () => getCountries())
}

export { useCountries, getCountries }
