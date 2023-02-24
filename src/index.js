import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

class WhoAmI extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     year: 26
  //   }
  //   this.nextYear = this.nextYear.bind(this)
  // }
  state = {
    year: 26
  }
  nextYear = () => {
    this.setState(state => ({
      year: ++state.year
    }))
  }

  render() {
    const {name, surname , link} = this.props
    const {year} = this.state
    return (
      <>
          <button onClick={this.nextYear}>++</button>
          <h1>My name is {name} , surname - {surname}, year = {year} </h1>
          <a href={link}>MyProfile</a>
      </>
    )
  }
}


const All = () => {
  return (
    <>
      <WhoAmI name="Abdugafor" surname="Gafarov" link="facebook.com"/>
      <WhoAmI name="Andrey" surname="Lirov" link="facebook.com"/>
      <WhoAmI name="Good" surname="Makov" link="facebook.com"/>
    </>
  )
}
root.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>
)