import styled from 'styled-components';

export const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 16px;

    display: flex;
    flex-direction: column;
    gap: 64px; 
`

export const Header = styled.div`
    h2 {
        max-width: 592px;
        font-size: 32px;
        margin-bottom: 8px;

        span {
            color: ${(props) => props.theme.colors.green_light};
        }
    }

    p {
        font-weight: 400;
        font-size: 14px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        justify-content: center;

        h2 {
            font-size: 24px;
            text-align: center;
        }

        p {
            text-align: center;
        }
    }
`

export const Iframe = styled.iframe`
    width: 100%;
    height: 500px;
`