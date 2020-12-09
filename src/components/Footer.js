import { Link } from '@reach/router'
import { AppFooter, LogoImage } from 'styles/'

export function Footer(props) {
  return (
    <AppFooter>
      <LogoImage
        src="https://s3.xopic.de/openwho-public/channels/7fSc4JEBeO9H0P4b8d1Cfq/logo_v1.png"
        alt="Logo"
      />
      <Link to="/subscribe">Subscribete</Link>
    </AppFooter>
  )
}
