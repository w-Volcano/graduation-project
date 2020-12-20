# C++中的多态性
​	多态性是[OOPs](/contents/C++中的OOPs概念.html)的一个特性，它允许对象在不同的条件下有不同的行为。在C++中，我们有两种类型的多态性。

​	1）编译时多态性--这也被称为静态（或早期）绑定。

​	2）运行时多态性--这也被称为动态（或后期）绑定。


## 1）编译时多态性
​	函数重载和操作符重载是编译时多态性的完美例子。


### 编译时多态性实例
​	在这个例子中，我们有两个名称相同但参数数不同的函数。根据我们在函数调用时传递的参数数量决定调用哪个函数，这就是为什么它被认为是多态性的一个例子，因为在不同的条件下，输出是不同的。由于，调用是在编译时决定的，这就是为什么它被称为编译时多态。


```cpp
#include using namespace std;
class Add {
public:
  int sum(int num1, int num2){
     return num1+num2;
  }
  int sum(int num1, int num2, int num3){
     return num1+num2+num3;
  }
};
int main() {
  Add obj;
  //这将调用第一个函数
  cout<<"Output: "<<obj.sum(10, 20)<<endl;
  //这将调用第二个函数
  cout<<"Output: "<<obj.sum(11, 22, 33);
  return 0;
}
```
```cpp
Output: 30
Output: 66
```
## 2）运行时多态性
​	函数重写是运行时多态性的一个例子。

​	**函数重写** 。当子类声明了一个方法，而这个方法已经存在于父类中，那么这就叫做函数重写，这里子类重写父类。


​	在函数重写的情况下，我们有两个相同函数的定义，一个是父类，一个是子类。函数的调用是在**运行时**决定调用哪个定义的函数，这就是所谓运行时多态的原因。


### 运行时多态性示例
```cpp
#include using namespace std;
class A {
public:
  void disp(){
     cout<<"Super Class Function"<<endl;
  }
};
class B: public A{
public:
  void disp(){
     cout<<"Sub Class Function";
  }
};
int main() {
  //Parent class object
  A obj;
  obj.disp();
  //Child class object
  B obj2;
  obj2.disp();
  return 0;
}
```
 输出:


```cpp
Super Class Function
Sub Class Function
```
