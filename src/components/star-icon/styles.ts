import styled from 'styled-components';

export const Container = styled.div`
    width: 28px;
    height: 28px;
    background: red;
    position: relative;
    background: #4ed477;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        font-size: 24px;
    }
`