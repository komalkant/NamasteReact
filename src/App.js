import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Main from "./components/Main";

// React.createElement => ReactElement JS-Object => HTMLElement(render)

// const heading = React.createElement('h1', {
//     id: 'heading'
// }, 'H1 from React');

// JSX (Babel convert this)=> React.createElement => ReactElement JS-Object => HTMLElement(render)
// Jsx (transpiled before it's reached JS) transpiled use Babel
// const jsxHeading = (<h1 className='heading' id='heading' tabIndex="5">
//     This is from React JSX
// </h1> )

// const Title = () => <h1>This is Title Component</h1>;

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
