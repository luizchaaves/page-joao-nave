import GlobalStyles from './styles/global';
import Providers from './components/providers';

import { Home } from './pages';

import PageData from './landing-page-data.json';

function App() {

  return (
    <Providers>
        <Home dataHomePage={PageData}/>
        <GlobalStyles/>
    </Providers>
  )
}

export default App
