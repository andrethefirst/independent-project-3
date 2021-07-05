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

