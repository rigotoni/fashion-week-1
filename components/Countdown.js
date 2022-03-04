import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import CTA from './CTA';

const Countdown = props => {

    const [remainingDays, setRemainingDays] = useState(0);
    const [remainingHours, setRemainingHours] = useState(0);
    const [remainingMins, setRemainingMins] = useState(0);
    const [remainingSecs, setRemainingSecs] = useState(0);

    let festivalDate = new Date('Mar 24, 2022 20:00:00');
    festivalDate = new Date(festivalDate);
    festivalDate.setUTCHours(8);
    const UTCFestivalDate = new Date(festivalDate.toUTCString()).getTime();

    useEffect(() => {
        let interval = setInterval(() => {
        let now = new Date().getTime();
        let t = UTCFestivalDate - now;
        // console.log(t);
        let days, hours, mins, secs;
        if (t >= 0) {
    
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            secs = Math.floor((t % (1000 * 60)) / 1000);

            days = ("0" + days).slice(-2)
            hours = ("0" + hours).slice(-2)
            mins = ("0" + mins).slice(-2)
            secs = ("0" + secs).slice(-2)
        
            setRemainingDays(days);
            setRemainingHours(hours);
            setRemainingMins(mins);
            setRemainingSecs(secs);
            // console.log(days, hours, mins, secs);
        }
        }, 1000);
    }, []);
    
    return (
        <StyledCountdown>
            <CTA href="">CHECK IT OUT</CTA>
            <span className="countdown-text">in</span>
            <section className="countdown">
                <div className="time-block days-wrapper">
                    <span className="number">{remainingDays}</span>
                    <span className="label">DAYS</span>
                </div>
                <div className="time-block hours-wrapper">
                    <span className="number">{remainingHours}</span>
                    <span className="label">HOURS</span>
                </div>
                <div className="time-block minutes-wrapper">
                    <span className="number">{remainingMins}</span>
                    <span className="label">MINUTES</span>
                </div>
                <div className="time-block seconds-wrapper">
                    <span className="number">{remainingSecs}</span>
                    <span className="label">SECONDS</span>
                </div>
            </section>
        </StyledCountdown>
    )
}

const StyledCountdown = styled(Container)`
    .countdown-text {
        margin: auto 34px;
        display: block;
    }
    .countdown {
        display: flex;
        position: relative;
        &:after {
            position: absolute;
            top: 36px;
            left: 0;
            height: 2px;
            width: 100%;
            background: ${props => props.theme.color.red};
            content: '';
        }
        .time-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 14px;
            width: 72px;
            &:last-child {
                margin-right: 0;
            }
            span {
                display: inline-block;
                font-weight: 300;
                letter-spacing: 0.1em;
            }
            .number {
                font-size: 32px;
            }
        }
    }

`

export default Countdown;