import { AppBar, Container } from '@material-ui/core'
import styled from 'styled-components'

export const AppContainer = styled(Container)`
  margin-top: 4rem;
`

export const LogoImage = styled.img`
  width: 120px;
`

export const Nav = styled(AppBar)`
  .toolbar {
    justify-content: center;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`

export const AppFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  padding: 1rem;

  a {
    color: var(--white);
    text-decoration: none;
  }
`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  text-align: center;
`

export const Chart = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`
