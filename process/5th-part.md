1.react redux and next js redux not same.
react spa single page application.
client components.

react redux e global storage create kortam.

react redux e RTK query use kortam.

# change in next js

next js ---> server side and client side.

Client components 2 times render hoy.

# some rules

We use redux only client components.

We dosent use RTK QUERY.

cookie er access server e pawa jay client na.

handle Hydration properly.

43--2

# Settings redux The store and hooks

add adrress payment details and cart

components-->modules-->cart--->Address";
PaymentDetails

components--->modules--->cart-->PaymentDetails;

1.  redux toolkit docs.
2.  search next js setup with redux.
3.  App router architecture and redux.
4.  initial setup

5.  create redux folder. src--->redux

6.  store.ts e

 <!-- we will not do this -->
 <!-- This is global variable -->

import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
return configureStore({
reducer: {},
})
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

7. Providing the Store.

8. app layout.tsx.

9. providers storeProvider.tsx.

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

export default function StoreProvider({
children,
}: {
children: React.ReactNode
}) {
const storeRef = useRef<AppStore>(undefined)
if (!storeRef.current) {
// Create the store instance the first time this renders
storeRef.current = makeStore()
}

return <Provider store={storeRef.current}>{children}</Provider>
}

we jsut one times use store.

We call providers bit we dont this.

card er outside o redux store korbo.

layout.tsx na

provider.tsx e store wrap kori.

work follow.

1. layout theke render ---> go to providers --> storeprovider --> children e render hobe.

redux ---> feature-->cartSlice

store e giye cart import kori.

src --> componets --> ui --? core --> ProductCard.tsx

<Button
onClick={() => handleAddProduct(product)}
disabled={product?.stock === 0}
variant="outline"
size="sm"
className="w-8 h-8 p-0 flex items-center justify-center rounded-full" >
<ShoppingCart />
</Button>

cartSlice e productCard use korbo.

ProductCard e function call kori.

Navbar e just link create kori.

cartSlice e

export const orderedProductsSelector = (state: RootState) => {
return state.cart.products;
};

return korbo

src --> compoents --> modules --> cart ---> cartProduct

const products = useAppSelector(orderedProductsSelector);

useAppseletor er maddome niye asbo.

# 43-5 Managing Multiple Products

CartSlice e kaj korte hobe.

redux --> featureSlice e

export interface CartProduct extends IProduct {
orderQuantity: number;
}

src --> components --> ui --> core ---> CartProductCard.

increment decrement remove CartSlice e

incrementOrderQuantity: (state, action) => {
const productToIncrement = state.products.find(
(product) => product.\_id === action.payload
);

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },

# cartProductCard e use kori.

<!-- Calculate Sub Products -->

43-7.

cartSlice e subtotal initial kori.

export const subTotalSelector = (state: RootState) => {
return state.cart.products.reduce((acc, product) => {
if (product.offerPrice) {
console.log(product.offerPrice);
return acc + product.offerPrice _ product.orderQuantity;
} else {
console.log(product.price, "Price");
return acc + product.price _ product.orderQuantity;
}
}, 0);
};

src --> components--> modules --> card --> payment details.

# currency format ache interesting jinis

43--8

HAndling City and Shipping Address.

Cities name ekta array create kori.

src --> constants.

components --> modules --> cart --> Address.tsx.

NOw intregate it cartSlice.

updateCity: (state, action) => {
state.city = action.payload;
},
updateShippingAddress: (state, action) => {
state.shippingAddress = action.payload;
},

use This.

Create order postman.

create export const orderSelector = (state: RootState) => {
return {
products: state.cart.products.map((product) => ({
product: product.\_id,
quantity: product.orderQuantity,
color: "White",
})),
shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
paymentMethod: "Online",
};
}; into cartSlice.

export const shippingCostSelector = (state: RootState) => {
if (
state.cart.city &&
state.cart.city === "Dhaka" &&
state.cart.products.length > 0
) {
return 60;
} else if (
state.cart.city &&
state.cart.city !== "Dhaka" &&
state.cart.products.length > 0
) {
return 120;
} else {
return 0;
}
};


PaymentDetails 

components --> modules --> cart --> paymentDetails.



export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shippingCost = shippingCostSelector(state);

  return subTotal + shippingCost;
};

lib --> currencyFormatter.ts

export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(value);
};

Intl buildin Object.

convert currency from taka to dollar.

paymentDetails kaj kori.


Validation add PaymentDetails.


43-11

User Validation

payment details  const user = useUser();

Creating an order Reg

Types e cart.ts name e ekta file create kori.

services --> cart e kaj kori.

<!-- 43.12 -->

Handling Order and Payament


payment Details e kaj kori

Clear the Cart after Payment Add.

Backend e success and error page add korte hobe.



