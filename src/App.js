import './App.css';
import {Text} from "./text";

function App() {
    return (
        <div className="App">
            <Text text="Hello World" font={500} color='#545231' underline={true}/>
        </div>
    );
}

export default App;
