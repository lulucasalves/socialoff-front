export function Button(props) {
  return (
    <button {...props} type="button" className="button">
      {props.children}
    </button>
  )
}
