# C++抽象的示例
​	抽象是[面向对象编程](/contents/C++中的OOPs概念.html)的特点之一，在这里你只向用户展示相关的细节，而隐藏不相关的细节。例如，当你向某人发送电子邮件时，你只需点击发送就可以得到成功的消息，而当你点击发送时实际发生了什么，数据是如何通过网络传输给收件人的，都被你隐藏起来了（因为这与你无关）。


​	让我们看看在C++程序中如何使用访问指定器来实现。


## 抽象实例
```cpp
#include using namespace std;
class AbstractionExample{
private:
   /*	
   * 通过将这些数据成员私有化，
   * 我将它们隐藏起来，
   * 使外界无法访问这些数据成员。
   * 设置和获取其值的唯一方法是通过公共函数。
   */
   int num;
   char ch;
public:
   void setMyValues(int n, char c) {
      num = n; ch = c;
   }
   void getMyValues() {
      cout<<"Numbers is: "<<num<< endl;
      cout<<"Char is: "<<ch<<endl;
   }
};
int main(){
   AbstractionExample obj;
   obj.setMyValues(100, 'X');
   obj.getMyValues();
   return 0;
}
```
  **输出：**


```cpp
Numbers is: 100
Char is: X
```
## 数据抽象的优势
​	使用这个功能的主要好处是，当代码发展到需要对代码进行一些调整时，你只需要修改你已经声明成员为私有的高层次类。由于没有一个类直接访问这些数据成员，所以你不需要修改低级（用户级）类的代码。

​	试想一下，如果你把这些数据成员公开了，如果在某些时候你想修改代码，你就必须对所有直接访问这些成员的类进行必要的调整。

**数据抽象的其他优点有：**

   1）使数据具有私密性，避免了用户级的错误而破坏数据，从而使应用安全。

   2）避免了代码重复，提高了代码的可重用性。


