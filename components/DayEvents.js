import { Fragment } from 'react';
import styled from 'styled-components';

const DayEvents = props => {
    const {selectedDayData} = props;
    return (
        <StyledDayEvents>
            {selectedDayData.map((dayData, index) => (
                <Fragment key={index}>
                    {/* <h3>{dayData.stage}</h3> */}
                    <ul>
                        {dayData.events.map((event, index) => (
                            <li key={index} className={event.stage.replaceAll(' ', '-')}>
                                <span className="time">{event.time}</span>
                                <span className="event-name">{event.name}</span>
                                <span className="event-stage">{event.stage}</span>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </StyledDayEvents>
    )
}

const StyledDayEvents = styled.section`
    padding-left: 280px;
    margin-top: 40px;
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
            padding-left: 24px;
            transition: 0.15s ease-in-out all;
            &.UNXD-Luxury-District {
                border-left: 4px solid orange;
                .event-stage {
                    color: orange;
                }
            }
            &.Cash-Labs-Space {
                border-left: 4px solid violet;
                .event-stage {
                    color: violet;
                }
            }
            &.Independent {
                border-left: 4px solid dodgerblue;
                .event-stage {
                    color: dodgerblue;
                }
            }
            &.Threedium-Mall {
                border-left: 4px solid #12e112;
                .event-stage {
                    color: #12e112;
                }
            }
            &.Boson-Portal {
                border-left: 4px solid #37e6ab;
                .event-stage {
                    color: #37e6ab;
                }
            }
            &.Kolectiff-Catwalk {
                border-left: 4px solid #e53b0d;
                .event-stage {
                    color: #e53b0d;
                }
            }
            &.MetaTokyo-Zone {
                border-left: 4px solid gray;
                .event-stage {
                    color: gray;
                }
            }
            &.Undefined {
                border-left: 4px solid black;
                .event-stage {
                    color: black;
                }
            }
            &.Rarible {
                border-left: 4px solid #ffd900;
                .event-stage {
                    color: #ffd900;
                }
            }
            &.Parcel-Metaparty-Community-Precint {
                border-left: 4px solid ${props => props.theme.color.red};
                .event-stage {
                    color: ${props => props.theme.color.red};
                }
            }
            &.Dragon-City {
                border-left: 4px solid blueviolet;
                .event-stage {
                    color: blueviolet;
                }
            }
            &:hover {
                /* border-width: 16px; */
            }
            .time {
                font-family: Inter;
                font-weight: 200;
                color: ${props => props.theme.color.gray500};
            }
            .event-name {
                font-size: 40px;
                /* letter-spacing: 0.1em; */
                color: ${props => props.theme.color.gray900};
                font-family: Inter;
                font-weight: 700;
                margin: 12px 0;
            }
            .event-stage {
                font-size: 24px;
                /* letter-spacing: 0.1em; */
                font-family: Inter;
                font-weight: 600;
            }
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        padding-left: 0;
        margin-top: 18px;
        ul {
            li {
                background: white;
                padding: 16px 16px;
                border-radius: 4px;
                margin-bottom: 8px;
                .time {
                    font-size: 12px;
                    font-weight: 300;
                }
                .event-name {
                    font-size: 22px;
                } 
                .event-stage {
                    font-size: 18px;
                } 
            }
        }
    }
`;

export default DayEvents;