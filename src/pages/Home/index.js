import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles_home.css';
import { ItemList } from '../../components/ItemList';
import { Pagination } from '../../components/Pagination';

function App() {
  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [currentItems, setCurrentItems] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();


    // Dados usuários
    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      setItems(newRepos);

      if (newRepos.length) {
        setRepos(newRepos);
        setItems(newRepos);
        setCurrentPage(1);
      }
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;


  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, items, itemsPerPage]);

  // Muda a página
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} className='background' alt='background app' />
        <div className='info'>
          <div>
            <input
              name='usuario'
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder='@username' />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (<>
            <div className='perfil'>
              <img src={currentUser.avatar_url}
                className='profile' alt='Imagem do perfil'
              />
              <div>
                <h3>{currentUser.name}</h3>
                <span>{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
          </>
          ) : null}

          {repos?.length ? (
            <div>
              <h4 className='repositorio'>Repositórios</h4>
              {currentItems.map(repo => (
                <ItemList key={repo.id} title={repo.name} description={repo.description} />
              ))}

            </div>
          ) : null}
         <div>
          

            {items.length > 0 && (
              <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={items.length}
              paginate={paginate}
              currentPage={currentPage}
              />
            )}
            </div>
         
        </div>

      </div>

    </div>
  );
}
export default App;
