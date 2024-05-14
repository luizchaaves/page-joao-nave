import { IVideo } from '../../types/data-types'
import { Section, Iframe, Header } from './styles'

interface Props {
    video: IVideo;
}

const Video = ({ video }: Props) => {
  return (
    <Section>
        <Header>
            <h2>Explorando <span>novos</span> horizontes</h2>
            <p>{ video.text }</p>
        </Header>

        <div>
            <Iframe src={video.video.src} title={video.video.description} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></Iframe>
        </div>
    </Section>
  )
}

export default Video