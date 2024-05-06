import { Section, Iframe, Header } from './styles'

const Video = () => {
  return (
    <Section>
        <Header>
            <h2>Explorando <span>novos</span> horizontes</h2>
        </Header>
            <Iframe src="https://www.youtube.com/embed/fUhZ6kLs2cY?si=Uz5KzQuSYQinYB96" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></Iframe>
    </Section>
  )
}

export default Video