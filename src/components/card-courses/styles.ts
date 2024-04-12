import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colors.green_light};
`

export const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    position: relative;
    z-index: 1;

    &::after {
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 3px;
        background: ${(props) => props.theme.colors.green_light};
        display: block;
        position: absolute;
        left: -6px;
        bottom: 4px;
        z-index: -1;
    }
`

export const Description = styled.div`
    gap: 16px;
    display: flex;
    flex-direction: column;
`

export const Item = styled.span`
    position: relative;
    padding-left: 16px;

    &::before {
        content: '';
        display: block;
        width: .5rem;
        height: 2px;
        background: #4ed477;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0px;
    }
`

export const Footer = styled.div`
    background: #f0f0f0;
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px) {
        justify-content: flex-end;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        justify-content: center;
    }
`