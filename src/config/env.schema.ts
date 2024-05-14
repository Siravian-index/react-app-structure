import z from "zod"


export const schema = z.object({
  VITE_BASE_API_URL: z.string(),
  VITE_GOOGLE_CLIENT_ID: z.string(),
  VITE_GOOGLE_OAUTH_REDIRECT_URL: z.string(),
})
