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

const Home = () => {
  return (
    <>
        <Introduction/>
        <Information/>
        <Testimonials/>
        <Divider/>
        <Differential/>
        <Courses/>
        <Biography/>
        <Questions/>
    </>
  )
}

export default Home