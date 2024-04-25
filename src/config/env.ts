import { schema } from "./env.schema";

const env = schema.parse(import.meta.env)

export default env
