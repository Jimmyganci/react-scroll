import { useEffect, useRef, useState } from "react";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  const [heightScreen, setHeightScreen] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [activeScroll, setActiveScroll] = useState(true);

  useEffect(() => {
    setHeightScreen(window.innerHeight);
    window.addEventListener("resize", () => {
      setHeightScreen(window.innerHeight);
    });
  }, []);

  const page = [
    {
      className: "section1",
      component: <Section1 />,
    },
    {
      className: "section2",
      component: <Section2 />,
    },
    {
      className: "section3",
      component: <Section3 />,
    },
    {
      className: "section4",
      component: <Section4 />,
    },
  ];

  const scroll = (valueScroll, index) => {
    if (scrollValue >= 0) {
      if (valueScroll > 0 && index < page.length - 1) {
        setScrollValue(index + 1);
        setActiveScroll(false);
      } else {
        if (scrollValue > 0) {
          setScrollValue(index - 1);
          setActiveScroll(false);
        }
      }
      setTimeout(() => {
        setActiveScroll(true);
      }, 1000);
    }
  };

  return (
    <div className="app" style={{ height: `${heightScreen}px` }}>
      {page.map((el, index) => (
        <div
          key={index}
          className={el.className}
          style={{
            height: `${heightScreen}px`,
            transform: `translateY(-${heightScreen * scrollValue}px)`,
          }}
          onWheel={(e) => activeScroll && scroll(e.deltaY, index)}
        >
          {el.component}
        </div>
      ))}
    </div>
  );
}

export default App;
