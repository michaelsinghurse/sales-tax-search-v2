import React from "react";

export default class CopyButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(this.props.targetId);
    console.log(event.target.nodeName);
    /*
    const id = this.props.inputs.searchId;
    
    // eslint-disable-next-line no-undef
    const clipboard = new ClipboardJS(`#search${id} .btn-copy`);

    clipboard.on("success", event => {
      const $tooltip = $(event.trigger).find(".tooltiptext");
      $tooltip.text("Copied!");
      setTimeout(() => {
        $tooltip.text("Copy");
      }, 3 * 1000);
    });

    clipboard.on("error", event => {
      const $tooltip = $(event.target).find(".tooltiptext");
      $tooltip.text("Press Ctrl+C to copy");
      setTimeout(() => {
        $tooltip.text("Copy");
      }, 3 * 1000);
    });
    */
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
