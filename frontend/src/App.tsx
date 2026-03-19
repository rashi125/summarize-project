import { useState } from "react";
import TextInput from "./components/TextInput";
import SummaryCard from "./components/SummaryCard";
import Loader from "./components/Loader";
import { summarizeText } from "./services/api";

function App() {
  const [summaries, setSummaries] = useState({ extractive: "", abstractive: "" });
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleSummarize = async (text) => {
    if (!text.trim()) return;

    setLoading(true);
    // Track word count for the UI stats
    setWordCount(text.split(/\s+/).filter(Boolean).length);
    
    try {
      const res = await summarizeText(text);
      setSummaries({
        extractive: res.extractive_summary,
        abstractive: res.abstractive_summary,
      });
    } catch (error) {
      console.error("Summarization failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-slate-200 selection:bg-cyan-500/30 font-sans">
 

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header with Gradient Text */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#80FFF0] to-[#BC8FFF] bg-clip-text text-transparent inline-flex items-center gap-3">
            <span className="text-4xl">🧠</span> AI Text Summarizer
          </h1>
          <p className="text-slate-500 mt-3 text-lg">Distill complex text into actionable insights instantly.</p>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">
          
          {/* Left Column: Input */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-[#80FFF0] font-semibold uppercase tracking-wider text-sm">Input Text</h2>
              {wordCount > 0 && (
                <span className="text-xs text-slate-500">Words: {wordCount}</span>
              )}
            </div>
            <TextInput onSubmit={handleSummarize} isLoading={loading} />
          </section>

          {/* Right Column: Output */}
          <section className="space-y-6">
            <h2 className="text-[#BC8FFF] font-semibold uppercase tracking-wider text-sm px-1">Generated Insights</h2>
            
            {loading ? (
              <div className="flex flex-col gap-4">
                <Loader />
                <p className="text-center text-slate-500 animate-pulse">Analyzing context...</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {summaries.extractive && (
                  <SummaryCard 
                    summary={summaries.extractive} 
                    type="Extractive" 
                    accentColor="#4FD1C5"
                  />
                )}
                {summaries.abstractive && (
                  <SummaryCard 
                    summary={summaries.abstractive} 
                    type="Abstractive" 
                    accentColor="#9F7AEA"
                  />
                )}
                {!summaries.extractive && !loading && (
                  <div className="h-64 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-600">
                    <p>Enter text on the left to see results</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;