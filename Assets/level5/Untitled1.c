#include <stdio.h>
#include <string.h>

int main(void)
{
    char buff[25];
    int pass = 0;
    char username[20];

    printf("\n Enter the password : \n");
    gets(buff);

    if(strcmp(buff, "Zk1qRdVllrr365^g|rra"))
    {
        printf ("\n Wrong Password \n");
    }
    else
    {
        printf ("\n Correct Password \n");
        pass = 1;
    }

    if(pass)
    {
        printf ("\n The Flag is  1side_is_Kr4Zi_i3KaPMwCAL\n");
    }

    printf("Type random letter and enter to end: \t");
    scanf("%s", username);

    return 0;
}
