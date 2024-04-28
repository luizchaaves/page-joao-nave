import * as FaIcon from "react-icons/fa";
import { IconType } from 'react-icons';
import { IInformation } from '../../types/data-types';
import { CardInformation, Button } from '../../components';
import { Container, ContainerButton, Grid, Header, Section } from './styles';

interface Props {
    informations: IInformation[] 
}

const Information = ({ informations }: Props) => {
    const getIconByName = (iconName: string): IconType => {
        const iconComponent = (FaIcon as {[key: string]: IconType}) [iconName];
        return iconComponent
    }

  return (
    <Section>
        <Container data-aos="fade-up">
            <Header>
                <h2>Tudo para te ajudar a ter resultado <span>mais rápido</span>!</h2>
            </Header>

            <Grid>
                {informations.map((information, index) => (
                    <CardInformation key={index} icon={getIconByName(information.icon)} title={information.title} description={information.description}/>
                ))}
            </Grid>

            <ContainerButton>
                <Button>Garantir curso + fornecedores</Button>
            </ContainerButton>
        </Container>
    </Section>
  )
}

export default Information