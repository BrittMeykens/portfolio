import * as React from 'react'
import {DarkLightContext} from '../context/darkLightMode.tsx'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import BIcon from '/b-button-icon.png'
import britt from '../assets/images/britt.jpeg'
import {useNavigate} from 'react-router-dom'
import Switch from '@mui/material/Switch'
import {alpha, styled} from '@mui/material/styles'
import {red} from '@mui/material/colors'
import {FunctionComponent, useContext, useState} from 'react'

const pages = [
  {name: 'Home', path: '/'},
  {name: 'Curriculum vitae', path: '/cv'},
  {name: 'Contact', path: '/contact'},
]

const NavBar: FunctionComponent = () => {
  const {theme, setTheme} = useContext(DarkLightContext)
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()
  const RedSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: red[600],
      '&:hover': {
        backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: red[600],
    },
  }))

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleNavMenuNavigation = (path: string) => {
    setAnchorElNav(null)
    navigate(path)
  }

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppBar position="static" sx={{marginBottom: 5}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
            <img className="logo" src={BIcon} alt="B Button" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}>
            Britt Meykens
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{display: {xs: 'block', md: 'none'}}}>
              {pages.map(page => (
                <MenuItem key={page.name} onClick={() => handleNavMenuNavigation(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}>
            <img className="logo" src={BIcon} alt="B Button" />
          </Box>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map(page => (
              <Button key={page.name} sx={{my: 2, display: 'block'}} onClick={() => navigate(page.path)}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 1, flexGrow: 0}}>
            <Avatar alt="Foto van mezelf" src={britt} sx={{width: '5em', height: '5em'}} />
          </Box>
          <Typography style={{textDecoration: 'none', fontFamily: 'monospace'}}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            <RedSwitch checked={theme === 'dark'} onChange={handleThemeChange} />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
