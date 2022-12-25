import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../Ticket'
// import ShowMoreBtn from '../ShowMoreBtn'

import classes from './TicketList.module.scss'

function TicketList() {
  const tickets = useSelector((state) => state.tickets)

  let element = tickets.map((el) => <Ticket el={el} key={uuidv4()} />)

  return <div className={classes.ticketList}>{element}</div>
}

export default TicketList
