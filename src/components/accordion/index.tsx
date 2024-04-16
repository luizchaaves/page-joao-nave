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
      <Container isOpen={isOpen.toString()}>
        <Header onClick={toggleAccordion}>
            <Title isOpen={isOpen.toString()}>
                {title}
            </Title>
            <Icon isOpen={isOpen.toString()}>
                <FaAngleRight />
            </Icon>
        </Header>

        <Description isOpen={isOpen.toString()}>
          {description}
        </Description>
      </Container>
    </StyleSheetManager>
  );
};

export default Accordion;
