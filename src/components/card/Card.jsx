
import { useDispatch, useSelector } from "react-redux";
import { addToLike, removeFromLike } from "/src/redux/slices/favoritesSlice";
import { addItemToCart } from "/src/redux/slices/cartSlice";
import cardImage from "../../assets/card.png";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";


const Card = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites.items);
    const isFavorite = favorites.some((item) => item.id === post.id);

    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromLike(post));
            toast.info("Товар удален из избранного");
        } else {
            dispatch(addToLike(post));
            toast.success("Товар добавлен в избранное");
        }
    };

    return (
        <div className="card">
            <div className="cardimg">
                <div className="fovorite"
                    onClick={handleFavoriteToggle}
                    style={{
                        
                        color: isFavorite ? "red" : "white",
                        
                    }}
                >
                    <FaHeart />
                </div>
                <img src={cardImage} alt="Card" />
            </div>
            <button className="btnCart" onClick={() => dispatch(addItemToCart(post))}>
                В корзину
            </button>
            {post ? (
                <>
                    <h5 onClick={() => handleClick(post.id)}>{truncateText(post.title)}</h5>
                    <p>165 000 руб.  </p>
                </>
            ) : (
                <p>Нет доступного контента</p>
            )}
        </div>
    );
};

export default Card;
