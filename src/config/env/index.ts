import 'dotenv/config'
import { z } from 'zod'
import { EnviromentVariablesExeption } from '../../helpers/errors'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'production']),
  PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid enviroment variables', _env.error.format())
  throw new EnviromentVariablesExeption('Invalid enviroment variables')
}

export const env = _env.data
