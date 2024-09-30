import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./styles/global.css";
import store from "./utilities/store.js";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
