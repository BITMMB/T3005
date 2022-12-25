import classes from './Logo.module.scss'

function Logo({ iata }) {
  return <img src={`http://pics.avs.io/99/36/${iata}.png`} className={classes.logo} alt="logo" />
}
export default Logo
