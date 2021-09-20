import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'

const useStyle = makeStyles({
  header: {
    background: '#2874f0',
    heigh: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: 'flex',
  },
  component:{
      marginLeft: '12%',
      lineHeight:0,
      textDecoration:'none',
      color:'#fff'
  },
  subHeading: {
      fontSize: 10,
      fontStyle:'italic'
  }
})

const Header = () => {
  const classes = useStyle()
  const logoURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
  const subURL =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
  
    return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} alt="logo" />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
            <img src={subURL} className={classes.subURL} alt="subUrl" />
          </Box>
        </Link>
        <SearchBar />
        <HeaderButtons />
      </Toolbar>
    </AppBar>
  )
}

export default Header
