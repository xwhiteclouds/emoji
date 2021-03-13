import './App.css';
import emojiList from './emojiList.json'

function App() {
  const compareValue = (value) => {
    
  } 
  const filteredData = emojiList.filter(emoji => {
    if (emoji.title.toLowerCase().includes()) {
      
    }
  })
  {filteredData === value  ? () : (
  return (
    <div className="App">
      <input placeholder="search" onChange={(e) => compareValue(e.target.value)}/>
      { emojiList.map(item => {
                return (
                    <div>
                        <ul>
                            <li>{item.symbol} {item.title}</li>
                        </ul>
                    </div>
                    
                )
            }) }
    </div>
  );
  )}
}

export default App;
