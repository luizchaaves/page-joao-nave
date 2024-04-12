import Button from '../button'
import { Container, Content, Description, Footer, Item, Title } from './styles';

type ICardCourses = {
    title: string,
    description: string[],
}

const CardCourses = ({title, description}: ICardCourses) => {
  return (
    <Container>
        <Content>
            <Title>{title}</Title>
            <Description>
                { description.map((item, key) => (
                    <Item key={key}>{item}</Item>
                )) }
            </Description>
        </Content>
        <Footer>
            <Button>Assinar</Button>
        </Footer>
    </Container>
  )
}

export default CardCourses