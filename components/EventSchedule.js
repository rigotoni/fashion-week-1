import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import DaySelector from './DaySelector';
import DayEvents from './DayEvents';
import CTA from './CTA';

const scheduleData = {
    'DAY 0': [
        {
            events: [
                {
                    time: '09:00 PM GMT',
                    name: 'Selfridges Opening',
                    stage: 'Independent',
                    url: 'https://play.decentraland.org/?island=Iayf&position=63%2C15'
                },
            ]   
        }
    ],
    'DAY 1': [
        {
            events: [
                {
                    time: '01:00 PM GMT',
                    name: 'Panel Talk: Future of Commerce / Decentralizing Commerce',
                    stage: 'Boson Portal',
                    url: null
                },
                {
                    time: '01:00 PM GMT',
                    name: 'MetaTokyo Zone Opening',
                    stage: 'MetaTokyo Zone',
                    url: 'https://events.decentraland.org/event/?id=e95c5ce9-ca0e-46de-8bb2-4cecd875879a'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'MVFW Fashion Design Exhibition',
                    stage: 'Dragon City',
                    url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                },
                {
                    time: '02:00 PM GMT',
                    name: '#DragonStyle Selfie Contest',
                    stage: 'Dragon City',
                    url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Known Origin Exhibition + DJ Set 6pm GMT',
                    stage: 'Independent',
                    url: null
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Enter the Metaverse; Dressing our Avatars',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=c612baa2-e0f0-40fa-a1b5-c2ee6ab216c3'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'UNXD Luxury District Opening',
                    stage: 'UNXD Luxury District',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Catwalk: Perry Ellis',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '03:30 PM GMT',
                    name: 'Catwalk: IKKS',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Christine Massarany',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '04:00 PM GMT',
                    name: 'UNXD Luxury District Opening',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=60a6ddef-b6fc-49f1-9b6f-0cb3fc868c13'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'Welcome to MVFW with Cathy Hackl ',
                    stage: 'Threedium Mall',
                    url: 'https://events.decentraland.org/event/?id=bdb9a5bd-2323-40d7-8a06-966446d7879a'
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Dolce&Gabbana +UNXD Catwalk',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=8f2902ca-8e1b-4d79-a145-403ebc52fb14'
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Rarible Fresh Drip Zone',
                    stage: 'Rarible',
                    url: 'https://events.decentraland.org/event/?id=6b7ffb70-5844-4a9a-992e-8e1933346501'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Fashion on Film; Consuming Fashion Virtually',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=201a9d30-8c27-4bdc-8117-e6ba6f1d0f4c'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Phillip Plein Runway + Night Party',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=d4203ca5-3eb0-43eb-8957-e9f1a8300cab'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Parcel-MetaParty Community Precinct Opening',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: 'https://events.decentraland.org/event/?id=f4896eac-7265-4874-8280-2e5a14c6db3d'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Acura (car brand) with playlist',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Body Architecture',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=3e0e806f-6427-4844-957e-6e7eb19e7a41'
                },
                {
                    time: '10:00 PM GMT',
                    name: 'Interview with Michi Todd',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '11:00 PM GMT',
                    name: 'Interview with DecentralWear // 10:40pm UTC: Mike Salvis 10 minute comedy set',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
            ]   
        }
    ],
    'DAY 2': [
        {
            events: [
                {
                    time: '01:00 PM GMT',
                    name: 'Panel Talk: Metaverse Fashion: Digital to Physical ',
                    stage: 'Boson Portal',
                    url: null
                },
                {
                    time: '01:00 PM GMT',
                    name: 'Panel Talk: NFTs with Superpowers',
                    stage: 'Boson Portal',
                    url: null
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Ecommerce & The Metaverse',
                    stage: 'Cash Labs Space',
                    url: 'https://play.decentraland.org/?position=95%2C-117'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Metaloop Day 2 Catwalk: MTA X DressX | The Rebels | Dazzle (2 PM)e',
                    stage: 'Kollectiff Catwalk ',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Etro (UNXD) Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=9b51d275-e4c5-411d-8ceb-33d36a4ff410'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'MTA X DressX',
                    stage: 'UNXD Luxury District',
                    url: null
                },
                {
                    time: '03:30 PM GMT',
                    name: 'Anrealage',
                    stage: 'UNXD Luxury District',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Panel Talk: Fireside chat with Mr Tommy Hilfiger',
                    stage: 'Boson Portal',
                    url: null
                },
                {
                    time: '04:00 PM GMT',
                    name: 'Creating Fashion outside the confines of Reality',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=847bcbff-a9c7-4ded-a2db-4da04d4bb23e'
                },
                {
                    time: '04:00 PM GMT',
                    name: '8SIAN',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Threedium Mall Opening',
                    stage: 'Threedium Mall',
                    url: 'https://events.decentraland.org/event/?id=19fdd27a-fe9f-4858-8f8a-7151ea6d64b0'
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Placebo Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=17480173-5845-4ec7-85ef-2674e14ae526'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Kollectiff Catwalk Opening',
                    stage: 'Kollectiff Catwalk',
                    url: 'https://events.decentraland.org/event/?id=e11f9120-f533-4f74-98ca-e013058e271b'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Boson Portal Opening',
                    stage: 'Boson Portal',
                    url: 'https://events.decentraland.org/event/?id=7877d896-b94b-4d71-aa19-758d28561a34'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Boson Portal Opening',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Closing Party Tribute Brand + ICYKOF',
                    stage: 'Independent',
                    url: 'https://events.decentraland.org/event/?id=5079ea6f-247b-46ca-964b-f42567a78491'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'After Party',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'The Initiation: a Charli Cohen x RSTLSS Experience, presented by Yahoo ',
                    stage: 'Independent',
                    url: 'https://events.decentraland.org/event/?id=c245a2f2-9c5c-4d41-a68a-274c353dac24'
                },
            ]   
        }
    ],
    'DAY 3': [
        {
            events: [
                {
                    time: '01:00 PM GMT',
                    name: 'Opening',
                    stage: 'Dragon City',
                    url: 'https://play.decentraland.org/?position=95%2C-117'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Phygital Fashion',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=addb3915-38da-47c7-9019-ef290a68fb85'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Dragon City Catwalk Night',
                    stage: 'Dragon City',
                    url: 'https://events.decentraland.org/event/?id=4e63909a-c44f-45c5-9ae5-6b914d23eb0c'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Cider',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Virtual Couture; Digitizing High Fashion',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=e1ce4cec-05a6-4877-96c7-45134a4bb2ed'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'The Rebels',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Vogu & Hype Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=28719fea-18ab-49be-b9f4-2c807d0e9a1d'
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Fresh Couture Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=ee01342e-b5eb-48a6-b2de-8e4eefcff89e'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Opening Party Hogan/Exclusible (Bob Sinclair)',
                    stage: 'Independent',
                    url: 'https://events.decentraland.org/event/?id=78fb2393-5eaf-4d65-8dc5-b74245d4d0eb'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Creating Fashion Imagery',
                    stage: 'Cash Labs Space',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Interview with Parcel',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Wearables Competition Winners Catwalk Show',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Nicki Nicole After Party',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '10:00 PM GMT',
                    name: 'Interview with Yanniks',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
            ]   
        }
    ],
    'DAY 4': [
        {
            events: [
                {
                    time: '02:00 PM GMT',
                    name: 'MetaJam Award Ceremony',
                    stage: 'Dragon City',
                    url: 'https://events.decentraland.org/event/?id=a65cddd1-73f8-487d-95c5-7090dd379b9a'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Estée Lauder',
                    stage: 'Independent',
                    url: 'https://events.decentraland.org/event/?id=4fa07fa0-61e1-4415-a01c-9172896ac138'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'NounsDAO',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Opening Party: Faith Connexion & Blond:ish',
                    stage: 'Independent',
                    url: 'https://events.decentraland.org/event/?id=602430cf-ec89-4017-b4fb-900b9d184072'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'Sustainability & Fashion',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=8826165a-cb06-4ab1-b361-bebe3ab2bf30'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'The Metaverse Travel Agency',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Gary McQueen',
                    stage: 'Independent',
                    url: null
                },
                {
                    time: '07:00 PM GMT',
                    name: 'The Fabricant Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: null
                },
                {
                    time: '07:00 PM GMT',
                    name: 'The Fabricant Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=2207a1e3-c793-4110-ac27-1bf2d6b9ddce'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Dundas (UNXD) Catwalk Show',
                    stage: 'UNXD Luxury District',
                    url: 'https://events.decentraland.org/event/?id=d10f2212-554a-4ac6-b822-961aa6d9a045'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Music, Performances & Introduction',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'After Party',
                    stage: 'Kolectiff Catwalk',
                    url: null
                },
                {
                    time: '09:00 PM GMT',
                    name: 'The History & Future of Virtual Fashion',
                    stage: 'Cash Labs Space',
                    url: 'https://events.decentraland.org/event/?id=49488809-253b-4736-a056-d35c13504eb8'
                },
                {
                    time: '10:00 PM GMT',
                    name: 'UNXD - Auroboros Closing Party',
                    stage: 'Independent',
                    url: null
                },
                {
                    time: '11:00 PM GMT',
                    name: 'Interview with Fansoid',
                    stage: 'Parcel-Metaparty Community Precinct',
                    url: null
                },
            ]   
        }
    ],
}

const EventSchedule = props => {

    const [selectedDay, setSelectedDay] = useState(1);

    return (
        <StyledEventSchedule size="full" flexDirection="column" className="schedule-info" id="full-schedule">
            <Container 
                className="schedule-container"  
                size="large"
                flexDirection="column"
                >
                <section className="schedule-header">
                    <h2>AGENDA</h2>
                    <div className="day-selector-area">
                        <DaySelector 
                            selectedDay={selectedDay} 
                            setSelectedDay={setSelectedDay} 
                        />
                    </div>
                    <div className="full-date-area">
                        <span className="full-date">
                            {selectedDay === 0 && 'MARCH 23'}
                            {selectedDay === 1 && 'MARCH 24'}
                            {selectedDay === 2 && 'MARCH 25'}
                            {selectedDay === 3 && 'MARCH 26'}
                            {selectedDay === 4 && 'MARCH 27'}
                        </span>
                        <CTA href="/full-schedule">
                                View full schedule
                        </CTA>
                    </div>
                </section>
                <DayEvents selectedDayData={scheduleData['DAY ' + selectedDay]}/>
            </Container>
        </StyledEventSchedule>
    )
}

const StyledEventSchedule = styled(Container)`
    background: ${props => props.theme.color.gray200};
    .schedule-container {
        padding: 136px 0;
        position: relative;
        .schedule-header {
            display: flex;
            flex-direction: column;
            .day-selector-area {
                display: flex;
                width: 100%;
                top: -11px;
                left: 120px;
                position: relative;
                align-items: flex-end;
                .full-schedule-link {
                    font-family: Inter;
                }
                
            }
            .full-date-area {
                position: relative;
                top: 0px;
                left: 120px;
                display: flex;
                align-items: center;
                .cta {
                    height: 84px;
                    /* padding: 0 16px; */
                    /* line-height: 80px; */
                    margin-left: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    position: relative;
                    top: -2px;
                }
                .full-date {
                    font-size: 116px;
                    color: ${props => props.theme.color.red};
                    min-width: 400px;
                }
            }
            h2 {
                font-size: 120px;
                line-height: 68px;
                letter-spacing: 0.1em;
                color: ${props => props.theme.color.gray900};
                padding-left: 120px;
                margin-bottom: 20px;
                position: absolute;
                transform: rotate(-90deg) translate(-264px, -280px);
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        .schedule-container {
            padding: 40px 0;
            .schedule-header {
                h2 {
                    font-size: 48px;
                    position: relative;
                    padding-left: 0;
                    transform: unset;
                }
                .day-selector-area {
                    left: 0;
                    .day-selector {
                        top: 0;
                        left: 0;
                    }
                }
                .full-date-area {
                    left: 0;
                    flex-direction: column;
                    align-items: unset;
                    .full-date {
                        letter-spacing: 0.05em;
                        left: 0;
                        font-size: 64px;
                        margin-top: 0px;
                    }
                    .cta {
                        margin-left: 0;
                        font-size: 22px;
                        width: 100%;
                        height: 40px;
                    }
                }
            }
        }
    }
`;

export default EventSchedule;