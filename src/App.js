import logo from './logo.svg';
import './App.css';
import Copyright from './components/copyright';
import Home from './pages/home'; // Import the Home component
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/portfolio';
import Menu from './components/menu'; // Import the Menu component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkdownRenderer from './components/MarkdownRenderer';
import { useParams } from 'react-router-dom';

const DynamicMarkdownRenderer = () => {
  const { filename } = useParams();
  return <MarkdownRenderer filePath={`/articles/${filename}.md`} />;
};


const App = () => {
  return (

    <Router>
      <Menu />
      <div style={{ margin: '0 13rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/articles/:filename" element={<DynamicMarkdownRenderer />} />
          <Route path="/articles/:filename" element={<DynamicMarkdownRenderer />} />

          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </div>
      <Copyright />
    </Router>

  );
};

export default App;
