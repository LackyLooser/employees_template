import './search-panel.css';

const SearchPanel = ({onTerm,term}) => {
    
    return (
        <input  onChange={e=>onTerm(e.target.value)}
                value={term}
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;