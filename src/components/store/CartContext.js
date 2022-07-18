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
                if (element.id === product.id) {
                    element.quantity = element.quantity + quantity
                }
            }
            setCart(newCart)
        } else {
            setCart(
                [
                    ...cart,
                    {
                        ...product,
                        quantity: quantity
                    }
                ]
            )    
        }
    }

    const getQuantity = () => {
        let quantity = 0
        cart.forEach((element) => quantity = quantity + element.quantity)
        return quantity
    }

    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.price)
        })
        return total
    }

    const context = {
        clearCart,
        isInCart,
        removeItem,
        addItemToCart,
        getQuantity,
        getTotal,
        cart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}