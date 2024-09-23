// import Card from "./Card";
import { useState, useRef } from "react";
import { CardContents } from "./CardContents";
import ToDo from "./ToDo";

// const ShowCards = (item) => {
//   return (
//     <Card
//       key={item.id}
//       title={item.title}
//       img={item.img}
//       content={item.content}
//     />
//   );
// };

const App = () => {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState();
  const intervalRef = useRef(null);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const search = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = CardContents.filter((item) => item.title.length > 6);
      setFilteredData(filtered);
      setLoading(false);
    }, 500);
  };

  //without stop
  // const showTime = () => {
  //   const currTime = new Date().toLocaleTimeString();
  //   setTime(currTime);
  //   setInterval(() => {
  //     const updatedTime = new Date().toLocaleTimeString();
  //     setTime(updatedTime);
  //   }, 1000);
  // };

  const showTime = () => {
    if (intervalRef.current) return;
    const currTime = new Date().toLocaleTimeString();
    setTime(currTime);

    intervalRef.current = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);
  };

  const stopTime = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  return (
    <div style={{ backgroundColor: color }}>
      {CardContents.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.img} alt={item.title} />
          <p>{item.content.substring(0, 2)}</p>
        </div>
      ))}
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("olive");
        }}
      >
        Olive
      </button>
      <button onClick={handleIncrement}>Icrement</button>
      {count}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={search}>Search</button>
      {loading ? (
        "Loading.."
      ) : (
        <>
          {filteredData.length > 0 && (
            <div>
              {filteredData.map((item) => (
                <div key={item.id}>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* {CardContents.map(ShowCards)} */}

      {/* <Card
        title="Hello"
        img="/WhatsApp Image 2023-07-27 at 9.02.03 PM.jpeg"
        content="Testing.."
      />
      <Card
        title="Hello2"
        img="/WhatsApp Image 2023-07-27 at 9.02.03 PM.jpeg"
        content="Testing2.."
      /> */}

      {/* Time */}
      <button onClick={showTime}>Time</button>
      <p>{time}</p>
      <button onClick={stopTime}>Stop</button>

      <ToDo />
    </div>
  );
};

export default App;
