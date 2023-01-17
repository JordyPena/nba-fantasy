import { render, screen } from "@testing-library/react";
import Footer from "../footer/Footer";

describe("footer component test", () => {
  test("component should show", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Party Pena Presentation/i);
    expect(footerElement).toBeInTheDocument();
  });
});
