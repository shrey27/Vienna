import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';
import { useTheme } from './frontend/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <Navbar />
      {availableRoutes}
      <ToastContainer style={{ fontWeight: '500', fontSize: '1.25rem' }} />
      <Footer />
    </div>
  );
}

export default App;
