export const actionType = {
SET_USER : 'SET_USER',
SET_CARRINHO_SHOW : 'SET_CARRINHO_SHOW',
SET_CART_ITEMS : 'SET_CART_ITEMS',
}

const reducer = (state, action) => {
  console.log(action)

  switch(action.type){
    case actionType.SET_USER:
      return{
        ...state,
        user : action.user,
      };

    case actionType.SET_CARRINHO_SHOW:
      return{
        ...state,
        carrinho : action.carrinho
      };

      case actionType.SET_CART_ITEMS:
        return{
          ...state,
          cartItems : action.carItems
        }
      default :
      return state;
  }
}

export default reducer