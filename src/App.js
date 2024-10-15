import "./App.css";

function App() {
  return (
    <>
    <div className="road">
      <div className="line">
        <p>linear</p>
        <img className="car" src="/car.png" alt="car" />
      </div>
      <div className="line">
        <p>ease</p>
        <img className="car" src="/car.png" alt="car" />
      </div>
      <div className="line">
        <p>ease-in</p>
        <img className="car" src="/car.png" alt="car" />
      </div>
      <div className="line">
      <p>ease-out</p>
        <img className="car" src="/car.png" alt="car" />
      </div>
      <div className="line">
      <p>ease-in-out</p>
        <img className="car" src="/car.png" alt="car" />
      </div>
    </div>

    <div className="circle">
      <div className="circle1">
        <div className="circle2"></div>
      </div>
    </div>
    
    </>
  );
}

export default App;
