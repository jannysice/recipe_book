import RecipeBook from "./components/RecipeBook"
import Recipe from "./components/Recipe"
import Layout from "./components/Layout"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"



    



var content = document.getElementById("app")
ReactDOM.render(
    <Provider store={store}> 
      <Layout />
    </Provider>,content)
