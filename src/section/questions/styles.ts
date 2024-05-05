import styled from 'styled-components';

export const Section = styled.section`
    background: ${(props) => props.theme.background.secondary};
    color: ${(props) => props.theme.colors.gray_dark};
`

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 16px;

    display: flex;
    flex-direction: column;
    gap: 64px; 

    h2 {
        max-width: 624px;
        text-align: center;
        font-size: 32px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        h2 {
            max-width: 448px;
            font-size: 24px;
        }
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: center;

    
`

export const Content = styled.div`
    max-width: 800px;
    margin: 0px auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 64px;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

export const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 8px;

    & > button {
        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        & > p {
            font-size: 14px;
        }
    }
`

export const Warning = styled.p`
    font-size: 10px;
    text-align: center;
    color: #bababa;
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
