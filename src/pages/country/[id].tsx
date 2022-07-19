import type { NextPage } from "next"
import { useRouter } from "next/router"
import useCountry from "hooks/useCountry"

const Country: NextPage = () => {
  const router = useRouter()
  const id = typeof router.query?.id === "string" ? router.query.id : ""
  const { isSuccess, data, isLoading, isError } = useCountry(id)

  return <h2>{data?.name?.common}</h2>
}

export default Country
