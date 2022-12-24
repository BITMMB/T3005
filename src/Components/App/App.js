import React from 'react'
import { useDispatch } from 'react-redux'

import TopFilter from '../TopFilter'
import BoxFilter from '../BoxFilter'
import TicketList from '../TicketList'
import Ticket from '../Ticket'
// import getResourse from '../../Api/Api.js'
import getId from '../../Api/Api.js'

import classes from './App.module.scss'
import logo from './Logo.png'

function App() {
  const dispatch = useDispatch()
  // const searchId = useSelector((state) => searchId.all)

  const id = getId('https://aviasales-test-api.kata.academy/search')
  dispatch({ type: 'searchId', searchId: id })

  return (
    <div className={classes.app}>
      <header className="App-header">
        <button
          className={classes.button}
          onClick={() => {
            // getResourse('https://aviasales-test-api.kata.academy/search')
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </button>
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
