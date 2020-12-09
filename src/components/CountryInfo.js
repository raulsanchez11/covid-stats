import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Paper } from '@material-ui/core'
import LocalPharmacy from '@material-ui/icons/LocalPharmacy'

import { DataContainer, Chart } from 'styles/'

export function CountryInfo(props) {
  const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
  ]

  return (
    <>
      <DataContainer>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total de Casos
          </h1>
        </Paper>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total Muertes
          </h1>
        </Paper>
        <Paper elevation={3}>
          <h1>
            <LocalPharmacy fontSize="large" />
            <br />
            Total Recuperados
          </h1>
        </Paper>
      </DataContainer>
      <Chart>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </Chart>
    </>
  )
}
