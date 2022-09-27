import Hero from 'components/hero'
import Meta from 'components/meta'
import Container from 'components/container'

export default function Home() {
  return (
      <Container>
          <Meta />
          <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
  )
}
