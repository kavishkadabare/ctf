#include<stdio.h>
#include<stdlib.h>
#include<time.h>

unsigned int reverseBits(unsigned int num)
{
	unsigned int count = sizeof(num) * 8 - 1;
	unsigned int reverse_num = num;

	num >>= 1;
	while(num)
	{
	reverse_num <<= 1;
	reverse_num |= num & 1;
	num >>= 1;
	count--;
	}
	reverse_num <<= count;
	return reverse_num;
}

int main()
{
   srand(1);
   int i;

   unsigned int x = 1;
	printf("%u", reverseBits(x));
	getchar();

   for(i = 0; i<5; i++)
  printf("%u\t", (reverseBits(rand())%10));
}
