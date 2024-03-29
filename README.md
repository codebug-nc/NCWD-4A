# IF ELSE STATEMENTS

```JavaScript
if(condition){
  // do this;
} else {
  // do this;
}
```

##### Setup
- Open `index.html` in Google Chrome
- Open the developers tools console. See the steps below if you forget how to get there:
  - Right click on your webpage in chrome
  - Choose "Inspect"
  - Make sure you on viewing the "Console"
- Look in the `script.js` file. 
  - Add a line in the `script.js` file that says `console.log('Test!');`
- Refresh your page in Chrome. You should see the word Test! in the developer tools console. This means that everything is set up correctly.
- Delete the `console.log('Test!');` now that we know everything is working

## Let's write some If/Else Statements!
> You will be writing some JavaScript if/else statements to control the response to the users.

##### DRIVING AGE - 5m
-  Write a [`prompt()`](https://www.w3schools.com/jsref/met_win_prompt.asp) to ask the user for their age.
- Save the `prompt()` as a variable called `age`
- Write an if/else statement:
  - **IF** the age is less than 16 use `alert()` to tell the user "YOU CAN'T DRIVE!!"
  - **ELSE** use `alert()` to tell the user "HERE'S THE KEY TO MY FERRARI!"
- Check to make sure your code works.
- If everything works, comment out your code.

##### HAPPY SCALE - 3m
- Write a `prompt()` to ask the user to rate their happiness on a scale of 1 to 10.
- Save the `prompt()` as a variable called `happyRating`
- Write an if/else statement:
  - If the `happyRating` is less than or equal to 5, use `alert()` to give the user some inspirational words.
  - Otherwise, tell the user how happy you are that they are having a good day.
- Check to make sure your code works.
- If everything works, comment out your code.

##### BIRTHDAY? - 4m
- Ask the user if it's their birthday today.
- Save their response as a variable called `birthdayIsToday`
- If it's their birthday. Tell them, "HAPPY BIRTHDAY!!" otherwise, say "Good Day, Mate!"
- Check to make sure your code works.
- If everything works, comment out your code.


##### TACOS - 4m
- Ask the user which taco they want: chicken or steak.
- Save the response in a variable.
- Write an if/else statement
  - **IF** the user says chicken, tell them the chicken tacos are the best.
  - **ELSE IF** the user says steak, tell them the steak tacos are the best.
  - **ELSE** tell the user their item isn't on the menu.
- Check to make sure your code works.
- If everything works, comment out your code.

##### WHAT IS YOUR FAVORITE COLOR IN THE RAINBOW? - 8m
- Ask the user what their favorite color in the rainbow is (red, orange, yellow, green, blue, indigo, violet).
- Save the response in a variable
- Write an if/else statement
  - If the user says red, respond accordingly. Possible response: "Red is my favorite color too!"
  - Else if the user says orange, respond accordingly
  - Else if the user says yellow, respond accordingly ... continue through the rest of the colors
  - Else (if) the user picks and invalid option (a color that is not in the rainbow), respond accordingly
- Check to make sure your code works.
- If everything works, comment out your code.


##### THIRSTY?/HUNGRY? - 12m
- Ask the user if they are hungry.
- Save the response as a variable.
- Ask the user if they are thirsty.
- Save the response as a variable.
- The if/else statements:
>(*hint* you will be using the `&&` and `||` symbols for this one.)
  - If the user is hungry and thirsty, give them a cookie and milk. 
  - If the user is hungry but not thirsty, give them a cookie
  - If the user is not hungry but is thirsty, give them milk
  - If the user is not hungry and not thirsty, tell them to go away.
  - Else tell the user they entered an invalid response.


