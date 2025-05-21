import { HTTP } from '.'

export const getWXAuthCode = (): Promise<{ url: string }> => {
  return HTTP.get('v1/auth/wechat')
}

export const getUserInfo = (code: string | null) => {
  return HTTP.post('auth/userinfo', { code })
}
