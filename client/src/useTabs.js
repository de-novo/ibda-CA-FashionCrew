import { useState } from "react";
import "./styles.css";

const content = [
  { tab: "Section1", content: `I'm the content of the Section1` },
  { tab: "Section2", content: `I'm the content of the Section2` },
  { tab: "Section3", content: `I'm the content of the Section3` }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  



  return {
    currentItem: allTabs[currentIndex],
    setItem : setCurrentIndex
  };
};

export default function App() {
  const tabs = useTabs(0, content);
  console.log(tabs);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {content.map((section, index) => (
        <button onClick={()=>tabs.setItem(index)}>{section.tab}</button>
      ))}
      {tabs.currentItem.content}
    </div>
  );
}
