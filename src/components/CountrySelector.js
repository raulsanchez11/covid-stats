import {
  Select,
  MenuItem,
  FormHelperText,
  CircularProgress,
} from '@material-ui/core'

import { useCountries } from 'hooks/'

export function CountrySelector(props) {
  const { country, onSelectCountry } = props
  const { countries, loading } = useCountries()

  if (loading) {
    return <CircularProgress />
  }

  return (
    <>
      <Select value={country} onChange={(e) => onSelectCountry(e.target.value)}>
        {countries.map((c) => (
          <MenuItem value={c.Slug} key={c.ISO2}>
            <img
              src={`https://flagcdn.com/16x12/${c.ISO2.toLowerCase()}.png`}
              alt={c.Country}
              loading="lazy"
            />
            &nbsp;
            {c.Country}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select a country</FormHelperText>
    </>
  )
}
