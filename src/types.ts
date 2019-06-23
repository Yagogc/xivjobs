export interface IJob {
  NAME: string;
  ACRONYM?: string;
  ROLE?: string;
  ROLE_ALT?: string;
  BIT?: string;
  ICON?: string;
  COLOR?: string;
}

export interface ListProps {
  jobs: IJob[];
}

export interface IJobProps {
  children?: string;
  job: IJob;
  index: number;
  key?: any;
}

export interface ITierProps {
  jobs: IJob[];
  children: string;
}
