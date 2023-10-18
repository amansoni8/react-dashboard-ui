import logo from './logo.svg';
import './App.css';
import './compo.css';
import ThreeColumnTable from './threeColumnTable';
import TableLayout from './twoColumnTable';
import SearchComponent from './Search';
import Dashboard from './Dashboard';
import SingleColumnLayout from './SingleColumn';

function App() {
  return (
    <div className="App">
      <div className="dashboard-container">
      <div className="sidebar">
        {/* Sidebar content */}
        <Dashboard/>
        
      </div>
      <div className="main-content">
        {/* <SearchComponent/> */}
        <ThreeColumnTable/>
        <TableLayout/>
        <SingleColumnLayout/>
      </div>
    </div>
      </div>
  );
}

export default App;
