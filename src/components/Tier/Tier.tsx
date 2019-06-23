import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Job } from "..";
import { ITierProps } from "../../types";

const List = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-width: 100px;
  max-height: 100px;
  height: 100px;
  width: 100%;
  background: rebeccapurple;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-width: 100px;
  min-height: 20px;
  width: 100%;
  background: red;
  margin: 10px 0;
`;

const Rank = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

const Tier: React.FC<ITierProps> = ({ jobs, children }) => {
  return (
    <Wrapper>
      <Rank>{children}</Rank>
      <Droppable droppableId={children} direction="horizontal">
        {provided => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {jobs.map((job, index) => (
              <Job job={job} index={index} key={job.ACRONYM} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Tier;
