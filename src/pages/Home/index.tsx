import {
    Introduction,
    Information,
    Testimonials,
    Differential,
    Courses,
    Biography,
    Questions
} from '../../section';

import { Divider } from '../../components';
import { PageData } from '../../types/data-types';

interface Props {
    dataHomePage: PageData
}

const Home = ({dataHomePage}: Props) => {
  return (
    <>
        <Introduction background={dataHomePage.background}/>
        <Information informations={dataHomePage.informations}/>
        <Testimonials testimonials={dataHomePage.testimonials}/>
        <Divider/>
        <Differential differentials={dataHomePage.differentials}/>
        <Courses courses={dataHomePage.courses}/>
        <Biography biography={dataHomePage.biography}/>
        <Questions questions={dataHomePage.questions}/>
    </>
  )
}

export default Home