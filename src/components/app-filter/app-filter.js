import "./app-filter.css";

const AppFilter = ({filter, onFilterSelector}) => {
    const btns = [
        {name:'Все сотрудники',atr:'all'},
        {name:'На повышение',atr:'rise'},
        {name:'З/П больше 1000$',atr:'salaryMore1000'}
    ]
    return (
        <div className="btn-group">
            {btns.map(({name,atr})=>(
                <button key={atr}
                        type="button"
                        className={`btn ${filter === atr ? 'btn-light' : 'btn-outline-light'}`}
                        onClick={()=>onFilterSelector(atr)}>
                    {name}
                </button>
            ))}
        </div>
    )
}

export default AppFilter;