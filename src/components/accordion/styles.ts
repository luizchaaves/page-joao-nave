import styled from 'styled-components';

interface StyledProps {
    isOpen: string;
}

export const Container = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.colors.green_light};
    border-radius: 8px;
    padding: 16px;
    gap: 12px;
    background: ${({isOpen, theme}) => isOpen === 'true' ? '#f0f0f0' : theme.background.secondary};
    transition: background .3s ease;
`

export const Header = styled.dt`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`

export const Title = styled.span<StyledProps>`
    font-weight: ${({isOpen}) => isOpen === 'true' ? '600' : '500'};
    color: ${(props) => props.theme.colors.gray_dark};
`

export const Icon = styled.div<StyledProps>`
    transition: transform .3s ease;
    transform: ${({isOpen}) => isOpen === 'true' ?  'rotate(90deg)' : 'rotate(0)'};
`

export const Description = styled.dd<StyledProps>`
    overflow: hidden;
    display: ${({isOpen}) => isOpen === 'true' ? 'block' : 'none'};
    max-height: ${({isOpen}) => isOpen === 'true' ? '100%' : '0'};
    font-size: 14px;
    font-weight: 400;
`