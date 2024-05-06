import styled from 'styled-components'

export const Section = styled.section`
    /* min-height: 100vh; */
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 16px;

    display: flex;
    flex-direction: column;
    gap: 64px; 
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    /* @media (max-width: 1100px) { */
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 64px;
    }
`

export const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        aspect-ratio: 1 / 1;
        background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(78,212,119,1) 50%, rgba(34,34,34,1) 100%);
        border-radius: 2rem;
        display: grid;
        height: 300px;
        place-items: center;
        transition: .3s;
        width: 300px;
        transform: rotate(10deg);
    }

    & > div > img {
        width: 100%;
        border-radius: 16px;
        transform: rotate(-10deg);
    }

    @media (max-width: 370px) {
        & > div {
            width: 230px;
            height: 230px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > pre {
        font-size: 14px;
        text-align: justify;
        font-family: inherit;
        white-space: pre-wrap;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;

    h2 {
        max-width: 592px;
        font-size: 32px;

        span {
            color: ${(props) => props.theme.colors.green_light};
        }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        justify-content: center;

        h2 {
            font-size: 24px;
            text-align: center;
        }
    }
`