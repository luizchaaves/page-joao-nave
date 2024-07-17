import * as FaIcon from "react-icons/fa";
import { IconType } from 'react-icons';
import { IInformation } from '../../types/data-types';
import { CardInformation, Button } from '../../components';
import { Container, ContainerButton, Grid, Header, Section } from './styles';

interface Props {
    informations: IInformation[] 
}

const Information = ({ informations }: Props) => {
    const scrollToCoursesButton = () => {
        const coursesSection = document.getElementById('testimonials');
        if(coursesSection) {
            coursesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const getIconByName = (iconName: string): IconType => {
        const iconComponent = (FaIcon as {[key: string]: IconType}) [iconName];
        return iconComponent
    }

  return (
    <Section id="informations">
        <Container data-aos="fade-up">
            <Header>
                <h2>Vou te ajudar a ter resultado <span>mais rápido</span>!</h2>
            </Header>

            <Grid>
                {informations.map((information, index) => (
                    <CardInformation key={index} icon={getIconByName(information.icon)} title={information.title} description={information.description}/>
                ))}
            </Grid>

            <ContainerButton>
                <Button onClick={scrollToCoursesButton}>Garantir curso + fabricantes com até 70% off</Button>
            </ContainerButton>
        </Container>
    </Section>
  )
}

export default Information