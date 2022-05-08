import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage}>
        <HomePage />
      </Route>
      <Route path="/chats" exact>
        <ChatPage />
      </Route>
    </div>
  );
}

export default App;
