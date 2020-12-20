# C++中的友元类和友元函数
​	我们知道，一个类不能访问其他类的私有成员，同样，一个没有继承其他类的类也不能访问它的保护成员。同样，一个没有继承其他类的类也不能访问它的保护成员。

**友元类：** 

   一个**友元类**是一个可以访问它被声明为**friend**的类的私有成员和受保护成员的类。当我们要允许某个类访问一个类的私有成员和受保护成员时，就需要这样做。


## 友元类实例
​	在这个例子中，我们有两个类`XYZ`和`ABC`。`XYZ`类有两个私有数据成员`ch`和`num`，这个类声明`ABC`为友类。这意味着`ABC`可以访问`XYZ`的私有成员，同样的例子已经证明了`ABC`类的函数`disp()`访问私有成员`num`和`ch`。在这个例子中，我们是[从函数中传递和返回对象](/contents/从C++函数中传递和返回对象.html)。


```cpp
#include using namespace std;
class XYZ {
private:
   char ch='A';
   int num = 11;
public:
   /* 这句话将使类ABC成为XYZ的朋友类，
    * 这意味着ABC可以访问XYZ类的私有成员和受保护成员。
    */
   friend class ABC;
};
class ABC {
public:
   void disp(XYZ obj){
      cout<<obj.ch<<endl;
      cout<<obj.num<<endl;
   }
};
int main() {
   ABC obj;
   XYZ obj2;
   obj.disp(obj2);
   return 0;
}
```
  **输出：**


```cpp
A
11
```
**友元函数:** 
   与友元类类似，这个函数可以访问另一个类的私有成员和保护成员。全局函数也可以声明为friend，如下例所示。


## 友元函数实例
```cpp
#include using namespace std;
class XYZ {
private:
   int num=100;
   char ch='Z';
public:
   friend void disp(XYZ obj);
};
//Global Function
void disp(XYZ obj){
   cout<<obj.num<<endl; 
   cout<<obj.ch<<endl;
}
int main() {
   XYZ obj;
   disp(obj);
   return 0;
}
```
  **输出：**


```cpp
100
Z
```
