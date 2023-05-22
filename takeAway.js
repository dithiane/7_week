/*
Takeaway
Difficulty
Harder

Concepts
Game Theory


There’s a game, “takeaway”, that is played by two players, using a number of stones.

The first player goes first. She can take 2, 3, or 5 stones from the pool. The second player goes next; she can also remove 2, 3, or 5 stones. The first player then goes, and so on.

If a player is unable to move (there are fewer than 2 stones), they lose.

Your Challenge
Imagine that both players have “perfect play” — that is, they always make the best possible move. Then, you can absolutely determine who would win a game with n stones.

For example:

1
Player #1 cannot move, so player #2 win

2
Player #1 takes 2 stones, and player #2 cannot move

3
Player #1 takes either 2 or 3 stones; either way, player #2 cannot move

4
Player #1 has two choices, one of which wins:

she takes 2 stones, leaving 2 (a win for player #2)

she takes 3 stones, leaving 1 (a win for player #1)

5
Player #1 has three choices, one of which wins:

she takes 2 stones, leaving 3 (a win for player #2)

she takes 3 stones, leaving 2 (a win for player #2)

she takes 5 stones, leaving 0 (a win for player #1)

6
Player #1 has three choices, one of which wins;

she takes 2 stones, leaving 4 (a win for player #2)

she takes 3 stones, leaving 3 (a win for player #2)

she takes 5 stones, leaving 1 (a win for player #1)

7
Player #1 has three choices, but none will win:

she takes 2 stones, leaving 5 (a win for player #2)

she takes 3 stones, leaving 4 (a win for player #2)

she takes 5 stones, leaving 2 (a win for player #2)

8
Player #1 has three choices, but none will win:

she takes 2 stones, leaving 6 (a win for player #2)

she takes 3 stones, leaving 5 (a win for player #2)

she takes 5 stones, leaving 3 (a win for player #2)

9
Player #1 has three choices, with one being a win:

she takes 2 stones, leaving 7 (a win for player #1)

she takes 3 stones, leaving 6 (a win for player #2)

she takes 5 stones, leaving 4 (a win for player #2)

10
Player #1 has three choices, with two being wins:

she takes 2 stones, leaving 8 (a win for player #1)

she takes 3 stones, leaving 7 (a win for player #1)

she takes 5 stones, leaving 5 (a win for player #2)

Remember: both players make the best possible moves, so if player #1 has a winning strategy, she will use it (and player #2 will defend as well as possible).

Code
We’ve written a function which takes one parameter, n, the number of stones in the game.
 It should return true if the active play could win a game starting with that number of stones and false if not.(Hint: Use recursion)

For example:

canWin(1)
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true  */

const canWin = (n) => {
    if (n <= 1) return false

    return !(canWin(n - 2) && canWin(n - 3) && canWin(n - 5));
}

console.log(canWin(10))
console.log(canWin(8))
