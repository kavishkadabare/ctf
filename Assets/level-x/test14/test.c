#include <limits.h>
#include <stdio.h>
  
void func(signed int s_a, signed int s_b) {
  signed long result;
  if ((s_a == LONG_MIN) && (s_b == -1)) {
	printf("In:  %d",result); 
  } else {
    result = s_a / s_b;
	printf("Out: %d",result);
  }
  
  /* ... */
}

int main(){
	
	int i;
	int j;
	printf("Enter NumX 1: ");
	scanf("%d", &i);
	printf("Enter Num 2: ");
	scanf("%d", &j);
	func(i,j);
	
	
	//scanf("%d", i);

   return(0);
}