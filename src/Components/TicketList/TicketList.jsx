import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../Ticket'
import ShowMoreBtn from '../ShowMoreBtn'

import classes from './TicketList.module.scss'

function TicketList() {
  const noTransfer = useSelector((state) => state.aviaReducer.noTransfer)
  const oneTransfer = useSelector((state) => state.aviaReducer.oneTransfer)
  const twoTransfer = useSelector((state) => state.aviaReducer.twoTransfer)
  const threeTransfer = useSelector((state) => state.aviaReducer.threeTransfer)
  const filter = useSelector((state) => state.aviaReducer.topFilter)
  const tickets = useSelector((state) => state.aviaReducer.tickets)
  const ticketCount = useSelector((state) => state.aviaReducer.ticketCount)

  let pice = []

  function conCat(f) {
    pice = pice.concat(
      tickets.filter((t) => {
        if (t.segments[0].stops.length == f && t.segments[1].stops.length == f) {
          return t
        }
      })
    )
    return pice
  }

  if (noTransfer) {
    conCat(0)
  }
  if (oneTransfer) {
    conCat(1)
  }
  if (twoTransfer) {
    conCat(2)
  }
  if (threeTransfer) {
    conCat(3)
  }
  if (filter == 1) {
    pice = pice.sort((a, b) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1))
  } else if (filter == 2) {
    pice = pice.sort((a, b) => (a.price > b.price ? 1 : -1))
  } else if (filter == 3) {
    pice = pice.sort((a, b) => (a.price > b.price ? 1 : -1))
    pice = pice.sort((a, b) => (a.segments[0].duration > b.segments[0].duration ? 1 : -1))
  }

  pice = pice.slice(0, ticketCount)

  let element = pice.map((el) => <Ticket el={el} key={uuidv4()} />)

  return (
    <div className={classes.ticketList}>
      {element}
      {pice.length == 0 && tickets.length != 0 ? (
        <span className={classes.noticket}>РЕЙСОВ, ПОДХОДЯЩИХ ПОД ЗАДАННЫЕ ФИЛЬТРЫ, НЕ НАЙДЕНО</span>
      ) : null}
      {pice.length == 0 ? null : <ShowMoreBtn />}
    </div>
  )
}

export default TicketList
