import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: ''
    }
    onChangeInput = (e)=>{
        let prop = e.currentTarget.name
        this.setState(({
            [prop]: e.target.value
        }))
    }
    


    render(){
        const {name,salary} = this.state
        const onClickBtn = (e) =>{
            e.preventDefault()
            this.props.addItem(name,salary)
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input onChange={(e)=>this.onChangeInput(e)}
                           type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?" 
                           value={name}
                           name="name"/>
                    <input onChange={(e)=>this.onChangeInput(e)}
                           type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?" 
                           value={salary}
                           name="salary"/>
    
                    <button onClick={onClickBtn}
                            type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;