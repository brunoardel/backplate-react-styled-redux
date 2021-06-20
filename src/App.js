import ThemeProvider from './contexts/ThemeProvider';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}
