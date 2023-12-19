 import MarkDownContainer from "./containers/markDownContainer";
 import { Provider } from "react-redux";
 import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
       <MarkDownContainer />
    </Provider>
  );
}
 

export default App;
