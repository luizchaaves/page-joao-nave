import GlobalStyles from './styles/global';
import Providers from './components/providers';

import Home from './components/home';
import Information from './section/information';
import Testimonials from './section/testimonials';
import Differential from './section/differential';
import Divider from './components/divider/index';

function App() {

  return (
    <Providers>
        <Home/>
        <Information/>
        <Testimonials/>
        <Divider/>
        <Differential/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
