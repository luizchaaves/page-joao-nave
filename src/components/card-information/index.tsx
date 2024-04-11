import { IconType } from 'react-icons';
import { Container, Header, Icon } from './styles';

type ICardInformation = {
    icon: IconType,
    description: string
}

const CardInformation = ({
    icon,
    description
}: ICardInformation) => {
    const IconComponent = icon;

  return (
    <Container>
        <Header>
            <Icon>
                <IconComponent/>
            </Icon>
            <h2>{description}</h2>
        </Header>
        <span>descrição descrição descrição</span>
    </Container>
  )
}

export default CardInformation