import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
// import { withRouter } from "react-router-dom";

import CardWithAvatar from '../components/card/card';


class Home extends Component {

    state = {
        foodList: [],
    }

    componentDidMount() {
        console.log(' Inside componentDidMount()');
        axios.get(`http://texpertise.in/data.php`)
            .then(res => {
                console.log("res", res)
                const foodList = res.data;
                this.setState({ foodList });
                console.log("this.state.foodlist", this.state.foodList);
            })
    }

    showFoodDetailsHandler = (param) => {
        console.log("showFoodDetailsHandler", param);
        const myarray = {
            name: param.name,
            description: param.description.replace(/(<p>|<\/p>)/g, ""),
            image: param.image,
            nonVeg: param.nonVeg,
            spicy: param.spicy,
        }
        this.props.history.push({
            pathname: '/details',
            state: { myarray: myarray }
        })
    }

    render() {
        console.log(' Inside render()');

        return (
            <div className="container">
                <div className="row">
                    {this.state.foodList.map((food, index) =>
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <CardWithAvatar
                                name={food.name}
                                image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=350"
                                nonVeg={food.nonVeg}
                                spicy={food.spicy}
                                description={food.description}
                                clicked={this.showFoodDetailsHandler}
                                showdetails = {false}
                            />
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Home;
