import styled, { keyframes } from 'styled-components';

interface StyledProps {
    isopen: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    max-height: 1000px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`;

export const Container = styled.dl<StyledProps>`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.colors.green_light};
    border-radius: 8px;
    padding: 16px;
    gap: 12px;
    background: ${({isopen, theme}) => isopen === 'true' ? '#f0f0f0' : theme.background.secondary};
    transition: background .3s ease;

    &:hover {
        background: ${({ isopen, theme }) => isopen ? '#f0f0f0' : theme.background.secondary};
    }
`

export const Header = styled.dt`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`

export const Title = styled.span<StyledProps>`
    font-weight: ${({isopen}) => isopen === 'true' ? '600' : '500'};
    color: ${(props) => props.theme.colors.gray_dark};
`

export const Icon = styled.div<StyledProps>`
    transition: transform .3s ease;
    transform: ${({isopen}) => isopen === 'true' ?  'rotate(90deg)' : 'rotate(0)'};
`

export const Description = styled.dd<StyledProps>`
    overflow: hidden;
    display: ${({isopen}) => isopen === 'true' ? 'block' : 'none'};
    animation: ${({ isopen }) => (isopen ? fadeIn : fadeOut)} 0.5s ease;
    font-size: 14px;
    font-weight: 400;
`