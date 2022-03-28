import { Lang } from '../Lang'

export function Option(props) {
  return (
    <div {...props} className={props.active ? 'option active' : 'option'}>
      {props.children}
    </div>
  )
}
