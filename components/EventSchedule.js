import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import DaySelector from './DaySelector';
import DayEvents from './DayEvents';

const EventSchedule = props => {

    const [selectedDay, setSelectedDay] = useState(1);
    const scheduleData = {
        'DAY 1': [
            {
                stage: 'THE FUTURE CATWALK',
                events: [
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                ]   
            }
        ],
        'DAY 2': [
            {
                stage: 'EXTREME FASHION LANE',
                events: [
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                ]   
            }
        ],
        'DAY 3': [
            {
                stage: 'THE GREAT CLOTHING WORLD',
                events: [
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                ]   
            }
        ],
        'DAY 4': [
            {
                stage: 'FASHION 3.0',
                events: [
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                    {
                        time: '09:30 - 10:00 AM',
                        name: 'FASHION BRAND'
                    },
                ]   
            }
        ],
    }

    return (
        <StyledEventSchedule size="full" flexDirection="column" className="schedule-info">
            <Container 
                className="schedule-container"  
                size="large"
                flexDirection="column"
                >
                <section className="schedule-header">
                    <h2>SCHEDULE</h2>
                    <DaySelector 
                        selectedDay={selectedDay} 
                        setSelectedDay={setSelectedDay} 
                    />
                    <span className="full-date">
                        {selectedDay === 1 && 'MARCH 24'}
                        {selectedDay === 2 && 'MARCH 25'}
                        {selectedDay === 3 && 'MARCH 26'}
                        {selectedDay === 4 && 'MARCH 27'}
                    </span>
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
            .day-selector {
                position: relative;
                top: -11px;
                left: 120px;
            }
            .full-date {
                margin-left: auto;
                font-size: 116px;
                position: relative;
                top: -40px;
                color: ${props => props.theme.color.red};
                min-width: 400px;
            }
        }
    }
`;

export default EventSchedule;