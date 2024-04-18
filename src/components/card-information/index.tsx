import { IconType } from 'react-icons';
import { Container, Header, Icon } from './styles';

type ICardInformation = {
    icon: IconType,
    title: string,
    description: string
}

const CardInformation = ({
    icon,
    title,
    description
}: ICardInformation) => {
    const IconComponent = icon;

  return (
    <Container>
        <Header>
            <Icon>
                <IconComponent/>
            </Icon>
            <h2>{title}</h2>
        </Header>
        <span>{description}</span>
    </Container>
  )
}

export default CardInformation