# CS272-F24 HW5

In this assignment, you will implement a "Combat Quest Simulator". In this simulator, the user will fill out the health, armor, and damage per second (DPS) for two players. Upon clicking "Duel!" the two players will duke it out. The last standing player wins!

## Requirements

Upon clicking the "Duel!" button, if the health, armor, or DPS for either player is missing, you should display an `alert` that says "Please fill out all fields before continuing."

Otherwise, the duel should commence! The last standing player wins. Each player's health, armor, and the amount of DPS they deal can be sourced from the input fields using `getAttributeValue`, as is done in the starter code.

To calculate who wins, you should calculate how long each player lasts before their health and armor is depleted. Armor has twice the durability of health, meaning that 1 DPS will only cause the other player to lose 0.5 armor per second. After a player's armor is depleted, their health is depleted by 1 for every 1 DPS the enemy player deals.

You should do an `alert` notifying the user (a) which player wins and (b) how long the battle lasts, rounded to the nearest tenth of a second. Example scenarios are found below!

**Please Note:** Remember, floating point numbers aren't exact! If both players would be depleted within `0.1` seconds of eachother, `alert` the user "It's a draw!" You do not need to print how long the duel took if it is a draw.

**Please Also Note:** After the user presses the "duel" button, they should be immediately informed who wins and how long the duel would have taken. Your code should *not* actually wait the amount of time the duel takes. 

## Scenarios

These scenarios should help you test your code! Please test your code thoroughly; these are just examples to help you in your testing.


### Scenario 1

| | Player 1 | Player 2 |
| --- | --- | --- |
| Health | 10 | 12 |
| Armor | 5 | 2 |
| DPS | 2 | 2 |

Player 1 will win in 8 seconds!

### Scenario 2

| | Player 1 | Player 2 |
| --- | --- | --- |
| Health | 7 | 3 |
| Armor | 3 | 5 |
| DPS | 2 | 3 |

Player 2 will win in 4.3 seconds!

### Scenario 3

| | Player 1 | Player 2 |
| --- | --- | --- |
| Health | 1000 | 999 |
| Armor | 100 | 100 |
| DPS | 20 | 20 |

It should be a draw!

## Submission

When you are done, be sure to add, commit, and push your code! Your Canvas submission will simply be a URL to your GitHub repository.