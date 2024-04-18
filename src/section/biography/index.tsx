import { Section, Container, Content, Header, Photo } from './styles';
import Image from '../../assets/background.jpeg';

const Biography = () => {

    const biography = `
João Pedro Teixeira mais conhecido no Instagram como “João da Nave” tem 24 anos e é um apaixonado por carros modificados hoje conta com mais de 150 Mil Seguidores e já ajudou milhares de pessoas em suas redes Sociais.
Em 2022, começou a desvendar o mercado chinês pois sabia que lá era a fonte de todos os produtos que trabalhava em suas lojas on-line. E depois de muito estudo, muito contato diretamente com os fabricantes conseguiu os melhores contatos do mercado premium de diversos produtos, sendo eles, Chuteiras, Matérias esportivos, Roupas de grife, tênis e os acessórios mais vendidos na internet.
Quando João iniciou no mercado de vendas on-line eram diretamente com fornecedores brasileiros e era somente para ter uma renda extra, pois morava sozinho em uma cidade do interior de Minas Gerais no qual tinha ido para trabalhar na área que se formou, e não conseguia fechar o mês somente com salário da empresa. Se passou alguns meses descobriu sobre o fabricante dos produtos que os fornecedores brasileiros vendiam e depois de muito tempo conseguiu contato com um e fez uma certa amizade com o mesmo no qual abriu a porta dos melhores fabricantes premium do mercado mundial.
Final de 2023 João decidiu compartilhar esses fornecedores com apenas 10 seguidores de seu Instagram e tinha um processo seletivo no qual essas 10 pessoas que foram beneficiadas tinham que mostrar o porque queria fazer parte e qual era o intuito, pois João não queria entregar o ouro para qualquer pessoa, com apenas duas semanas 8 dos 10 alunos do método já tinha realizado mais de 3 vendas no ramo em qual escolheu seguir, com dois meses 4/10 já ganhavam mais do que recebia em seu trabalho principal. E assim surgiu a ideia de entregar um conteúdo mais que validado para pessoas que realmente querem viver o mercado que mais cresce na internet, o ouro está em sua mão, e não ficará por muito tempo, basta você querer.
    `

  return (
    <Section>
      <Container data-aos="fade-right">
        <Photo>
            <div>
                <img src={Image} alt="biography_image" />
            </div>
        </Photo>
        <Content>
          <Header>
            <h2>
              Quem é <span>João da Nave</span>?
            </h2>
          </Header>
          <pre>{biography}</pre>
        </Content>
      </Container>
    </Section>
  );
};

export default Biography;
