# C++中的变量
​	变量是一个名称，它与一个可以改变的值相关联。例如当我写下`int num=20;`时，这里的变量名是num，它与值20相关联，int是一种数据类型，表示这个变量可以容纳整数值。我们将在下一篇教程中介绍数据类型。在本教程中，我们将讨论关于变量的问题。


## 在C++中声明一个变量的语法
```cpp
data_type variable1_name = value1, variable2_name = value2;
```
  **例如：**


```cpp
int num1=20, num2=100;
```
​	我们也可以这样写：


```cpp
int num1,num2;
num1=20;
num2=100;
```
## 变量类型
​	变量可以根据其数据类型进行分类。例如，在上面的例子中，我们已经看到了整数类型的变量。以下是C++中可用的变量类型：


  **int** : 这些类型的变量持有整数值。


  **char** : 存储字符值，如'c'、'F'、'B'、'p'、'q'等。


  **bool** : 存储布尔值true或false。


  **double** : 双精度浮点数值


  **float** : 单精度浮点数值


## 基于其范围的变量类型
​	在进一步讨论之前，我们先来讨论一下什么是范围。当我们讨论[Hello World程序](/contents/第一个C++程序 - Hello World.html)时，我们看到程序中的大括号是这样的：


```cpp
int main {
//一些代码
}
```
​	如果你在main()函数中声明了一个变量，并试图在main()函数之外使用该变量，那么你将得到编译错误。


​	现在我们已经了解了什么是作用域。让我们继续了解基于作用域的变量类型。


  1. 全局变量
   
   2. 局部变量


### 全局变量
​	在任何函数（也包括main）之外声明的变量称为全局变量。全局变量在整个程序中都有自己的范围，它们可以在程序的任何地方被访问，在main中，在用户定义的函数中，任何地方。


​	让我们举个例子来理解一下。


#### 全局变量示例
​	这里我们有一个全局变量`myVar`，它是在main之外声明的。我们在main()函数中访问了该变量两次，没有出现任何问题。


```cpp
#include using namespace std;
// 这是一个全局变量
char myVar = 'A';
int main()
{
   cout <<"Value of myVar: "<< myVar<<endl;
   myVar='Z';
   cout <<"Value of myVar: "<< myVar;
   return 0;
}
```
  **输出：**


```cpp
Value of myVar: A
Value of myVar: Z
```
### 局部变量
​	局部变量在任何用户定义的函数、主函数、循环或任何控制语句(if, if-else等)的括号内声明，并在这些括号内限制其范围。


#### 局部变量示例
```cpp
#include using namespace std;
char myFuncn() {
// 这是一个局部变量
char myVar = 'A';
}
int main()
{
   cout <<"Value of myVar: "<< myVar<<endl;
   myVar='Z';
   cout <<"Value of myVar: "<< myVar;
   return 0;
}
```
  **输出：** 
	编译时出错，因为我们试图在变量`myVar`的范围外访问它，`myVar`的范围仅限于那些括号内的函数`myFuncn()`主体。`myVar`的作用域仅限于这些括号内的函数`myFuncn()`的主体。


## 在C++中，全局变量和局部变量可以同名吗？
​	让我们看看一个具有相同名称的全局和局部变量的例子。


```cpp
#include using namespace std;
// 这是一个全局变量
char myVar = 'A';
char myFuncn() {
   // 这是一个局部变量
   char myVar = 'B';
   return myVar;
}
int main()
{
   cout <<"Funcn call: "<< myFuncn()<<endl;
   cout <<"Value of myVar: "<< myVar<<endl;
   myVar='Z';
   cout <<"Funcn call: "<< myFuncn()<<endl;
   cout <<"Value of myVar: "<< myVar<<endl;
   return 0;
}
```
  **输出：**


```cpp
Funcn call: B
Value of myVar: A
Funcn call: B
Value of myVar: Z
```
​	你可以看到，当我在主函数中改变`myVar`的值时，它只改变了全局变量`myVar`的值，因为局部变量`myVar`的范围仅限于函数`myFuncn()`。


