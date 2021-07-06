# Independent-Project-3

## Link to webpage ##
https://github.com/andrethefirst/independent-project-3

#### _This is a webpage for Epicodus that has Mr Roboger who can count numbers!_

#### By _**Andre Velasquez**_

## Technologies Used

*HTML
*CSS
*JS

## Description

_This is a website that contains a robot that can count upwards, while replacing 1 with "Beep!", 2 with "Boop!", and 3 with "Won't you be my neighbor?"_

## Setup/Installation Requirements

*Go into https://github.com/andrethefirst/Independent-Project-3
*Click code and copy the link
*Open GitBash on the desktop
*Type in git init
*Type git clone and paste the link next to it.

## Tests
Describe: beepBoop()

Test: "It will count the numbers from 0 up until reaching the inputted number."
Code: beepBoop("4");
Expected Output: "'0','1','2','3','4'"

Test: "It will replace all numbers that include 3 with "Won't you be my neighbor?"
Code: beepBoop("6");
Expected Output: "'0','1','2','Won't you be my neighbor?','4','5','6'"

Test: "It will replace all numbers that include 2 with "Boop!"
Code: beepBoop("10");
Expected Output: "'0','1','Boop!','Won't you be my neighbor?','4','5','6','7','8','9','10'"

Test: "It wil replace all numbers that include 1 with "Beep!"
Code: beepBoop("6");
Expected Output: "'0','Beep!','Boop!','Won't you be my neighbor?','4','5','6'"

Test: "It will prioritize 3 over 2 and 1, and 2 over 1."
Code: beepBoop("23");
Expected Output: "'0','Beep!','Boop!','Won't you be my neighbor?','4','5','6','7','8','9','Beep!','Beep!','Boop!','Won't you be my neighbor?','Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!','Boop!','Boop!','Won't you be my neighbor?'"

## Known Bugs

*_No known bugs_

## License

*GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.


_{If you run into any problems, have any questions, or any ideas contact me!}_

## Contact Information

_{email: andrethefirst21@gmail.com}_
