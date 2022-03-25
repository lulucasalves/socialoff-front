export function Loading(props) {
  return (
    <div {...props} className={props.active ? 'loadFalse' : 'loadGroup'}>
      <p>verifying address...</p>
      <div className="loader" />
    </div>
  )
}
