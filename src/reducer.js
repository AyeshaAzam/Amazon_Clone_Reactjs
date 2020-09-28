export const initialState = {
  basket: [],
  user: null,
};

/*same as this example:
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
sum // 118.11
*/
//Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0); //initial amount is Zero
};

//state of the application and action is what you are trying to do ( adding in the basket or removing fro the basket)
// reducer is always listening...
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // splice() changes the original array whereas slice() doesn't but both of them returns array object
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product ( id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
