import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateItemQuantity, clearCart } from "../../app/redux/slices/cartSlice";
import { toast } from "react-toastify";
import "./cart.scss";
import { useTranslation } from "react-i18next";

import cardImage from "../../shared/assets/card.png";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const { t } = useTranslation();

    const handleRemoveItem = (id) => {
        dispatch(removeItemFromCart({ id }));
        toast.info("Товар удален из корзины");
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        {
            dispatch(clearCart());
            toast.warn("Корзина очищена");
        }
    };
    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };
    // const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        
        <div className="cart">
            <h2>{t("Basket")}</h2>
            {items.length === 0 ? (
                <p>{t("The basket is empty")}</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={cardImage} alt="Card" />
                                <div className="cart-item-details">
                                    <div className="item-info">
                                        <h5>{truncateText(item.title)}</h5>

                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        />
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id)}>{t("Delete")}</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-btn">

                        <button onClick={handleClearCart}>{t("Empty the trash")}</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
