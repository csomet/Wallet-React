import React,{Component} from 'react';
import RemainingBudget from './RemainingBudget';
import Budget from './Budget';
import PropTypes from 'prop-types';

export default class BudgetManager extends Component {

    render() {
        return (
            <div className="class-name">
                
                <Budget budget={this.props.budget} />
                <RemainingBudget budget={this.props.budget} remaining={this.props.remaining} />

            </div>
        );
    }
}

BudgetManager.propTypes = {
    budget: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
}
