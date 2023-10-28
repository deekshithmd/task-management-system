import { render, screen } from "@testing-library/react";
import { TaskList } from ".";
import { mockData, statusList } from "../../utils/constants";

describe("Test TaskList Component", () => {
  it("check by passing mock data", () => {
    render(
      <TaskList
        filteredData={mockData}
        statusList={statusList}
        handleDelete={() => {}}
        handleModal={() => {}}
        handleTask={() => {}}
      />
    );

    const element = screen.getByText("Description: second task");
    expect(element).toBeInTheDocument();
  });
});
