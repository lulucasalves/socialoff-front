import Image from 'next/image'
import { Lang } from '../Lang'

export function Tutorial(props) {
  return (
    <div className="tutorialDiv">
      <h2>
        <Lang>tutorial-1</Lang>
      </h2>
      <p>
        <Lang>tutorial-2</Lang>
      </p>
      <div className="img">
        <Image src="/copyLink.png" width="600" height="300" />
      </div>
      <p>
        <Lang>tutorial-3</Lang>
      </p>
      <div className="img">
        <Image src="/sendUrl.png" width="600" height="270" />
      </div>
      <p>
        <Lang>tutorial-4</Lang>
      </p>
      <div className="img">
        <Image src="/download.png" width="600" height="270" />
      </div>
    </div>
  )
}
