import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
reportWebVitals();
//# sourceMappingURL=index.js.map