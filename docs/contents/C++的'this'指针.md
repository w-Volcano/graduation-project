# C++的'this'指针

   **this** 指针持有当前对象的地址，简单的说可以说这个[指针](/contents/C++中的指针.html)指向类的当前对象。我们举个例子来理解这个概念。


## C++例子：this指针

​	在成员函数setMyValues()中，我们有两个与数据成员名称相同的局部变量，在这种情况下，如果你想将局部变量的值分配给数据成员，除非你使用这个指针，否则你将无法做到。在这种情况下，如果你想把局部变量的值分配给数据成员，那么除非你使用这个指针，否则你将无法做到，因为除非你使用这个指针，否则编译器不会知道你正在引用对象的数据成员。这是一个必须使用**this**指针的例子。


```cpp
#include using namespace std;
class Demo {
private:
  int num;
  char ch;
public:
  void setMyValues(int num, char ch){
    this->num =num;
    this->ch=ch;
  }
  void displayMyValues(){
    cout<<num<<endl;
    cout<<ch;
  }
};
int main(){
  Demo obj;
  obj.setMyValues(100, 'A');
  obj.displayMyValues();
  return 0;
}
```
  **输出：**


```cpp
100
A
```
## 例2：使用该指针进行函数链式调用
​	使用this指针的另一个例子是返回当前对象的引用，这样你就可以连锁调用函数，这种方式可以一次性调用当前对象的所有函数。在这个程序中，还有一点很重要，那就是我在第二个函数中对对象的num值进行了增量，在输出中可以看到，它实际上是增量了我们在第一个函数调用中设置的值。这说明链锁是有顺序的，对对象的数据成员所做的改变会保留到进一步的链锁调用中。


```cpp
#include using namespace std;
class Demo {
private:
  int num;
  char ch;
public:
  Demo &amp;setNum(int num){
    this->num =num;
    return *this;
  }
  Demo &amp;setCh(char ch){
    this->num++;
    this->ch =ch;
    return *this;
  }
  void displayMyValues(){
    cout<<num<<endl;
    cout<<ch;
  }
};
int main(){
  Demo obj;
  //Chaining calls
  obj.setNum(100).setCh('A');
  obj.displayMyValues();
  return 0;
}
```
  **输出：**


```cpp
101
A
```
