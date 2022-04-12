import { availableRoutes } from './frontend/routes';
import { Navbar, Footer } from './frontend/components';

function App() {
  return (
    <div>
      <Navbar />
      {availableRoutes}
      <Footer />
    </div>
  );
}

export default App;
