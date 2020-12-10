import { useState, useEffect } from 'react'

import { useCovidApi } from 'hooks/'
import { MainLayout } from 'layouts/'
import { CountrySelector, CountryInfo, Loading } from 'components/'

export function CovidMap(props) {
  const [countrySlug, setCountrySlug] = useState('mexico')
  const {
    loading,
    chartData,
    total,
    totalDeaths,
    totalRecover,
    getByCountry,
  } = useCovidApi()

  useEffect(() => {
    async function fetchCountryData() {
      await getByCountry(countrySlug)
    }

    fetchCountryData()
  }, [countrySlug])

  return (
    <MainLayout>
      <CountrySelector
        country={countrySlug}
        onSelectCountry={(code) => setCountrySlug(code)}
      />
      {loading ? (
        <Loading />
      ) : (
        <CountryInfo
          chartData={chartData}
          total={total}
          deaths={totalDeaths}
          recovered={totalRecover}
        />
      )}
    </MainLayout>
  )
}
