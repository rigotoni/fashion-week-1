import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';
import { scrollTo } from '../utils/utils';

const Navbar = props => {

    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const {
        dataAos
    } = props;

    useEffect(() => {
        let html = document.querySelector('html')
        html.style.overflowY = isMobileOpen ? 'hidden' : 'visible'
    }, [isMobileOpen])

    return (
        <StyledNavbar className={`${isMobileOpen ? 'mobile-open' : ''}`}>
            <Container dataAos={dataAos} size={'large'} className={'navbar-inner-container'}>
                <Image className="logo" src="/NavbarLogo.png" alt="Decentraland" width={167} height={42} />
                <nav>
                    <ul>
                        <li>
                            <a onClick={(e) => {
                                e.preventDefault; 
                                setIsMobileOpen(false);
                            }}
                            href={'/#about'}>
                                About
                            </a>
                        </li>
                        <li>
                        <a onClick={(e) => {
                                e.preventDefault; 
                                setIsMobileOpen(false);
                            }}
                            href={'/#full-schedule'}>
                                Full Schedule
                            </a>
                        </li>
                        <li>
                        <a onClick={(e) => {
                                e.preventDefault;
                                setIsMobileOpen(false); 
                            }}
                            href={'/#zones'}>
                                Zones
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={`hamburger-icon`} onClick={e => {
                    setIsMobileOpen(!isMobileOpen);
                }}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.section`
    height: 80px;
    z-index: 10;
    position: fixed;    
    top: 0;
    width: 100%;
    backdrop-filter: blur(15px);
    background: rgba(255,255,255, 0.8);
    transition: 0.25s ease-in-out background;
    .navbar-inner-container {
        height: inherit;
        display: flex;
        align-items: center;
        position: relative;
        .hamburger-icon {
            display: none;
            position: relative;
            width: 28px;
            height: 28px;
            div {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: ${props => props.theme.color.black};
                transition: 0.15s ease-in-out all;
                &:nth-child(2),
                &:nth-child(3) {
                    top: 8px;
                }
                &:nth-child(4) {
                    top: 16px;
                }

            }
        }
        nav {
            margin-left: auto;
            ul {
                display: flex;
                li {
                    margin-left: 62px; 
                    font-size: 16px;
                    font-weight: 500;
                    text-align: right;
                    line-height: 40px;
                    font-family: Inter;
                    a {
                        transition: 0.1s ease-in-out all;
                        color: ${props => props.theme.color.black};
                        letter-spacing: 0em;
                        position: relative;
                        cursor: pointer;
                        &:after {
                            position: absolute;
                            content: '';
                            height: 1px;
                            width: 0;
                            left: 0;
                            bottom: -6px;
                            background: ${props => props.theme.color.red};
                            transition: 0.25s ease-in-out all;
                        }
                        &:hover {
                            &:after {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        &.mobile-open {
            background: white;
            .navbar-inner-container {
                .hamburger-icon {
                    div {
                        &:first-child,
                        &:nth-child(4) {
                            opacity: 0;
                        }
                        &:nth-child(2) {
                            transform: rotate(45deg)
                        }
                        &:nth-child(3) {
                            transform: rotate(-45deg)
                        }
                    }
                }
                nav {
                    ul {
                        top: 80px;
                        opacity: 1;
                    }
                }
            }
        }
        .navbar-inner-container {
            .hamburger-icon {
                display: inline-block;
            }
            nav {
                ul {
                    padding: 24px;
                    flex-direction: column;
                    position: absolute;
                    top: 100vh;
                    left: -20px;
                    background: white;
                    width: calc(100% + 40px);
                    height: calc(100vh - 80px);
                    align-items: flex-start;
                    align-items: center;
                    justify-content: center;
                    transition: 0.25s ease-in-out all;
                    opacity: 0;
                    li {
                        position: relative;
                        top: -80px;
                        padding: 0;
                        /* text-align: left; */
                        display: flex;
                        margin: 0;
                        font-size: 40px;
                        line-height: 72px;
                    }
                }
            }
        }
    }
`;

export default Navbar;