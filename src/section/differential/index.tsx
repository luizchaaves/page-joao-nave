import CheckIcon from '../../assets/check'
import { Grid, Header, Section } from './styles'

const Differential = () => {
    
    const differentialsList = [
        {
            id: 1,
            title: 'Acesso a fornecedores premium'
        },
        {
            id: 2,
            title: 'Estratégias de compras eficientes'
        },
        {
            id: 3,
            title: 'Suporte personalizado'
        },
        {
            id: 4,
            title: 'Conteúdo atualizado regularmente'
        },
        {
            id: 5,
            title: 'Garantia de satisfação'
        },
        
    ]

  return (
    <Section data-aos="fade-right">
        <Header>
           <h2>Para você <span>dominar</span> o mercado</h2>
        </Header>

        <Grid>
            {differentialsList.map(differential => (
                <div key={differential.id}>
                    <CheckIcon/>
                    <p>{differential.title}</p>
                </div>
            ))}
        </Grid>
    </Section>
  )
}

export default Differential