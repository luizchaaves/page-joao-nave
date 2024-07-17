import styled from 'styled-components';
// import bg from '../../assets/background.jpeg';

interface StyledProps {
    background: string;
    background_mobile?: string;
}

export const Section = styled.section<StyledProps>`
    background-image: linear-gradient(to top right, rgba(18, 18, 20, 0.8196078431) 40%, rgba(21, 212, 123, 0.5294117647) 150%), url(${props => props.background});
    background-repeat: no-repeat;
    backdrop-filter: blur(1px);
    background-size: cover;
    height: 100vh;

    @media (max-width: 1190px) {
        background-position: center;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        background-image: linear-gradient(to top right, rgba(18, 18, 20, 0.8196078431) 40%, rgba(21, 212, 123, 0.5294117647) 150%), url(${props => props.background_mobile ? props.background_mobile : props.background});
    }
`

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    max-width: 685px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    h1 {
        font-size: 36px;

        span {
            color: ${(props) => props.theme.colors.green_light};
        }
    }

    p {
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.gray_light};
        margin-bottom: 12px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        h1 {
            font-size: 32px;
        }

        p {
            font-size: 14px;
        }
    }
`