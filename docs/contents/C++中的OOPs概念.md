# C++中的OOPs概念
​	面向对象编程是一种通过使用对象将复杂问题分解成小问题来解决的方法。在面向对象编程（通常称为OOP）之前，程序都是用程序化语言编写的，它们不过是一长串指令。另一方面，OOP就是要创建可以相互交互的对象，这使得我们可以理解它们之间的关系，因此用OOP开发程序更加容易。


## 面向对象编程(OOP)
​	在面向对象编程中，我们利用OOP的特点，如**抽象**，**封装**，**继承**和**多态**，使用类和对象编写程序。


### 类和对象
​	一个类就像一个数据成员和函数的蓝图，而对象就是类的一个实例。例如，假设我们有一个类**Car**，它有数据成员(变量)，如速度、重量、价格和函数，如换档()、减速()、刹车()等。现在让我们假设我为这个类创建一个名为FordFigo的对象，它使用这些数据成员和函数，并赋予它们自己的值。同样，我们可以使用蓝图(类)创建任意多的对象。


```cpp
//类名是Car
class Car
{
    //数据成员
    char name[20];
    int speed;
    int weight;
 
public:
    //函数
    void brake(){
    }
    void slowDown(){
    }
};
 
int main()
{
   //ford是一个对象
   Car ford; 
}
```
### 抽象
​	[抽象](/contents/C++抽象的示例.html)是一个向用户隐藏不相关细节的过程。例如，当你发送一条短信时，你只需输入信息，选择联系人，然后点击发送，手机就会显示信息已经发送，当你点击发送时，后台实际发生的事情就会被你隐藏起来，因为它与你无关。


### 封装
​	[封装](/contents/在C++中封装示例.html)是将数据和函数组合成一个像胶囊一样的单一单元的过程。这是为了避免私有数据成员从类外访问。为了实现封装，我们将类的所有数据成员都变成私有的，并创建公共函数，利用这些函数我们可以从这些数据成员中获取值，或者对这些数据成员设置值。


### 继承
  [继承](/contents/C++中的继承.html)是利用子类的对象获得父类的属性的一种特性。


```cpp
#include using namespace std;
class ParentClass {
  //数据成员
  public:
    int var1 =100;
};
class ChildClass: public ParentClass {
  public:
  int var2 = 500;
};
int main(void) {
  ChildClass obj;
}
```
​	现在这个对象obj可以使用ParentClass的属性（如变量var1）。


### 多态
​	[函数重载](/contents/C++中的函数重载)和操作符重载是多态性的例子。多态性是指一个对象在不同情况下有不同行为的特征。

​	在函数重载中，我们可以有多个同名但不同数字、类型或参数序列的函数。


#### 多态实例
```cpp
#include using namespace std;
class Sum {
  public:
    int add(int num1,int num2){
      return num1 + num2;
    }
    int add(int num1, int num2, int num3){
      return num1 + num2 + num3;
    }
};
int main(void) {
   //Sum类的对象
   Sum obj;
   //这将调用第二个add函数
   cout<<obj.add(10, 20, 30)<<endl;
   //这将调用第一个add函数
   cout<<obj.add(11, 22);
   return 0;
}
```
  **输出：**


```cpp
60
33
```
