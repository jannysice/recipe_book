import React from "react"
import { Panel, Button, Modal, FormGroup, ControlLabel, FormControl } from "react-bootstrap"
import IngredientList from "./IngredientList"
import { updateRecipe, deleteRecipe } from "../actions/actions"
import {connect} from "react-redux"

@connect((store) => {
  return {
    recipes: store.recipes
  };
})
export default class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showModal: false }
    }
    openModal() {
        this.setState({ showModal: true })
    }
    closeModal() {
        this.setState({ showModal: false })
    }
    updateRecipe() {
        const {data} = this.props
        const newName = document.getElementById("editTitleOf" + data.name).value
        const newIngredients = document.getElementById("editIngredientsOf" + data.name).value.split(",")
        this.props.dispatch(updateRecipe(data, { name: newName, ingredients: newIngredients }))
        this.closeModal()
    }
    deleteRecipe(){
        this.props.dispatch(deleteRecipe(this.props.idx))
    }
    render() {
        const { data } = this.props;
        return (
            <div>
                <h2>ingredients:</h2>
                <IngredientList ingredients={data.ingredients} />
                <Button bsStyle="primary" onClick={this.openModal.bind(this)}> Edit Recipe </Button>
                <Button bsStyle="danger" onClick={this.deleteRecipe.bind(this)}> Delete Recipe </Button>
                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup
                                controlId={"editTitleOf" + data.name}
                            >
                                <ControlLabel>Recipe name</ControlLabel>
                                <FormControl
                                    type="text"
                                    defaultValue={data.name}
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup
                                controlId={"editIngredientsOf" + data.name}
                            >
                                <ControlLabel>Ingredients</ControlLabel>
                                <FormControl
                                    defaultValue={data.ingredients.join(",")}
                                    type="textarea"
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.updateRecipe.bind(this)}  > Edit Recipe </Button>
                        <Button bsStyle="danger" onClick={this.closeModal.bind(this)} > Cancel </Button>

                    </Modal.Footer>
                </Modal>
            </div>)
    }
}