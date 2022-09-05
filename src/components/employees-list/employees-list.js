import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onToggleProp}) => {
    return (
        <ul className="app-list list-group">
            {data.map(dataEmployees =><EmployeesListItem 
                                        {...dataEmployees} 
                                        key={dataEmployees.id}
                                        onToggleProp={onToggleProp}/>)}
        </ul>
    )
}

export default EmployeesList;