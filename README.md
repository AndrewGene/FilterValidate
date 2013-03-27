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
<li>Filtering happens on keydown</li>
<li>Validation happens on keyup</li>
<li>Validation will also happen on PASTE and will stop entry if the pasted text is not valid for the given regex applied</li>
</ul>

<h2>Important</h2>
>You must not use "$('body').unbind('keyup');" in your code or you will undo all of the event handlers.
><br/>
>Also, this file is pretty big for javascript.  That is on purpose.
><br/>
>Take out what you don't need and minify away.  The size should be pretty management after that.


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
All "filter" CSS classes start with "filter-" and all validation CSS classes start with "regex-" (validation isn't 'simply' regex in some cases (e.g. credit card validation does several checks).

If you wanted both filter and validate a credit card you would write<br/>
><b>\<input id="txtCCNumber" type="text" maxlength="19" class="filter-credit-card regex-credit-card"/\></b>

<h2>List of filter/validation CSS classes</h2>
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
<li>regex-routing-number (no specific filter, use 'filter-positive-numbers')</li>
<li>filter-phone &nbsp;&nbsp;&nbsp;&nbsp; regex-phone</li>
<li>filter-email (this allows ANY character right now)&nbsp;&nbsp;&nbsp;&nbsp; regex-email</li>
<li>filter-street &nbsp;&nbsp;&nbsp;&nbsp; regex-street</li>
<li>filter-alphanumeric &nbsp;&nbsp;&nbsp;&nbsp; regex-alphanumeric</li>
<li>filter-alphanumeric-with-spaces &nbsp;&nbsp;&nbsp;&nbsp; regex-alphanumeric-with-spaces</li>
<li>filter-ip-address &nbsp;&nbsp;&nbsp;&nbsp; regex-ip-address</li>
<li>filter-mac-address &nbsp;&nbsp;&nbsp;&nbsp; regex-mac-address</li>
<li>filter-latitude &nbsp;&nbsp;&nbsp;&nbsp; regex-latitude</li>
<li>filter-longitude &nbsp;&nbsp;&nbsp;&nbsp; regex-longitude</li>
<li>filter-gps-point &nbsp;&nbsp;&nbsp;&nbsp; regex-gps-point</li>
<li>filter-url &nbsp;&nbsp;&nbsp;&nbsp; regex-url</li>
<li>filter-hard-password (filter here only stops copy/paste) &nbsp;&nbsp;&nbsp;&nbsp; regex-hard-password</li>
</ul>


