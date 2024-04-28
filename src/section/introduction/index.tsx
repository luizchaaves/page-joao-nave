import { IBackground } from '../../types/data-types';
import { Button } from '../../components';
import { Section, Wrapper, Content } from './styles';

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
        <Section background={background.image.src}>
            <Wrapper>
                <Content data-aos="fade-down">
                    <h1>Desvendando os fornecedores <span>PREMIUM</span> chinês</h1>
                    <p>Tenha o contato de inúmeros fornecedores chineses e descubra como fiz para faturar acima de 9 dígitos por ano!</p>
                    <Button onClick={scrollToCoursesButton}>Saiba mais!</Button>
                </Content>
            </Wrapper>
        </Section>
    )
}

export default Introduction;