import { createStore } from 'redux'

const defaultState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
  topFilter: 1,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'allOff':
      return {
        ...state,
        all: false,
      }

    case 'allf':
      return {
        ...state,
        all: false,
        noTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
      }
    case 'all':
      return {
        ...state,
        all: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
      }

    case 'noTransfer':
      return {
        ...state,
        noTransfer: !state.noTransfer,
      }
    case 'oneTransfer':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
      }
    case 'twoTransfer':
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
      }
    case 'threeTransfer':
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
      }
    case 'topFilter':
      return {
        ...state,
        topFilter: action.value,
      }

    default:
      return state
  }
}
const store = createStore(reducer)
export default store
