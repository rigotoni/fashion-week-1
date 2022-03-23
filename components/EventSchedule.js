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
                },
                {
                    time: '01:00 PM GMT',
                    name: 'MetaTokyo Zone Opening',
                    stage: 'MetaTokyo Zone',
                },
                {
                    time: '02:00 PM GMT',
                    name: 'MVFW Fashion Design Exhibition',
                    stage: 'Dragon City',
                },
                {
                    time: '02:00 PM GMT',
                    name: '#DragonStyle Selfie Contest',
                    stage: 'Dragon City',
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Known Origin Exhibition + DJ Set 6pm GMT',
                    stage: 'Independent',
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Enter the Metaverse; Dressing our Avatars',
                    stage: 'Cash Labs Space',
                },
                {
                    time: '04:00 PM GMT',
                    name: 'UNXD Luxury District Opening',
                    stage: 'UNXD Luxury District',
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Catwalk: Perry Ellis',
                    stage: 'Kolectiff Catwalk',
                },
                {
                    time: '03:30 PM GMT',
                    name: 'Catwalk: IKKS',
                    stage: 'Kolectiff Catwalk',
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Christine Massarany',
                    stage: 'Kolectiff Catwalk',
                },
                {
                    time: '04:00 PM GMT',
                    name: 'UNXD Luxury District Opening',
                    stage: 'UNXD Luxury District',
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Dolce&Gabbana +UNXD Opening Party',
                    stage: 'UNXD Luxury District',
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Rarible Fresh Drip Zone',
                    stage: 'Rarible',
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Fashion on Film; Consuming Fashion Virtually',
                    stage: 'Cash Labs Space',
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Phillip Plein Runway + Night Party',
                    stage: 'UNXD Luxury District',
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Parcel-MetaParty Community Precinct Opening',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Acura (car brand) with playlist',
                    stage: 'Kolectiff Catwalk',
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Body Architecture',
                    stage: 'Cash Labs Space',
                },
                {
                    time: '10:00 PM GMT',
                    name: 'Interview with Michi Todd',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '11:00 PM GMT',
                    name: 'Interview with DecentralWear // 10:40pm UTC: Mike Salvis 10 minute comedy set',
                    stage: 'Parcel-Metaparty Community Precint',
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
                    stage: 'Boson Portal'
                },
                {
                    time: '01:00 PM GMT',
                    name: 'Panel Talk: NFTs with Superpowers',
                    stage: 'Boson Portal'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Ecommerce & The Metaverse',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Etro (UNXD) Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'MTA X DressX',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '03:30 PM GMT',
                    name: 'Anrealage',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Panel Talk: Fireside chat with Mr Tommy Hilfiger',
                    stage: 'Boson Portal'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'Creating Fashion outside the confines of Reality',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '04:00 PM GMT',
                    name: '8SIAN',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Threedium Mall Opening',
                    stage: 'Threedium Mall'
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Placebo Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Boson Portal Opening',
                    stage: 'Boson Portal'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Boson Portal Opening',
                    stage: 'Parcel-Metaparty Community Precint'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Closing Party Tribute Brand + ICYKOF',
                    stage: 'Independent'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'After Party',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Charlie Cohen\'s Electrict City powered by Yahoo',
                    stage: 'Independent'
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
                    stage: 'Dragon City'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Phygital Fashion',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Catwalk Night',
                    stage: 'Dragon City'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Cider',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Virtual Couture; Digitizing High Fashion',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'The Rebels',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '05:00 PM GMT',
                    name: 'Vogu & Hype Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '06:00 PM GMT',
                    name: 'Fresh Couture Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Opening Party Hogan/Exclusible (Bob Sinclair)',
                    stage: 'Independent'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Creating Fashion Imagery',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Interview with Parcel',
                    stage: 'Parcel-Metaparty Community Precint'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Wearables Competition Winners Catwalk Show',
                    stage: 'Parcel-Metaparty Community Precint'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'Nicki Nicole After Party',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '10:00 PM GMT',
                    name: 'Interview with Yanniks',
                    stage: 'Parcel-Metaparty Community Precint'
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
                    stage: 'Dragon City'
                },
                {
                    time: '02:00 PM GMT',
                    name: 'Estée Lauder',
                    stage: 'Independent'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'NounsDAO',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '03:00 PM GMT',
                    name: 'Opening Party: Faith Connexion & Blond:ish',
                    stage: 'Independent'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'Sustainability & Fashion',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '04:00 PM GMT',
                    name: 'The Metaverse Travel Agency',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'Gary McQueen',
                    stage: 'Independent'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'The Fabricant Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '07:00 PM GMT',
                    name: 'The Fabricant Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '07:30 PM GMT',
                    name: 'Mini Games',
                    stage: 'Parcel-Metaparty Community Precint',
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Dundas (UNXD) Catwalk Show',
                    stage: 'UNXD Luxury District'
                },
                {
                    time: '08:00 PM GMT',
                    name: 'Music, Performances & Introduction',
                    stage: 'Parcel-Metaparty Community Precint'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'After Party',
                    stage: 'Kolectiff Catwalk'
                },
                {
                    time: '09:00 PM GMT',
                    name: 'The History & Future of Virtual Fashion',
                    stage: 'Cash Labs Space'
                },
                {
                    time: '10:00 PM GMT',
                    name: 'UNXD - Auroboros Closing Party',
                    stage: 'Independent'
                },
                {
                    time: '11:00 PM GMT',
                    name: 'Interview with Fansoid',
                    stage: 'Parcel-Metaparty Community Precint'
                },
            ]   
        }
    ],
}

const EventSchedule = props => {

    const [selectedDay, setSelectedDay] = useState(0);

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