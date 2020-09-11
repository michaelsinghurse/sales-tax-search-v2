import React from "react";

const areThereErrors = errorsObject => {
  return Object.values(errorsObject).some(value => value !== "");
};

const makeErrorsListItems = errorsObject => {
  const listItems = [];
  for (let key in errorsObject) {
    const value = errorsObject[key];
    if (value) {
      listItems.push(<li key={key}>{"\u26a0" + value}</li>);
    }
  }
  return listItems;
};

const validateElementValue = (elementName, elementValue) => {
  let errorMessage = "";

  switch (elementName) {
    case "street":
      errorMessage = elementValue.trim().length > 0
        ? ""
        : "Street is required.";
      break;
    case "city":
      errorMessage = elementValue.trim().length > 0 
        ? ""
        : "City is required.";
      break;
    case "state":
      errorMessage = /^[A-Za-z]{2}$/.test(elementValue)
        ? ""
        : "State must contain the two-letter state abbreviation.";
      break;
    case "zip":
      errorMessage = /^\d{5}$/.test(elementValue)
        ? ""
        : "Zip must contain the 5-digit zip code.";
      break;
    default:
      break;
  }

  return errorMessage;
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
    
    errors[name] = validateElementValue(name, value);

    this.setState({
      [name]: value,
      errors,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const errors = this.state.errors;
    const elements = event.target.elements;

    for (let index = 0; index < elements.length; index += 1) {
      const element = elements[index];
      if (element.nodeName !== "INPUT") continue;
      errors[element.name] = validateElementValue(element.name, element.value); 
    }

    if (areThereErrors(errors)) {
      this.setState({ errors });
      return;
    } 

    this.props.onFormSubmit({
      street: this.state.street.trim(),
      city: this.state.city.trim(),
      state: this.state.state.trim(),
      zip: this.state.zip.trim(),
    });

    this.setState({
      street: "",
      city: "",
      state: "",
      zip: "",
      errors,
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
        <ul className="search-form-errors">
          {errorsList}
        </ul>
      </div>
    );
  }
}
