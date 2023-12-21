
import { Provider } from "react-redux";
 import store from "./redux/store";
 import MarkedDownComponent from "./containers/MarkedDownComponent";

function App() {
  return (
    <Provider store={store}>
      <MarkedDownComponent/>
    </Provider>
  );
}
 

export default App;
