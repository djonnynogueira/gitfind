import { Header } from '../../components/Header';
import background from '../../assets/background.png';

import './styles_home.css';



function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <input name='usuario' placeholder='@username' />
          <button>Buscar</button>          
          </div>
      </div>
    </div>
  );
}
export default App;
