import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TopFilter from '../TopFilter'
import BoxFilter from '../BoxFilter'
import TicketList from '../TicketList'
import Spiner from '../Spiner/Spiner'
import getResourse from '../../Api/Api.js'

import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  const dispatch = useDispatch()
  const searchId = useSelector((state) => state.searchId)
  const tickets = useSelector((state) => state.tickets)
  const isLoading = useSelector((state) => state.isLoading)

  useEffect(() => {
    getResourse('https://aviasales-test-api.kata.academy/search').then((id) => {
      dispatch({ type: 'searchId', id: id.searchId })
    })
  }, [])

  function getTicket() {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    getResourse(url)
      .then((ticketsList) => {
        dispatch({ type: 'tickets', data: ticketsList.tickets })
        dispatch({ type: 'loading', load: true })
        if (!ticketsList.stop) {
          getTicket()
        } else if (ticketsList.stop) {
          dispatch({ type: 'loading', load: false })
        }
      })
      .catch(() => {
        getTicket()
      })
  }

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <button
          className={classes.button}
          onClick={() => {
            getTicket()
          }}
        >
          {isLoading ? <Spiner /> : <img src={logo} alt="logo" />}
        </button>
      </header>
      <section className={classes.main}>
        <BoxFilter />
        <div className={classes.tickets}>
          <TopFilter />
          {tickets.length == 0 ? <span className={classes.nothing}>ДЛЯ ПОЛУЧЕНИЯ БИЛЕТОВ НАЖМИ САМОЛЕТ</span> : null}
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
