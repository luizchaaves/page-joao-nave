import { FaShoppingCart, FaChartBar, FaWallet, FaTruck } from "react-icons/fa";
import CardInformation from '../../components/card-information';
import { Container, ContainerButton, Grid, Header, Section } from './styles';
import Button from '../../components/button';

const Information = () => {
    const informationsList = [
        {
            id: 1,
            icon: FaShoppingCart,
            title: 'Compra de produtos',
            description: 'Você terá o contato de todos fornecedores com um catálogo de produtos para facilitar ainda mais na hora de fazer um pedido. Além disso uma vídeo aula bem explicativa te ensinando como fazer o pedido diretamente com os fabricantes'
        },
        {
            id: 2,
            title: 'Estratégias de vendas',
            icon: FaChartBar,
            description: 'Você terá acesso a TODAS ESTRATÉGIAS que uso para ter o meu negócio de sucesso, todo conhecimento adquirido ao longos desse anos com os melhores no ramo de vendas para VOCÊ executar suas primeiras vendas em tempo recorde. Lembrando também que você vai ter o meu WhatsApp para tirar qualquer dúvida comigo, estou a disposição para te ajudar'
        },
        {
            id: 3,
            title: 'Controle financeiro',
            icon: FaWallet,
            description: 'Um dos tópicos mais importantes do seu negócio e que ninguém fala dele, estou aqui para te entregar não somente contato de fornecedores, mas um curso completo, e vou ensinar você a cuidar da maneira certa do dinheiro do seu negócio de sucesso'
        },
        {
            id: 4,
            title: 'Fornecedores',
            icon: FaTruck,
            description: 'A lista de fornecedores não é sites nem nada do tipo, são literalmente o contato de WhatsApp de todos os fabricantes, então você vai ter uma variedade de fornecedores disponível com os melhores e mais vendidos produtos da internet. Caso queira um fornecedor específico de certo produto é o que disse acima, você terá meu WhatsApp, você tem toda a liberdade de conversar comigo e me apresentar o que está precisando, afinal, estou aqui para te fazer crescer, não esfregar uma lista de fornecedores “meia boca” e sumir'
        },
    ]

  return (
    <Section>
        <Container data-aos="fade-up">
            <Header>
                <h2>Tudo para te ajudar a ter resultado <span>mais rápido</span>!</h2>
            </Header>

            <Grid>
                {informationsList.map(information => (
                    <CardInformation key={information.id} icon={information.icon} title={information.title} description={information.description}/>
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