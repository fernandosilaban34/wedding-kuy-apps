const BorderText = ({ queue, detail }: { queue: number; detail: string }) => {
  return (
    <div className="flex flex-col">
      <div className="border p-3 rounded-md bg-slate-800 text-white">
        <p className="text-center">{queue}</p>
      </div>
      <p className="text-white font-sans font-light text-[14px] mb-4 text-center">
        {detail}
      </p>
    </div>
  );
};

export default BorderText;
