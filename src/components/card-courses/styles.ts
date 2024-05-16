import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colors.green_light};
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding: 16px 16px 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`

export const Flag = styled.div`
    position: absolute;
    top: 26px;
    right: -24px;
    background-color: #4ed477;
    color: #ffffff;
    padding: 5px 16px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    transform: rotate(45deg);
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
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 16px;

    @media (max-width: 1100px) {
        justify-content: flex-end;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        justify-content: center;
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > p {
        font-size: 12px;
        color: #bababa;

        & > span {
            text-decoration: line-through;
            color: ${props => props.theme.colors.green_light};
        }
    }

    & > span {
        font-size: 22px;
        font-weight: 600;
    }
`

export const ButtonLink = styled.a`
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    min-width: 224px;
    background: ${(props) => props.theme.colors.green_light};
    color: ${(props) => props.theme.colors.gray_dark};
    padding: 12px 20px;
    box-sizing: border-box;
    transition: .2s;
    font-weight: 600;
    min-height: 52px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        outline: none;
        box-shadow: 0 0 0 3px #abf5c2, 0 0 0 4px #7fc996; 
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 14px;
        min-height: 44px;
    }
`