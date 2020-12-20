# C++中的函数重载
​	函数重载是[C++程序设计](/)的一个特性，它允许我们拥有多个同名但参数列表不同的函数，我说的参数列表是指参数的数据类型和序列，例如函数`myfuncn(int a, float b)`的参数列表是`(int, float)`，这与函数`myfuncn(float a, int b)`的参数列表`(float, int)`是不同的。函数重载是一种[编译时多态性](/contents/C++中的多态性.html)。

​	现在我们知道了什么是参数列表，让我们看看重载的规则：我们可以在同一个作用域中使用以下函数。


```cpp
sum(int num1, int num2)
sum(int num1, int num2, int num3)
sum(int num1, double num2)
```
> 最简单的方法就是记住这个规则，参数应该符合以下任何一个或多个条件，它们应该有不同的**类型** ，**数量**或**顺序**的参数。

  **例如:** 
	这两个函数的参数**类型**不同。


```cpp
sum(int num1, int num2)
sum(double num1, double num2)
```
  这两个函数的参数**数量**不同。


```cpp
sum(int num1, int num2)
sum(int num1, int num2, int num3)
```
​	这两个函数的参数**顺序**不同。


```cpp
sum(int num1, double num2)
sum(double num1, int num2)
```
​	以上三种情况都是有效的重载情况。我们可以有任何数量的函数，只是记住参数列表要不同。比如说，我们可以有任何数量的函数，只要记住参数列表要不同就可以了。


```cpp
int sum(int, int)
double sum(int, int)
```
​	这是不允许的，因为参数列表是一样的。即使它们的返回类型不同，也是无效的。


## 函数重载示例
​	让我们举个例子来理解C++中的函数重载。


```cpp
#include using namespace std;
class Addition {
public:
    int sum(int num1,int num2) {
        return num1+num2;
    }
    int sum(int num1,int num2, int num3) {
       return num1+num2+num3;
    }
};
int main(void) {
    Addition obj;
    cout<<obj.sum(20, 15)<<endl;
    cout<<obj.sum(81, 100, 10);
    return 0;
}
```
  **输出：**


```cpp
35
191
```
## 函数重载 例2
​	正如我在本指南的开头提到的，具有不同返回类型和相同参数列表的函数不能被重载。但是如果函数有不同的参数列表，那么它们可以有相同或不同的返回类型来满足重载的要求。简而言之，一个函数的返回类型

​	在函数重载中不起任何作用。重要的是函数的参数列表。


```cpp
#include using namespace std;
class DemoClass {
public:
    int demoFunction(int i) {
        return i;
    }
    double demoFunction(double d) {
        return d;
    }
};
int main(void) {
    DemoClass obj;
    cout<<obj.demoFunction(100)<<endl;
    cout<<obj.demoFunction(5005.516);
   return 0;
}
```
  **输出：**


```cpp
100
5006.52
```
## 函数重载的优势
​	函数重载的主要优点是提高**代码的可读性**和允许**代码重用性**。在例子1中，我们已经看到了我们如何能够为同一个任务（加法）使用不同的参数拥有一个以上的函数，这使得我们能够添加两个整数和三个整数，如果我们想要的话，我们可以拥有更多的相同名称和四个或五个参数的函数。

​	试想一下，如果我们没有函数重载，我们要么只能加两个整数的限制，要么就要为同一个任务加法写不同名称的函数，这样会降低代码的可读性和重用性。


