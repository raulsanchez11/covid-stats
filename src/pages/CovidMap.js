import { MainLayout } from 'layouts/'
import { CountrySelector, CountryInfo } from 'components/'

export function CovidMap(props) {
  return (
    <MainLayout>
      <CountrySelector />
      <CountryInfo />
    </MainLayout>
  )
}
