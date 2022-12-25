import React from 'react'
import { useDispatch } from 'react-redux'

import classes from './ShowMoreBtn.module.scss'

function ShowMoreBtn() {
  const dispatch = useDispatch()

  function sLice() {
    dispatch({ type: 'count' })
  }

  return (
    <button
      className={classes.showMoreBtn}
      onClick={() => {
        sLice()
      }}
    >
      {' '}
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  )
}

export default ShowMoreBtn
