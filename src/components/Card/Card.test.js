import { render, screen } from "@testing-library/react";
import Card from "../Card/Card";

describe("card component test", () => {
  test("component should show", () => {
    render(<Card />);
    const cardElement = screen.getByText(/Add To Roster/i);
    expect(cardElement).toBeInTheDocument();
  });
});
