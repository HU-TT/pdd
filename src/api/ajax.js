import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
  // eslint-disable-next-line no-unused-vars
  let promise = null
  return new Promise((resolve, reject) => {
    if (type === 'GET') {
      let paramsStr = ''
      Object.keys(params).forEach(key => {
        paramsStr += `${key}=${params[key]}&`
      })
      if (paramsStr === '') {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
      }
      url += '?' + paramsStr
      promise = axios.get(url)
    } else if (type === 'POST') {
      promise = axios.post(url, params)
    }
    promise.then(res => resolve(res.data)).catch(err => reject(err))
  })
}
