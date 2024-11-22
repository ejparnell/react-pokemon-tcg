import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { signOut } from '../../Auth/user-services'
import { AppContext } from '../App/App'
import { Header } from '../shared/Header'

const NavContainer = styled.nav`
  border-radius: 15px 15px 0 0;
  grid-area: header;
  display: flex;
  padding: 1rem;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.lightSecondary};
`

const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;

  div {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.lightSecondary};
    margin: 4px 0;
    transition: 0.4s;
  }
`

// TODO: height is hardcoded
const Drawer = styled.ul`
  border-radius: 15px;
  margin: 8px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 90.7%;
  width: 200px;
  background-color: ${props => props.theme.primary};
  padding: 2rem;
  transform: ${({ $isopen }) => ($isopen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  color: ${props => props.theme.lightSecondary};
  z-index: 1000;
`

const DrawerItem = styled.li`
  font-size: 1.5rem;
  padding: 1rem 0;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.darkSecondary};
  }
`

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.lightSecondary};
    top: 50%;
    left: 0;
    transform-origin: center;
    transition: 0.3s;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

const NavImage = styled.img`
  width: 75px;
`

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit'
}

export function Nav() {
  const { userContext } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  function handleSignOut() {
    signOut()
    userContext.setUser(null)
  }

  return (
    <NavContainer className='header'>
      <Link to='/'>
        <NavImage src='../../public/pixil-frame-0.png' alt='pokeball' />
      </Link>
      <Header>Pokemon TCG</Header>
      <MenuIcon onClick={toggleDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <Drawer $isopen={isOpen}>
        <CloseIcon onClick={toggleDrawer} />
        {userContext.user ? (
          <>
            <DrawerItem onClick={() => handleSignOut()}>Sign Out</DrawerItem>
            <DrawerItem>
              <Link style={linkStyles} to={'/buy-pack'}>Buy Pack</Link>
            </DrawerItem>
            <DrawerItem>
              <Link style={linkStyles} to={'/binder'}>Your Binder</Link>
            </DrawerItem>
          </>
        ) : (<>
          <DrawerItem>
            <Link style={linkStyles} to={'/signup'}>Sign Up</Link>
          </DrawerItem>
          <DrawerItem>
            <Link style={linkStyles} to={'/signin'}>Sign In</Link>
          </DrawerItem>
        </>)}
      </Drawer>
    </NavContainer>
  )
}
