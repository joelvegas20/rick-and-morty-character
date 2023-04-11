
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family: Quicksand , sans-serif;
    color:white;
    margin-left:40px;
    user-select:none;

    /* padding-top:5%;  */


`

export const NavList = styled.ul`
    list-style:none;
    /* position:relative; */
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    margin: 0;
    padding:0px 0px;
    /* height:60vh; */
    width:70px;

`

export const NavLi = styled.li`

    writing-mode: tb-rl;
    transform: rotate(-180deg);
    padding: 10px;   

`

export const LinkStyled = styled(NavLink)`

    color:white;
    text-decoration:none;
    padding: 20px 10px ;
    border-radius:4px;
    font-weight:700;

    &:hover {
        transition: 0.8s;
        background-color:white;
        color: #040b1d;
    }
`

export const ButtonLink = styled(NavLink)`

    background-color:white;
    color: #040b1d;
    margin:0 50px;
    padding: 20px 10px ;
    border-radius:4px;
    font-weight:700;
    text-decoration:none;

    &:hover {
        transition: 0.2s;
        padding: 24px 12px ;
        
    }

`

export const ButtonLi = styled.button`

    background-color:transparent;
    color: #040b1d;
    border:none;
    border-radius:10px;
    writing-mode: tb-rl;
    transform: rotate(-90deg);
    padding: 10px 20px ;


`


export const ImgArrow = styled.img`
    height:80px;
    margin:20px 0;
`