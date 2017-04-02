export function addRecipe (recipe) {
    return {type:"ADD_RECIPE",payload:recipe}
}
export function updateRecipe (oldR,newR) {
    return {type:"UPDATE_RECIPE",payload:{oldRecipe:oldR,newRecipe:newR}}
}
export function deleteRecipe (idx) {
    return {type:"DELETE_RECIPE",payload:idx}
}
export function loadRecipes () {
    return {type:"LOAD_RECIPES"}
}