def file_len(fname):
    with open(fname) as f:
        for i, l in enumerate(f):
            pass
    return i + 1

def decrypt(text,s): 
	result = "" 

	for i in range(len(text)): 
		char = text[i] 

		 
		if (i % 2 == 0 ): 
			result += chr(ord(char) - s)
			
		else: 
			result += chr(ord(char) +  s) 

	return result

f= open("codex.txt","r")


text = "AA\A][AAAA[A}#A[AA}]AAAAA[AAA`A[AAAAA]AA;AA0AAAA"
s = list(text)
if f.mode == 'r':
    contents = f.read().splitlines()

    j = 0
    for i in range(len(s)):
        z = ord(s[i])
        if ((z > 64 and z < 91) or (z > 96 and z < 123)):
            s[i] = chr(z + int(contents[j]))
            j = j+1
            print(str(i) + ": "+str(s[i]))
            
                       
        
    print("File length: " + str(file_len("codex.txt")))
    print("List String: " + decrypt("".join(s),4))

f.close
        
            
            
