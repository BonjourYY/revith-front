import { HTTP } from '.'

export const getChangGuanAuthCode = (code: string) => {
  return HTTP.post('auth/changguan', { code })
}
