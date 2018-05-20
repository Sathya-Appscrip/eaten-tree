import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CardWithAvatar from '../components/card/card';

class DetailApp extends Component {
    state = {
        food: [],
    }

    componentDidMount() {
        console.log(' Inside componentDidMount()', this.props.location.state.myarray);
        const food = this.props.location.state.myarray;
        this.setState({ food });
        
    }

    
    render() {
        console.log(' Inside render()');

        console.log("this state food" , this.state.food)

        return (
            <div className="container">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 "></div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 ">
                    <CardWithAvatar
                        name={this.state.food.name}
                        image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=350"
                        nonVeg={this.state.food.nonVeg}
                        spicy={this.state.food.spicy}
                        description={this.state.food.description}
                        showdetails = {true}
                    />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 "></div>
            </div>
        );
    }
}

export default DetailApp;
