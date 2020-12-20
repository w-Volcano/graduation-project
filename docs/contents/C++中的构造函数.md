# C++中的构造函数
​	构造函数是类的一个特殊成员函数，用于初始化类的对象。构造函数的名称与类名相同，并且它没有返回类型。让我们通过一个简单的例子来了解构造函数的工作原理。


## 简单的例子：如何在C++中使用构造函数
阅读下面程序中的注释，了解程序的各个部分。


```cpp
#include using namespace std;
class constructorDemo{
public:
   int num;
   char ch;
   // 这是一个类的默认构造函数，请注意它的名字和类名一样，没有返回类型。
   constructorDemo() {
      num = 100; ch = 'A';
   }
};
int main(){
   /* 这就是我们如何创建类的对象，
    *我给的对象名是obj，你可以给任何名字，
    *只要记住语法：class_name object_name。
    */
   constructorDemo obj;
   /* 这就是我们使用对象访问数据成员的方式，
    * 我们只是检查我们在构造函数中初始化的值是否有反映。
    */
   cout<<"num: "<<obj.num<<endl;
   cout<<"ch: "<<obj.ch;
   return 0;
}
```
  **输出：**


```cpp
num: 100
ch: A
```
## 构造函数与成员函数
​	现在我们知道了什么是构造函数，让我们讨论一下构造函数与类的成员函数有什么不同。

​	1) 构造函数没有返回类型。成员函数有一个返回类型。

​	2) 构造函数是在我们创建类的对象时自动调用的。成员函数需要使用类的对象显式调用。

​	3）当我们在类中没有创建任何构造函数时，C++编译器会生成一个默认的构造函数并将其插入到我们的代码中。同样的情况不适用于成员函数。

这就是编译器生成的默认构造函数的样子。


```cpp
class XYZ
{ 
    ....
    XYZ()
    {
        //空无代码
    }
};
```
## C++中的构造函数类型
C++中的构造函数有两种类型。

1）默认构造函数 

2）参数化构造函数


### 1) 默认构造函数
一个默认的构造函数没有任何实参（或形参）。


```cpp
#include using namespace std;
class Website{
public:
   //默认构造函数
   Website() {
      cout<<"Welcome to BeginnersBook"<<endl;
   }
};
int main(void){
   /*创建了两个Website类的对象，
    * 这意味着默认的构造函数应该被调用两次。
    * 这意味着默认构造函数应该被调用两次。
    */
   Website obj1;
   Website obj2;
   return 0;
}
```
  **输出：**


```cpp
Welcome to BeginnersBook
Welcome to BeginnersBook
```
> 当你不在类中指定任何构造函数时，编译器会在你的代码中插入一个没有代码（空体）的默认构造函数。


### 2) 有参构造函数
​	带参数的构造函数被称为有参构造函数。这种类型的构造函数允许我们在创建对象时传递参数。让我们来看看它们是怎样的。


​	假设类名是XYZ

 **默认构造函数:**


```cpp
XYZ() {
}
....
XYZ obj;
....
```
  **有参构造函数:**


```cpp
XYZ(int a, int b) {
}
...
XYZ obj(10, 20);
```
#### 例子:
```cpp
#include using namespace std;
class Add{
public:
   //有参构造函数
   Add(int num1, int num2) {
     cout<<(num1+num2)<<endl;
   }
};
int main(void){
   /* 创建对象的一种方式。
    * 又称隐式调用构造函数。
    */
   Add obj1(10, 20);
   /* 另一种创建对象的方式。
    * 就是所谓的显式调用构造函数。
    */
   Add obj2 = Add(50, 60);
   return 0;
}
```
  **输出：**


```cpp
30
110
```
