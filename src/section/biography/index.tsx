import { IBiography } from '../../types/data-types';
import { Section, Container, Content, Header, Photo } from './styles';

interface Props {
    biography: IBiography
}

const Biography = ({ biography }: Props) => {
  return (
    <Section>
      <Container data-aos="fade-right">
        <Photo>
            <div>
                <img src={biography.image.src} alt={biography.image.description} />
            </div>
        </Photo>
        <Content>
          <Header>
            <h2>
              Quem é <span>João Pedro</span>?
            </h2>
          </Header>
          <pre>{biography.text}</pre>
        </Content>
      </Container>
    </Section>
  );
};

export default Biography;
