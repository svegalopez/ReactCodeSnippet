import React from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import "./app.css";

const codeJs = `import App from './App'
import Firebase, { FirebaseContext } from './components/Firebase'
          
const FirebaseContext = React.createContext(null)

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
)`;

const codeSql = `SELECT 
  c.id, 
  c.first_name, 
  c.last_name, 
  c.gender,
  p.date AS promotion
FROM customers c
LEFT JOIN sales s ON c.id = s.customer_id
LEFT JOIN promotions p ON c.id = p.customer_id;`;

function App() {
  return (
    <div className="app">
      <h1 className="title">React Code Snippets</h1>
      <div className="snippets">
        <h3 className="sub-title">Multiple Languages</h3>
        <CodeSnippet language={"javascript"}>{codeJs}</CodeSnippet>
        <CodeSnippet language={"sql"}>{codeSql}</CodeSnippet>
      </div>
    </div>
  );
}

export default App;
