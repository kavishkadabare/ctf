def encrypt(text,s): 
	result = "" 

	for i in range(len(text)): 
		char = text[i] 

		 
		if (i % 2 == 0 ): 
			result += chr(ord(char) + s)
			
		else: 
			result += chr(ord(char) -  s) 

	return result

def kill(text):
        result = ""
        f= open("codex.txt","w+")


        s = list(text)
        

        for i in range(len(s)):
                z = ord(s[i])
                
                if ((z > 64 and z < 91) or (z > 96 and z < 123)):
                        offset = z - 65
                        f.write(str(offset)+"\n")
                        print(str(i)+":\t"+chr(z)+"\t"+str(offset))
                        s[i] = chr(z - offset)


        print("List String: " + "".join(s))
        print(s)

        f.close

        return "".join(s)

                

#check the above function 

s = 4
print ("Output: " + kill(encrypt(text, s)))
#Output is AA\A][AAAA[A}#A[AA}]AAAAA[AAA`A[AAAAA]AA;AA0AAAA
#Find the input.
