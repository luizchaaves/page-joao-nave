import { Container } from './styles'

interface Props {
    icon: string
}

const StarIcon = ({ icon }: Props) => {
  return (
    <Container style={{transform: 'rotate(45deg)'}}>
        <Container style={{transform: 'rotate(-45deg)'}}>
            <span className='material-symbols-outlined'>
                { icon }
            </span>
        </Container>
    </Container>
  )
}

export default StarIcon