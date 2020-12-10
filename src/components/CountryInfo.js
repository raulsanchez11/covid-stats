import {
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'
import { Paper, CircularProgress } from '@material-ui/core'
import LocalPharmacy from '@material-ui/icons/LocalPharmacy'

import { DataContainer, Chart } from 'styles/'

export function CountryInfo(props) {
  const { chartData, total, deaths, recovered } = props

  return (
    <>
      <DataContainer>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total de Casos
            <br />
            {total ? total : <CircularProgress />}
          </h1>
        </Paper>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total Muertes
            <br />
            {deaths ? deaths : <CircularProgress />}
          </h1>
        </Paper>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total Recuperados
            <br />
            {recovered ? recovered : <CircularProgress />}
          </h1>
        </Paper>
      </DataContainer>
      <Chart>
        <AreaChart width={800} height={400} data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" fill="#ff7300" />
          <Area type="monotone" dataKey="amt" fill="#387908" />
        </AreaChart>
      </Chart>
    </>
  )
}
