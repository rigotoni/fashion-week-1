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
                                <h1>Contribute to the Metaverse Fashion Week</h1>
                                <p>
                                    Are you eager to jump into Metaverse Fashion Week and would like to contribute as a creator, brand, sponsor, influencer, press or simply you'd like to lend a helping hand using your skills and genuine interest in Metaverse Fashsion. 
                                </p>
                                <div className="steps">
                                    <div className="step">
                                        <h2>How can creators contribute to Metaverse Fashion Week?</h2>
                                        <p>There are two main ways to enter Decentraland during MVFW:</p>
                                        <ol>
                                            <li>
                                                <p>
                                                    <strong>You can license your IP to wearable designers and distribute your brand to a community of early adopters</strong>, Decentraland is the first and only open-source, web3 metaverse platform that allows fashion designers to design and mint everything from wearable items like hats, sunglasses, t-shirt and dresses to entire skin designs and custom emotes. Pairing metaverse fashion with music and live entertainment along with celebrity meetups in-world are also an attractive feature of the Metaverse fashion week and we are constantly looking for artists who wish to bring their audience to a novel experience in 3D virtual events. 

                                                </p>
                                                <p>
                                                    To Sign up for Metaverse Fashion Week, follow <a href="https://play.decentraland.org/" target="_blank" rel="noreferrer">this link</a>
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Zones showTitle />
                        <Container size="large" column className="info-container">
                            <div className="info-content">
                                <div className="steps">
                                    <div className="step">
                                        <p>

                                        </p>
                                        <p>
                                        </p>
                                        <p>
                                            <h3>
                                            </h3>
                                                <p>
                                                </p>
                                        </p>
                                        <p>
                                            <h3>
                                            </h3>
                                                <p>
                                                </p>
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    
                                    
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
                                    text-align: left;
                                    font-size: 16px;
                                    width: 100%;
                                    max-width: 380px;
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
                    font-family: Staatliches;
                    letter-spacing: 0.1em;
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
            h2 {
                font-family: Staatliches;
            }
        }
    }
`;