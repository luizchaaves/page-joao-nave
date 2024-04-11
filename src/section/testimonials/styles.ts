import styled from 'styled-components';

export const Section = styled.div`
    /* min-height: 100vh; */
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