import styled from 'styled-components';

export const ButtonElement = styled.button`
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

    &:hover {
        outline: none;
        box-shadow: 0 0 0 3px #abf5c2, 0 0 0 4px #7fc996; 
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`