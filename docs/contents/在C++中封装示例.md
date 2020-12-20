# 在C++中封装示例
​	封装是将数据成员和函数组合在一个称为类的单一单元中的过程。这是为了防止对数据的直接访问，对数据的访问是通过类的函数提供的。它是[面向对象编程(OOPs)](/contents/C++中的OOPs概念.html)的流行特征之一，有助于**数据隐藏**。


## 类中如何实现封装
要做到这几点。

1) 将所有的数据成员变成私有的

2）为每个数据成员创建公共的setter和getter函数，使set函数设置数据成员的值，get函数获取数据成员的值。


让我们在一个示例程序中看到这几点。


## C++中的封装实例
​	这里我们有两个数据成员num和ch，我们将它们声明为私有，这样它们就不能在类外访问，这样我们就隐藏了数据。获取和设置这些数据成员值的唯一方法是通过公共的getter和setter函数。


```cpp
#includeusing namespace std;
class ExampleEncap{
private:
   /* 由于我们已经将这些数据成员标记为私有，
    * 所以这个类之外的任何实体都不能直接访问这些数据成员，
    * 他们必须使用getter和setter函数。
    */
   int num;
   char ch;
public:
   /* 获取器函数用于获取数据成员的值。
    * 由于这些函数是公开的，因此可以在类外访问，
    * 从而提供了通过这些函数访问数据成员的机会。
    */
   int getNum() const {
      return num;
   }
   char getCh() const {
      return ch;
   }
   /* Setter函数，
    * 它们被用来给私有数据成员赋值。
    */
   void setNum(int num) {
      this->num = num;
   }
   void setCh(char ch) {
      this->ch = ch;
   }
};
int main(){
   ExampleEncap obj;
   obj.setNum(100);
   obj.setCh('A');
   cout<<obj.getNum()<<endl;
   cout<<obj.getCh()<<endl;
   return 0;
}
```
  **输出：**


```cpp
100
A
```
