import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { IJobProps } from "../../types";

const JobWrapper = styled.span`
  padding: 10px;
  max-height: 100px;
`;

const Img = styled.img`
  height: 80px;
`;

const Job: React.FC<IJobProps> = (props: IJobProps) => {
  const { job, index } = props;
  return (
    <Draggable draggableId={job.NAME} index={index}>
      {provided => (
        <JobWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Img src={job.BIT} alt={job.ACRONYM} />
        </JobWrapper>
      )}
    </Draggable>
  );
};

export default Job;
