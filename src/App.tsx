import "./styles.scss";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <Provider store={store}>
      <TaskPage />
    </Provider>
  );
}
