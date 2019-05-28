import ajax from './ajax'

const baseUrl = 'http://127.0.0.1:3000'

export const getHomeCasual = () => ajax(`${baseUrl}/api/homecasual`)

