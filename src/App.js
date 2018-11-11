import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Form from './components/Form';
import ExpenseList from './components/ExpenseList';
import {validateBudget} from './Helper';
import BudgetManager from './components/BudgetManager';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        expenses: {},
        remaining: '',
        budget: ''
    }
  }

  addExpense = (expense) =>{
      
      const exp = {... this.state.expenses}
      
      //add param expense to state object with modifications (date as ID)
      exp[`expense${Date.now()}`] = expense;

      this.substractExpenseFromBudget(expense.amount)

      //update state
      this.setState({
        expenses: exp
      })
      
  }

  substractExpenseFromBudget = subsAmount => {
      this.setState({
          remaining: Number(this.state.remaining) - subsAmount
      })
  }

  componentDidMount(){
    this.getBudget();

  }

  getBudget = () => {
      
    let initialBudget = prompt('Whats your budget?');

    if (validateBudget(initialBudget)){
    
      this.setState({
        budget : initialBudget,
        remaining : initialBudget
      })

    } else {
      this.getBudget();
    }
     
  }

  render() {
    return (
      <div className="App container">
          
          <Header title='Wallet'/>
        

          <div className="contenido-principal contenido">
              <div className="row">
                  <div className="one-half column">
                    <Form addExpense={this.addExpense} />
                  </div>

                  <div className="one-half column">
                    <ExpenseList expenses={this.state.expenses} />
                    <BudgetManager budget={this.state.budget} remaining={this.state.remaining}/>
                  </div>
          
              </div>
          </div>
      </div>
    );
  }
}

export default App;
