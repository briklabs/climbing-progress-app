import { Radio } from "antd";
import { useVSumContext } from "./TrainingVSumContext";

function TrainingVSumProblems() {
  const { selectedProblem, setSelectedProblem, problemOptions } =
    useVSumContext();
  return (
    <Radio.Group
      onChange={(e) => setSelectedProblem(e.target.value)}
      value={selectedProblem}
      className="grid grid-cols-3 gap-4"
    >
      {problemOptions.map((problem) => (
        <Radio
          key={problem.value}
          value={problem.value}
          className="flex flex-col items-center gap-2"
        >
          {problem.title}
        </Radio>
      ))}
    </Radio.Group>
  );
}

export default TrainingVSumProblems;
