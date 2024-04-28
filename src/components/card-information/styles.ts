import styled from 'styled-components';

export const Container = styled.div`
    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.green_light};
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 272px;

    span {
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width: 866px) {
        min-height: auto;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    h2 {
        font-weight: 600;
        font-size: 18px;
    }
`

export const Icon = styled.div`
    display: flex;
    width: fit-content;
    padding: 16px;
    background: ${(props) => props.theme.colors.green_light};
    border-radius: 8px;
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 20px;
        padding: 8px;
    }
`