import { INIT_HOME_CASUAL } from './mutationsType'

export default ({
  [INIT_HOME_CASUAL]: (state, { homeCasual }) => {
    state.homeCasual = homeCasual
  }
})
