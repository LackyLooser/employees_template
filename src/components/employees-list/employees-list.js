import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onToggleProp,deleteItem}) => {
    return (
        <ul className="app-list list-group">
            {data.map(dataEmployees =><EmployeesListItem 
                                        {...dataEmployees} 
                                        key={dataEmployees.id}
                                        onToggleProp={onToggleProp}
                                        deleteItem={deleteItem}/>)}
        </ul>
    )
}

export default EmployeesList;