# Sales Tax Search

Sales Tax Search is a web application designed to assist tax preparers and
accountants with the often tedious task of looking up sales tax rates.

*This is the second version of the app. The first version does not use React or
any front-end frameworks or routing libraries. Here's the link to it: 
https://github.com/michaelsinghurse/sales-tax-search.*

## Technical Challenges
### Validating Form Input
#### Controlled Components
React has the concept of "controlled components", which is a form element
whose value is controlled by React rather than the element itself. Instead of,
say, an input element or a textarea element maintaining its own state 
internally, React maintains the state and renders it whenever the state changes.

In the form to enter the address to determine the sales tax rates, I have 
four input elements, one each for the street, city, state, and
zip code. Here is what the JSX looks like:

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

Each time the value of one of the input elements changes, the `onChange` event
fires and calls the `handleChange` callback function. Within the callback
function, I take several steps. I first extract the element's name and value 
from the event object, then I validate the value using a separate function. If
there is a problem with the value, a message will be added to an error object,
which enables React to render an error message to the DOM. Finally, I set the 
state of the input element and its error message. This is what the code looks 
like:

```javascript
// client/src/SearchForm.js

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

handleChange(event) {
  const { name, value } = event.target;
  const errors = this.state.errors;
  
  errors[name] = validateElementValue(name, value);

  this.setState({
    [name]: value,
    errors,
  });
}
```

I'd like here to give credit to Eric Bishard for his article about [React form
validation](https://www.telerik.com/blogs/up-and-running-with-react-form-validation). 
I leaned on it to set up my validation logic for the input elements. 

If you reference back to the code block showing the JSX for the form, you can see
that the value of each input element is controlled by the React 
state object. This is what it means to be a "controlled component" then - React
is handling the changes to the input elements, validating the new value, adding
the new value to the state object, and then re-rendering the element with its
value determined by React's state. React is the single source of truth.

#### Displaying Error Messages

#### Preventing Form Submission if Errors Exist


### Setting up the Production Server


## Author
* Michael Singhurse
* michaelsinghurse@gmail.com
