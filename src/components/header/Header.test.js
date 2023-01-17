import { render, screen } from "@testing-library/react";
import Header from "../header/Header";

describe("header component test", () => {
  test("component should show", () => {
    render(<Header />);
    const headerElement = screen.getByText(/NBA Fantasy/i);
    expect(headerElement).toBeInTheDocument();
  });
});
