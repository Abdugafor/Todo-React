import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Header = () => {
      return <h2>Wassup Dude</h2>
}

const Field = () => {
  const styleField = {
    width: '300px'
  }
  return <input
               type="text" 
               style={styleField}
               />
}

const Btn = () => {
  const text = "Log in"
  const logged = false
  return <button>{logged ? null : text}</button>

}

const App = () => {
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>

    </div>
  )
}

root.render(
  <App/>
);


