import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  useScrollTrigger,
} from '@mui/material'
import {makeStyles} from '@mui/styles'
import clsx from 'clsx'
import React, {useReducer} from 'react'
import history from '../../../../common/history';
import {homeLogoIcon} from '../../../../images/'

function ElevationScroll (props) {
  const {children, window} = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles({
  navbar: {
    height: '140px',
    '& .MuiPaper-root': {
      backgroundColor: '#000',
      minHeight: 'unset',
    },
    '& .MuiToolbar-root': {
      minHeight: 'unset',
    },
  },
  homeLogo: {
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #303131',
  },
  socialMedia: {
    display: 'flex',
    alignItems: 'flex-end',
    '& .icon': {
      padding: '0 5px',
      cursor: 'pointer',
    },
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '46px',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#EDCC6D',
      color: '#000',
    },
    '&.active': {
      backgroundColor: '#EDCC6D',
      color: '#000',
    },
  },
  subMenu: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: '#EDCC6D',
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  subItems: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '46px',
    cursor: 'pointer',
  },
})

export default function Navbar (props) {
  const classes = useStyles()
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      menuActive: '',
      showSubMenu: false,
      submenuItemsData: [],
    },
    undefined,
  )
  const {menuActive, showSubMenu, submenuItemsData} = state

  const menuItemsData = [
    {
      label: 'Winners & Nominees',
      subItems: [],
    },
    {
      label: 'Nominees',
      subItems: [],
    },
    {
      label: 'Hollywood',
      subItems: [],
    },
    {
      label: 'Vintage',
      subItems: [],
    },
    {
      label: 'Global',
      subItems: [],
    },
  ]

  const handleShowSubMenu = () => setState({showSubMenu: true})

  const handleHideSubMenu = () => setState({showSubMenu: false})

  const handleHoverMenu = (label) => {
    const submenuItemsData = menuItemsData.find(
      (menu) => menu.label === label).subItems
    setState({
      menuActive: label,
      showSubMenu: true,
      submenuItemsData,
    })
  }

  const menuItems = menuItemsData.map(({label}) => (
    <div
      key={label}
      className={clsx(classes.menuItem, label === menuActive && 'active')}
      onMouseEnter={() => handleHoverMenu(label)}
      onMouseLeave={handleHideSubMenu}
    >
      {label}
    </div>
  ))

  const handleLeaveSubMenu = () => {
    setState({
      showSubMenu: false,
      menuActive: '',
    })
  }

  const handleLeaveMenuBlock = () => {
    setState({
      showSubMenu: false,
      menuActive: '',
      submenuItemsData: [],
    })
  }

  const submenuItems = (
    <div
      className={classes.subItems}
      onMouseEnter={handleShowSubMenu}
      onMouseLeave={handleLeaveSubMenu}
    >
      {submenuItemsData.map((subItem, index) => (
        <div key={index}>
          {subItem}
        </div>
      ))}
    </div>
  )

  const handleClickLogo = () => history.push('/')
  
  return (
    <div className={classes.navbar}>
      <CssBaseline/>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Container>
              <div className={classes.homeLogo} onClick={handleClickLogo}>
                <img src={homeLogoIcon} alt={homeLogoIcon} height='75px'/>
                <div className={classes.socialMedia}>
                  <span className='icon'>
                    <FacebookIcon sx={{ color: '#EDCC6D' }}/>
                  </span>
                  <span className='icon'>
                    <YouTubeIcon sx={{ color: '#EDCC6D' }}/>
                  </span>
                </div>
              </div>
              <div className='menuBlock' onMouseLeave={handleLeaveMenuBlock}>
                <div className={classes.menu}>
                  {menuItems}
                </div>
                <div className={classes.subMenu}>
                  {showSubMenu && submenuItems}
                </div>
              </div>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar/>
    </div>
  )
}