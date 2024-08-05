import './styles.css'

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
<>
      <nav>
        <ul className="pagination">
          <li className={currentPage === 1 ? 'disabled' : ''}>
            <a onClick={() => paginate(currentPage - 1)} href="!#">
              Anterior
            </a>
          </li>
          {pageNumbers.map(number => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
          <li className={currentPage === pageNumbers.length ? 'disabled' : ''}>
            <a onClick={() => paginate(currentPage + 1)} href="!#">
              Próximo
            </a>
          </li>
        </ul>
      </nav>
      <div className="pagination-info">
        Página {currentPage} de {pageNumbers.length}
      </div>
    </>
    );
  }

  export {Pagination}