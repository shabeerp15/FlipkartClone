import { useState } from 'react'
import { Menu, MenuItem, Typography, makeStyles } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    marginLeft: 15,
  },
})

const Profile = ({ account, setAccount }) => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const logout = () => {
      setAccount(null)
  }

  return (
    <>
      <Link to="#">
        <Typography onClick={handleClick} style={{ marginTop: 4 }}>
          {account}
        </Typography>
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            logout()
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profile
