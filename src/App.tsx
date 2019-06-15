import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { RankRow, Job } from "./components";
import JOBS from "./constants/jobs";

const INITIAL = Object.values(JOBS).map(job => {
  return job;
});
console.log("TCL: initial", INITIAL);

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
  jobs: IJob[];
}

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const JobList: React.FC<Props> = (props: Props) => {
  const { jobs } = props;
  return (
    <List>
      {jobs.map((job: IJob, index: number) => (
        <Job job={job} index={index} key={job.ACRONYM} />
      ))}
    </List>
  );
};

const App: React.FC = () => {
  const [state, setState] = useState({ jobs: INITIAL });

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    const jobs: any = reorder(
      state.jobs,
      result.source.index,
      result.destination.index
    );
    setState({ jobs });
  }

  return (
    <div>
      <RankRow>Jobs</RankRow>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <JobList jobs={state.jobs} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
