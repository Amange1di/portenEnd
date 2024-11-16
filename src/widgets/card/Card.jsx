
import { useDispatch, useSelector } from "react-redux";
import { addToLike, removeFromLike } from "../../app/redux/slices/favoritesSlice";
import { addItemToCart } from "../../app/redux/slices/cartSlice";
import cardImage from "../../shared/assets/card.png";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Card = ({ post }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.favorites.items);
    const isFavorite = favorites.some((item) => item.id === post.id);
    const { t  } = useTranslation(); 

    const truncateText = (text) => {
        return text.split(' ').slice(0, 3).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFromLike(post));
            toast.info(t("Item removed from favorites"));
        } else {
            dispatch(addToLike(post));
            toast.success(t("Item added to favorites"));
        }
    };
    const handleCardToggle=()=>{
         dispatch(addItemToCart(post)) 
         toast.success(t("Item added to cart"));
    }

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
            
           
            {post ? (
                <>
                    <h5 onClick={() => handleClick(post.id)}>{truncateText(post.title)}</h5>
                    <p>165 000 руб.  </p>
                </>
            ) : (
                <p>Нет доступного контента</p>
            )}
             <button className="btnCart" onClick={handleCardToggle}>
             <BiCart className="iconCard" />
             {t("Add to Cart")}
            </button>
        </div>
    );
};

export default Card;
