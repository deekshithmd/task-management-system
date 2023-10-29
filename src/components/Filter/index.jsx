// package imports
import styled from "styled-components";

// Filter component
export const Filter = ({ filters, handleSelectedFilter, selectedFilter }) => {
  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterItem
          key={filter.id}
          onClick={() => handleSelectedFilter(filter)}
          background={
            selectedFilter?.value === filter?.value ? "#a19aed" : "#ffff"
          }
          color={selectedFilter?.value === filter?.value ? "#ffff" : ""}
        >
          {filter.label}
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    max-width: 100vw;
  }
`;

const FilterItem = styled.span`
  padding: 5px;
  min-width: 90px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  color: ${(props) => props.color || "#000"};
  background: ${(props) => props.background || "transparent"};
  &:hover {
    background: #a19aed;
    color: #ffffff;
  }
  @media (max-width: 480px) {
    min-width: fint-content;
    padding: 5px 0px;
  }
`;
