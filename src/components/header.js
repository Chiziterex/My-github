//SOME LEARNING CODE
import React from "react";

//create root component
const Header = () => {
  function removeInputBox(){
      let element = document.getElementById("addRepo");
      element.classList.remove("repositoty-inputBox");
      element.classList.add("button");
  }

  function addInputBox(){
    let element = document.getElementById("addRepo");
      element.classList.remove("button");
      element.classList.add("repositoty-inputBox");
  }
  return (
    <div className="header-container">
      <div className="header">
        <h1>my github repositories </h1>
        <a href="https://github.com/Chiziterex" className="githubAt">
          @chiziterex
        </a>
        <div id="addRepo" className="button">
          <button className="btn" onClick={addInputBox}>
            create new repository
          </button>
          <div className="input">
            <div>
            <input
              type="text"
              placeholder="Name Repository..."
              // onChange={checkValue}
              name="searchValue"
            />
            <button className="btnCreate">create</button>
            </div>
            <div className="cancel">
              <button onClick={removeInputBox}>cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
