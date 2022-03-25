import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';

import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import theme from '../utils/theme';
import Zones from '../components/Zones';
import NextImage from '../components/NextImage';

export default function Home() {

	useEffect(() => {
		Aos.init();
		new Rellax('.rellax', {
			speed: -2,
			center: true,
		});
	}, []);

	return (
		<>
			<Head>
				<title>Metaverse Fashion Week | Full Schedule</title>
				<meta name="description" content="Get a front row seat at the catwalk" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<StyledHome>
				<header>
					<Navbar dataAos="fade-down" />
				</header>
				<main>
                    <Container size="full" column className="content-wrapper">
                        <Container size="large" column className="info-container">
                            <div className="info-content">
                                <h1>Get Started</h1>
                                <p>
                                    Are you eager to jump into Metaverse Fashion Week but aren’t familiar with Decentraland? Don’t worry! We’ll cover the basics of how to enter and navigate the virtual world so you can secure your spot by the runway in no time.
                                </p>
                                <div className="steps">
                                    <div className="step">
                                        <h2>Step 1: Enter Decentraland</h2>
                                        <p>There are two main ways to enter Decentraland during MVFW:</p>
                                        <ol>
                                            <li>
                                                <p>
                                                    <strong>You can enter the world through Genesis Plaza</strong>, the default starting location and heart of Decentraland. The location is in the center of the Decentraland map but also has portals you can jump into to get to different areas of the world. In this location you’ll also find robots that can tell you more about Decentraland. 

                                                </p>
                                                <p>
                                                    To jump into Genesis Plaza, follow <a href="https://play.decentraland.org/" target="_blank" rel="noreferrer">this link</a>
                                                </p>
                                            </li>
                                            <strong>OR</strong>
                                            <li>
                                                <p>
                                                    <strong>You can enter Decentraland directly</strong> in your area of interest. For example, say you want to go to the Kolectiff Catwalk to see the Perry Ellis runway show. To attend the event you’ll have to go to the Kolectiff area of Decentraland. Below you’ll see a scrolling gallery of different MVFW Zones. If you click on one (such as Kollectiff - Metaloop) it will take you to that area in Decentraland.


                                                </p>
                                                <p>
                                                    On the <a href="http://mvfw.org" target="_blank" rel="noreferrer">main MVFW landing page</a>, below the Agenda, you’ll see a scrolling gallery of the different MVFW Zones. If you click on one (such as Kollectiff - Metaloop) it will take you to that area in Decentraland.
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Zones />
                        <Container size="large" column className="info-container">
                            <div className="info-content">
                                <div className="steps">
                                    <div className="step">
                                        <p>
                                            <h3>
                                                <strong>Play Using Wallet</strong>
                                            </h3>
                                                <p>
                                                    If you want the full experience of Decentraland, for example if you wanted to buy something special to wear during MVFW, or wanted to permanently save your avatar for return visits to Decentraland, we recommend connecting a digital wallet. To learn more about what that means and how to do it, read this short <a href="http://mvfw.org" target="_blank" rel="noreferrer">article</a>.
                                                </p>
                                        </p>
                                        <p>
                                            <h3>
                                                <strong>Play as Guest</strong>
                                            </h3>
                                                <p>
                                                If you choose to enter Decentraland as a guest, you’ll be able to jump right into the world without any other obstacles.
                                                </p>
                                        </p>
                                    </div>
                                </div>
                                <div className="steps">
                                    <div className="step">
                                        <h2>Step 2: Design Your Avatar</h2>
                                        <p>
                                            After connecting your wallet or selecting ‘Play as Guest’, the next step will be to design and customize your avatar. Your avatar will represent you in Decentraland and is what other people will see when they interact with you. 
                                        </p>
                                        <p className="note">
                                            <strong>Note:</strong> If you chose ‘Play as Guest,’ don’t get too attached to your avatar as you won’t be able to properly save your creation after logging out. Without an account, your avatar will only be saved in your browser’s data cache. If you want to permanently save your avatar, you’ll have to make a Decentraland account by linking a digital wallet.
                                        </p>
                                        <p>
                                            <NextImage width={760} height={400} src="/enter-decentraland.png" />
                                        </p>
                                        <p>
                                            Once you’re done creating your virtual self, click ‘Done’ and you’ll be taken to a page where you can type in what you’d like your name to be in Decentraland. Next, accept the Decentraland terms of service and you’ll be whirled away to the virtual world before you can say Metaverse Fashion Week 2022!
                                        </p>
                                    </div>
                                    <div className="step">
                                        <h2>Step 3: Explore!</h2>
                                        <p>
                                            Once you’re in the virtual world of Decentraland, you can walk around using the arrow keys or the ‘WASD’ keys on your keyboard and use your mouse to look around. To see a map of Decentraland quickly, click ‘M’ on your keyboard to open a map. From there you can click on any location of the map to teleport to that specific area. 

                                        </p>
                                        <p>
                                            Another useful key for you during the event will be ’X’. Clicking ‘X’ will open up an interface that will show you different events that are happening or scheduled in Decentraland. During MWFW, after clicking ‘X’, click on ‘Events’ near the top of your screen. You should then see all the MVFW events that are planned and happening. If you see the option to ‘Jump In’, the event is active and you can teleport there. If the event says ‘Want to Go’, then it hasn’t started yet. Using this function might be the easiest way for newcomers to Decentraland to navigate for the purposes of MVFW.
                                        </p>
                                        <p>
                                            Beyond that, you can just have fun walking around, exploring, and seeing where your journeys take you!
                                        </p>
                                        <p className="controls">
                                            <strong>Here’s a summary of some useful keyboard commands:</strong>
                                            <ul>
                                                <li>
                                                    <span className="command">
                                                        W-A-S-D/Arrows
                                                    </span>
                                                    <span className="function">
                                                        Move
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        Spacebar
                                                    </span>
                                                    <span className="function">
                                                        Jump
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        X
                                                    </span>
                                                    <span className="function">
                                                        Pull up events interface
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        M
                                                    </span>
                                                    <span className="function">
                                                        Open map
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        V
                                                    </span>
                                                    <span className="function">
                                                        Third person view
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        B
                                                    </span>
                                                    <span className="function">
                                                        Emote options (Strike a pose!)
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        U
                                                    </span>
                                                    <span className="function">
                                                        Remove user interface
                                                    </span>
                                                </li>
                                            </ul>
                                            <strong>Chat box Commands</strong>
                                            <ul className="chatbox-commands">
                                                <li>
                                                    <span className="command">
                                                        Teleporting to specific coordinates
                                                    </span>
                                                    <span className="function">
                                                        /goto xx,xx (e.g. /goto 47,-110)
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        Teleporting to a random busy area
                                                    </span>
                                                    <span className="function">
                                                        /goto crowd 
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="command">
                                                        List all other available commands
                                                    </span>
                                                    <span className="function">
                                                        /help
                                                    </span>
                                                </li>
                                            </ul>
                                            <p className="large-paragraph">
                                                <strong>Good luck and have fun exploring Decentraland and Metaverse Fashion Week!</strong>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Container>
				</main>
			</StyledHome>
			<Footer/>
		</>
	)
}

const StyledHome = styled.main`
	overflow-x: hidden;
	header {
		display: flex;
		flex-direction: column;
	}
    main {
        font-family: Inter;
        padding-top: 240px;
        display: flex;
        .large-paragraph {
            font-size: 32px;
            line-height: 52px;
            strong {
                font-size: inherit !important;
            }
        }
        .info-container {
            .info-content {
                max-width: 720px;
                margin: 0 auto 80px 0;
                .controls {
                    strong {
                        margin-bottom: 12px;
                        display: block;
                        font-size: 18px;
                    }
                    ul {
                        &.chatbox-commands {
                            li {
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                .command {
                                    background: none;
                                    padding: 0;
                                }
                                .function {
                                    background: ${props => props.theme.color.gray900};
                                    padding: 2px 16px;
                                    border-radius: 4px;
                                    font-weight: 400;
                                    display: inline-block;
                                    min-width: 50px;
                                    margin-right: 12px;
                                    font-family: monospace;
                                    color: lightgray;
                                    text-align: center;
                                    font-size: 16px;
                                    width: fit-content;
                                }
                            }
                        }
                        margin-bottom: 32px;
                        li {
                            margin-bottom: 12px;
                            .command {
                                background: lightgray;
                                padding: 8px 16px;
                                border-radius: 4px;
                                font-weight: 600;
                                display: inline-block;
                                min-width: 50px;
                                margin-right: 12px;
                                text-align: center;
                            }
                        }
                    }
                }
                .large-paragraph {
                    font-size: 32px;
                    line-height: 52px;
                }
                .note {
                    background: whitesmoke;
                    padding: 24px;
                    border-bottom: 2px solid lightgray;
                }
                strong {
                    font-weight: 600;
                    color: rgba(0,0,0,0.9);
                }
                h1 {
                    font-size: 64px;
                    margin-bottom: 60px;
                    display: inline-block;
                    border-bottom: 8px solid ${props => props.theme.color.red};
                }
                p {
                    margin-bottom: 40px;
                    line-height: 32px;
                    font-weight: 300;
                    color: rgba(0,0,0,0.8);
                }
                a {
                    color: ${props => props.theme.color.red};
                    font-weight: 400;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                .steps {
                    margin-top: 60px;
                }
            }
        }
        #zones {
            margin-bottom: 80px;
        }
    }
`;