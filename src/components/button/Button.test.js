import { render, screen } from "@testing-library/react";
import Button from "../button/Button";

describe("button component test", () => {
  test("component should show", () => {
    render(<Button />);
    const buttonElement = document.getElementById("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
