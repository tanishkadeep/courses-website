export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full h-3 bg-gray-200  rounded-xl">
      <div
        className="h-full bg-blue-500 rounded-xl"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
