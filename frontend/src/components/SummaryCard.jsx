const SummaryCard = ({ summary ,type}) => {
  return (
    <div className="mt-6  w-full  bg-[rgba(98,116,155,0.4)] p-6 rounded-xl border border-black  shadow-2xl shadow-white-50">
      <h2 className="text-lg font-semibold mb-2 color-[#4FD1C5]"> {type} Summary</h2>
      <p className=" #E2E8F0">{summary}</p>
    </div>
  );
};

export default SummaryCard;