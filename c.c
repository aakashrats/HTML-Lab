/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

int main()
{
     int n, i, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    printf("1²");
    for (i = 2; i <= n; i++) {
        printf("+%d²", i);  
        sum += (i * i);
    }
    printf(" = ");
    for (i = 1; i <= n; i++) {
        printf("%d", i * i);
        if (i < n) {
            printf(" + ");
        }
    }
    printf(" = %d\n", sum+1);  

    return 0;

}