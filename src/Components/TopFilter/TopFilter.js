import React, { useState } from 'react'

import classes from './TopFilter.module.scss'

function TopFilter() {
  const [value, setValue] = useState(1)

  function chengeValue(e) {
    setValue(e.target.value)
    // radio(e.target.value)
  }

  return (
    <div className={classes.filter}>
      <label className={value == '1' ? `${classes.item} ${classes.checked}` : classes.item}>
        САМЫЙ БЫСТРЫЙ
        <input className={classes.radio} type="radio" name="radio" value="1" onChange={chengeValue}></input>
      </label>
      <label className={value == '2' ? `${classes.item} ${classes.checked}` : classes.item}>
        САМЫЙ ДЕШЕВЫЙ
        <input className={classes.radio} type="radio" name="radio" value="2" onChange={chengeValue}></input>
      </label>
      <label className={value == '3' ? `${classes.item} ${classes.checked}` : classes.item}>
        ОПТИМАЛЬНЫЙ
        <input className={classes.radio} type="radio" name="radio" value="3" onChange={chengeValue}></input>
      </label>
    </div>
  )
}

export default TopFilter
