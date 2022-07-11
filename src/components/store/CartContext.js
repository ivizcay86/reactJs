import { useState, createContext } from "react";

export const CartContext = createContext ({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue=[], children}) => {
    const [cart, setCart] = useState(defaultValue)

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find((element) => element.id === id);
    }

    const removeItem = (id) => {
        const newCart = [...cart].filter((element) => element.id !== id);
        setCart(newCart)
    }

    const addItemToCart = (product, quantity) =>{

        if (isInCart(product.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if (element.product.id === product.id) {
                    element.quantity= element.quantity + quantity
                }
            }
            setCart(newCart)
        } else {
            setCart(
                [
                    ...cart,
                    {
                        product: product,
                        quantity: quantity
                    }
                ]
            )    
        }
    }

    const context = {
        clearCart,
        isInCart,
        removeItem,
        addItemToCart,
        cart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}