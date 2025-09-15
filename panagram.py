def checkPanagram(str):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet:
        if char not in str.lower():
            return False
    return True


print(checkPanagram("The quick brown fox jumps over the lazy dog."))
print(checkPanagram("The quick brown fox jumps over the lazy g."))


