import { useState } from 'react'

const COVID_API_URL = 'https://api.covid19api.com/dayone/country'

function getValue(data) {
  return data[data.length - 1].Cases
}

function parseChartData(data, key) {
  return data.map((d) => {
    return {
      [key]: d.Cases,
      name: d.Status,
    }
  })
}

export function useCovidApi(props) {
  const [total, setTotal] = useState()
  const [totalDeaths, setTotalDeaths] = useState()
  const [totalRecover, setTotalRecovers] = useState()
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(false)

  const getByCountry = async (slug) => {
    setLoading(true)
    const data1 = await fetch(`${COVID_API_URL}/${slug}/status/confirmed`)
    const data2 = await fetch(`${COVID_API_URL}/${slug}/status/recovered`)
    const data3 = await fetch(`${COVID_API_URL}/${slug}/status/deaths`)

    const confirmed = await data1.json()
    const recovered = await data2.json()
    const deaths = await data3.json()

    setTotal(getValue(confirmed))
    setTotalDeaths(getValue(deaths))
    setTotalRecovers(getValue(recovered))

    // Set chart data
    setChartData([
      ...parseChartData(confirmed, 'uv'),
      ...parseChartData(recovered, 'pv'),
      ...parseChartData(deaths, 'amt'),
    ])
    setLoading(false)
  }

  return {
    chartData,
    total,
    totalDeaths,
    totalRecover,
    getByCountry,
    loading,
  }
}
