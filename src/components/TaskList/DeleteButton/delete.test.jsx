import { render, screen } from "@testing-library/react";
import { DeleteButton } from ".";

describe("Test Delete Button", () => {
  it("check delete button text", () => {
    render(<DeleteButton />);

    const element = screen.getByText("Delete this task");
    expect(element).toBeInTheDocument();
  });
});
