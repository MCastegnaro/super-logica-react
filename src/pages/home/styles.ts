import { Link } from "react-router-dom";
import styled from "styled-components";

import BackgrundImg from "../../assets/background.png";

export const HomeContainer = styled.div`
    background: url(${BackgrundImg});
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    nav {
        width: 100%;
        margin: auto;
    }
    ul {
        float: right;
        margin-top: 60px;
        margin-right: 350px;
    }
    li {
        display: inline-block;
    }
    p {
        color: #fff;
        text-decoration: none;
        list-style: none;
        padding: 5px 20px;
        font-size: 14px;
        list-style: none;
    }
`;

export const LogoMenu = styled.div`
    width: 226px;
    float: left;
    height: auto;
    margin-top: 40px;
    margin-left: 125px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

export const Content = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    margin-left: 460px;
    margin-top: 250px;
    h1 {
        display: block;
        width: 832px;
        font-size: 72px;
        color: #fff;
    }
    h3 {
        display: block;
        width: 670px;
        font-weight: 400;
        font-size: 26px;
        color: #fff;
        margin-top: 25px;
        opacity: 80%;
    }
`;

export const Button = styled.button`
    display: inline-block;
    padding: 25px 45px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 65px;
    p {
        color: #8736f2;
        font-size: 24px;
        font-weight: 600;
    }
`;
