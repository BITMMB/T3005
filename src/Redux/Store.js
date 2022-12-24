import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

const defaultState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
  topFilter: 1,
  searchId: 0,
  tickets: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'searchId':
      return {
        ...state,
        // searchId: id,
      }
    case 'tickets':
      return {
        ...state,
        // tickets: data,
      }

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
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  console.log(store.getState())
  return result
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))
export default store
