import { createStore } from 'redux'

const defaultState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
  lastreq: false,
  topFilter: 1,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'allOff':
      return {
        ...state,
        all: false,
        lastreq: 'allOff',
      }

    case 'all':
      if (state.all) {
        return {
          ...state,
          all: false,
          // noTransfer: false,
          // oneTransfer: false,
          // twoTransfer: false,
          // threeTransfer: false,
          // lastreq: 'all',
        }
      }
      return {
        ...state,
        all: true,
        // noTransfer: true,
        // oneTransfer: true,
        // twoTransfer: true,
        // threeTransfer: true,
        // lastreq: 'all',
      }
    case 'noTransfer':
      return {
        ...state,
        noTransfer: !state.noTransfer,
        lastreq: 'noTransfer',
      }
    case 'oneTransfer':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
        lastreq: 'oneTransfer',
      }
    case 'twoTransfer':
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
        lastreq: 'twoTransfer',
      }
    case 'threeTransfer':
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
        lastreq: 'threeTransfer',
      }
    case 'topFilter':
      return {
        ...state,
        topFilter: action.value,
        lastreq: 'topFilter',
      }

    default:
      return state
  }
}
const store = createStore(reducer)
export default store
