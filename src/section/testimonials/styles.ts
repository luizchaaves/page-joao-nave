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

export const Content = styled.div`
    height: 650px;

    & .swiper {
        width: 100%;
        height: 100%;
    }

    & .swiper-slide {
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid transparent;
        background: linear-gradient(145deg, rgba(34,34,34,1) 0%, rgba(78,212,119,1) 50%, rgba(34,34,34,1) 100%) border-box;
        border-radius: 8px;
        overflow: hidden;
    }

    & .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        overflow: hidden;
    }
`