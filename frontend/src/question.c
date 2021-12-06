//Priyanshu Raj        20204154
#include <stdio.h>
int main()
{
    int n;
    printf("Enter the size of an array you want to insert : ");
    scanf("%d", &n);
    int a[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    int left=0;
    int right=n-1;
    while (left < right)
    {
        while (a[left]==0 && left<right)
            left++;
        while (a[right]==1 && left<right)
            right--;
        if (left < right)
        {
            a[left]=0;
            a[right]=1;
            left++;
            right--;
        }
    }
    for (int i = 0; i < n; i++)
    {
        printf(" %d ",a[i]);
    }
    
    
    
    return 0;
}