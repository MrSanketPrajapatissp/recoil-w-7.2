import {
  useRecoilState,
  useRecoilValue,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atom/count";

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
  return <div>{count}</div>;
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
