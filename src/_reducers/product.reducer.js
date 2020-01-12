const initialState = { anchor: 'left',
    product: [],
    open: false,
    id: '',  
    name: '',
    description: '',
    price: ''
 };


export function product(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PRODUCT':
            return {
            ...state,
            product: action.product
            };
        case 'PRODUCT_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                description: action.description,
                price: action.price
            };
        case "PRODUCT_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }