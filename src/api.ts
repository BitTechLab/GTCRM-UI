import axios from 'axios'
import { ACCESS_TOKEN_STORAGE_KEY } from './const';
import router from './router';
// import router from './router'

axios.defaults.withCredentials = true
// axios.defaults.withXSRFToken = true
axios.defaults.baseURL = import.meta.env?.VITE_API_BASE_URL
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)

export const LOGIN_API = '/login'
export const LOGOUT_API = '/logout'
export const REGISTER_API = '/register'
export const AUTH_API = '/auth'
export const V1_API = {
  CUSTOMER: '/v1/customers'
}

// Object to store AbortController instances
// let controllers = {}

// async function fetchData(url) {
//   const urlObject = new URL(url)
//   const mainUrl = urlObject.origin + urlObject.pathname

//   // Find and abort the previous controller associated with this main URL
//   const prevController = controllers[mainUrl]
//   if (prevController) {
//     prevController.abort()
//   }

//   // Create a new AbortController for the current request
//   const controller = new AbortController()
//   controllers[mainUrl] = controller

//   try {
//     const response = await fetch(url, { signal: controller.signal })
//     const data = await response.json()
//     return data
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       console.log('Previous request aborted')
//     } else {
//       console.error('Error:', error)
//     }
//   }
// }

export const getRequest = async (
  apiEndpoint,
  params = {},
  headers = {}
) => {
  try {
    const data = await axios.get(apiEndpoint, {
      params,
      headers
    })

    return { data: data?.data, error: null }
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      // location.reload()
      router.push('/login');
    }

    return { error, data: null }
  }
}

export const postRequest = async (apiEndpoint, data, headers = {}) => {
  try {
    const response = await axios.post(apiEndpoint, data, {
      headers
    })

    return { data: response?.data, error: null }
  } catch (error) {
    if (error.response?.status === 401) {
      location.reload()
    }

    return { error, data: null }
  }
}

export const putRequest = async (
  apiEndpoint,
  id,
  data,
  headers = {}
) => {
  try {
    const response = await axios.put(`${apiEndpoint}/${id}`, data, {
      headers
    })

    return { data: response?.data, error: null }
  } catch (error) {
    if (error.response?.status === 401) {
      location.reload()
    }

    return { error, data: null }
  }
}

export const deleteRequest = async (
  apiEndpoint,
  id
) => {
  try {
    const response = await axios.delete(`${apiEndpoint}/${id}`)

    return { data: response?.data, error: null }
  } catch (error) {
    if (error.response?.status === 401) {
      location.reload()
    }

    return { error, data: null }
  }
}