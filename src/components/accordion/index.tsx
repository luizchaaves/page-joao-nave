import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';
import { Container, Description, Header, Icon, Title } from './styles';

interface Props {
    title: string;
    description: string;
}

const Accordion = ({title, description}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
      <Container isopen={isOpen.toString()}>
        <Header onClick={toggleAccordion}>
            <Title isopen={isOpen.toString()}>
                {title}
            </Title>
            <Icon isopen={isOpen.toString()}>
                <FaAngleRight />
            </Icon>
        </Header>

        <Description isopen={isOpen.toString()}>
          {description}
        </Description>
      </Container>
    </StyleSheetManager>
  );
};

export default Accordion;
