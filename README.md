FilterValidate
==============

This library offers BOTH filtering and validation of text inputs for html inputs.
<br>
Also, it provides the ability to show errors/messages.

<h2>Features</h2>
<ul>
<li>No javascript will need to be written on your part to start the validation</li>
<li>Any new input elements added to the DOM will also gain validation immediately</li>
<li>HTML5 and HTML4 support</li>
<li>Exposes simple CSS classes to easily style elements</li>
<li>Validation and filtering is controlled via CSS classes</li>
<li>Validation happens when you fire it in code so you don't bother your user as they are filling out the form</li>
<li>Filtering happens on keydown</li>
<li>Validation happens on keyup</li>
<li>Validation will also happen on PASTE and will stop entry if the pasted text is not valid for the given regex applied</li>
<li>Objects can be passed into the validation/message functions via jQuery object or selector (with or without '#')</li>
<li><b>Works well with ASP.NET (simply pass around the ID of the element--no need to worry about the server renaming it on the page)</b></li>
<li>'Identify' feature will tell you what rules a string will match (try using it on keyup event)</li>
</ul>

<h2>Important</h2>
You must not use 

```javascript
$('body').unbind('keyup');
```
in your code or you will undo all of the event handlers.
<br/><br/>
Also, this file is <i>pretty</i> big for javascript.  That is on purpose.
<br/>
Take out what you don't need and minify away.  The size should be fairly managable after that.


<h2>Requirements</h2>
\>= jQuery 1.7

<h2>Things you can filter/validate</h2>
<ul>
<li>Names</li>
<li>Letters (with and without spaces)</li>
<li>Whole Numbers (positive and negative)</li>
<li>Floats (positive and negative)</li>
<li>Credit Card Numbers</li>
<li>Phone Numbers</li>
<li>Email Addresses</li>
<li>Address (street only)</li>
<li>Zip Codes</li>
<li>Alphanumerics (with and without spaces)</li>
<li>IP Addresses</li>
<li>MAC Addresses</li>
<li>Latitudes</li>
<li>Longitudes</li>
<li>GPS Points (e.g. 35.09,-92.51)</li>
<li>URLs</li>
<li>Difficult Passwords</li>
<li>Bank Routing Number</li>
<li>Regex passed in via CSS class (HTML4)</li>
<li>Regex passed in via the "pattern" attribute (HTML5)</li>
<li>One input's value equals another input's value</li>
</ul>

<h2>Usage</h2>
All "filter" CSS classes start with "filter-" and all validation CSS classes start with "regex-" (Validation isn't 'simply' regex in some cases. For example, the credit card validation does several checks).

If you wanted both filter and validate a credit card you would write<br/>
``` javascript
<input id="txtCCNumber" type="text" maxlength="19" class="filter-credit-card regex-credit-card"/>
```

<h4>List of filter/validation CSS classes</h4>
<ul>
<li>filter-name &nbsp;&nbsp;&nbsp;&nbsp; regex-name</li>
<li>filter-letters &nbsp;&nbsp;&nbsp;&nbsp; regex-letters</li>
<li>filter-letters-with-spaces &nbsp;&nbsp;&nbsp;&nbsp; regex-letters-with-spaces</li>
<li>filter-currency &nbsp;&nbsp;&nbsp;&nbsp; regex-currency</li>
<li>filter-numbers &nbsp;&nbsp;&nbsp;&nbsp; regex-numbers</li>
<li>filter-positive-numbers &nbsp;&nbsp;&nbsp;&nbsp; regex-positive-numbers</li>
<li>filter-float &nbsp;&nbsp;&nbsp;&nbsp; regex-float</li>
<li>filter-positive-float &nbsp;&nbsp;&nbsp;&nbsp; regex-positive-float</li>
<li>filter-credit-card &nbsp;&nbsp;&nbsp;&nbsp; regex-credit-card</li>
<li>regex-routing-number <b>(no specific filter, use 'filter-positive-numbers')</b></li>
<li>filter-phone &nbsp;&nbsp;&nbsp;&nbsp; regex-phone</li>
<li>filter-email <b>(this allows ANY character right now)</b>&nbsp;&nbsp;&nbsp;&nbsp; regex-email</li>
<li>filter-street &nbsp;&nbsp;&nbsp;&nbsp; regex-street</li>
<li>filter-alphanumeric &nbsp;&nbsp;&nbsp;&nbsp; regex-alphanumeric</li>
<li>filter-alphanumeric-with-spaces &nbsp;&nbsp;&nbsp;&nbsp; regex-alphanumeric-with-spaces</li>
<li>filter-ip-address &nbsp;&nbsp;&nbsp;&nbsp; regex-ip-address</li>
<li>filter-mac-address &nbsp;&nbsp;&nbsp;&nbsp; regex-mac-address</li>
<li>filter-latitude &nbsp;&nbsp;&nbsp;&nbsp; regex-latitude</li>
<li>filter-longitude &nbsp;&nbsp;&nbsp;&nbsp; regex-longitude</li>
<li>filter-gps-point &nbsp;&nbsp;&nbsp;&nbsp; regex-gps-point</li>
<li>filter-url &nbsp;&nbsp;&nbsp;&nbsp; regex-url</li>
<li>filter-hard-password <b>(filter here only stops copy/paste)</b> &nbsp;&nbsp;&nbsp;&nbsp; regex-hard-password</li>
</ul>

<h4>Custom Regex</h4>
Simply add a "pattern" attribute for HTML5 or a "regex:" class for HTML4

HTML5
```html
<input id="txtCCExpireMonth" placeholder="mm" value="" type="text" maxlength="2" class="filter-numbers" pattern="^\d{2}$" data-error="Invalid month"/>
```

HTML4 -- *IMPORTANT* REGEX CANNOT HAVE A SPACE USE '\s' INSTEAD
```html
<input id="txtCCExpireYear" placeholder="yy" value="" type="text" maxlength="2" class="filter-numbers regex:^\d{2}$" data-error="Invalid year"/> 
```

<h4>Matching</h4>
You can validate that one input's value matches another input's value two ways (one for HTML4 and one for HTML5).

HTML5
```html
<input id="txtConfirmEmail" name="confirm-email" type="text" placeholder="" class="filter-email required" data-matches="txtEmail"/>
```

HTML4
```html
<input id="txtConfirmEmail" name="confirm-email" type="text" placeholder="" class="filter-email required matches:txtEmail"/>
```


<h4>CSS classes applied to inputs</h4>
<ul>
<li>.input-valid</li>
<li>.input-invalid</li>
<li>.required</li>
</ul>

<hr/>

<h2>Validation and Errors</h2>
There are two different types of errors...
<ol>
<li>Tooltip (which shows up above, to the right, or below the input)</li>
<li>Summary (which will list the errors and appear above or below a DOM element you specify)</li>
</ol>

Showing these errors can optionally apply the CSS class ".validation-input-error" to the input element which can be used to color/style the element that threw the error.
<br>
Validation returns a "validation" object that contains 1-n "error" objects.
<br>

<h4>Validation Object</h4>

```javascript
    var validation = new Object();
    validation.success = true; //defaults to true
    validation.errors = new Array();
```

<h4>Error Object</h4>

```javascript
    var error = new Object();
    error.input = value; //jQuery object (text input) that threw the error
    error.message = "";
```

You can call the validation from jQuery (usually on a button click) like so...<br/>

<h4>Notice the two ways to show errors in the else statement</h4>

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

<h4>Error Text</h4>
Generic error messages are supplied like "Invalid credit card number" but sometimes these aren't good enough
(e.g. "Must be a POSITIVE float/decimal number").  Most likely you will want "Must be a POSITIVE float/decimal number"
to be "Invalid Measurement".  So you simply add a "data-error" attribute...

```html
<input id="txtMeasurement" name="measurement" type="text" placeholder="" class="regex-positive-float  required" data-error="Invalid Measurement"/>
```

<h4>CSS classes applied to errors</h4>
<ul>
<li>.error-summary</li>
<li>.error-tooltip</li>
</ul>

<hr/>

<h2>Messaging (notifications)</h2>
Every good form will give the user feedback (good or bad) when something happens.
So I have provided a mechanism to show messages.
Messages can either show for a certain length of time or, if no time is provided, an "x" will show in the top right corner so they can be dismissed.

<h4>You can show a message with...</h4>

```javascript
ShowMessage("#btnSubmit", "after", "failure", "Sign Up failed", "If this continues, please submit a bug.", null);
```

<h4>CSS classes applied to messages</h4>
<ul>
<li>.validation-message</li>
<li>.whatever-you-supply</li>
</ul>


