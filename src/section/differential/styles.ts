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

export const List = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const ListItem = styled.li`
    position: relative;
    padding-left: 32px;

    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 2px solid ${(props) => props.theme.colors.green_dark};
        border-radius: 50%;
    }

    &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 10px;
        transform: translate(-3px, -50%);
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.green_light};
    }
`