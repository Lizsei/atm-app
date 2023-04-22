# atm-app

This is a simple ATM application built using React. It allows users to deposit or withdraw money from their account and provides a visual display of their current account balance.

# Installation

To install this application, simply clone the repository and run npm install to install the necessary dependencies.

git clone https://github.com/lizsei/atm-app.git
cd react-atm
npm install

# Usage

To run the application, use the command npm start. This will start the development server and open the application in your default browser.

npm start

# Features

The ATM application includes the following features:

* Ability to deposit or withdraw money from the account
* Visual display of the current account balance
* Input validation to ensure valid transactions

# Improvements I made:

I made a few improvements to this application. I added an alert event to the handleSubmit function. When the user tries to withdraw more money than their current balance, they will be alerted with a pop-up message along with a gray background. The message informs them that they can’t withdraw more than their account balance. 

I also added additional styling:

* I used Bootstrap classes to center the application and create a box around it.
* I changed the font color to black.
* Changed the font size of the header and the label to make them more readable.
* Adjusted the width of the input and submit buttons to match the width of the label and select elements.
* Added some margin and padding to make the elements more spaced out and easier to use.

# License

This project is licensed under the MIT License. See the LICENSE file for details.





