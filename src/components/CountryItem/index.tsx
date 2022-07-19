import Link from "next/link"
import { Country } from "types/country"

type Props = {
  country: Country
}

export default function CountryItem({ country }: Props) {
  return (
    <li>
      <Link href="/country/[id]" as={`/country/${country.cca3}`}>
        <a>{country.name.common}</a>
      </Link>
    </li>
  )
}
