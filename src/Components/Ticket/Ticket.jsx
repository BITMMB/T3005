import React from 'react'
import { format } from 'date-fns'

import Logo from '../Logo/Logo.jsx'

import classes from './Ticket.module.scss'

function Ticket({ el }) {
  const t = (ticDate) => {
    const d = new Date(ticDate.date)
    const d1 = format(d, 'HH:mm')
    const d2 = format(d.setMilliseconds(ticDate.duration * 60000), 'HH:mm')
    return `${d1} - ${d2}`
  }

  function changes(ch) {
    const change = ch.stops
    let text = ''
    if (change.length == 0) {
      text = 'БЕЗ ПЕРЕСАДОК'
    } else if (change.length == 1) {
      text = '1 ПЕРЕСАДКА'
    } else if (change.length == 2 || change.length == 3 || change.length == 4) {
      text = `${change.length} ПЕРЕСАДКИ`
    } else {
      text = `${change.length} ПЕРЕСАДОК`
    }
    return text
  }

  return (
    <div className={classes.ticket}>
      <Logo iata={el.carrier} />
      <span className={classes.prise}>{el.price.toLocaleString('ru-RU')} Р</span>
      <span className={classes.title}>
        {el.segments[0].origin} - {el.segments[0].destination}
      </span>
      <span className={classes.title}>
        {el.segments[1].origin} - {el.segments[1].destination}
      </span>
      <span className={classes.title}>В ПУТИ</span>
      <span className={classes.title}>В ПУТИ</span>
      <span className={classes.title}>{changes(el.segments[0])}</span>
      <span className={classes.title}>{changes(el.segments[1])}</span>
      <span className={classes.info}> {t(el.segments[0])}</span>
      <span className={classes.info}>{t(el.segments[1])}</span>
      <span className={classes.info}>{format(new Date(el.segments[0].duration * 60000 - 10800000), 'HHч mmм')}</span>
      <span className={classes.info}>{format(new Date(el.segments[1].duration * 60000 - 10800000), 'HHч mmм')}</span>
      <span className={classes.info}>{el.segments[0].stops.join(', ')}</span>
      <span className={classes.info}>{el.segments[1].stops.join(', ')}</span>
    </div>
  )
}

export default Ticket
