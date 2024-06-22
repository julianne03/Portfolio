import React from "react";
import '../styles/common/Page.css';
import '../styles/page/Main.css';

function learnMoreBtnOnClick(): void {
  const learnMoreBtn: Element | null = document.getElementById("tech");
  learnMoreBtn?.scrollIntoView({ behavior: "smooth", inline: "end" });
}

class Main extends React.Component {
  render () {
    return (
        <div className="mainPage">
          <div>
            <div className="intro">Hello, everyone!</div>
            <div className="name">My name is Julianne Yi.</div>
            <div className="description">
              <p>I'm a newbie web developer in the United States.<br></br>
                I'm a freshman majoring in computer science at Bellevue College in Bellevue, WA.<br></br>
                I like to code in JavaScript, but I always learn new programming languages and apply them to my projects.<br></br>
                Please Click my projects and blog page to see what I'm working on now!</p>
            </div>
            <div className="more" onClick={learnMoreBtnOnClick}>Learn More</div>
            <div id="tech">
              Tech Stack
              {/* temporary */}
              <div className="skillSet"></div> temporary
            </div>
            <div id="contact">Contact</div>
          </div>
          <div>
            <div className="web">WebDeveloper</div>
          </div>
        </div>
    )
  }
}

export default Main;