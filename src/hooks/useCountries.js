import { useState, useEffect } from 'react'

const COUNTRY_API_URL = 'https://api.covid19api.com/countries'

export function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true)
      const response = await fetch(COUNTRY_API_URL)
      const data = await response.json()
      setCountries(data.sort((a, b) => (a.Country > b.Country ? 1 : -1)))
      setLoading(false)
    }
    fetchCountries()
  }, [])

  return {
    countries,
    loading,
  }
}
