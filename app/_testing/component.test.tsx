import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../_components/Header";
import "@testing-library/jest-dom/vitest"
it("should return header component", () => {
    render(<Header />)
    screen.debug()
    expect(screen.getByRole("group")).toBeInTheDocument()
})