import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuitems'
import { signout } from '../../utils/icons'

function Navigation({active, setActive}) {
  return (
    <NavStyled>
        <div className="user-con">
          <img src= {avatar} alt="" />
          <div className="text">
            <h2>Harshit Agrawal</h2>
            <p>Your Profile</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) =>{
            return <li key={item.id} 
                      onClick={()=> setActive(item.id)}
                      className={active === item.id ? 'active' : ''}>
              {item.icon} 
              <span>{item.title}</span>
            </li>
          })}
        </ul>
        <div className="bottom-nav">
          <li>
            {signout} Sign Out
          </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  border: 3px solid white;
  border-radius: 32px;
  background: #71C9CE;
  backdrop-filter: blur(10px);
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  gap:2rem;
  .user-con{
    height:100px;
    display:flex;
    align-item:center;
    gap: 1rem;
    img{
      height:80px;
      width:80px;
      border-radius: 50%;
      object-fit:cover;
      background: #fcf6f9;
      border: 2px solid white;
      padding:.2 rem;
      box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
    }
    h2{
      color : rgba(34,34,96,1);
    }
    p{
      color : rgba(34,34,96,0.6);
    }
  }
  .menu-items{
    flex:1;
    display:flex;
    flex-direction: column;
    li{
      display:grid;
      grid-template-columns:40px auto; 
      align-items: center;
      margin: .6rem 0;
      font-weight:500;
      cursor:pointer;
      transition: all .4s ease-in-out;
      padding-left: 1rem;
      postion:relative;  
      i{
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all .4s ease-in-out;
    } 
  }
  .active{
    color: rgba(34, 34, 96, 1) !important;
    i{
        color: rgba(34, 34, 96, 1) !important;
    }
  }
`

export default Navigation

// menu items css -> grid template columns :  40 px means that icon is of 40 pixxels and rest should be automatic