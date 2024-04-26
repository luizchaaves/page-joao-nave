import GlobalStyles from './styles/global';
import Providers from './components/providers';

import { Home } from './pages';

function App() {

  return (
    <Providers>
        <Home/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
