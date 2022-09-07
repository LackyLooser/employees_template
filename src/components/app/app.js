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
      term: '',
      filter: 'all'
    }
    
    newId = 4
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

    deleteItem = (id) =>{
      this.setState(({data}) =>({
        data: data.filter(item => item.id !== id)
      }))
    }
    addItem =(name, salary)=>{
      const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.newId++
    }
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
    }
    onTerm = (search) =>{
     this.setState({
      term:search
     })
    }
    onFilterSelector = (filter) =>{
      this.setState({
        filter
      })
    }

    filterData = (data,filter) =>{
      switch (filter) {
        case 'rise':
          return data.filter(({rise})=> rise)

        case 'salaryMore1000':
          return data.filter(({salary})=> salary > 1000)

        default: return data
      }
    }
    onSearch = (data,atr)=>{
      return data.filter(({name})=>name.toLowerCase().includes(atr,0))
    }

    render(){
    const {data,term,filter} = this.state
    const employees = data.length;
    const increase = data.filter(el => el.increase).length
    const visibleData = this.filterData(this.onSearch(data,term),filter)
    return (
      <div className="app">
          <AppInfo employees={employees} increase={increase}/>
  
          <div className="search-panel">
              <SearchPanel onTerm={this.onTerm}/>
              <AppFilter filter={filter} onFilterSelector={this.onFilterSelector}/>
          </div>
          
          <EmployeesList data={visibleData} onToggleProp={this.onToggleProp} deleteItem={this.deleteItem}/>
          <EmployeesAddForm addItem={this.addItem} term={term}/>
      </div>
    );
  }
  
}

export default App;
