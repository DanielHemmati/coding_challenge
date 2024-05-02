# https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/python

def rps(p1, p2):
    if p1 == p2: return "Draw!"
    rule = {
        "paper": "rock",
        "rock":"scissors",
        "scissors":"paper"
    }
    if p2 == rule[p1]:
        return "Player 1 won!"
    
    return "Player 2 won!"


print(rps("rock", "scissors"))
