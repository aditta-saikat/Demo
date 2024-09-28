import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Get the root element
var rootElement = document.getElementById("root");
// Check if the root element exists
if (!rootElement) {
    throw new Error('Root element not found');
}
// Create the root
var root = ReactDOM.createRoot(rootElement);
// Render the application
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
// Measure performance
reportWebVitals();
