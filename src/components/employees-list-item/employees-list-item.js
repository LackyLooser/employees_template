import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name,salary,id,increase,rise,onToggleProp} = props
    let clazz = "list-group-item d-flex justify-content-between"
    if(increase){
        clazz += ' increase'
    }
    if(rise){
        clazz += ' like'
    }
    return (
        <li className={clazz}>
            <span onClick={()=>onToggleProp(id, 'rise')} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle='increase'
                    onClick={()=>onToggleProp(id, 'increase')}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;