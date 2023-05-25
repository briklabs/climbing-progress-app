import { Button, Radio, Space } from "antd";
import { useMemo, useState } from "react";

export default function NewRoutinePage() {
  interface Routine {
    title: string;
    value: number;
  }
  const routines: Routine[] = [
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
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | undefined>();

  interface Problem {
    title: string;
    value: number;
  }
  const problemOptions: Array<Problem> = [
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
  ];
  const [sendedProblems, setSendedProblems] = useState<Array<Problem>>([]);
  const [selectedProblem, setSelectedProblem] = useState<Problem["value"]>(
    problemOptions[0].value
  );
  function handleSendedProblem() {
    const problem = problemOptions.find((p) => (p.value = selectedProblem));
    if (!problem) return;
    setSendedProblems([...sendedProblems, problem]);
  }

  const totalPoints = useMemo(
    () =>
      sendedProblems.reduce((total, p) => {
        return total + p.value;
      }, 0),
    [sendedProblems]
  );

  let panel;
  if (selectedRoutine) {
    panel = (
      <>
        <h1>{selectedRoutine.title}</h1>
        <p>
          You got {totalPoints} out of {selectedRoutine.value} points
        </p>
        <div className="py-12">
          <Radio.Group
            onChange={(e) => setSelectedProblem(e.target.value)}
            value={selectedProblem}
          >
            <Space direction="vertical">
              {problemOptions.map((p) => (
                <Radio key={p.value} value={p.value}>
                  {p.title}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
        <Button onClick={handleSendedProblem}>Send!</Button>
        <details>
          <summary>See details</summary>
          <pre>{JSON.stringify(sendedProblems, null, 2)}</pre>
        </details>
      </>
    );
  } else {
    panel = (
      <>
        <h1>Choose your goal</h1>
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
          {routines.map((r) => (
            <Button key={r.value} onClick={() => setSelectedRoutine(r)}>
              {r.title} ({r.value} points)
            </Button>
          ))}
        </div>
      </>
    );
  }
  if (selectedRoutine && totalPoints >= selectedRoutine.value) {
    panel = <h1>Nice! You did it!</h1>;
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      {panel}
    </div>
  );
}
