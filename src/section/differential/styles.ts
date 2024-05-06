import styled from 'styled-components';

export const Section = styled.section`
    min-height: 64vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 16px;

    display: flex;
    flex-direction: column;
    gap: 64px; 
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

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 96px;
    column-gap: 32px;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;

        p {
            font-weight: 500;
            text-align: center;
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        row-gap: 64px;
    }

    @media (max-width: 664px) {
        grid-template-columns: 1fr;
    }
`