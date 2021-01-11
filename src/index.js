import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from "./components/Loading/Loading";
const App = lazy(() => import("./App"));
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

