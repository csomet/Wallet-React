import React,{Component} from 'react';
import {reviewBudget} from '../Helper';


export default class RemainingBudget extends Component {

    render() {
        return (
            <div className={reviewBudget(this.props.budget, this.props.remaining)}>
                <p>Remaining: $ {this.props.remaining}</p>
            </div>
        );
    }
}