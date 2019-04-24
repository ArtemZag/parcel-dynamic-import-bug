import * as React from "react";
const imgSrc = require("/resources/sample.png");

export class SharedComponent extends React.Component<any> {
  render() {
    return <img src={imgSrc} />;
  }
}
