import { createContext, useContext } from "react";

export interface Goal {
  title: string;
  value: 10 | 20 | 30;
}

export interface Problem {
  title: string;
  value: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface VSumContextType {
  goals: Goal[];
  problemOptions: Problem[];
  selectedGoal: Goal | undefined;
  setSelectedGoal: (goal: Goal | undefined) => void;
  sendedProblems: Problem[];
  addSendedProblem: (problem: Problem) => void;
  selectedProblem: number;
  setSelectedProblem: (value: number) => void;
  totalPoints: number;
}

export const VSumContext = createContext<VSumContextType>({
  goals: [],
  problemOptions: [],
  selectedGoal: undefined,
  setSelectedGoal: () => null,
  sendedProblems: [],
  addSendedProblem: () => null,
  selectedProblem: 0,
  setSelectedProblem: () => null,
  totalPoints: 0,
});

export const useVSumContext = () => useContext(VSumContext);
