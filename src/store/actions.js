import { getHomeCasual } from '../api/'
import { INIT_HOME_CASUAL } from './mutationsType'

export default ({
  async initHomeCasual ({ commit }) {
    const res = await getHomeCasual()
    commit(INIT_HOME_CASUAL, {homeCasual: res.message.data})
  }
})
