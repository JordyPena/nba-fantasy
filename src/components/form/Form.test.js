import { render, screen } from "@testing-library/react";
import Form from "../form/Form";

describe("form component test", () => {
  test("component should show", () => {
    render(<Form />);
    const formElement = screen.getByText(/Search/i);
    expect(formElement).toBeInTheDocument();
  });
});
