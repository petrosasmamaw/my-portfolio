import React from "react";
import "../css/features.css"
import laptop from "../images-all/laptop.svg"
import mouse from "../images-all/mouse.svg"
import braces from "../images-all/braces.svg"

function Features() {
    return (
        <div id="features">
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <img src={laptop} alt="Responsive Design" />
            </div>
            <h3>Responsive Design</h3>
            <p>Websites adjust across all screen sizes. Mobile, tablet, desktop — perfect display everywhere. Enhances accessibility and improves user experience. Flexible layouts using CSS media queries.</p>
            <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
          </div>
      
          <div className="feature">
            <div className="feature-icon">
              <img src={mouse} alt="Interactive UI/UX" />
            </div>
            <h3>Interactive UI/UX Components</h3>
            <p>Dynamic elements improve how users interact. Includes sliders, modals, tabs, and animations. JavaScript or frameworks power user actions. Focus on smooth and intuitive design.</p>
            <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
          </div>
      
          <div className="feature">
            <div className="feature-icon">
                <img src={braces} alt="Clean Code" />
            </div>
            <h3>Clean Maintainable Code Structure</h3>
            <p>Organized code with reusable component structure. Semantic HTML, modular CSS, clear logic. Follows industry best coding practices always. Easy to read, extend, and debug.</p>
            <a href="https://t.me/Nehemiah00" className="icon-link">Contact to action</a>
          </div>
        </div>
      </div>
    )
}

export default Features;