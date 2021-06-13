import React from 'react'

class MyComponent extends React.Component {
  someProp = "blah";

  onClickHandler() {
    console.log(this.someProp);
  }


  render() {
    return <div>
      <div onClick={this.onClickHandler}>Something</div>
    </div>
  }
}