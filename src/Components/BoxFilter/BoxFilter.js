import React, { useState } from 'react'

import chb from './Checkbox.png'
import chbch from './Form.png'
import classes from './BoxFilter.module.scss'

function BoxFilter() {
  const [all, setAll] = useState(false)
  const [noTransfer, setNoTransfer] = useState(false)
  const [oneTransfer, setOneTransfer] = useState(false)
  const [twoTransfer, setTwoTransfer] = useState(false)
  const [threeTransfer, setThreeTransfer] = useState(false)

  return (
    <div className={classes.boxFilter}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onClick={() => {
            const value = all ? false : true
            setAll(value)
            setNoTransfer(value)
            setOneTransfer(value)
            setTwoTransfer(value)
            setThreeTransfer(value)
          }}
        ></input>
        <img src={all ? chbch : chb} className="App-logo" alt="logo" />
        Все
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onClick={() => {
            setNoTransfer(!noTransfer)
          }}
        ></input>
        <img src={noTransfer ? chbch : chb} className="App-logo" alt="logo" />
        Без пересадок
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onClick={() => {
            setOneTransfer(!oneTransfer)
          }}
        ></input>
        <img src={oneTransfer ? chbch : chb} className="App-logo" alt="logo" />1 пересадка
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onClick={() => {
            setTwoTransfer(!twoTransfer)
          }}
        ></input>
        <img src={twoTransfer ? chbch : chb} className="App-logo" alt="logo" />2 пересадки
      </label>
      <label className={classes.menu}>
        <input
          className={classes.checkbox}
          type="checkbox"
          onClick={() => {
            setThreeTransfer(!threeTransfer)
          }}
        ></input>
        <img src={threeTransfer ? chbch : chb} className="App-logo" alt="logo" />3 пересадки
      </label>
    </div>
  )
}

export default BoxFilter
