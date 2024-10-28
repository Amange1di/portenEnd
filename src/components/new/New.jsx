import  { useEffect, useState } from "react";
import Card from "../card/Card"; 
import service from "../../api/service"; 
import "./new.css";

const New = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const data = await service.getAllProducts();
      setPosts(data.slice(0, 8));
    } catch (err) {
      setError("Не удалось загрузить посты");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="container">
        <div className="new">
          <h2 className="title_h2">Новые поступления</h2>
          <div className="line"></div>
          <div className="generalCard">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
