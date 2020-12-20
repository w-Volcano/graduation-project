# 在C++中向函数传递数组
​	你可以将[数组](/contents/C++中的数组.html)作为参数传递给函数，就像你将变量作为参数传递一样。为了将数组传递给函数，你只需要在函数调用时**提及数组名称**，就像这样：


```cpp
function_name(array_name);
```
## 例子: 将数组传递给函数
​	在这个例子中，我们将两个数组`a` & `b`传递给函数`sum()`。这个函数将两个数组的相应元素相加并显示出来。


```cpp
#include using namespace std;
/* 该函数将两个数组中的相应元素相加并显示出来。
 */
void sum(int arr1[], int arr2[]){
   int temp[5];
   for(int i=0; i<5; i++){
      temp[i] = arr1[i]+arr2[i];
      cout<<temp[i]<<endl;
   }
}
int main(){
   int a[5] = {10, 20, 30, 40 ,50};
   int b[5] = {1, 2, 3, 4, 5};
   //将数组传递给函数
   sum(a, b);
   return 0;
}
```
  **输出：**


```cpp
11
22
33
44
55
```
## 例2：将多维数组传递给函数
​	在这个例子中，我们将一个[多维数组](/contents/C++中的多维数组)传递给函数`square`，它将显示每个元素的平方。


```cpp
#include #include using namespace std;
/* 本方法打印多维数组中每个元素的平方。
 */
void square(int arr[2][3]){
   int temp;
   for(int i=0; i<2; i++){
      for(int j=0; j<3; j++){
        temp = arr[i][j];
        cout<<pow(temp, 2)<<endl;
      }
   }
}
int main(){
   int arr[2][3] = { 
       {1, 2, 3},
       {4, 5, 6}
   };
   square(arr);
   return 0;
}
```
  **输出：**


```cpp
1
4
9
16
25
36
```
