import { useEffect, useState } from 'react';
import Subnavbar from './Subnavbar';
import Card from './Card';
import Timer from '../SemiComponents/Timer'
// import './App.css'; // Import any necessary styles

const API_KEY = 'ad5a66c46015467983b8439e0025d0ed';

function ApiCard() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('latest');

  useEffect(() => {
    const fetchNews = async () => {
      try {
      
//https://newsapi.org/v2/everything?q=${query}&from=2024-06-25&sortBy=publishedAt&apiKey=${API_KEY}
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-06-25&sortBy=publishedAt&apiKey=${API_KEY}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [query]);

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <Subnavbar onQueryChange={handleQueryChange} />
      <Timer/>
      <div className="card-container">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Card
              key={index}
              imageSrc={article.urlToImage}
              title={article.title}
              text={truncateDescription(article.description, 20)}
              buttonText="Read more"
              articleUrl={article.url}
            />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default ApiCard;






