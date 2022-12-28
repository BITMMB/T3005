import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TopFilter from '../TopFilter'
import BoxFilter from '../BoxFilter'
import TicketList from '../TicketList'
import Spiner from '../Spiner/Spiner'
import getResourse from '../../Api/Api.jsx'
import { loading, tickets } from '../../Redux/Slice'

import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.aviaReducer.isLoading)

  useEffect(() => {
    getResourse('https://aviasales-test-api.kata.academy/search').then((id) => {
      getTicket(id.searchId)
    })
  }, [])

  function getTicket(id) {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
    getResourse(url)
      .then((ticketsList) => {
        dispatch(tickets(ticketsList.tickets))
        dispatch(loading(true))
        if (!ticketsList.stop) {
          getTicket(id)
        } else if (ticketsList.stop) {
          dispatch(loading(false))
        }
      })
      .catch((e) => {
        console.log(e)
        getTicket(id)
      })
  }
  return (
    <div className={classes.app}>
      <header className={classes.header}>{isLoading ? <Spiner /> : <img src={logo} alt="logo" />}</header>
      <section className={classes.main}>
        <BoxFilter />
        <div className={classes.tickets}>
          <TopFilter />
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
