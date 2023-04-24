import React from "react";
import Listagem from "./components/Listagem";

function App() {
	return (
		<div className="App">
			<Listagem initialItems={["Wellinne", "Nascimento", "Aquino"]} />
		</div>
	);
}

export default App;
