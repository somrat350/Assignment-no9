const Loading = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-2 justify-center items-center">
      <div className="flex items-center text-4xl font-bold gap-3 text-[#632EE3]">
        <span>L</span>
        <div className="loader"></div>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    </div>
  );
};

export default Loading;
