import { HTTP } from '..'

export const getBase = (): Promise<[]> => {
  return HTTP.get('base')
}
