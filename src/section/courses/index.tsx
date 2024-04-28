import { ICourse } from '../../types/data-types'
import { CardCourses } from '../../components'
import { Container, Grid, Header, Section } from './styles'

interface Props {
    courses: ICourse[]
}

const Courses = ({ courses }: Props) => {
  return (
    <Section id="courses">
        <Container data-aos="fade-up">
            <Header>
                <h2>Inscreva-se!</h2>
            </Header>

            <Grid>
                {courses.map((course, index) => (
                    <CardCourses key={index} title={course.title} description={course.description}/>
                ))}
            </Grid>
        </Container>
    </Section>
  )
}

export default Courses