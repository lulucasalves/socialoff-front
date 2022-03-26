import { Title } from '../components/Title'
import { Navigation } from '../components/Navigation'
import { Label } from '../components/Label'
import { PrincipalForm } from '../components/PrincipalForm'
import { LineDiv } from '../components/LineDiv'

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <Title>
        Access your content completely <span>offline</span>
      </Title>
      <LineDiv />
      <Label>Select platform from URL</Label>
      <PrincipalForm />
    </div>
  )
}
