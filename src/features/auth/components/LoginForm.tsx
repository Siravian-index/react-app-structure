import { useLogin } from "@/lib/auth"
import { getGoogleOAuthUrl } from "@/utils/getGoogleUrl"


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
      <div>
        <button onClick={loginNow}>Login with email password</button>
      </div>
      <div>
        <a href={getGoogleOAuthUrl()}>Login with google</a>
      </div>

    </>
  )
}

export default LoginForm