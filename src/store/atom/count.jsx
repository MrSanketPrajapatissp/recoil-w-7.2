import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2 == 0;
  },
});

export const filterTodos = selector({
  key: "filterTodos",
  get: (props) => {
    const todos = props.get(todoAtom);
    const filter = props.get(filtertodo);
    return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
  }
})
