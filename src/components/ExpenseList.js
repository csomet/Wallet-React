import React,{Component} from 'react';
import Expense from './Expense';

export default class ExpenseList extends Component {


    render() {
        return (
            <div className="gastos-realizados">
                <h2>Expense list</h2>
                    
                    {Object.keys(this.props.expenses).map (key => (
                         <Expense key={key} item={this.props.expenses[key]} />
                    ))}
                    
                   
            </div>
        );
    }
}