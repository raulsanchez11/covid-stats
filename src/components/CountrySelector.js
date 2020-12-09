import { Select, MenuItem, FormHelperText } from '@material-ui/core'

export function CountrySelector(props) {
  return (
    <>
      <Select value="mx">
        <MenuItem value="mx">
          <img src="https://flagcdn.com/16x12/mx.png" alt="MX" />
        </MenuItem>
        <MenuItem value="eu">
          <img src="https://flagcdn.com/16x12/eu.png" alt="MX" />
        </MenuItem>
        <MenuItem value="bb">
          <img src="https://flagcdn.com/16x12/bb.png" alt="MX" />
        </MenuItem>
        <MenuItem value="mn">
          <img src="https://flagcdn.com/16x12/mn.png" alt="MX" />
        </MenuItem>
      </Select>
      <FormHelperText>Select a country</FormHelperText>
    </>
  )
}
