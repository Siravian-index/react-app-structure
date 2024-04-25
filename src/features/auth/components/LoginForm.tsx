import { useLogin } from "@/lib/auth"
import { useNavigate } from "react-router-dom"


interface Props {
  onSuccess: () => void
}

function LoginForm({ onSuccess }: Props) {

  const login = useLogin()

  async function loginNow() {
    const payload = {
      email: "test@example.com",
      password: "Password456!",
    }
    await login.mutate(payload)
    onSuccess()
  }

  return (
    <>
      <h3>LoginForm form</h3>
      <button onClick={loginNow}>Login</button>
    </>
  )
}

export default LoginForm