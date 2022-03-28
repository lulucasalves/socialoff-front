import { Lang } from '../Lang'
import { LineDiv } from '../LineDiv'

export function Footer(props) {
  return (
    <>
      <LineDiv />
      <p className="owner">
        <Lang>owner</Lang>
      </p>
    </>
  )
}
