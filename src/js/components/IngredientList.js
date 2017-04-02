import React from "react"
import {ListGroup,ListGroupItem} from "react-bootstrap"
 
export default class IngredientList extends React.Component {
    render (){
        const ingredients = this.props.ingredients.map((ingr, i) => <ListGroupItem key={i} >{ingr}</ListGroupItem> )
        return <ListGroupItem>{ingredients}</ListGroupItem>
    }
}