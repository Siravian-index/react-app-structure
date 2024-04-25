import { useUser } from "@/lib/auth"


export function Dashboard() {
  const user = useUser()
  console.log(user)

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}