.386
.model flat, stdcall
option casemap :none

include \masm32\include\kernel32.inc
include \masm32\include\masm32.inc
includelib \masm32\lib\kernel32.lib
includelib \masm32\lib\masm32.lib

.data
 message db "Your Answer is:  Final value of letter concatenated with string ", 0
 message2 db "Ex: if lettes = x and string = hello, answer is xhello  "
 string BYTE "hello", 0
 letter db 0

.code 

SomeFunction proc
    add letter, 5h
	ret
SomeFunction endp

SomeOtherfunction proc
	add string[1], 15h
	sub letter, 2h
	ret
SomeOtherfunction endp
	
 
main:
  
 mov string[2],'x'
 mov letter, 61h
 
 
 
 call SomeFunction 
 call SomeOtherfunction
 

 invoke StdOut, addr message
 ;invoke StdOut, addr letter
 ;invoke StdOut, addr string
  
 invoke ExitProcess, 0
end main
