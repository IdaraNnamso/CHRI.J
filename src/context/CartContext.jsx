import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart =
                localStorage.getItem("cart");

            return savedCart
                ? JSON.parse(savedCart)
                : [];
        } catch (error) {
            console.error(
                "Unable to load cart:",
                error
            );

            return [];
        }
    });

    // SAVE CART
    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }, [cart]);

    // ADD PRODUCT
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct =
                prevCart.find(
                    (item) =>
                        item.id === product.id
                );

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity:
                                item.quantity + 1,
                        }
                        : item
                );
            }

            return [
                ...prevCart,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    // REMOVE PRODUCT
    const removeFromCart = (id) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) => item.id !== id
            )
        );
    };

    // INCREASE QUANTITY
    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity + 1,
                    }
                    : item
            )
        );
    };

    // DECREASE QUANTITY
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            quantity:
                                item.quantity - 1,
                        }
                        : item
                )
                .filter(
                    (item) =>
                        item.quantity > 0
                )
        );
    };

    // CLEAR CART
    const clearCart = () => {
        setCart([]);
    };

    // TOTAL QUANTITY
    const cartCount = cart.reduce(
        (total, item) =>
            total +
            Number(item.quantity),
        0
    );

    // TOTAL PRICE
    const cartTotal = cart.reduce(
        (total, item) =>
            total +
            Number(item.price) *
            Number(item.quantity),
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,

                cartCount,
                cartTotal,

                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context =
        useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};