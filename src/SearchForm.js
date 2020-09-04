import React from "react";

// TODO:
// Street and City are required fields, but there will only be values in the
// errors object for them if the user enters values. If they are simply skipped,
// the values will remain empty strings and the form will validated.

const areThereErrors = errorsObject => {
  return Object.values(errorsObject).some(value => value !== "");
};

const makeErrorsListItems = errorsObject => {
  const listItems = [];
  for (let key in errorsObject) {
    const value = errorsObject[key];
    if (value) {
      listItems.push(<li key={key}>{value}</li>);
    }
  }
  return listItems;
};

export default class AddressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street: "",
      city: "",
      state: "",
      zip: "",
      errors: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const errors = this.state.errors;

    switch (name) {
      case "street":
        errors.street = value.length > 0
          ? ""
          : "Street is required.";
        break;
      case "city":
        errors.city = value.length > 0 
          ? ""
          : "City is required.";
        break;
      case "state":
        errors.state = /^[A-Za-z]{2}$/.test(value)
          ? ""
          : "State must contain the two-letter state abbreviation.";
        break;
      case "zip":
        errors.zip = /^\d{5}$/.test(value)
          ? ""
          : "Zip must contain the 5-digit zip code.";
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if (areThereErrors(this.state.errors)) return;

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
  
  render() {
    const errorsList = makeErrorsListItems(this.state.errors);

    return (
      <div>
        <form 
          noValidate
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
        <ul>
          {errorsList}
        </ul>
      </div>
    );
  }
}
