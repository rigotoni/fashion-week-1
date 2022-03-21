import styled from 'styled-components';

const CTA = props => {
    const {
        href,
        children
    } = props;

    return (
        <StyledCTA href={href} className="cta">
            {children}
        </StyledCTA>
    )
}

const StyledCTA = styled.a`
    background: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    padding: 22px 32px;
    font-size: 22px;
    letter-spacing: 0.1em;
    transition: 0.1s ease-in-out all;
    position: relative;
    border: 1px solid transparent;
    &:hover {
        background: white;
        color: ${props => props.theme.color.black};
        transform: translate(10px, -10px);
        border: 1px solid ${props => props.theme.color.black};
        box-shadow: -10px 10px 0px 0px ${props => props.theme.color.black};
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        font-size: 20px;
        padding: 16px 24px;
    }
`;

export default CTA;