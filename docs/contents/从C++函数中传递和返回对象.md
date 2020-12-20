# 从C++函数中传递和返回对象
​	在本教程中，我们将看到如何将一个对象作为参数传递给一个函数，以及如何从函数中返回一个对象。


## 将对象传递给函数
​	一个对象可以传递给一个函数，就像我们[将结构传递给函数](/contents/C++中的结构体与函数.html)一样。在A类中，我们有一个函数`disp()`，在这个函数中我们传递的是A类的对象。同样，我们也可以将另一个类的对象传递给不同类的函数。


```cpp
#include using namespace std;
class A {
public:
   int n=100;
   char ch='A';
   void disp(A a){
      cout<<a.n<<endl;
      cout<<a.ch<<endl;
   }
};
int main() {
   A obj;
   obj.disp(obj);
   return 0;
}
```
  **输出：**


```cpp
100
A
```
## 从函数中返回对象
​	在这个例子中，我们有两个函数，函数`input()`返回`Student`对象，`disp()`以`Student`对象为参数。


```cpp
#include using namespace std;
class Student {
public:
   int stuId;
   int stuAge;
   string stuName;
   /* 在这个函数中，我们返回的是Student对象
    */
   Student input(int n, int a, string s){
      Student obj;
      obj.stuId = n;
      obj.stuAge = a;
      obj.stuName = s;
      return obj;
   }
   /* 在这个函数中，我们传递对象作为参数
    */
   void disp(Student obj){
      cout<<"Name: "<<obj.stuName<<endl;
      cout<<"Id: "<<obj.stuId<<endl;
      cout<<"Age: "<<obj.stuAge<<endl;
   }
};
int main() {
   Student s;
   s = s.input(1001, 29, "Negan");
   s.disp(s);
   return 0;
}
```
  **输出：**


```cpp
Name: Negan
Id: 1001
Age: 29
```
