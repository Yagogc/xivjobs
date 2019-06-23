import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Scrollbars from "react-custom-scrollbars";
import { Job, Tier } from "./components";
import JOBS from "./constants/jobs";
import TIERLIST from "./constants/tiers";
import { ListProps, IJob } from "./types";
import GlobalStyle from "./Global";

const INITIAL = Object.values(JOBS).map(job => {
  return job;
});
const TIERS = Object.values(TIERLIST).map(tier => {
  return tier;
});

const DATA = () => {
  let data = {};
  Object.values(TIERLIST).map(tier => {
    data = { ...data, [tier]: [] };
    return null;
  });
  data = { ...data, jobs: INITIAL };
  return data;
};
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  console.log({ source });
  console.log({ destination });
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const List = styled.div`
  display: flex;
  flex-direction: row;
`;

const JobList: React.FC<ListProps> = (props: ListProps) => {
  const { jobs } = props;
  return (
    <Scrollbars autoHeight style={{ background: "rgba(255, 255, 255, 0.4)" }}>
      <List>
        {jobs.map((job: IJob, index: number) => (
          <Job job={job} index={index} key={job.ACRONYM} />
        ))}
      </List>
    </Scrollbars>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 720px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const data = DATA();
  const [state, setState] = useState<{ [key: string]: any[] }>(data);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    let data: any;
    if (!result.destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    if (result.destination.droppableId === result.source.droppableId) {
      data = reorder(state.jobs, result.source.index, result.destination.index);
      setState({ ...state, jobs: data });
    } else {
      console.log(result);
      data = move(
        state[result.source.droppableId],
        state[result.destination.droppableId],
        result.source,
        result.destination
      );

      setState({
        ...state,
        [result.source.droppableId]: data[result.source.droppableId],
        [result.destination.droppableId]: data[result.destination.droppableId]
      });
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        {TIERS.map(tier => {
          return (
            <Tier key={tier} jobs={state[tier]}>
              {tier}
            </Tier>
          );
        })}
        <Droppable droppableId="jobs" direction="horizontal">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <JobList jobs={state.jobs} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default App;
