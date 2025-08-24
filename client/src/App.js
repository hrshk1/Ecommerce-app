import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout.js';

function App() {
  return (
    <>
      <Layout>
      <h1> Ecommerce App </h1>
      </Layout>
      {/* when you wrap things inside layout they will be passed as props.children in layout */}
    </>
  );
}

export default App;
