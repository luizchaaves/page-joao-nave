import { IBackground } from '../../types/data-types';
import { Button } from '../../components';
import { Section, Wrapper, Content } from './styles';
import { StyleSheetManager } from 'styled-components';

interface Props {
    background: IBackground
}

const Introduction = ({ background }: Props) => {

    const scrollToCoursesButton = () => {
        const coursesSection = document.getElementById('informations');
        if(coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop != 'background'}>
            <Section background={background.image.src} background_mobile={background.image_mobile.src}>
                <Wrapper>
                    <Content data-aos="fade-down">
                        <h1>Desvendando os <span>MELHORES</span> fabricantes <span>PREMIUM</span> de materiais esportivos</h1>
                        <p>Veja minha estrutura validada para começar sua loja com os melhores fabricantes e todas as minhas estratégias e cuidados para um processo de vendas superacelerado!</p>
                        <Button onClick={scrollToCoursesButton}>Saiba mais!</Button>
                    </Content>
                </Wrapper>
            </Section>
        </StyleSheetManager>
    )
}

export default Introduction;