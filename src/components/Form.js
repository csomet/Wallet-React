import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {


    expenseNameRef = React.createRef();
    amountRef = React.createRef();

    sendData = (e) => {
        e.preventDefault();

        //create object
        const formData = {
            expense: this.expenseNameRef.current.value,
            amount: this.amountRef.current.value
        }

        //send props
        this.props.addExpense(formData);


        //reset form
        e.currentTarget.reset();

    }

    render() {
        return (
            
            <form onSubmit={this.sendData}>
                <h2>Add new expenses</h2>
                <div className="campo">
                    <label>Expense name</label>
                    <input className="u-full-width" ref={this.expenseNameRef} type="text" placeholder="Taxi" />
                </div>

                <div className="campo">
                    <label>Amount</label>
                    <input className="u-full-width" ref={this.amountRef} type="text" placeholder="300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Add" />
            </form>
        );
    }
}

//proptypes definition:
Form.propTypes = {
    addExpense: PropTypes.func.isRequired
}