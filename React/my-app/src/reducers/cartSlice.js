import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        itemAdded: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload.id)
            if (addedItem) {
                addedItem.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }

        },
        itemsDeleted: (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        itemsAddplus:(state,action)=>{
            const addedItem=state.items.find((x)=>x.id===action.payload)
            if(addedItem)
                {
                    addedItem.quantity+=1;
                }

        },
        itemsAddMinus:(state,action)=>{
            const deleteItem=state.items.find((x)=>x.id===action.payload)
            if(deleteItem && deleteItem.quantity>1)
                {
                    deleteItem.quantity-=1;
                }
            else if(deleteItem && deleteItem.quantity==1)
            {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }

        },
       



    }
})
export const { itemAdded, itemsDeleted,itemsAddplus,itemsAddMinus } = cartSlice.actions
export default cartSlice.reducer;

