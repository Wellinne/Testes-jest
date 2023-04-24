import React from "react";
import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Listagem from "../components/Listagem";

describe("Listagem Component", () => {
	it("should render list items", () => {
		const { getByText } = render(<Listagem initialItems={["Wellinne", "Nascimento", "Aquino"]}/>);

		expect(getByText("Wellinne")).toBeTruthy();
	});

	it("should add new item to list", async () => {
		const { getByText, getByPlaceholderText } = render(<Listagem initialItems={["Wellinne", "Nascimento", "Aquino"]}/>);
 
		const input = getByPlaceholderText("Novo item");
		const button = getByText("Adicionar");

		await userEvent.type(input, "Novo");
		button.click();

		await waitFor(() => {
			expect(getByText("Novo")).toBeInTheDocument();
		});
	});

	it("should remove item to list", async () => {
		const { getByText, getAllByText } = render(<Listagem initialItems={["Wellinne", "Nascimento", "Aquino"]}/>);
 
		const removeButton = getAllByText("Remover");

		removeButton[0].click();

		await waitForElementToBeRemoved(() => {
			return getByText("Wellinne");
		});
	});
});