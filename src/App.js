import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';
import { useTheme } from './frontend/context';

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <Navbar />
      {availableRoutes}
      <Footer />
    </div>
  );
}

export default App;
