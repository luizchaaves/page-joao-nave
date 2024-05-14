import { ICourse } from '../../types/data-types';
import Button from '../button'
import { Container, Content, Description, Flag, Footer, Item, Price, Title } from './styles';

const CardCourses = ({title, description, price, recommended}: ICourse) => {
  return (
    <Container>
        { recommended && <Flag>Recomendado</Flag> }
        <Content>
            <Title>{title}</Title>
            <Description>
                { description.map((item, key) => (
                    <Item key={key}>{item}</Item>
                )) }
            </Description>
        </Content>
        <Footer>
            <Price>
                {price.promotionalPrice ? (
                    <>
                        <p>de <span>{ (price.normalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span> por</p>
                        <span>{ (price.promotionalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
                    </>
                ) : (
                    <span>{ (price.normalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
                )}
            </Price>

            <Button>Assinar</Button>
        </Footer>
    </Container>
  )
}

export default CardCourses