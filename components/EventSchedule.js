import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import DaySelector from './DaySelector';
import DayEvents from './DayEvents';
import CTA from './CTA';

const scheduleData = {
    'DAY 1': [
        {
            events: [
                {
                    time: '03:00 PM',
                    name: 'Parcel Competition',
                    stage: 'MetaParty',
                },
                {
                    time: '05:00 PM',
                    name: 'Selfridges Opening',
                    stage: 'Independent Stores',
                },
                {
                    time: '07:00 PM',
                    name: 'NRT1-META DCL Sneakers',
                    stage: 'Independent Stores',
                },
                {
                    time: '09:00 PM',
                    name: 'CashLabs + Panel Talks overview',
                    stage: 'CashLabs',
                },
                {
                    time: '11:00 PM',
                    name: 'Introducing Sophia The Robot',
                    stage: 'Luxury Area',
                },
                {
                    time: '00:00 AM',
                    name: 'D-CAVE',
                    stage: 'Independent Stores',
                },
            ]   
        }
    ],
    'DAY 2': [
        {
            events: [
                {
                    time: '01:00 PM',
                    name: 'MetaTokyo Zone Opening',
                    stage: 'MetaTokyo',
                },
                {
                    time: '02:00 PM',
                    name: 'Known Origin Exhibition + DJ Set 6pm GMT',
                    stage: 'Independent Stores',
                },
                {
                    time: '03:00 PM',
                    name: 'Enter the Metaverse; Dressing our Avatars',
                    stage: 'CashLabs',
                },
                {
                    time: '04:00 PM',
                    name: 'UNXD Luxury District Opening',
                    stage: 'Luxury Area',
                },
                {
                    time: '05:00 PM',
                    name: 'D&G Catwalk',
                    stage: 'Luxury Area',
                },
                {
                    time: '06:00 PM',
                    name: 'Rarible Fresh Drip Zone',
                    stage: 'Rarible',
                },
                {
                    time: '07:00 PM',
                    name: 'Fashion on Film; Consuming Fashion Virtually',
                    stage: 'CashLabs',
                },
                {
                    time: '08:00 PM',
                    name: 'Phillip Plein Runway + Night Party',
                    stage: 'Luxury Area',
                },
                {
                    time: '09:00 PM',
                    name: 'Body Architecture',
                    stage: 'CashLabs',
                },
                {
                    time: '10:00 PM',
                    name: 'Metaparty Community Fashion Zone',
                    stage: 'MetaParty',
                },
            ]   
        }
    ],
    'DAY 3': [
        {
            events: [
                {
                    time: '02:00 PM',
                    name: 'Ecommerce & The Metaverse',
                    stage: 'CashLabs'
                },
                {
                    time: '03:00 PM',
                    name: 'Etro (UNXD) Catwalk Show',
                    stage: 'CashLabs'
                },
                {
                    time: '04:00 PM',
                    name: 'Creating Fashion outside the confines of Reality',
                    stage: 'Luxury Area'
                },
                {
                    time: '05:00 PM',
                    name: 'Threedium Mall Opening',
                    stage: 'Threedium'
                },
                {
                    time: '06:00 PM',
                    name: 'Dundas (UNXD) Catwalk Show',
                    stage: 'Luxury Area'
                },
                {
                    time: '07:00 PM',
                    name: 'Kollectiff Catwalk Opening',
                    stage: 'Kollectiff'
                },
                {
                    time: '08:00 PM',
                    name: 'Boson Portal Opening',
                    stage: 'Boson Protocol'
                },
                {
                    time: '09:00 PM',
                    name: 'Closing Party Tribute Brand + ICYKOF',
                    stage: 'Independent Stores'
                },
                {
                    time: '10:00 PM',
                    name: 'Charlie Cohen\'s Electrict City powered by Yahoo',
                    stage: 'Independent Stores'
                },
            ]   
        }
    ],
    'DAY 4': [
        {
            events: [
                {
                    time: '01:00 PM',
                    name: 'Dragon City',
                    stage: 'Dragon City'
                },
                {
                    time: '02:00 PM',
                    name: 'Phygital Fashion',
                    stage: 'CashLabs'
                },
                {
                    time: '03:00 PM',
                    name: 'Virtual Couture; Digitizing High Fashion',
                    stage: 'CashLabs'
                },
                {
                    time: '05:00 PM',
                    name: 'Fresh Couture Catwalk Show',
                    stage: 'Luxury Area'
                },
                {
                    time: '06:00 PM',
                    name: 'Placebo Show',
                    stage: 'Luxury Area'
                },
                {
                    time: '07:00 PM',
                    name: 'Opening Party Hogan/Exclusible (Bob Sinclair)',
                    stage: 'Independent Stores'
                },
                {
                    time: '08:00 PM',
                    name: 'Sustainability & Fashion',
                    stage: 'CashLabs'
                },
                {
                    time: '09:00 PM',
                    name: 'Closing Party: Nicki Nicole ',
                    stage: 'Independent Stores'
                },
            ]   
        }
    ],
    'DAY 5': [
        {
            events: [
                {
                    time: '03:00 PM',
                    name: 'Estée Lauder',
                    stage: 'Independent Stores'
                },
                {
                    time: '03:00 PM',
                    name: 'Opening Party: Faith Connexion & Blond:ish ',
                    stage: 'Independent Stores'
                },
                {
                    time: '04:00 PM',
                    name: 'The History & Future of Virtual Fashion',
                    stage: 'CashLabs'
                },
                {
                    time: '05:00 PM',
                    name: 'Vogu & Hype Catwalk Show',
                    stage: 'Luxury Area'
                },
                {
                    time: '06:00 PM',
                    name: 'The Fabricant Show',
                    stage: 'Luxury Area'
                },
                {
                    time: '07:00 PM',
                    name: 'FOREVER 21',
                    stage: 'Independent Stores'
                },
                {
                    time: '08:00 PM',
                    name: 'MSFTS',
                    stage: 'Independent Stores'
                },
                {
                    time: '09:00 PM',
                    name: 'PangeaDAO',
                    stage: 'Independent Stores'
                },
                {
                    time: '10:00 PM',
                    name: 'UNXD - Auroboros closing party',
                    stage: 'Luxury Area'
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
                        {/* <span className="full-schedule-link">
                            <Link href="/full-schedule" >
                            </Link>
                        </span> */}
                    </div>
                    <div className="full-date-area">
                        <span className="full-date">
                            {selectedDay === 1 && 'MARCH 23'}
                            {selectedDay === 2 && 'MARCH 24'}
                            {selectedDay === 3 && 'MARCH 25'}
                            {selectedDay === 4 && 'MARCH 26'}
                            {selectedDay === 5 && 'MARCH 27'}
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
                .day-selector {
                    top: 0;
                    left: 0;
                }
                .full-date {
                    letter-spacing: 0.05em;
                    left: 0;
                    font-size: 64px;
                    margin-top: 40px;
                }
            }
        }
    }
`;

export default EventSchedule;