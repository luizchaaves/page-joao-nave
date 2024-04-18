import { Section, Wrapper, Content } from './styles';
import Button from '../button';

const Home = () => {
    return (
        <Section>
            <Wrapper>
                <Content data-aos="fade-down">
                    <h1>Desvendando os fornecedores <span>PREMIUM</span> chinês</h1>
                    <p>Tenha o contato de inúmeros fornecedores chineses e descubra como fiz para faturar acima de 9 dígitos por ano!</p>
                    <Button>Saiba mais!</Button>
                </Content>
            </Wrapper>
        </Section>
    )
}

export default Home;