import { HTTP } from '.'

export const getWXAuthCode = (): Promise<{ url: string }> => {
  return HTTP.get('auth/wechat/code')
}

export const getUserInfo = (code: string | null) => {
  return HTTP.post('auth/wechat/userinfo', { code })
}
