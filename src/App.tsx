import GlobalStyles from './styles/global';
import Providers from './components/providers';

import Home from './components/home';
import Information from './section/information';

function App() {

  return (
    <Providers>
        <Home/>
        <Information/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
