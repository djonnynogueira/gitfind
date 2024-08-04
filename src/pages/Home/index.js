import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles_home.css';
import { ItemList } from '../../components/ItemList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>   

            <div className='perfil'>
              <img src='https://avatars.githubusercontent.com/u/13878534?v=4'
                className='profile' alt='Imagem do perfil'
              />
              <div>
                <h3>Djonny Nogueira</h3>
                <span>Descrição</span>
                <p>Descrição</p>
              </div>
            </div>  

          <hr />

          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="Teste" description="testes description" />
            <ItemList title="Teste" description="testes description" />
            <ItemList title="Teste" description="testes description" />
            <ItemList title="Teste" description="testes description" />
          </div>

        </div>
      </div>
    </div>
  );
}
export default App;
