import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IJob {
  NAME: string;
  ACRONYM?: string;
  ROLE?: string;
  ROLE_ALT?: string;
  BIT?: string;
  ICON?: string;
  COLOR?: string;
}

interface Props {
  children?: string;
  job: IJob;
  index: number;
  key?: any;
}

const JobWrapper = styled.span`
  padding: 10px;
  margin: 10px;
  border: 1px solid red;
`;

const Job: React.FC<Props> = (props: Props) => {
  const { job, index } = props;
  return (
    <Draggable draggableId={job.NAME} index={index}>
      {provided => (
        <JobWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {job.NAME}
        </JobWrapper>
      )}
    </Draggable>
  );
};

export default Job;
