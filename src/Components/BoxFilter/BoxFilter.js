import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import chb from './Checkbox.png'
import chbch from './Form.png'
import classes from './BoxFilter.module.scss'

function BoxFilter() {
  const dispatch = useDispatch()
  const all = useSelector((state) => state.all)
  const noTransfer = useSelector((state) => state.noTransfer)
  const oneTransfer = useSelector((state) => state.oneTransfer)
  const twoTransfer = useSelector((state) => state.twoTransfer)
  const threeTransfer = useSelector((state) => state.threeTransfer)

  const select = (e) => {
    if (e.target.id == 'all' && all) {
      dispatch({ type: 'allf' })
    } else if (e.target.id == 'all' && !all) {
      dispatch({ type: 'all' })
    } else {
      dispatch({ type: 'allOff' })
      dispatch({ type: e.target.id })
    }
  }

  useEffect(() => {
    if (all) {
      return
    }
    if (noTransfer && oneTransfer && twoTransfer && threeTransfer) {
      dispatch({ type: 'all' })
    }
  })

  return (
    <div className={classes.boxFilter}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          id={'all'}
          value={all}
          type="checkbox"
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={all ? chbch : chb} className="App-logo" alt="logo" />
        Все
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'noTransfer'}
          value={noTransfer}
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={noTransfer ? chbch : chb} className="App-logo" alt="logo" />
        Без пересадок
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'oneTransfer'}
          value={oneTransfer}
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={oneTransfer ? chbch : chb} className="App-logo" alt="logo" />1 пересадка
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'twoTransfer'}
          value={twoTransfer}
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={twoTransfer ? chbch : chb} className="App-logo" alt="logo" />2 пересадки
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'threeTransfer'}
          value={threeTransfer}
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={threeTransfer ? chbch : chb} className="App-logo" alt="logo" />3 пересадки
      </label>
    </div>
  )
}

export default BoxFilter
