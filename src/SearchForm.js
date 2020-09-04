import React from "react";

export default class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street: "",
      city: "",
      state: "",
      zip: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    console.log(id, value);
    /*
    this.setState({
      [event.target.id]: event.target.value,
    });
    */
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onFormSubmit({
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    });

    this.setState({
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  }
  
  // TODO: form validation
  // - all inputs are required
  // - state must be two letters
  // - zip must be five digits
  // - use novalidate attribute ("noValidate") on form and input elements?

  render() {
    return (
      <div>
        <form 
          className="search-form" 
          onSubmit={this.handleSubmit} >
          <fieldset>
            <legend>Enter Your Sales Location</legend>
            <ul> 
              <li>
                <label htmlFor="street" className="label-street">Street:</label>
                <input id="street" name="street" type="text" className="input-street" 
                  value={this.state.street} onChange={this.handleChange} />
              </li>
              <li>
                <label htmlFor="city">City:</label>
                <input id="city" name="city" type="text" className="input-city" 
                  value={this.state.city} onChange={this.handleChange} />
              </li>
              <li>
                <label htmlFor="state">State:</label>
                <input id="state" name="state" type="text" className="input-state"
                  value={this.state.state} onChange={this.handleChange} />
              </li>
              <li>
                <label htmlFor="zip">Zip:</label>
                <input id="zip" name="zip" type="text" className="input-zip" 
                  value={this.state.zip} onChange={this.handleChange} />
              </li>
            </ul> 
          </fieldset>
          <button type="submit">Find Rates</button>
        </form>
        <p>Form error message</p>
      </div>
    );
  }
}
