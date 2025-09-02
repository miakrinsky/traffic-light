import { useEffect, useState } from "react";
import "./App.css";

const colors = [0, 1, 2];
function App() {
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="background">
        <div className="traffic-light-container">
          <div className={isActive === colors[0] ? "red round" : "round"}></div>
          <div
            className={isActive === colors[1] ? "yellow round" : "round"}
          ></div>
          <div
            className={isActive === colors[2] ? "green round" : "round"}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
