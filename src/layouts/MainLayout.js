import { GlobalStyles, AppContainer } from 'styles/'
import { Navbar, Footer } from 'components/'

export function MainLayout(props) {
  const { children } = props

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </>
  )
}
