import Image from 'next/image'

export function Tutorial(props) {
  return (
    <div className="tutorialDiv">
      <h2>Como baixar seus conteúdos no SocialOff</h2>
      <p>1 - Copie a url do conteúdo</p>
      <div className="img">
        <Image src="/copyLink.png" width="600" height="300" />
      </div>
      <p>2 - Cole a url no SocialOff</p>
      <div className="img">
        <Image src="/sendUrl.png" width="600" height="270" />
      </div>
      <p>3 - Faça download</p>
      <div className="img">
        <Image src="/download.png" width="600" height="270" />
      </div>
    </div>
  )
}
