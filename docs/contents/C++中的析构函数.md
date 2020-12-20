# C++中的析构函数
析构函数是一个特殊的成员函数，它的工作原理与构造函数刚好相反，与[构造函数](/contents/C++中的构造函数.html)用于初始化对象不同的是，析构函数会破坏（或删除）对象。


  **析构函数的语法**


```cpp
~class_name()    
{   
   //一些代码   
}
```
​	与构造函数类似，析构函数的名称应该与类名完全匹配。如上图所示，析构函数声明应该总是以波形号(~)符号开头。


## 什么时候会调用析构函数？
  当以下情况时，会**自动调用**的析构器。

   1）程序执行完毕。

   2）当包含[局部变量](/contents/C++中的变量.html)的作用域（{ }括号）结束时。

   3）当你调用删除操作符时。


## 析构函数示例
```cpp
#include using namespace std;
class HelloWorld{
public:
  //构造函数
  HelloWorld(){
    cout<<"Constructor is called"<<endl;
  }
  //析构函数
  ~HelloWorld(){
    cout<<"Destructor is called"<<endl;
   }
   //成员函数
   void display(){
     cout<<"Hello World!"<<endl;
   }
};
int main(){
   //创建对象
   HelloWorld obj;
   //成员函数调用
   obj.display();
   return 0;
}
```
  **输出：**


```cpp
Constructor is called
Hello World!
Destructor is called
```
## 析构函数规则
1) 名称应以小写字母(~)开头，且必须与类名一致。

2) 一个类中不能有一个以上的析构函数。

3) 与构造函数可以有参数不同，析构函数不允许有任何参数。

4）和构造函数一样，它们没有任何返回类型。

5) 当你在类中没有指定任何析构函数时，编译器会生成一个默认的析构函数并将其插入到你的代码中。


