import FetchData from "./Components/FetchData";
import FetchYogaData from "./Components/FetchYogaData";
import "./App.css";
function App() {
  return (
    <>
      <h1>My Data List</h1>
      <FetchData />
      <h1>Practice Exercise ( With different API )</h1>
      <FetchYogaData/>

    </>
  );
}

export default App;
