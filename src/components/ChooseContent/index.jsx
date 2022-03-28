export function ChooseContent(props) {
  return (
    <select {...props} className="chooseContent">
      {props.children}
    </select>
  )
}
