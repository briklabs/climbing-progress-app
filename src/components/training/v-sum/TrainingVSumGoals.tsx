import { Button } from "antd";
import { useVSumContext } from "./TrainingVSumContext";

function TrainingVSumGoals() {
  const { setSelectedGoal, goals } = useVSumContext();
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {goals.map((goal) => (
        <Button
          key={goal.value}
          onClick={() => setSelectedGoal(goal)}
          type="primary"
          className="w-full h-16 bg-black"
        >
          {goal.title} ({goal.value} points)
        </Button>
      ))}
    </div>
  );
}

export default TrainingVSumGoals;
