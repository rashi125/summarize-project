import { useState } from "react";

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <div className="w-full  bg-[rgba(98,116,155,0.4)] p-6 rounded-xl border border-black  shadow-2xl shadow-white-50">
      <textarea
        className="w-full p-4 border rounded-xl h-40 bg-white text-black"
        placeholder="Paste your article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => onSubmit(text)}
        className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Summarize
      </button>
    </div>
  );
};

export default TextInput;