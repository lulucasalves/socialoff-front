export function Message(props) {
  return (
    <div className="messageGroup">
      {props.message === '' ? (
        <p className="infoMessage">Insira o link do conteúdo desejado</p>
      ) : props.message === 'success' ? (
        <p className="successMessage">Conteúdo baixado com sucesso!</p>
      ) : (
        <div className="errorMessage">
          <p>Erro!</p>
          <p>
            Verifique se o link enviado está correto e se o seu conteúdo é
            publico.
          </p>
          <p> Após corrigir as informações, por favor tente novamente!</p>
        </div>
      )}
    </div>
  )
}
