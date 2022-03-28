import { Lang } from '../Lang'

export function Label(props) {
  return (
    <label {...props} className="defaultLabel">
      <Lang>{props.children}</Lang>
    </label>
  )
}
