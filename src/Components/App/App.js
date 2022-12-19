import React from 'react'

import TopFilter from '../TopFilter'
import BoxFilter from '../BoxFilter'
import TicketList from '../TicketList'
import Ticket from '../Ticket'

import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  return (
    <div className={classes.app}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className={classes.main}>
        <BoxFilter />
        <div className={classes.tickets}>
          <TopFilter />
          <Ticket />
          <TicketList />
        </div>
      </section>
    </div>
  )
}

export default App
