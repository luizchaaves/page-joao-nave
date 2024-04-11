import GlobalStyles from './styles/global';
import Providers from './components/providers';

import Home from './components/home';
import Information from './section/information';
import Testimonials from './section/testimonials';

function App() {

  return (
    <Providers>
        <Home/>
        <Information/>
        <Testimonials/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
