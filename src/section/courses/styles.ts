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
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`
