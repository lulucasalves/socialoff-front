import { Title } from '../components/Title'
import { Navigation } from '../components/Navigation'
import { PrincipalForm } from '../components/PrincipalForm'
import { LineDiv } from '../components/LineDiv'
import { Tutorial } from '../components/Tutorial'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(0)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="container">
      <Navigation width={width} />
      <div className="content">
        <Title>
          Access your content completely <span>offline</span>
        </Title>
        <LineDiv />
        <PrincipalForm width={width} />
        <Tutorial />
        <Footer />
      </div>
    </div>
  )
}
