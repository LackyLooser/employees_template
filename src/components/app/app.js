import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  state = {
    data: [
      {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
      {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
      {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
  ],
  }
  onToggleProp = (id, prop) => {
    this.setState(({data}) =>({
      data: data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }
  render(){
    const {data} = this.state
    const employees = data.length;
    const increase = data.filter(el => el.increase).length
    return (
      <div className="app">
          <AppInfo employees={employees} increase={increase}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={data} onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm/>
      </div>
    );
  }
  
}

export default App;
