import { Title } from '../components/Title'
import { Navigation } from '../components/Navigation'
import { Label } from '../components/Label'
import { PrincipalForm } from '../components/PrincipalForm'
import { LineDiv } from '../components/LineDiv'
import { Tutorial } from '../components/Tutorial'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <Title>
        Access your content completely <span>offline</span>
      </Title>
      <LineDiv />
      <PrincipalForm />
      <Tutorial />
      <Footer />
    </div>
  )
}
