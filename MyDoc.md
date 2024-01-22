1- $ npx create-react-app movies-router
2- $ npm install react-router-dom
3- wrap the entire app with the library's <BrowserRouter> component in your index.js:
+import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
+   <BrowserRouter>
      <App />
+   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);