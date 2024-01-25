import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/", { method: "GET" });
      const json = await res.json();
      console.log(json);
    })();
  }, []);

  return <div style={{ fontSize: 150, transform: "matrix(1, 0, 0, 1, 0, 0)" }}>test</div>;
}

export default App;
