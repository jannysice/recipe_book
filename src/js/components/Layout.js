import React from "react"
import RecipeBook from "./RecipeBook"
import { Button, Modal,FormGroup,ControlLabel,FormControl } from "react-bootstrap"
import { connect } from "react-redux"
import { loadRecipes, addRecipe } from "../actions/actions"
import ReactDOM from "react-dom"

@connect((store) => {
  return {
    recipes: store.recipes
  };
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  componentWillMount() {
    this.props.dispatch(loadRecipes())
  }
  addRecipe(){

    const recipeName = document.getElementById("formRecipeName").value
    const ingredients = document.getElementById("formIngredients").value.split(",")
    this.props.dispatch(addRecipe({name:recipeName,ingredients:ingredients}))
    this.closeModal()
  }
  render() {
    return (<div>
      <RecipeBook recipes={this.props.recipes} />
      <Button onClick={this.openModal.bind(this)} bsStyle="primary" >Add Recipe</Button>
      <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form>
              <FormGroup
                controlId="formRecipeName"
              >
                <ControlLabel>Recipe name</ControlLabel>
                <FormControl 
                  type="text"
                  placeholder="Enter Recipe name"
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup
                controlId="formIngredients"
              >
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  ref="addIngredients"
                  type="textarea"
                  placeholder="Enter ingredients seperated with commas ','"
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.addRecipe.bind(this)} > Add Recipe </Button>
          <Button bsStyle="danger" onClick={this.closeModal.bind(this)}> Cancel </Button>

        </Modal.Footer>
      </Modal>
    </div>)
  }
}