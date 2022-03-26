export function Label(props) {
  return (
    <label {...props} className="defaultLabel">
      {props.children}
    </label>
  )
}
