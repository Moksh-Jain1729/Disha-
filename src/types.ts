export type Board = 'SSC' | 'CBSE' | 'ICSE';

export type StreamId = 'pcm' | 'pcb' | 'commerce' | 'arts' | 'vocational' | 'emerging';

export interface StreamInfo {
  id: StreamId;
  title: string;
  subtitle: string;
  icon: string;
  secondaryIcon?: string;
  color: string;
  bgLight: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  tagline: string;
  benefitTitle: string;
  benefitDesc: string;
  popularCareers: string[];
}

export interface ResourceItem {
  id: string;
  streamId: StreamId;
  type: 'Watch' | 'Read' | 'Try';
  title: string;
  description: string;
  eligibility: 'Post 10th' | 'Post 12th' | 'Post 10th/12th';
  url: string;
  examName?: string;
  tags: string[];
  provider?: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  level: number; // 0, 1, 2, 3
  parentId: string | null;
  streamId: StreamId;
  description: string;
  accentColor: string;
  fullForm?: string;
  eligibility?: string;
  examPattern?: string;
  lastVerified?: string;
  popularExams?: string[];
  resources?: ResourceItem[];
  careerScope?: string;
}

export interface QuizOption {
  text: string;
  streamId: StreamId;
  label: string; // e.g. "A", "B", "C", "D", "E", "F"
  subtext?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

export type NodeStatus = 'not-started' | 'interested' | 'explored';

export interface ProgressState {
  [nodeId: string]: NodeStatus;
}
