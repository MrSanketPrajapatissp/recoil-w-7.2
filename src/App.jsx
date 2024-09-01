import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atom/count";
import { useMemo } from "react";

// Propdrilling

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <div>{count}</div>
      <EventCountRender />
    </div>
  );
}

function EventCountRender() {
  // const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Button rendering"); /// this statement not rendering again when the count changes or buttons are not rendering again on screen
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(function (c) {
            // the arrow function syntax and this syntax works the same
            return c - 1;
          });
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
