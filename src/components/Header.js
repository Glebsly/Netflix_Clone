import React, {Component} from 'react';
import logo from '../svg/logo.svg';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={logo} alt="logo"/>
          <button className="signIn-btn">Sign In</button>
        </div>
        <div className="header-content">
          <Title>See what's next.</Title>
          <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
          <Link className="main-offer-btn">TRY IT NOW
          <Icon className="arrow-icon" icon={ic_keyboard_arrow_right} size={37}/></Link>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;
//logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%)

`;
//Header container
const HeaderComponent = styled.div`
.header-top{
  position: relative;
  height: 10rem;
  z-index: 1;
}
.signIn-btn{
  rigth: 0;
  margin: 1.125rem 3% 0;
  padding: 0.4375rem 1.0625rem;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.1875rem;
  font-size: 1rem;
  background-color: var(--main-red);
  translate: transform(-50%, -50%);
  position:absolute;
  right: 0;
  cursor: pointer;
  transition: background 0.2s ease-in;
  &:hover{
    background-color: var(--main-red-hover);
  }
}
.header-content{
  width: 65%;
  position: relative;
  margin: 4.5rem auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  z-index: 1;
}
//Main Offer btn
.main-offer-btn{
  display: inline-block;
  background: var(--main-red);
  text-transform: uppercase;
  borfer: none;
  outline: none;
  margin: 0 33%;
  padding: 1.5rem;
  border-radius: 0.1578rem;
  font-size: 2rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0,0,0,0.45);
  transition: background 0.2s ease-in;
  color:#fff;
  &:hover{
    background: var(--main-red-hover);
  }

  .arrow-icon svg{
    vertical-align: bottom;
    margin-left: 1.5rem;
  }
`;
//main title
const Title=styled.h1`
  margin: 0 0 3.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1rem;
`;

//Subtitle
const Subtitle=styled.h2 `
  font-weight:400;
  font-size:1.875rem;
  line-height:1.25rem;
  margin: 0 0 1.875rem;
  text-transform:uppercase;
`;
