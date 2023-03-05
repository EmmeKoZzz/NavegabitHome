import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Home from "../src/pages/Home/Home.index";

describe("Home", () => {
	it("will contain Home sentence", () => {
		//! ARRANGE
		render(<Home />);
		//! ACT
		//! EXPECT
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Home");
	});
});
