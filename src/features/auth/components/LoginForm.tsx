

interface Props {

}

function LoginForm({}: Props) {

  function loginNow() {
    debugger
  }
  
  return (
    <>
      <h3>LoginForm form</h3>
      <input/>
      <button onClick={loginNow}>Login</button>
    </>
  )
}

export default LoginForm