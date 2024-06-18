import React from "react";
import '../styles/common/Page.css';
import '../styles/page/Main.css';

class Main extends React.Component {
  render () {
    return (
        <div className="page">
            <div className="intro">Hello, everyone!</div>
            <div className="name">My name is Julianne Yi.</div>
            {/* <div className="job">Web Developer</div> */}

            <div className="description">
            I'm a newbie web developer in the United States.<br></br>
            I'm a freshman majoring in computer science at Bellevue College in Bellevue, WA.<br></br>
            I like to code in JavaScript, but I always learn new programming languages and apply them to my projects.<br></br>
            Please Click my projects and blog page to see what I'm working on now!
            </div>
            <h3 id="contact">Contact</h3>    
        </div>
    )
  }
}

export default Main;