import { FaShoppingCart, FaChartBar, FaWallet, FaTruck } from "react-icons/fa";
import CardInformation from '../../components/card-information';
import { Container, ContainerButton, Grid, Header, Section } from './styles';
import Button from '../../components/button';

const Information = () => {
  return (
    <Section>
        <Container data-aos="fade-up">
            <Header>
                <h2>Tudo para te ajudar a ter resultado <span>mais rápido</span>!</h2>
            </Header>

            <Grid>
                <CardInformation icon={FaShoppingCart} description='Compra de produtos'/>
                <CardInformation icon={FaChartBar} description='Estratégias de vendas'/>
                <CardInformation icon={FaWallet} description='Controle financeiro'/>
                <CardInformation icon={FaTruck} description='Fornecedores'/>
            </Grid>

            <ContainerButton>
                <Button>Garantir curso + fornecedores</Button>
            </ContainerButton>
        </Container>
    </Section>
  )
}

export default Information