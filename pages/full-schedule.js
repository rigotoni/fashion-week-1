import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';

import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Event = (props) => {
    return (
        <div className={`event ${props.event.location.replaceAll(' ', '-')} ${props.event.url ? 'has-link' : ''}`}>
            {/* <div>{props.event.url ? 'true' : 'false'}</div> */}
            <strong className="event-name">
                {props.event.eventName}
            </strong>
            <span className="event-location">
                {props.event.location}
            </span>
            {props.event.url && (
                <div className="event-footer">
                    <a className="event-info" href={props.event.url} target="_blank" rel="noreferrer">
                        Click for More Info
                    </a>
                </div>
            )}
        </div>
    )
}

export default function Home() {

	useEffect(() => {
		Aos.init();
		new Rellax('.rellax', {
			speed: -2,
			center: true,


		});
	}, []);

    let timeslots = [
        '12pm',
        '12:30pm',
        '13pm',
        '14pm',
        '15pm',
        '16pm',
        '17pm',
        '18pm',
        '19pm',
        '20pm',
        '21pm',
        '22pm',
        '23pm',
    ]

    const Schedule = [
        {
            dateName: 'Wednesday 23rd March',
            timeslots: {
                '13pm': null,
                '14pm': null,
                '15pm': null,
                '16pm': null,
                '17pm': null,
                '18pm': null,
                '19pm': null,
                '20pm': null,
                '21pm': [
                    {
                        eventName: 'Selfridges Opening',
                        location: 'Independent',
                        url: 'https://play.decentraland.org/?island=Iayf&position=63%2C15'
                    }
                ],
                '22pm': null,
                '23pm': null,
            }
        },
        {
            dateName: 'Thursday 24th March',
            timeslots: {
                '13pm': [
                    {
                        eventName: 'Panel Talk: Future of Commerce / Decentralizing Commerce',
                        location: 'Boson Portal',
                        url: null
                    },
                    {
                        eventName: 'MetaTokyo Zone Opening',
                        location: 'MetaTokyo Zone',
                        url: 'https://events.decentraland.org/event/?id=e95c5ce9-ca0e-46de-8bb2-4cecd875879a'
                    }
                ],
                '14pm': [
                    {
                        eventName: 'MVFW Fashion Design Exhibition ',
                        location: 'Dragon City',
                        url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                    },
                    {
                        eventName: '#DragonStyle Selfie Contest',
                        location: 'Dragon City',
                        url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                    },
                    {
                        eventName: 'Known Origin Exhibition + DJ Set 6pm GMT',
                        location: 'Independent',
                        url: null
                    },
                    {
                        eventName: 'Enter the Metaverse; Dressing our Avatars',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=c612baa2-e0f0-40fa-a1b5-c2ee6ab216c3'
                    },
                ],
                '15pm': [
                    {
                        eventName: 'Metaloop Day 1 Catwalk: Perry Ellis  | IKKS | Christine Massarany  (2PM )',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=c612baa2-e0f0-40fa-a1b5-c2ee6ab216c3'
                    },
                    {
                        eventName: 'Catwalk: Perry Ellis 15:00  / IKKS 15:30',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Christine Massarany',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '16pm': [
                    {
                        eventName: 'UNXD Luxury District Opening',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=60a6ddef-b6fc-49f1-9b6f-0cb3fc868c13'
                    },
                    {
                        eventName: 'Welcome to MVFW with Cathy Hackl',
                        location: 'Threedium Mall',
                        url: 'https://events.decentraland.org/event/?id=bdb9a5bd-2323-40d7-8a06-966446d7879a'
                    },
                ],
                '17pm': [
                    {
                        eventName: 'Dolce&Gabbana +UNXD Catwalk',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=8f2902ca-8e1b-4d79-a145-403ebc52fb14'
                    },
                ],
                '18pm': [
                    {
                        eventName: 'Rarible Fresh Drip Opening',
                        location: 'Rarible',
                        url: 'https://events.decentraland.org/event/?id=6b7ffb70-5844-4a9a-992e-8e1933346501'
                    },
                ],
                '19': [
                    {
                        eventName: 'Fashion on Film; Consuming Fashion Virtually',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=201a9d30-8c27-4bdc-8117-e6ba6f1d0f4c'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '20pm': [
                    {
                        eventName: 'Phillip Plein Runway + Night Party',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=d4203ca5-3eb0-43eb-8957-e9f1a8300cab'
                    },
                    {
                        eventName: 'Parcel-MetaParty Community Precinct Opening',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: 'https://events.decentraland.org/event/?id=f4896eac-7265-4874-8280-2e5a14c6db3d'
                    },
                ],
                '21pm': [
                    {
                        eventName: 'Acura (car brand) with playlist ',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Body Architecture',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=3e0e806f-6427-4844-957e-6e7eb19e7a41'
                    },
                ],
                '22pm': [
                    {
                        eventName: 'Interview with Michi Todd',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '23pm': [
                    {
                        eventName: 'Interview with DecentralWear // 10:40pm UTC: Mike Salvis 10 minute comedy set',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    }
                ]
            }
        },
        {
            dateName: 'Friday 25th March',
            timeslots: {
                '12pm': [
                    {
                        eventName: 'Metaverse Fashion: Digital to Physical',
                        location: 'Boson Portal',
                        url: 'https://events.decentraland.org/event/?id=905daf24-e5b7-4d11-a1b0-d0754d1171b1'
                    }
                ],
                '12:30pm': [
                    {
                        eventName: 'Opening Panel Talk: Alexandre de Betak + David Cash',
                        location: 'Cash Labs Space',
                        url: 'Opening  Panel Talk: Alexandre de Betak + David Cash'
                    }
                ],
                '13pm': [
                    {
                        eventName: 'Panel Talk: Enter the Metaverse; Dressing our Avatars',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=49488809-253b-4736-a056-d35c13504eb8'
                    }
                ],
                '14pm': [
                    {
                        eventName: 'Panel Talk: NFTs with Superpowers ',
                        location: 'Boson Portal',
                        url: null
                    },
                    {
                        eventName: 'Ecommerce & The Metaverse',
                        location: 'Cash Labs Space',
                        url: 'https://play.decentraland.org/?position=95%2C-117'
                    },
                    {
                        eventName: 'Metaloop Day 2 Catwalk: MTA X DressX | The Rebels | Dazzle (2pm)',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Panel Talk: Fireside chat with Mr Tommy Hilfiger',
                        location: 'Boson Portal',
                        url: 'https://events.decentraland.org/event/?id=905daf24-e5b7-4d11-a1b0-d0754d1171b1'
                    }
                ],
                '15pm': [
                    {
                        eventName: 'Etro (UNXD) Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=9b51d275-e4c5-411d-8ceb-33d36a4ff410'
                    },
                    {
                        eventName: 'MTA X DressX 15:00 / Anrealage 15:30',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '16pm': [
                    {
                        eventName: 'Creating Fashion outside the confines of Reality',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=847bcbff-a9c7-4ded-a2db-4da04d4bb23e'
                    },
                    {
                        eventName: '8SIAN',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '17pm': [
                    {
                        eventName: 'Film Session',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=905daf24-e5b7-4d11-a1b0-d0754d1171b1'
                    },
                    {
                        eventName: 'Threedium Mall Opening',
                        location: 'Threedium Mall',
                        url: 'https://events.decentraland.org/event/?id=19fdd27a-fe9f-4858-8f8a-7151ea6d64b0'
                    }
                ],
                '18pm': [
                    {
                        eventName: 'Placebo Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=17480173-5845-4ec7-85ef-2674e14ae526'
                    }
                ],
                '19pm': [
                    {
                        eventName: 'Kollectiff Catwalk Opening',
                        location: 'Kollectiff Catwalk',
                        url: 'https://events.decentraland.org/event/?id=e11f9120-f533-4f74-98ca-e013058e271b'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    }
                ],
                '20pm': [
                    {
                        eventName: 'Boson Portal Opening',
                        location: 'Boson Portal',
                        url: 'https://events.decentraland.org/event/?id=7877d896-b94b-4d71-aa19-758d28561a34'
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '21pm': [
                    {
                        eventName: 'Closing Party Tribute Brand + ICYKOF',
                        location: 'Independent',
                        url: 'https://events.decentraland.org/event/?id=5079ea6f-247b-46ca-964b-f42567a78491'
                    },
                    {
                        eventName: 'After Party',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'The Initiation: a Charli Cohen x RSTLSS Experience, presented by Yahoo ',
                        location: 'Independent',
                        url: 'https://events.decentraland.org/event/?id=c245a2f2-9c5c-4d41-a68a-274c353dac24'
                    },
                ],
                '22pm': null,
                '23pm': null,
            }
        },
        {
            dateName: 'Saturday 26th March',
            timeslots: {
                '13pm': [
                    {
                        eventName: 'Opening',
                        location: 'Dragon City',
                        url: 'https://play.decentraland.org/?position=95%2C-117'
                    },
                    {
                        eventName: 'Digitizing Fashion: A Conversation with Nick Knight',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=ba42ec02-43bc-436d-9799-7bb8098406c7'
                    }
                ],
                '14pm': [
                    {
                        eventName: 'Phygital Fashion',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=addb3915-38da-47c7-9019-ef290a68fb85'
                    },
                    {
                        eventName: 'Metaloop Day 3 Catwalk: Cider | The Rebels | Dazzle',
                        location: 'Kollectiff Catwalk',
                        url: 'https://events.decentraland.org/event/?id=addb3915-38da-47c7-9019-ef290a68fb85'
                    },
                ],
                '15pm': [
                    {
                        eventName: 'Dragon City Catwalk Night',
                        location: 'Dragon City',
                        url: 'https://events.decentraland.org/event/?id=4e63909a-c44f-45c5-9ae5-6b914d23eb0c'
                    },
                    {
                        eventName: 'Cider',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Virtual Couture; Digitizing High Fashion',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=e1ce4cec-05a6-4877-96c7-45134a4bb2ed'
                    }
                ],
                '16pm': [
                    {
                        eventName: 'The Rebels',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '17pm': [
                    {
                        eventName: 'Vogu & Hype Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=28719fea-18ab-49be-b9f4-2c807d0e9a1d'
                    },
                    {
                        eventName: 'Film Session',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=ba42ec02-43bc-436d-9799-7bb8098406c7'
                    }
                ],
                '18pm': [
                    {
                        eventName: 'Fresh Couture Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=ee01342e-b5eb-48a6-b2de-8e4eefcff89e'
                    }
                ],
                '19pm': [
                    {
                        eventName: 'Opening Party Hogan/Exclusible (Bob Sinclair)',
                        location: 'Independent',
                        url: 'https://events.decentraland.org/event/?id=78fb2393-5eaf-4d65-8dc5-b74245d4d0eb'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    }
                ],
                '20pm': [
                    {
                        eventName: 'Creating Fashion Imagery:',
                        location: 'Cash Labs Space',
                        url: null
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '21pm': [
                    {
                        eventName: 'Nicki Nicole After Party',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '22pm': [
                    {
                        eventName: 'Interview with Yanniks',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '23pm': null,
            }
        },
        {
            dateName: 'Sunday 27th March',
            timeslots: {
                '13pm': null,
                '14pm': [
                    {
                        eventName: 'MetaJam Award Ceremony ',
                        location: 'Dragon City',
                        url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                    },
                    {
                        eventName: 'Estée Lauder',
                        location: 'Independent',
                        url: 'https://events.decentraland.org/event/?id=4fa07fa0-61e1-4415-a01c-9172896ac138'
                    },
                ],
                '15pm': [
                    {
                        eventName: 'NounsDAO',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Opening Party: Faith Connexion & Blond:ish',
                        location: 'Independent',
                        url: 'https://events.decentraland.org/event/?id=602430cf-ec89-4017-b4fb-900b9d184072'
                    }
                ],
                '16pm': [
                    {
                        eventName: 'Sustainability & Fashion',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=8826165a-cb06-4ab1-b361-bebe3ab2bf30'
                    },
                    {
                        eventName: 'The Metaverse Travel Agency',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                ],
                '17pm': [
                    {
                        eventName: 'Film Session',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=ba42ec02-43bc-436d-9799-7bb8098406c7'
                    }
                ],
                '18pm': [
                    {
                        eventName: 'Marc-O-Matic x Metakey Metropolis Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=fddca058-748a-4d39-bcd8-d0eeb98bf3d5'
                    }
                ],
                '19pm': [
                    {
                        eventName: 'Gary McQueen',
                        location: 'Independent',
                        url: null
                    },
                    {
                        eventName: 'The Fabricant Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=2207a1e3-c793-4110-ac27-1bf2d6b9ddce'
                    },
                    {
                        eventName: 'Mini Games',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    }
                ],
                '20pm': [
                    {
                        eventName: 'Dundas (UNXD) Catwalk Show',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=d10f2212-554a-4ac6-b822-961aa6d9a045'
                    },
                    {
                        eventName: 'Music, Performances & Introduction',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                ],
                '21pm': [
                    {
                        eventName: 'After Party',
                        location: 'Kollectiff Catwalk',
                        url: null
                    },
                    {
                        eventName: 'Interview with Parcel',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
                    },
                    {
                        eventName: 'The History & Future of Virtual Fashion',
                        location: 'Cash Labs Space',
                        url: 'https://events.decentraland.org/event/?id=49488809-253b-4736-a056-d35c13504eb8'
                    },
                ],
                '22pm': [
                    {
                        eventName: 'Auroboros x Grimes Immersive Experience',
                        location: 'UNXD Luxury District',
                        url: 'https://events.decentraland.org/event/?id=fcfec6c4-74aa-4553-b610-a334562084b4'
                    },
                ],
                '23pm': [
                    {
                        eventName: 'Interview with Fansoid',
                        location: 'Parcel-Metaparty Community Precinct',
                        url: null
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
                        <section className="full-schedule desktop">
                            <div className="schedule-header">
                                <div className="time-column-header"/>
                                <div className="dates">
                                    {Schedule.map((day, key) => (
                                        <div className="day-column-header" key={key}>
                                            {day.dateName}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="schedule-body">
                                {timeslots.map((timeslot, key) => (
                                    <div key={timeslot + key} className="hour-row">
                                        <div className="time">
                                            {timeslot} <br/>GMT
                                        </div>
                                        <div className="events">
                                            {Schedule.map((day, key) => (
                                                <div className={'timeslot-events'} key={day.dateName + key}>
                                                    {day.timeslots[timeslot] && 
                                                    day.timeslots[timeslot].map((event, key) => (
                                                        event.url ? (
                                                            <a key={event.eventName} href="" target="_blank" rel="noreferrer">
                                                                <Event event={event}/>
                                                            </a>
                                                        ) : (
                                                            <Event key={key} event={event}/>
                                                        )
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="full-schedule mobile">
                            {Schedule.map((day, key) => (
                                <>
                                    <div className="schedule-header" key={day.dateName}>
                                        <div className="dates">
                                            <div className="day-column-header">
                                                {day.dateName}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="schedule-body">
                                        {timeslots.map((timeslot) => day.timeslots[timeslot] ? (
                                            <div key={timeslot} className="hour-row">
                                                <div className="time">
                                                    {timeslot} <br/>GMT
                                                </div>
                                                <div className="events">
                                                    <div className="timeslot-events">
                                                        {day.timeslots[timeslot] && 
                                                        day.timeslots[timeslot].map((event, key) => (
                                                            event.url ? (
                                                                <a key={key} href={event.url} target="_blank" rel="noreferrer">
                                                                    <Event event={event}/>
                                                                </a>
                                                            ) : (
                                                                <Event key={key} event={event}/>
                                                            )
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : '')}
                                    </div>
                                </>
                            ))}
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
            letter-spacing: 0.1em;
        }
        .mobile {
            display: none;
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
                }
                .dates {
                    display: flex;
                    flex-grow: 1;
                    justify-content: space-evenly;
                    .day-column-header {
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Inter;
                        font-size: 12px;
                        opacity: 0.7;
                        width: 20%;
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
                    font-size: 16px;
                    font-family: Inter;
                    font-weight: 600;
                    position: relative;
                    top: -24px;
                    text-align: center;
                    /* border-right: 1px solid lightgray; */
                    &:after {
                        content: '';
                        position: absolute;
                        top: 17px;
                        right: -6px;
                        width: 12px;
                        height: 12px;
                        background: white;
                        border-radius: 10px;
                        border: 1px solid ${props => props.theme.color.red};
                    }
                }
                .events {
                    padding: 12px 0;
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
                            transition: 0.15s ease-in-out all;
                            box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                            &.has-link {
                                &:hover {
                                    box-shadow: 0 4px 4px rgba(0,0,0,0.1);
                                    transform: scale(1.05);
                                    .event-info {
                                        color: white;
                                        background: ${props => props.theme.color.red};
                                    }
                                }
                            }
                            &:not(.has-link) {
                                cursor: default;
                            }
                            .event-footer {
                                display: flex;
                                margin-top: 12px;
                                /* align-items: baseline; */
                                .event-info {
                                    font-family: Inter;
                                    font-size: 14px;
                                    height: 32px;
                                    width: 100%;
                                    line-height: 32px;
                                    text-align: center;
                                    background: white;
                                    color: ${props => props.theme.color.red};
                                    border: 1px solid ${props => props.theme.color.red};
                                    border-radius: 2px;
                                    font-size: 24px;
                                    font-weight: 600;
                                    align-items: center;
                                    display: inline-block;
                                    justify-content: center;
                                    font-size: 12px;
                                    padding: 0 16px;
                                    transition: 0.15s ease-in-out all;
                                    max-width: 200px;
                                }
                            }
                            &.Boson-Portal {
                                border-bottom-color: #06F9A7;
                            }
                            &.Parcel-Metaparty-Community-Precinct {
                                border-bottom-color: #FF0000;
                            }
                            &.Dragon-City {
                                border-bottom-color: #7D32FF;
                            }
                            &.Kollectiff-Catwalk {
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
        main {
            h1 {
                font-size: 40px;
                letter-spacing: 0.1em;
            }
            .desktop {
                display: none;
            }
            .mobile {
                display: block;
            }
            .full-schedule {
                flex-direction: column;
                .schedule-header {
                    .dates {
                        width: 100%;
                        .day-column-header {
                            /* background: black; */
                            font-size: 20px;
                            position: relative;
                            white-space: nowrap;
                            color: black !important;
                            opacity: 1;
                            font-weight: 600;
                            padding-left: 72px;
                            padding-bottom: 16px;
                            width: 100%;
                            justify-content: flex-start;
                        }
                    }
                }
                .schedule-body {
                    margin-bottom: 60px;
                    .hour-row {
                        .time {
                            min-width: 60px;
                            font-size: 16px;
                            justify-content: flex-start;
                        }
                    }
                    .events {
                        flex-direction: column;
                        padding: 0;
                    }
                }
            }
        }
	}
`;