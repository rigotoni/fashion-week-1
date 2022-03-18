import { Fragment } from "react";
import styled from "styled-components";

const DaySelector = props => {
    const {
        selectedDay,
        setSelectedDay
    } = props;

    const days = [
        'DAY 1',
        'DAY 2',
        'DAY 3',
        'DAY 4',
        'DAY 5',
    ];

    return (
        <StyledDaySelector className="day-selector">
            <ul>
                {days.map((day, index) => (
                    <Fragment key={index}>
                        <li 
                            className={index + 1 === selectedDay ? 'selected' : undefined}
                            onClick={() => {setSelectedDay(index + 1)}}>
                            {day}
                        </li>
                        {index < days.length - 1 && ' / '}
                    </Fragment>
                ))}
            </ul>
        </StyledDaySelector>
    )
}

const StyledDaySelector = styled.section`
    ul {
        display: flex;
        font-size: 40px;
        line-height: 40px;
        color: ${props => props.theme.color.gray900};
        li {
            margin: 0 16px;
            cursor: pointer;
            font-family: Inter;
            color: ${props => props.theme.color.gray200};
            text-shadow: -1px 1px 0 ${props => props.theme.color.red},
                          1px 1px 0 ${props => props.theme.color.red},
                         1px -1px 0 ${props => props.theme.color.red},
                        -1px -1px 0 ${props => props.theme.color.red};
            transition: 0.15s ease-in-out all;
            /* letter-spacing: 0.1em; */
            &:first-child {
                margin-left: 0;
            }
            &:last-child {
                margin-right: 0;
            }
            &.selected {
                color: ${props => props.theme.color.red};
                text-shadow: none;
            }
        }
    }
`;

export default DaySelector;