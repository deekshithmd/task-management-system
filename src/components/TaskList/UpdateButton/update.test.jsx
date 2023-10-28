import { render, screen } from "@testing-library/react";
import { UpdateButton } from ".";

describe("Test Update Button", () => {
  it("check update button text", () => {
    render(<UpdateButton />);

    const element = screen.getByText("Update this task");
    expect(element).toBeInTheDocument();
  });
});
