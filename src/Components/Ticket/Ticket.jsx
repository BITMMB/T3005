import classes from './Ticket.module.scss'

function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.logo}>ffff</div>
      <span className={classes.prise}>13400 Р</span>
      <span className={classes.title}>MOW – HKT</span>
      <span className={classes.title}>MOW – HKT</span>
      <span className={classes.title}>В ПУТИ</span>
      <span className={classes.title}>В ПУТИ</span>
      <span className={classes.title}>2 ПЕРЕСАДКИ</span>
      <span className={classes.title}>8 ПЕРЕСАДКИ</span>
      <span className={classes.info}>10:45 – 08:00</span>
      <span className={classes.info}>11:20 – 00:50</span>
      <span className={classes.info}>21ч 15м</span>
      <span className={classes.info}>13ч 30м</span>
      <span className={classes.info}>HKG, JNB</span>
      <span className={classes.info}>HKG</span>
    </div>
  )
}

export default Ticket
