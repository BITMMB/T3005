import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { all, allOff, allf, noTransfer, oneTransfer, twoTransfer, threeTransfer } from '../../Redux/Slice'

import chb from './Checkbox.png'
import chbch from './Form.png'
import classes from './BoxFilter.module.scss'

function BoxFilter() {
  const dispatch = useDispatch()
  const allTransfers = useSelector((state) => state.aviaReducer.allTransfers)
  const transfer0 = useSelector((state) => state.aviaReducer.transfer0)
  const transfer1 = useSelector((state) => state.aviaReducer.transfer1)
  const transfer2 = useSelector((state) => state.aviaReducer.transfer2)
  const transfer3 = useSelector((state) => state.aviaReducer.transfer3)

  const select = (e) => {
    if (e.target.id == 'all' && allTransfers) {
      console.log(1)
      dispatch(allf())
    } else if (e.target.id == 'all' && !allTransfers) {
      console.log(2)
      dispatch(all())
    } else {
      console.log(3)
      dispatch(allOff())
    }
  }

  useEffect(() => {
    if (allTransfers) {
      return
    }
    if (transfer0 && transfer1 && transfer2 && transfer3) {
      dispatch(all())
    }
  })

  return (
    <div className={classes.boxFilter}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          id={'all'}
          value={allTransfers}
          type="checkbox"
          onClick={(e) => {
            select(e)
          }}
        ></input>
        <img src={allTransfers ? chbch : chb} className="App-logo" alt="logo" />
        Все
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'noTransfer'}
          value={transfer0}
          onClick={(e) => {
            dispatch(noTransfer())
            select(e)
          }}
        ></input>
        <img src={transfer0 ? chbch : chb} className="App-logo" alt="logo" />
        Без пересадок
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'transfer1'}
          value={transfer1}
          onClick={(e) => {
            dispatch(oneTransfer())
            select(e)
          }}
        ></input>
        <img src={transfer1 ? chbch : chb} className="App-logo" alt="logo" />1 пересадка
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'transfer2'}
          value={transfer2}
          onClick={(e) => {
            dispatch(twoTransfer())
            select(e)
          }}
        ></input>
        <img src={transfer2 ? chbch : chb} className="App-logo" alt="logo" />2 пересадки
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          id={'transfer3'}
          value={transfer3}
          onClick={(e) => {
            dispatch(threeTransfer())
            select(e)
          }}
        ></input>
        <img src={transfer3 ? chbch : chb} className="App-logo" alt="logo" />3 пересадки
      </label>
    </div>
  )
}

export default BoxFilter
