import { render, screen } from "@testing-library/react";
import { TaskForm } from ".";

describe("Testing task handling form", () => {
  it("check title field", () => {
    render(<TaskForm />);

    const element = screen.getByPlaceholderText("Type title here...");
    expect(element).toBeInTheDocument();
  });

  it("check description field", () => {
    render(<TaskForm />);

    const element = screen.getByPlaceholderText("Type description here...");
    expect(element).toBeInTheDocument();
  });
});
