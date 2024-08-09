import Home from './componats/Home';

import DataProvider from './context/DataProvider';
// import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;