import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import chilliimage from '../../assets/chilli.png';
import loading from '../../assets/loading.gif';
import './card.css';
const styles = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textTransform: 'capitalize',
    width: '100%',
    height: '1.2em',
    whiteSpace: 'nowrap'
}
const bttnStyle = {
    float: "right",
    backgroundColor: "rgb(255, 141, 0)",
    color: "#fff",
    margin: "-6px 0px 0px",
    cursor: "pointer",

}
const labelStyle = {
    fontSize: "12px"
}

const CardWithAvatar = (props) => (
    <div className="marginTop10">
        <Card>
            <CardMedia>
                {props.image ? (
                    <img src={props.image} alt={props.name} />
                ) : (
                        <img src={loading} alt={props.name} />
                    )}

            </CardMedia>
            {props.showdetails ? (
                <CardTitle title={props.name} titleStyle={styles} subtitle={props.description} />
            ) : (
                    <CardTitle title={props.name} titleStyle={styles} />
                )}

            <CardText>

                {props.nonVeg ? (
                    <span className="details">  <span className="dot dot-red" /><b>non veg</b> </span>
                ) : (
                        <span className="details">   <span className="dot dot-green" /><b>veg</b> </span>
                    )}
                {props.spicy ? (
                    <span className="details">  <img className="image-spicy" alt="spicy" src={chilliimage} /><b>spicy</b> </span>
                ) : ""}

                {props.showdetails ? (
                    ''
                ) : (
                        <FlatButton label="View Details" style={bttnStyle}
                            labelStyle={labelStyle}
                            onClick={() => props.clicked(props)}
                        />
                    )}
            </CardText>
        </Card>
    </div>
);

export default CardWithAvatar;