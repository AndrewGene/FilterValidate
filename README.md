# FilterValidate
==============

This library offers BOTH filtering and validation of text inputs for html inputs.

Also, it provides the ability to show errors/messages.

## Features
- No javascript will need to be written on your part to start the validation
- Any new input elements added to the DOM will also gain validation immediately
- HTML5 and HTML4 support
- Exposes simple CSS classes to easily style elements
- Validation and filtering is controlled via CSS classes
- Validation happens when you fire it in code so you don't bother your user as they are filling out the form
- Filtering happens on keydown
- Validation happens on keyup
- Validation will also happen on PASTE and will stop entry if the pasted text is not valid for the given regex applied
- Objects can be passed into the validation/message functions via jQuery object or selector (with or without '#')
- __Works well with ASP.NET (simply pass around the ID of the element--no need to worry about the server renaming it on the page)__
- 'Identify' feature will tell you what rules a string will match (try using it on keyup event)

## Important
You must not use 
```javascript
$('body').unbind('keyup');
```
in your code or you will undo all of the event handlers.

Also, this file is _pretty_ big for javascript.  That is on purpose.

Take out what you don't need and minify away.  The size should be fairly managable after that.


## Requirements
\>= jQuery 1.7

## Things you can filter/validate
- Names
- Letters (with and without spaces)
- Whole Numbers (positive and negative)
- Floats (positive and negative)
- Credit Card Numbers
- Phone Numbers
- Email Addresses
- Address (street only)
- Zip Codes
- Alphanumerics (with and without spaces)
- IP Addresses
- MAC Addresses
- Latitudes
- Longitudes
- GPS Points (e.g. 35.09,-92.51)
- URLs
- Difficult Passwords
- Bank Routing Number
- Regex passed in via CSS class (HTML4)
- Regex passed in via the "pattern" attribute (HTML5)
- One input's value equals another input's value

## Usage
All "filter" CSS classes start with "filter-" and all validation CSS classes start with "regex-" (Validation isn't 'simply' regex in some cases. For example, the credit card validation does several checks).

If you wanted both filter and validate a credit card you would write
```javascript
<input id="txtCCNumber" type="text" maxlength="19" class="filter-credit-card regex-credit-card"/>
```

#### List of filter/validation CSS classes</h4>
- ```filter-name``` ```regex-name```
- ```filter-letters``` ```regex-letters```
- ```filter-letters-with-spaces``` ```regex-letters-with-spaces```
- ```filter-currency``` ```regex-currency```
- ```filter-numbers``` ```regex-numbers```
- ```filter-positive-numbers``` ```regex-positive-numbers```
- ```filter-float``` ```regex-float```
- ```filter-positive-float``` ```regex-positive-float```
- ```filter-credit-card``` ```regex-credit-card```
- ```regex-routing-number``` __(no specific filter, use 'filter-positive-numbers')__
- ```filter-phone``` ```regex-phone```
- ```filter-email __(this allows ANY character right now)__ ```regex-email```
- ```filter-street``` ```regex-street```
- ```filter-alphanumeric``` ```regex-alphanumeric```
- ```filter-alphanumeric-with-spaces``` ```regex-alphanumeric-with-spaces```
- ```filter-ip-address``` ```regex-ip-address```
- ```filter-mac-address``` ```regex-mac-address```
- ```filter-latitude``` ```regex-latitude```
- ```filter-longitude``` ```regex-longitude```
- ```filter-gps-point``` ```regex-gps-point```
- ```filter-url``` ```regex-url```
- ```filter-hard-password``` __(filter here only stops copy/paste)__ ```regex-hard-password```

#### Custom Regex
Simply add a "pattern" attribute for HTML5 or a "regex:" class for HTML4

__HTML5__
```html
<input id="txtCCExpireMonth" placeholder="mm" value="" type="text" maxlength="2" class="filter-numbers" pattern="^\d{2}$" data-error="Invalid month"/>
```

__HTML4 -- *IMPORTANT* REGEX CANNOT HAVE A SPACE USE '\s' INSTEAD__
```html
<input id="txtCCExpireYear" placeholder="yy" value="" type="text" maxlength="2" class="filter-numbers regex:^\d{2}$" data-error="Invalid year"/> 
```

#### Matching
You can validate that one input's value matches another input's value two ways (one for HTML4 and one for HTML5).

__HTML5__
```html
<input id="txtConfirmEmail" name="confirm-email" type="text" placeholder="" class="filter-email required" data-matches="txtEmail"/>
```

__HTML4__
```html
<input id="txtConfirmEmail" name="confirm-email" type="text" placeholder="" class="filter-email required matches:txtEmail"/>
```


#### CSS classes applied to inputs
- ```.input-valid```
- ```.input-invalid```
- ```.required```


--------------------


## Validation and Errors
There are two different types of errors...
1. Tooltip (which shows up above, to the right, or below the input)
2. Summary (which will list the errors and appear above or below a DOM element you specify)

Showing these errors can optionally apply the CSS class ".validation-input-error" to the input element which can be used to color/style the element that threw the error.

Validation returns a "validation" object that contains 1-n "error" objects.


#### Validation Object
```javascript
    var validation = {};
    validation.success = true; //defaults to true
    validation.errors = [];
```

#### Error Object
```javascript
    var error = {};
    error.input = value; //jQuery object (text input) that threw the error
    error.message = "";
```

You can call the validation from jQuery (usually on a button click) like so...

#### Notice the two ways to show errors in the else statement

```javascript
    var validation = ValidateContainer("#info");
    if (validation.success) {
        alert("it's all good");
    }
    else {
        //--For tooltip errors--
         $.each(validation.errors, function (index, value) {
              ShowErrorToolTip(value.input, "right", value.message, true);
         });

        //--For error summary--
        ShowErrorSummary(this, "after", "The following errors need to be corrected.", validation.errors, true);
    }
```

You can remove tooltip errors with...
```javascript
RemoveErrorToolTip(input); //input is the jQuery object of the input field the error is attached to                       
```

#### Error Text
Generic error messages are supplied like "Invalid credit card number" but sometimes these aren't good enough
(e.g. "Must be a POSITIVE float/decimal number").  Most likely you will want "Must be a POSITIVE float/decimal number"
to be "Invalid Measurement".  So you simply add a "data-error" attribute...

```html
<input id="txtMeasurement" name="measurement" type="text" placeholder="" class="regex-positive-float  required" data-error="Invalid Measurement"/>
```

#### CSS classes applied to errors
- .error-summary
- .error-tooltip

----------------

## Messaging (notifications)
Every good form will give the user feedback (good or bad) when something happens.
So I have provided a mechanism to show messages. Messages can either show for a certain length of time or, if no time is provided, an "x" will show in the top right corner so they can be dismissed.

#### You can show a message with...
```javascript
ShowMessage("#btnSubmit", "after", "failure", "Sign Up failed", "If this continues, please submit a bug.", null);
```

#### CSS classes applied to messages
- ```.validation-message```
- ```.whatever-you-supply```




## Building with Grunt

First, install Node.js (and npm) if you haven't already.

### Setup and installation

```bash
# install grunt globally
sudo npm install grunt-cli -g

# install local packages
npm install
```
### Run commands
```bash
# run all commands
grunt

# or individually
grunt jshint
grunt uglify
```

