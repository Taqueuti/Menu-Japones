import menu from "../../array";


export function searchItemMenu(termTyped) {
    const itemMenu = menu.filter(
        (item) =>
        item.name.toLowerCase().includes(termTyped.toLowerCase())
        ||
        item.description.toLowerCase().includes(termTyped.toLowerCase())
        ||
        item.category.toLowerCase().includes(termTyped.toLowerCase())
   )

   return itemMenu
}

export function filterCategory(category){
    return menu.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function filterSuggestion() {
    return menu.filter((product) => product.suggested === true);
}