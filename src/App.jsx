import { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  const player = [
    { name: "Video1", link: "https://www.youtube.com/watch?v=VU23OPQ1Pmc" },
    { name: "Video2", link: "https://www.youtube.com/watch?v=epAFDEJImrU" },
    { name: "Video3", link: "https://www.youtube.com/watch?v=TZuQjv5Z6h8" },
    { name: "Video4", link: "https://www.youtube.com/watch?v=3r_ZNfAl7yY" },
  ];
  const [current, setCurrent] = useState(player[0].link);
  return (
    <div className="App">
      {player.map((item, index) => {
        return (
          <button key={index} onClick={() => setCurrent(item.link)}>
            {item.name}
          </button>
        );
      })}
      <ReactPlayer
        className="react-player"
        url={current}
        width="750px"
        height="750px"
        style={{ border: "1px solid black", padding: "10px" }}
        controls={true}
        pip={true}
        config={{
          youtube: {
            playerVars: { rel: 0, showinfo: 0 } // Ensure related videos are disabled
          }
        }}
      />
    </div>
  );
}

export default App;
