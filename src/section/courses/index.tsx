import CardCourses from '../../components/card-courses'
import { Container, Grid, Header, Section } from './styles'

const Courses = () => {

    const coursesList = [
        {
            id: 1,
            title: 'Essencial',
            description: [
                '5 fornecedores premium',
                'Ideal para iniciantes que deseja começar com uma seleção inicial',
                'Perfeito para familiarizar com o processo de importação e venda'
            ]
        },
        {
            id: 2,
            title: 'Intermediário',
            description: [
                '10 fornecedores premium',
                'Ideal para empreendedores com alguma experiência',
                'Expandir a gama de produtos e forncedores disponíveis'
            ]
        },
        {
            id: 3,
            title: 'Avançado',
            description: [
                '18 fornecedores premium',
                'Abrangente para empreendedores experientes',
                'Diversificar o alcance no mercado e estabelecer relações com uma variedade de fornecedores'
            ]
        }
    ]

  return (
    <Section>
        <Container>
            <Header>
                <h2>Inscreva-se!</h2>
            </Header>

            <Grid>
                {coursesList.map((course, key) => (
                    <CardCourses key={key} title={course.title} description={course.description}/>
                ))}
            </Grid>
        </Container>
    </Section>
  )
}

export default Courses