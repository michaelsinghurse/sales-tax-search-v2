import React from "react";

export default class CopyButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const tooltipContainer = event.currentTarget.children[0];
    const input = document.querySelector(this.props.targetId);
    input.select();
    
    // Clipboard API is a recent addition to spec, while document.execCommand
    // is deprecated
    if (navigator.clipboard) {
      let tooltipText;
      navigator.clipboard.writeText(input.value)
        .then(() => {
          tooltipText = "Copied!"; 
        })
        .catch(_error => {
          tooltipText = "Press Ctrl+C to copy!";
        })
        .finally(() => {
          tooltipContainer.innerText = tooltipText;
          setTimeout(() => {
            tooltipContainer.innerText = "Copy";
          }, 3 * 1000);
        });
    } else {
      document.execCommand("copy");
      tooltipContainer.innerText = "Copied!";
      setTimeout(() => {
        tooltipContainer.innerText = "Copy";
      }, 3 * 1000);
    }
  }

  render() {
    return (
      <button type="button" className="btn-copy" onClick={this.handleClick} 
        aria-label="Copy rate to clipboard">.
        <span className="tooltiptext">Copy</span>
      </button>
    );
  }
}
