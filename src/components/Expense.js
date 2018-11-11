import React,{Component} from 'react';

export default class Expense extends Component {
    
    render() {

        const {expense, amount} = this.props.item;

        return (
            <div className="class-name">
                <li className="gastos">
                    <p>
                    {expense}
                    <span className="gasto"> {amount}</span>
                    </p>
                </li>
            </div>
        );
    }
}