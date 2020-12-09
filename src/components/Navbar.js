import { Toolbar } from '@material-ui/core'
import { Link } from '@reach/router'
import { LogoImage, Nav } from 'styles/'

export function Navbar(props) {
  return (
    <Nav position="static" color="primary">
      <Toolbar className="toolbar">
        <Link to="/covid">
          <LogoImage
            src="https://s3.xopic.de/openwho-public/channels/7fSc4JEBeO9H0P4b8d1Cfq/logo_v1.png"
            alt="Logo"
          />
        </Link>
      </Toolbar>
    </Nav>
  )
}
