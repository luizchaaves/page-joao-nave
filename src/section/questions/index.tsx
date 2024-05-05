import { FaWhatsapp } from "react-icons/fa";
import { IContact, IQuestion } from '../../types/data-types';
import { Accordion } from '../../components'
import { ButtonLink, Contact, Container, Content, Header, List, Section, Warning } from './styles'

interface Props {
    questions: IQuestion[],
    contact: IContact
}

const Questions = ({ questions, contact }: Props) => {
  return (
    <Section>
        <Container data-aos="fade-down">
            <Header>
                <h2>Perguntas frequentes</h2>
            </Header>

            <Content>
                <List>
                    {questions.map((question, index) => (
                        <Accordion key={index} title={question.title} description={question.description}/>
                    ))}
                </List>

                <Contact>
                    <h2>Ficou com alguma dúvida do produto?</h2>
                    <p>Fale diretamente com João da Nave no WhatsApp</p>
                    <ButtonLink href={contact.link} target="_blank"><FaWhatsapp /> Entrar em contato com o suporte</ButtonLink>
                </Contact>

                <Warning>
                    Aviso Legal: “Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.” Copyright © 2024 Inc. Todos os direitos reservados.
                </Warning>
            </Content>
        </Container>
    </Section>
  )
}

export default Questions