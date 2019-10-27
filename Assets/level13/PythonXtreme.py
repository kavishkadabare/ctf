def decimalToBinary(n):  
    return bin(n).replace("0b", "")

def binaryToDecimal(n): 
	return int(n,2) 



def kill(text):
        result = ""
        f= open("codex.txt","w+")

        lst = []

    

        s = list(text)
        
        s.reverse()
        for i in range(len(s)):
                z = ord(s[i])

                x = list(str(z))
                print(str(i)+": "+str(s[i])+" : "+str(z))
                val = decimalToBinary(int(z))
                hexval = hex(int(val, 2)).replace("0x","")
                lst.append(str(hexval))
                print("\tValue: "+str(val)+" : "+str(hexval))
                #for j in range(len(x)):
                #   val = decimalToBinary(int(x[j]))
                #  hexval = hex(int(val, 2)).replace("0x","")
                # print("\tValue: "+str(val)+" : "+str(hexval))


        
        print("List String: " + "".join(s))
        print("".join(lst))



        return "".join(lst)


def unkill(text):
    s = list(text)
        
    lst = []
    for i in range(len(s)):    
           if (i%2==0):
                
                val = int(str(s[i])+str(s[i+1]), 16)
                binval = bin(val).replace("0b","")
                decval = binaryToDecimal(binval)
                charval = chr(decval)
                print(str(s[i])+str(s[i+1])+" : "+binval+" : "+str(decval)+" : "+charval)
                lst.append(charval)
                #val = decimalToBinary(int(z))
                #hexval = hex(int(val, 2)).replace("0x","")
                #lst.append(str(hexval))
                #print("\tValue: "+str(val)+" : "+str(hexval))
                #for j in range(len(x)):
                #   val = decimalToBinary(int(x[j]))
                #  hexval = hex(int(val, 2)).replace("0x","")
                # print("\tValue: "+str(val)+" : "+str(hexval))


    lst.reverse()
    print("".join(lst))


    

text = "KRXZY_CTF{The_Gr34te5t_Detective_Jg8pkLgjKU}"
#print ("Output: " + kill(text))
print(unkill(kill(text)))
