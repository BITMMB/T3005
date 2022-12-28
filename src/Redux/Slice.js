import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTransfers: true,
  transfer0: true,
  transfer1: true,
  transfer2: true,
  transfer3: true,
  topFilter: 1,
  searchId: 0,
  ticketCount: 5,
  isLoading: false,
  tickets: [],
}

const aviaSlice = createSlice({
  name: 'avia',
  initialState,

  reducers: {
    loading(state, action) {
      state.isLoading = action.payload
    },

    count(state) {
      state.ticketCount = state.ticketCount + 5
    },
    tickets(state, action) {
      state.tickets = state.tickets.concat(action.payload)
    },
    allOff(state) {
      state.allTransfers = false
    },
    allf(state) {
      ;(state.allTransfers = false),
        (state.transfer0 = false),
        (state.transfer1 = false),
        (state.transfer2 = false),
        (state.transfer3 = false)
    },
    all(state) {
      ;(state.allTransfers = true),
        (state.transfer0 = true),
        (state.transfer1 = true),
        (state.transfer2 = true),
        (state.transfer3 = true)
    },
    noTransfer(state) {
      state.transfer0 = !state.transfer0
    },
    oneTransfer(state) {
      state.transfer1 = !state.transfer1
    },
    twoTransfer(state) {
      state.transfer2 = !state.transfer2
    },
    threeTransfer(state) {
      state.transfer3 = !state.transfer3
    },
    topFilter(state, action) {
      state.topFilter = action.payload
    },
  },
})

export const {
  loading,
  count,
  tickets,
  allOff,
  allf,
  all,
  noTransfer,
  oneTransfer,
  twoTransfer,
  threeTransfer,
  topFilter,
} = aviaSlice.actions

export default aviaSlice.reducer
