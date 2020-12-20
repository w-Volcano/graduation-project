# 在C++中的for循环与示例
​	循环用于重复执行一组语句，直到满足一个特定的条件。例如，当你要显示从1到100的数字时，你可能希望将一个变量的值设置为1，并显示100次，每次循环迭代时将其值增加1。


​	在C++中，我们有三种类型的基本循环：for、[while](/contents/在C++中while循环的示例.html)和[do-while](/contents/C++中的do-while循环示例.html)。在本教程中，我们将学习如何在C++中使用 "for循环"。


#### for循环的语法
```cpp
for(initialization; condition ; increment/decrement)
{
   C++ statement(s);
}
```
## for循环的执行流程
在程序执行的过程中，解释器总是跟踪哪条语句即将被执行。我们称之为控制流，或者说程序的执行流。

   ![C++ for loop flow diagram](./imgs/for_loop_cpp.jpg)

**第一步：** 在for循环中，初始化是先发生的，而且只有一次，这意味着for循环的初始化部分只执行一次。

**第二步：** for循环中的条件在每次循环迭代时被评估，如果条件为真，那么for循环体中的语句就会被执行。如果条件返回false，则for循环中的语句不执行，控制权转移到for循环后的下一条语句。

**第三步：** 每执行一次for循环体后，for循环的增减部分就会执行，更新循环计数器。

**第四步：** 第三步后，控制跳转到第二步，重新评估条件。


> 从第二个到第四个步骤重复，直到循环条件返回false。


## C++中的简单for循环示例
​	这里在循环初始化部分，我将变量i的值设置为1，条件是i<=6，在每次循环迭代时，i的值递增1。


```cpp
#include using namespace std;
int main(){
   for(int i=1; i<=6; i++){
      /* 这条语句会被反复执行，
       * 直到条件i<=6返回false。
       */
      cout<<"Value of variable i is: "<<i<<endl;
   }
   return 0;
}
```
  **输出：**


```cpp
Value of variable i is: 1
Value of variable i is: 2
Value of variable i is: 3
Value of variable i is: 4
Value of variable i is: 5
Value of variable i is: 6
```
## C++中的无限for循环
​	当一个循环反复执行并且永不停止时，就被称为是无限循环。这通常是错误的。当你在for循环中设置的条件是永不返回false时，它就变成了无限循环。


  **例如：**


```cpp
#include using namespace std;
int main(){
   for(int i=1; i>=1; i++){
      cout<<"Value of variable i is: "<<i<<endl;
   }
   return 0;
}
```
​	这是一个无限循环，因为我们在递增i的值，所以它总是满足条件i>=1，条件永远不会返回false。


​	下面是另一个无限for循环的例子。


```cpp
// 无限循环
for ( ; ; ) {
   // 循环体
}
```
## 例子：使用for循环显示数组中的元素
```cpp
#include using namespace std;
int main(){
   int arr[]={21,9,56,99, 202};
   /* 我们将变量i的值设置为0，
    * 因为数组的索引从0开始，
    * 这意味着数组的第一个元素从零索引开始。
    */
   for(int i=0; i<5; i++){
      cout<<arr[i]<<endl;
   }
   return 0;
}
```
  **输出：**


```cpp
21
9
56
99
202
```
