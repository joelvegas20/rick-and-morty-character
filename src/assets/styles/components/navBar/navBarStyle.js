import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`

    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* margin-top:10px; */

`

export const NavList = styled.ul`
    list-style:none;
    /* position:relative; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    /* background-color:orange; */
    margin: 0;
    padding:0px 0px;
    height:60vh;
    width:70px;

`

export const NavLi = styled.li`

    position:relative;
    display:flex;
    /* justify-content:center; */
    width:min-content;
    /* align-items:center; */
    transform: rotate(-90deg) ;
    line-height: 1.5;
    /* background-color:black; */
    padding: 10px;   
    /* margin:35px 0; */

`

export const LinkStyled = styled(NavLink)`
    color:white;
    /* background-color:green; */
    width:min-content;
    font-family: Quicksand , sans-serif;
    text-decoration:none;
    padding: 5px 10px ;
    border-radius:4px;
    font-weight:700;

    &:hover {
        transition: 0.8s;
        background-color:white;
        color: #040b1d;
    }
`


export const ImgArrow = styled.img`
    height:80px;
    margin:20px 0;
`