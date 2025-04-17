import { HTTP } from '.'

export const getChangGuanAuthCode = (code: string) => {
  return HTTP.post('oauth2/cg', { code })
}
