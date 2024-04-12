import CheckIcon from '../../assets/check'
import { Grid, Header, Section } from './styles'

const Differential = () => {
  return (
    <Section>
        <Header>
           <h2>Para você <span>dominar</span> o mercado</h2>
        </Header>

        <Grid>
            <div>
                <CheckIcon/>
                <p>Acesso a fornecedores premium</p>
            </div>
            <div>
                <CheckIcon/>
                <p>Estratégias de compras eficientes</p>
            </div>
            <div>
                <CheckIcon/>
                <p>Suporte personalizado</p>
            </div>
            <div>
                <CheckIcon/>
                <p>Conteúdo atualizado regularmente</p>
            </div>
            <div>
                <CheckIcon/>
                <p>Garantia de satisfação</p>
            </div>
        </Grid>
    </Section>
  )
}

export default Differential