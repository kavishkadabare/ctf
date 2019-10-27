.386
.model flat, stdcall
option casemap :none

include \masm32\include\kernel32.inc
include \masm32\include\masm32.inc
includelib \masm32\lib\kernel32.lib
includelib \masm32\lib\masm32.lib

.data
 string BYTE "hello", 0
 letter db 0

; The answer for this is the final values of 'letter' concatenated with final value of 'string'
; Example: if 'string' = 'hello' and 'letter' = 'x'; then Answer = 'xhello' 
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
 

 invoke ExitProcess, 0
end main
