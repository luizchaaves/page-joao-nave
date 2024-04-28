import CheckIcon from '../../assets/check'
import { IDifferential } from '../../types/data-types'
import { Grid, Header, Section } from './styles'

interface Props {
    differentials: IDifferential[]
}

const Differential = ({ differentials }: Props) => {
  return (
    <Section data-aos="fade-right">
        <Header>
           <h2>Para você <span>dominar</span> o mercado</h2>
        </Header>

        <Grid>
            {differentials.map((differential, index) => (
                <div key={index}>
                    <CheckIcon/>
                    <p>{differential.text}</p>
                </div>
            ))}
        </Grid>
    </Section>
  )
}

export default Differential