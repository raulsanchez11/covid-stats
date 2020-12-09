import { Link } from '@reach/router'
import { AppFooter, LogoImage } from 'styles/'

export function Footer(props) {
  return (
    <AppFooter>
      <Link to="/subscribe">Subscribete</Link>
    </AppFooter>
  )
}
