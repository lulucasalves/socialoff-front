import { Lang } from '../Lang'

export function Message(props) {
  return (
    <div className="messageGroup">
      {props.message === '' ? (
        <p className="infoMessage">
          <Lang>info</Lang>
        </p>
      ) : props.message === 'success' ? (
        <p className="successMessage">
          <Lang>success</Lang>
        </p>
      ) : (
        <div className="errorMessage">
          <p>
            <Lang>error-1</Lang>
          </p>
          <p>
            <Lang>error-2</Lang>
          </p>
          <p>
            <Lang>error-3</Lang>
          </p>
        </div>
      )}
    </div>
  )
}
