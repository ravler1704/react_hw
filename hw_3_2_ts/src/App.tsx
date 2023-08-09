import data from './data/etsy.json'
import Listing from "./components/Listing/Listing.tsx";
import './App.css'
function App() {
    return (
        <Listing items={data}></Listing>
    );
}
export default App
