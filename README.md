# Sales Tax Search

Sales Tax Search is a web application designed to assist tax preparers and
accountants with the often tedious task of looking up sales tax rates.

*This is the second version of the app. The first version does not use React or
any front-end frameworks or routing libraries. Here's the link to it: 
https://github.com/michaelsinghurse/sales-tax-search.*

## Technical Challenges
### Validating Form Input
One challenge I faced was about how to validate form inputs. 

React has the concept of "controlled component", which is a form element
whose value is controlled by React rather than the element itself. Instead of
a form element maintaining its own state internally, React maintains the state 
and renders it whenever the state changes. React is said to be the source of 
truth for the element.

You can see this in the code below. Each input element's value is set
by React when it's rendered, and whenever the value is changed by the user, a 
callback function is triggered to handle the new value.

```javascript
// client/src/SearchForm.js

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
```

Within the callback function, I extract the element's name and value 
from the event object and validate the value using a separate function. If
there is a problem with the value, a message will be added to an error object,
which which will be displayed to the user when the form renders again. 
Finally, I set the state of the input element and its error message, if there
is one.

Here is what all that looks like:

```javascript
// client/src/SearchForm.js

// helper function external to the class
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
// ...
  handleChange(event) {
    const { name, value } = event.target;
    const errors = this.state.errors;
    
    errors[name] = validateElementValue(name, value);

    this.setState({
      [name]: value,
      errors,
    });
  }
// ...
}
```

I'd like here to give credit to Eric Bishard for his article about [React form
validation](https://www.telerik.com/blogs/up-and-running-with-react-form-validation). 
I leaned on it to set up my validation logic for the input elements. 

### Setting up the Production Server


## Author
* Michael Singhurse
* michaelsinghurse@gmail.com
