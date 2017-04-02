const defaultRecipes = [
    { name: "Beer", ingredients: ["Beer", "Beer", "More beer"] },
    { name: "Scrambled Eggs", ingredients: ["Eggs", "Salt", "Pepper"] }
];

export default function reducer(store = { recipes: [] }, action) {
    switch (action.type) {
        case "LOAD_RECIPES": {
            if (localStorage.recipes === undefined) {
                localStorage.recipes = JSON.stringify(defaultRecipes);
            }
            const recipes = JSON.parse(localStorage.recipes);

            return { ...store, recipes: recipes }
        }
        case "UPDATE_RECIPE": {
            const { oldRecipe, newRecipe } = action.payload
            const idx = store.recipes.indexOf(oldRecipe)
            var newRecipes = store.recipes.slice()
            newRecipes[idx] = newRecipe
            const newStore = { ...store, recipes: newRecipes }
            localStorage.recipes = JSON.stringify(newStore.recipes)
            return newStore
        }
        case "DELETE_RECIPE": {
            const idx = action.payload
            const newStore = { ...store, recipes: store.recipes.filter((r, i) => i !== idx) }
            localStorage.recipes = JSON.stringify(newStore.recipes)
            return newStore
        }
        case "ADD_RECIPE": {
            const newRecipe = action.payload
            const newRecipes = store.recipes.concat(newRecipe)
            const newStore = { ...store, recipes: newRecipes };
            localStorage.recipes = JSON.stringify(newStore.recipes)

            return newStore
        }

    }
    return store
}