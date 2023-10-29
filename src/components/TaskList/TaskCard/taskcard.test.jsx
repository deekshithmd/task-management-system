import { render, screen } from "@testing-library/react";
import { TaskCard } from ".";
import { mockData, statusList } from "../../../utils/constants";

describe("Test Task Card", () => {
  it("check whether the task shown", () => {
    render(<TaskCard task={mockData[0]} statusList={statusList} />);

    const element = screen.getByText("first task");
    expect(element).toBeInTheDocument();
  });
});
