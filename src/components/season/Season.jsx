import  { useEffect, useState } from 'react';
import "./season.css";
import Card from '../card/Card'; 
import service from '../../api/service'; 

const Season = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cardLimit = 3; 

    const fetchPosts = async () => {
        try {
            const data = await service.getAllProducts();
            setPosts(data.slice(0, cardLimit)); 
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Не удалось загрузить коллекцию");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <div className="loading">Загрузка...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className='Season'>
            <div className='Season_content'>
                <div className='Season_generalOne'>
                    <h2 className='title_h2'>СЕЗОН 2020/21</h2>
                    <div className='line'></div>
                    <div className="generalCard">
                        {posts.map((post) => (
                            <Card key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className='Season_generalTwo'>
                    <div>
                        <h2 className='title_h2'>Новая коллекция</h2>
                        <div className='line'></div>
                        <button onClick={() => console.log("Каталог button clicked")}>Каталог</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Season;
