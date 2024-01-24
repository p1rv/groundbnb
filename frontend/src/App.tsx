import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/", { method: "GET" });
      const json = await res.json();
      console.log(json);
    })();
  }, []);

  return <div>test</div>;
}

export default App;
