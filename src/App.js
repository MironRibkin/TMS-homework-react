import './App.css';
import {Text} from "./text";

function App() {
    return (
        <div className="App">
            <Text text="Hello World"/>
            <Text text="Hello World" font={50}/>
            <Text text="Hello World" font={100} color='#729313'/>
            <Text text="Hello World" font={150} color='#545231' underline={true}/>
        </div>
    );
}

export default App;
