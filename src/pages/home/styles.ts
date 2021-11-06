import styled from "styled-components";

import BackgrundImg from "../../assets/background.png";

export const HomeContainer = styled.div`
    width: 100%;
    height: 1080px;
    background: url(${BackgrundImg});
    background-position: 0px -50px;
    background-size: cover;
`;

export const Navbar = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
`;

export const LogoMenu = styled.div`
    justify-self: start;
    margin-left: 123px;
    margin-top: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const NavMenu = styled.ul`
    display: flex;

    list-style: none;
    text-align: center;
    width: 600px;
    height: 24px;
    justify-content: end;
`;

export const NavItem = styled.li``;

export const Button = styled.button`
    width: 280px;
    height: 77px;
    padding: 8px 20px;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #fff;
    color: #8736f2;
`;
