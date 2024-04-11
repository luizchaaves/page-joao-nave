import styled from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 64px 16px;

    display: flex;
    flex-direction: column;
    gap: 128px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        gap: 88px;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        max-width: 576px;
        text-align: center;
        font-size: 32px;

        span {
            color: ${(props) => props.theme.colors.green_light};
        }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {

        h2 {
            max-width: 448px;
            font-size: 24px;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const ContainerButton = styled.div`
    align-self: center;
`
