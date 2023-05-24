import "./App.css";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 10 })));
    }, 2000);
  };

  return (
    <div className="app">
      <div id="container">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={items.length < 100}
          loader={<h4 style={{ margin: 0, padding: 0 }}>Loading...</h4>}
          scrollableTarget="container"
          className="scroll"
          scrollThreshold={1}
        >
          {items.map((i, index) => (
            <div className="box" key={index}>
              {index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
