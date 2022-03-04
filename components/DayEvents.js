import styled from 'styled-components';

const DayEvents = props => {
    const {selectedDayData} = props;
    return (
        <StyledDayEvents>
            {selectedDayData.map((dayData, index) => (
                <>
                    <h3>{dayData.stage}</h3>
                    <ul>
                        {dayData.events.map((event, index) => (
                            <li>
                                <span className="time">{event.time}</span>
                                <span className="event-name">{event.name}</span>
                            </li>
                        ))}
                    </ul>
                </>
            ))}
        </StyledDayEvents>
    )
}

const StyledDayEvents = styled.section`
    padding-left: 320px;
    h3 {
        font-size: 72px;
        line-height: 82px;
        color: ${props => props.theme.color.gray900};
        letter-spacing: 0.1em;
        width: 400px;
        margin-bottom: 42px;
    }
    ul {
        li {
            display: flex;
            flex-direction: column;
            margin-bottom: 32px;
            .time {
                font-family: Inter;
                font-weight: 200;
            }
            .event-name {
                font-size: 40px;
                letter-spacing: 0.1em;
                color: ${props => props.theme.color.gray900};
            }
        }
    }
`;

export default DayEvents;