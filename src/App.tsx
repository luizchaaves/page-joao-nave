import GlobalStyles from './styles/global';
import Providers from './components/providers';

import Home from './components/home';

function App() {

  return (
    <Providers>
        <Home/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
