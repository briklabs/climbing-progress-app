import { Button } from "antd";
import { useMemo, useState } from "react";
import { Problem, VSumContext, Goal } from "./TrainingVSumContext";
import TrainingVSumProblems from "./TrainingVSumProblems";
import TrainingVSumGoals from "./TrainingVSumGoals";

function VSum() {
  const goals: Goal[] = [
    {
      title: "Grasshopper",
      value: 10,
    },
    {
      title: "Warrior",
      value: 20,
    },
    {
      title: "Yoda",
      value: 30,
    },
  ];

  const problemOptions: Problem[] = [
    {
      title: "V1",
      value: 1,
    },
    {
      title: "V2",
      value: 2,
    },
    {
      title: "V3",
      value: 3,
    },
    {
      title: "V4",
      value: 4,
    },
    {
      title: "V5",
      value: 5,
    },
    {
      title: "V6",
      value: 6,
    },
  ];

  const [selectedGoal, setSelectedGoal] = useState<Goal | undefined>();
  const [sendedProblems, setSendedProblems] = useState<Problem[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<number>(
    problemOptions[0].value
  );

  const addSendedProblem = () => {
    const problem = problemOptions.find(
      (problem) => problem.value === selectedProblem
    );
    if (problem)
      setSendedProblems((prevProblems) => [...prevProblems, problem]);
  };

  const totalPoints = useMemo(
    () => sendedProblems.reduce((total, problem) => total + problem.value, 0),
    [sendedProblems]
  );

  let panel;
  if (selectedGoal) {
    panel = (
      <div className="w-full p-4">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-4xl font-semibold">{selectedGoal.title}</h1>
            <p className="text-sm">
              You have {selectedGoal.value - totalPoints} points to go!
            </p>
          </div>
          <div className="col-span-1 h-48">
            <figure>
              <div className="h-36 w-36 bg-blue-400 rounded-full ml-auto" />
            </figure>
          </div>
        </div>
        <div className="flex-1">
          <TrainingVSumProblems />
        </div>
        <div className="text-center">
          <Button
            onClick={addSendedProblem}
            type="primary"
            className="bg-black"
          >
            Send!
          </Button>
        </div>
      </div>
    );
  } else {
    panel = (
      <div className="px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">
          How hard do you want to send it?
        </h1>
        <TrainingVSumGoals />
      </div>
    );
  }

  if (selectedGoal && totalPoints >= selectedGoal.value) {
    panel = <h1>Nice! You did it!</h1>;
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <VSumContext.Provider
        value={{
          goals,
          problemOptions,
          selectedGoal,
          setSelectedGoal,
          sendedProblems,
          addSendedProblem,
          selectedProblem,
          setSelectedProblem,
          totalPoints,
        }}
      >
        {panel}
      </VSumContext.Provider>
    </div>
  );
}

export default VSum;
