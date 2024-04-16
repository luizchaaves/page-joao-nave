import GlobalStyles from './styles/global';
import Providers from './components/providers';

import Home from './components/home';
import Information from './section/information';
import Testimonials from './section/testimonials';
import Differential from './section/differential';
import Divider from './components/divider/index';
import Courses from './section/courses';
import Biography from './section/biography';
import Questions from './section/questions';

function App() {

  return (
    <Providers>
        <Home/>
        <Information/>
        <Testimonials/>
        <Divider/>
        <Differential/>
        <Courses/>
        <Biography/>
        <Questions/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
