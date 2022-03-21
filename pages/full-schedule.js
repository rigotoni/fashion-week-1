import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';

import Navbar from './../components/Navbar';
import HomepageHero from './../components/HomepageHero';
import EventInfo from '../components/EventInfo';
import EventSchedule from '../components/EventSchedule';
import Zones from '../components/Zones';
import Footer from '../components/Footer';
import TextBanner from '../components/TextBanner';
import LowerBanner from '../components/LowerBanner';
import Container from '../components/Container';

export default function Home() {

	useEffect(() => {
		Aos.init();
		new Rellax('.rellax', {
			speed: -2,
			center: true,


		});
	}, []);

    let i = 13;
    let timeslots = []
    while (i <= 23 ) {
        timeslots.push(i);
        i++;
    };

    const Schedule = [
        {
            dateName: 'Wednesday 23rd March',
            timeslots: {
                '13': null,
                '14': null,
                '15': null,
                '16': null,
                '17': [
                    {
                        eventName: 'Selfridges Opening',
                        location: 'Independent',
                        url: '#'
                    }
                ],
                '18': null,
                '19': null,
                '20': null,
                '21': null,
                '22': null,
                '23': null,
            }
        },
        {
            dateName: 'Thursday 24th March',
            timeslots: {
                '13': [
                    {
                        eventName: 'Panel Talk: Future of Commerce / Decentralizing Commerce',
                        location: 'Boson Portal',
                        url: '#'
                    },
                    {
                        eventName: 'MetaTokyo Zone Opening',
                        location: 'MetaTokyo Zone',
                        url: '#'
                    }
                ],
                '14': [
                    {
                        eventName: 'MVFW Fashion Design Exhibition ',
                        location: 'Dragon City',
                        url: '#'
                    },
                    {
                        eventName: '#DragonStyle Selfie Contest',
                        location: 'Dragon City',
                        url: '#'
                    },
                    {
                        eventName: 'Known Origin Exhibition + DJ Set 6 pm GMT',
                        location: 'Independent',
                        url: '#'
                    },
                    {
                        eventName: 'Enter the Metaverse; Dressing our Avatars',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                ],
                '15': [
                    {
                        eventName: 'Catwalk: Perry Ellis 15:00  / IKKS 15:30',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Christine Massarany',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                ],
                '16': [
                    {
                        eventName: 'UNXD Luxury District Opening',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                ],
                '17': [
                    {
                        eventName: 'D&G +UNXD Opening Party',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                ],
                '18': [
                    {
                        eventName: 'Rarible Fresh Drip Opening',
                        location: 'Rarible',
                        url: '#'
                    },
                ],
                '19': [
                    {
                        eventName: 'Fashion on Film; Consuming Fashion Virtually',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '20': [
                    {
                        eventName: 'Community Wearable Showcasing',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                    {
                        eventName: 'Metaparty Opening',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '21': [
                    {
                        eventName: 'Acura (car brand) with playlist ',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Body Architecture',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                ],
                '22': [
                    {
                        eventName: 'Interview with Michi Todd',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '23': [
                    {
                        eventName: 'Interview with DecentralWear // 10:40pm UTC: Mike Salvis 10 minute comedy set',
                        location: 'Metaparty Community Area',
                        url: '#'
                    }
                ]
            }
        },
        {
            dateName: 'Friday 25th March',
            timeslots: {
                '13': [
                    {
                        eventName: 'Panel Talk: Metaverse Fashion: Digital to Physical',
                        location: 'Boson Portal',
                        url: '#'
                    }
                ],
                '14': [
                    {
                        eventName: 'Panel Talk: NFTs with Superpowers ',
                        location: 'Boson Portal',
                        url: '#'
                    },
                    {
                        eventName: 'Ecommerce & The Metaverse',
                        location: 'Cash Labs Space',
                        url: '#'
                    }
                ],
                '15': [
                    {
                        eventName: 'Etro (UNXD) Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                    {
                        eventName: 'MTA X DressX 15:00 / Anrealage 15:30',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Panel Talk: Fireside chat with Mr Tommy Hilfiger ',
                        location: 'Boson Portal',
                        url: '#'
                    }
                ],
                '16': [
                    {
                        eventName: 'Creating Fashion outside the confines of Reality',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                    {
                        eventName: '8SIAN',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                ],
                '17': [
                    {
                        eventName: 'Threedium Mall Opening',
                        location: 'Threedium Mall',
                        url: '#'
                    }
                ],
                '18': [
                    {
                        eventName: 'Placebo Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    }
                ],
                '19': [
                    {
                        eventName: 'Mini Games',
                        location: 'Metaparty Community Area',
                        url: '#'
                    }
                ],
                '20': [
                    {
                        eventName: 'Boson Portal Opening',
                        location: 'Boson Portal',
                        url: '#'
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '21': [
                    {
                        eventName: 'Closing Party Tribute Brand + ICYKOF',
                        location: 'Independent',
                        url: '#'
                    },
                    {
                        eventName: 'After Party',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Charlie Cohen\'s Electrict City powered by Yahoo ',
                        location: 'Independent',
                        url: '#'
                    },
                ],
                '22': null,
                '23': null,
            }
        },
        {
            dateName: 'Saturday 26th March',
            timeslots: {
                '13': [
                    {
                        eventName: 'Opening',
                        location: 'Dragon City',
                        url: '#'
                    }
                ],
                '14': [
                    {
                        eventName: 'Phygital Fashion',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                ],
                '15': [
                    {
                        eventName: 'Catwalk Night',
                        location: 'Dragon City',
                        url: '#'
                    },
                    {
                        eventName: 'Cider',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Virtual Couture; Digitizing High Fashion',
                        location: 'Cash Labs Space',
                        url: '#'
                    }
                ],
                '16': [
                    {
                        eventName: 'The Rebels',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                ],
                '17': [
                    {
                        eventName: 'Vogu & Hype Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    }
                ],
                '18': [
                    {
                        eventName: 'Fresh Couture Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    }
                ],
                '19': [
                    {
                        eventName: 'Opening Party Hogan/Exclusible (Bob Sinclair)',
                        location: 'Independent',
                        url: '#'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Metaparty Community Area',
                        url: '#'
                    }
                ],
                '20': [
                    {
                        eventName: 'Creating Fashion Imagery:',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '21': [
                    {
                        eventName: 'Nicki Nicole After Party',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                ],
                '22': [
                    {
                        eventName: 'Interview with Yanniks',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '23': null,
            }
        },
        {
            dateName: 'Sunday 27th March',
            timeslots: {
                '13': null,
                '14': [
                    {
                        eventName: 'MetaJam Award Ceremony ',
                        location: 'Dragon City',
                        url: '#'
                    },
                    {
                        eventName: 'Estée Lauder',
                        location: 'Independent',
                        url: '#'
                    },
                ],
                '15': [
                    {
                        eventName: 'NounsDAO',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Opening Party: Faith Connexion & Blond:ish',
                        location: 'Independent',
                        url: '#'
                    }
                ],
                '16': [
                    {
                        eventName: 'Sustainability & Fashion',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                    {
                        eventName: 'The Metaverse Travel Agency',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                ],
                '17': null,
                '18': null,
                '19': [
                    {
                        eventName: 'Gary McQueen',
                        location: 'Independent',
                        url: '#'
                    },
                    {
                        eventName: 'The Fabricant Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Metaparty Community Area',
                        url: '#'
                    }
                ],
                '20': [
                    {
                        eventName: 'Dundas (UNXD) Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
                '21': [
                    {
                        eventName: 'After Party',
                        location: 'Kolectiff Catwalk',
                        url: '#'
                    },
                    {
                        eventName: 'Interview with Parcel',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                    {
                        eventName: 'The History & Future of Virtual Fashion',
                        location: 'Cash Labs Space',
                        url: '#'
                    },
                ],
                '22': [
                    {
                        eventName: 'UNXD - Auroboros Closing Party',
                        location: 'UNXD Luxury District',
                        url: '#'
                    },
                ],
                '23': [
                    {
                        eventName: 'Interview with Fansoid',
                        location: 'Metaparty Community Area',
                        url: '#'
                    },
                ],
            }
        }
    ];

	return (
		<>
			<Head>
				<title>Metaverse Fashion Week | Decentraland</title>
				<meta name="description" content="Get a front row seat at the catwalk" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<StyledHome>
                <header>
					<Navbar dataAos="fade-down" />
                </header>
				<main>
                    <Container size="large" flexDirection="column">
                        <h1>FULL SCHEDULE</h1>
                        <section className="full-schedule">
                            <div className="schedule-header">
                                <div className="time-column-header"/>
                                <div className="dates">
                                    {Schedule.map((day, key) => (
                                        <div className="day-column-header">
                                            {day.dateName}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="schedule-body">
                                {timeslots.map((timeslot, key) => (
                                    <div key="key" className="hour-row">
                                        <div className="time">
                                            {timeslot}pm
                                        </div>
                                        <div className="events">
                                            {Schedule.map((day, key) => (
                                                <div className={'timeslot-events'} key={key}>
                                                    {day.timeslots[timeslot] && 
                                                    day.timeslots[timeslot].map((event, key) => (
                                                        <div key={key} className={`event ${event.location.replaceAll(' ', '-')}`}>
                                                            <strong className="event-name">
                                                                {event.eventName}
                                                            </strong>
                                                            <span className="event-location">
                                                                {event.location}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                            {/* {Schedule.map((day, key) => {
                                                console.log(day.timeslots[timeslot]);
                                                return ('')
                                            })} */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </Container>
				</main>
			</StyledHome>

			<Footer/>
		</>
	)
}

const StyledHome = styled.main`
	overflow-x: hidden;
    display: flex;
    flex-direction: column;
	header {
		display: flex;
		flex-direction: column;
		/* margin-bottom: 320px; */
		padding-top: 120px;
	}
    main {
        h1 {
            font-size: 80px;
            text-align: center;
        }
        .full-schedule {
            margin-top: 40px;
            margin-bottom: 80px;
            .schedule-header {
                display: flex;
                height: 40px;
                line-height: 40px;
                .time-column-header {
                    width: 100px;
                    /* background: black; */
                }
                .dates {
                    display: flex;
                    flex-grow: 1;
                    .day-column-header {
                        flex-grow: 1;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Inter;
                        font-size: 12px;
                        opacity: 0.7;
                    }
                }

            }
            .hour-row {
                display: flex;
                &:nth-child(even) {
                    .time {
                        /* background: ${(props) => (props.theme.color.darkRed)}; */
                    }
                    .events {
                        /* background: whitesmoke; */
                    }
                }
                .time {
                    min-width: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    /* background: ${(props) => (props.theme.color.red)}; */
                    color:  ${(props) => (props.theme.color.black)};
                    font-size: 24px;
                    font-family: Inter;
                    font-weight: 600;
                    position: relative;
                    top: -16px;
                    /* border-right: 1px solid lightgray; */
                    &:after {
                        content: '';
                        position: absolute;
                        top: 10px;
                        right: -6px;
                        width: 12px;
                        height: 12px;
                        background: white;
                        border-radius: 10px;
                        border: 1px solid ${props => props.theme.color.red};
                    }
                }
                .events {
                    padding: 24px 0;
                    display: flex;
                    flex-grow: 1;
                    border-top: 1px dashed lightgray;
                    .timeslot-events {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding: 8px;
                        .event {
                            min-width: 25%;
                            padding: 12px;
                            font-family: Inter;
                            border: 1px solid lightgray;
                            margin-bottom: 8px;
                            display: flex;
                            flex-direction: column;
                            border-bottom: 3px solid gray;
                            &.Boson-Portal {
                                border-bottom-color: #06F9A7;
                            }
                            &.Metaparty-Community-Area {
                                border-bottom-color: #FF0000;
                            }
                            &.Dragon-City {
                                border-bottom-color: #7D32FF;
                            }
                            &.Kolectiff-Catwalk {
                                border-bottom-color: #D2553C;
                            }
                            &.Rarible {
                                border-bottom-color: #FDDA02;
                            }
                            &.Cash-Labs-Space {
                                border-bottom-color: #E6A3B8;
                            }
                            &.MetaTokyo-Zone {
                                border-bottom-color: #C8C9C9;
                            }
                            &.Independent {
                                border-bottom-color: #7795FF;
                            }
                            &.UNXD-Luxury-District {
                                border-bottom-color: #FE8B21;
                            }
                            &.Threedium-Mall {
                                border-bottom-color: #2E7E97;
                            }
                            .event-name {
                                font-size: 16px;
                                font-weight: 600;
                            }
                            .event-location {
                                margin-top: 8px;
                                font-size: 12px;
                                opacity: 0.6;
                            }
                            
                            /* box-shadow: 0 0 12px rgba(0,0,0,0.2); */
                            /* border-radius: 3px; */
                        }
                    }
                }
            }
        }
    }
	@media screen and (max-width: ${props => props.theme.breakpoints.m}) {

	}
`;