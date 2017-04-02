import React from "react"
import Recipe from "./Recipe"
import {Accordion, Panel} from "react-bootstrap"

export default class RecipeBook extends React.Component {
  render(){
    const recipes = this.props.recipes.map((recipe,i) => <Panel header={recipe.name} key={i} eventKey={""+i} ><Recipe data={recipe} idx={i} /></Panel>)
    return (
            <Accordion> {recipes} </Accordion>
)
    
  }
}
  