import axios from 'axios'

// Create Axios Instance
const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// 请求拦截器
HTTP.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
HTTP.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { HTTP }
