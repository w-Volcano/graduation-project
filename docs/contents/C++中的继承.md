# C++中的继承
​	继承是[面向对象编程系统(OOPs)](/contents/C++中的OOPs概念.html)的特征之一，它允许子类获得父类的属性(数据成员)和功能(成员函数)。

**什么是子类？** 
	继承另一个类的类称为子类，也称为派生类或子类。

​	被其他类继承的类称为父类、超类或基类。


#### 继承的语法
```cpp
class parent_class
{
    //父类的主体
};
class child_class : access_modifier parent_class
{
   //子类的主体
};
```
## 在C++程序设计中使用继承的优势是什么？
​	继承的主要优点是**代码可重用性**和**可读性**。当子类继承父类的属性和功能时，我们不需要在子类中再写同样的代码。这使得代码更容易重用，使得我们编写的代码更少，代码的可读性更强。

​	让我们举一个**现实生活中的例子**来理解这个问题。假设 "人类 "是一个具有身高、体重、颜色等属性和吃饭()、睡觉()、做梦()、工作()等功能的类。

​	现在我们要创建`Male`和`Female`类，这些类是不同的，但由于Male和Female都是人类，它们有一些共同的属性和行为（功能），所以它们可以继承Human类的这些属性和功能，其他的可以分别写在它们的类中。

​	这种方法使我们写的代码更少，因为这两个类都继承了基类的一些属性和功能，因此我们不需要重新编写它们。同时，这也使得代码更容易阅读。


## 继承实例
​	在讨论继承的类型之前，我们先举一个例子。

​	这里有两个类 "Teacher "和 "MathTeacher"，MathTeacher类继承了Teacher类，这意味着 "Teacher "是一个父类，而 "MathTeacher "是一个子类，子类可以使用父类的属性 "collegeName"。子类可以使用父类的属性“collegeName”。


> 另外需要注意的是，当我们创建子类的对象时，它会调用子类的构造函数，子类的构造函数会自动调用基类的构造函数。


```cpp
#include using namespace std;
class Teacher {
public:
  Teacher(){
    cout<<"Hey Guys, I am a teacher"<<endl;
  }
  string collegeName = "Beginnersbook";
};
//该类继承了教师类
class MathTeacher: public Teacher {
public:
  MathTeacher(){
    cout<<"I am a Math Teacher"<<endl;
  }
  string mainSub = "Math";
  string name = "Negan";
};
int main() {
  MathTeacher obj;
  cout<<"Name: "<<obj.name<<endl;
  cout<<"College Name: "<<obj.collegeName<<endl;
  cout<<"Main Subject: "<<obj.mainSub<<endl;
  return 0;
}
```
  **输出：**


```cpp
Hey Guys, I am a teacher
I am a Math Teacher
Name: Negan
College Name: Beginnersbook
Main Subject: Math
```
## C++中的继承类型
​	1）单一继承

​	2）多级继承

​	3）多重继承

​	4）分层继承

​	5）混合继承


### 1）单一继承
​	在单继承中，一个类完全继承一个类。

​	比如说，我们有A类和B类。假设我们有A类和B类


```cpp
B inherits A
```
  **单一继承的例子：**


```cpp
#include using namespace std;
class A {
public:
  A(){
     cout<<"Constructor of A class"<<endl;
  }
};
class B: public A {
public:
  B(){
     cout<<"Constructor of B class";
  }
};
int main() {
   //Creating object of class B
   B obj;
   return 0;
}
```
输出:


```cpp
Constructor of A class
Constructor of B class
```
### 2）多级继承
在这种类型的继承中，一个类继承另一个子类。


```cpp
C inherits B and B inherits A
```
  **多级继承的例子：**


```cpp
#include using namespace std;
class A {
public:
  A(){
     cout<<"Constructor of A class"<<endl;
  }
};
class B: public A {
public:
  B(){
     cout<<"Constructor of B class"<<endl;
  }
};
class C: public B {
public:
  C(){
     cout<<"Constructor of C class"<<endl;
  }
};
int main() {
  //创建C类对象
  C obj;
  return 0;
}
```
输出:


```cpp
Constructor of A class
Constructor of B class
Constructor of C class
```
### 3）多重继承
​	在多重继承中，一个类可以继承多个类。这意味着在这种类型的继承中，一个子类可以有多个父类。

例如：


```cpp
C inherits A and B both
```
  **多重继承的例子：**


```cpp
#include using namespace std;
class A {
public:
  A(){
     cout<<"Constructor of A class"<<endl;
  }
};
class B {
public:
  B(){
     cout<<"Constructor of B class"<<endl;
  }
};
class C: public A, public B {
public:
  C(){
     cout<<"Constructor of C class"<<endl;
  }
};
int main() {
   //创建C类对象
   C obj;
   return 0;
}
```
```cpp
Constructor of A class
Constructor of B class
Constructor of C class
```
### 4）分层继承
 在这种类型的继承中，一个父类有一个以上的子类。例如：


```cpp
Class B and C inherits class A
```
  **分层继承的例子：**


```cpp
#include using namespace std;
class A {
public:
  A(){
     cout<<"Constructor of A class"<<endl;
  }
};
class B: public A {
public:
  B(){ 
     cout<<"Constructor of B class"<<endl;
  }
};
class C: public A{
public:
  C(){
     cout<<"Constructor of C class"<<endl;
  }
};
int main() {
   //Creating object of class C
   C obj;
   return 0;
}
```
输出:


```cpp
Constructor of A class
Constructor of C class
```
### 5）混合继承
​	混合继承是指一种以上的继承类型的组合。例如，子类和父类的关系，按照多重继承和层次继承都可以称为混合继承。


