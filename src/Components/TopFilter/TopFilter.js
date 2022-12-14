import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { topFilter } from '../../Redux/Slice'

import classes from './TopFilter.module.scss'

function TopFilter() {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.aviaReducer.topFilter)

  function chengeValue(e) {
    dispatch(topFilter(e.target.value))
  }

  return (
    <div className={classes.filter}>
      <label className={filter == '1' ? `${classes.item} ${classes.checked}` : classes.item}>
        САМЫЙ БЫСТРЫЙ
        <input
          className={classes.radio}
          type="radio"
          name="radio"
          value="1"
          onChange={(e) => {
            chengeValue(e)
          }}
        ></input>
      </label>
      <label className={filter == '2' ? `${classes.item} ${classes.checked}` : classes.item}>
        САМЫЙ ДЕШЕВЫЙ
        <input
          className={classes.radio}
          type="radio"
          name="radio"
          value="2"
          onChange={(e) => {
            chengeValue(e)
          }}
        ></input>
      </label>
      <label className={filter == '3' ? `${classes.item} ${classes.checked}` : classes.item}>
        ОПТИМАЛЬНЫЙ
        <input
          className={classes.radio}
          type="radio"
          name="radio"
          value="3"
          onChange={(e) => {
            chengeValue(e)
          }}
        ></input>
      </label>
    </div>
  )
}

export default TopFilter
