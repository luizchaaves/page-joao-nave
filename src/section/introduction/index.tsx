import { IBackground } from '../../types/data-types';
import { Button } from '../../components';
import { Section, Wrapper, Content } from './styles';
import { StyleSheetManager } from 'styled-components';

interface Props {
    background: IBackground
}

const Introduction = ({ background }: Props) => {

    const scrollToCoursesButton = () => {
        const coursesSection = document.getElementById('courses');
        if(coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop != 'background'}>
            <Section background={background.image.src} background_mobile={background.image_mobile.src}>
                <Wrapper>
                    <Content data-aos="fade-down">
                        <h1>Desvendando os fabricantes <span>PREMIUM</span> chineses</h1>
                        <p>Tenha o contato de inúmeros fabricantes chineses e descubra como fiz para faturar acima de 6 dígitos por ano!</p>
                        <Button onClick={scrollToCoursesButton}>Saiba mais!</Button>
                    </Content>
                </Wrapper>
            </Section>
        </StyleSheetManager>
    )
}

export default Introduction;