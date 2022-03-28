import { Title } from '../components/Title'
import { Navigation } from '../components/Navigation'
import { LineDiv } from '../components/LineDiv'
import { Tutorial } from '../components/Tutorial'
import { Footer } from '../components/Footer'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Lang } from '../components/Lang'
import { FacebookForm } from '../components/FacebookForm'

export default function Facebook() {
  const [width, setWidth] = useState(100)

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>SocialOff | Facebook</title>
      </Head>
      <Navigation width={width} />
      <div className="content">
        <Title>
          <Lang>title-2</Lang> <span>Facebook</span>
        </Title>
        <LineDiv />
        <FacebookForm width={width} />
        <Tutorial />
      </div>
      <Footer />
    </div>
  )
}
