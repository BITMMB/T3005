import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TopFilter from '../TopFilter'
import BoxFilter from '../BoxFilter'
import TicketList from '../TicketList'
// import Ticket from '../Ticket'
import getResourse from '../../Api/Api.js'
// import getId from '../../Api/Api.js'

import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.searchId)
  // const tickets = useSelector((state) => state.tickets)

  useEffect(() => {
    getResourse('https://aviasales-test-api.kata.academy/search').then((id) => {
      // console.log(id.searchId)
      dispatch({ type: 'searchId', id: id.searchId })
    })
  }, [])

  function getTicket() {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    getResourse(url).then((ticketsList) => {
      dispatch({ type: 'tickets', data: ticketsList.tickets })
    })
  }

  return (
    <div className={classes.app}>
      <header className="App-header">
        <button
          className={classes.button}
          onClick={() => {
            getTicket()
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>
      <section className={classes.main}>
        <BoxFilter />
        <div className={classes.tickets}>
          <TopFilter />
          {/* <Ticket /> */}
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
