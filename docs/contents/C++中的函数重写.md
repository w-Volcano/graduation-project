# C++中的函数重写
​	函数重写是一种功能，它允许我们在子类中拥有一个已经存在于父类中的相同功能。子类继承了父类的数据成员和成员函数，但是当你想在子类中重写一个函数时，你可以使用函数重写。这就像在子类中创建一个旧函数的新版本。


## 函数重写示例
​	要重写一个函数，你必须在子类中拥有相同的签名。我所说的签名是指数据类型和参数序列。这里我们在父函数中没有任何参数，所以我们在子函数中没有使用任何参数。


```cpp
#include using namespace std;
class BaseClass {
public:
   void disp(){
      cout<<"Function of Parent Class";
   }
};
class DerivedClass: public BaseClass{
public:
   void disp() {
      cout<<"Function of Child Class";
   }
};
int main() {
   DerivedClass obj = DerivedClass();
   obj.disp();
   return 0;
}
```
输出:


```cpp
Function of Child Class
```
> **注：** 在函数重写中，父类中的函数称为被重写函数，子类中的函数称为重写函数。


## 如何从子类中调用重写函数？
​	如上所述，当我们对函数（涉及到覆盖）进行调用时，子类函数（覆盖函数）被调用。如果你想使用子类的对象来调用被覆盖的函数呢？你可以通过创建子类对象，使父类的引用指向它的方式来实现。让我们举个例子来理解它。


```cpp
#include using namespace std;
class BaseClass {
public:
   void disp(){
      cout<<"Function of Parent Class";
   }
};
class DerivedClass: public BaseClass{
public:
   void disp() {
      cout<<"Function of Child Class";
   }
};
int main() {
   /* Reference of base class pointing to
    * the object of child class.
    */
   BaseClass obj = DerivedClass(); 
   obj.disp();
   return 0;
}
```
输出:


```cpp
Function of Parent Class
```
如果你想从覆盖函数中调用Overridden函数，那么你可以这样做：


```cpp
parent_class_name::function_name
```
在上面的例子中，我们可以在子类的disp()函数中写下以下语句：


```cpp
BaseClass::disp();
```
