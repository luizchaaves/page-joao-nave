import { ICourse } from '../../types/data-types';
import { Container, Content, Description, Flag, Footer, Item, Price, Title, ButtonLink } from './styles';

const CardCourses = (course: ICourse) => {
  return (
    <Container>
        { course.recommended && <Flag>Recomendado</Flag> }
        <Content>
            <Title>{course.title}</Title>
            <Description>
                { course.description.map((item, key) => (
                    <Item key={key}>{item}</Item>
                )) }
            </Description>
        </Content>
        <Footer>
            <Price>
                {course.price.promotionalPrice ? (
                    <>
                        <p>de <span>{ (course.price.normalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span> por</p>
                        <span>{ (course.price.promotionalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
                    </>
                ) : (
                    <span>{ (course.price.normalPrice/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</span>
                )}
            </Price>

            <ButtonLink href={course.link} target="_blank">Assinar</ButtonLink>
        </Footer>
    </Container>
  )
}

export default CardCourses