import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

const defaultState = {
  all: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
  topFilter: 1,
  searchId: 0,
  ticketCount: 5,
  isLoading: false,
  tickets: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.load,
      }
    case 'count':
      return {
        ...state,
        ticketCount: state.ticketCount + 5,
      }

    case 'tickets':
      return {
        ...state,
        tickets: state.tickets.concat(action.data),
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

const loggerMiddleware = () => (next) => (action) => {
  const result = next(action)
  return result
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))
export default store
