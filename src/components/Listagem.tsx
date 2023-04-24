import React, { useState } from "react";

type ListProps = {
  initialItems: string[];
};

function Listagem({initialItems}: ListProps) {
	const [newItem, setNewItem] = useState("");
	const [list, setList] = useState<string[]>(initialItems);

	function addToList() {
		setTimeout(() => {
			setList(state => [...state, newItem]);
		}, 500);
	}

	function removeToList(itens: string) {
		setTimeout(() => {
			setList(state => state.filter(item => item !== itens));
		}, 500);
	}

	return (
		<div className="App">
			<input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Novo item"/>
			<button onClick={addToList}>Adicionar</button>
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => removeToList(item)}>Remover</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Listagem;
