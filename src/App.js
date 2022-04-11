import { availableRoutes } from './frontend/routes';
import { Navbar } from './frontend/components';

function App() {
  return (
    <div>
      <Navbar />
      {availableRoutes}
    </div>
  );
}

export default App;
