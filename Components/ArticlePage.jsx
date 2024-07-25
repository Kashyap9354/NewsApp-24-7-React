import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
  const location = useLocation();
  const { articleUrl } = location.state;

  return (
    <div>
      <h2>Full Article</h2>
      <p>Read the full article <a href={articleUrl} target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>
  );
};

export default ArticlePage;
