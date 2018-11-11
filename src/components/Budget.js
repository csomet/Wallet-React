import React,{Component} from 'react';

export default class Budget extends Component {

    render() {
        return (
            <div className="alert alert-primary">
                <p>Budget: $ {this.props.budget}</p>
            </div>
        );
    }
}