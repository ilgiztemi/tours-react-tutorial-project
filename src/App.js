import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter(el => el.id !== id);
    setTours(newTours);
  }
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setIsLoading(false);
      setTours(tours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  else if(tours.length === 0) {
    return(
      <main>
        <div className="title">
          <h2>No tours left!</h2>
          <button onClick={() => fetchData()} className="btn">Reset</button>
        </div>
      </main>
    )
  }
   else {
    return (
      <main>
        <Tours removeTour={removeTour} tours={tours} />
      </main>
    );
  }
}

export default App;
