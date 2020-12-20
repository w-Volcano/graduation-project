# C++中的枚举
​	Enum是一种用户定义的数据类型，在这种类型中，我们为一个变量指定了一组值，并且该变量只能从一小组可能的值中取一个。我们使用enum关键字来定义一个枚举。


```cpp
enum direction {East, West, North, South}dir;
```
​	这里枚举名称是direction，只能取四个指定值中的一个，声明最后的dir是一个枚举变量。


​	让我们举个简单的例子来理解这个问题。

​	这里我将值West分配给了枚举变量dir，当我显示dir的值时，它显示为1，这是因为默认情况下，值是从0开始递增的顺序，也就是说东为0，西为1，北为2，南为3。


## 简单的枚举示例
```cpp
#includeusing namespace std;
enum direction {East, West, North, South}dir;
int main()
{
   dir = West;
   cout<<dir;
   return 0;
}
```
## 另一种声明枚举变量的方式
​	在上面的例子中我们已经看到，我在枚举声明时声明了枚举变量dir，还有一种方法可以声明枚举变量。


```cpp
#include using namespace std;
enum direction {East, West, North, South};
int main(){
   direction dir;
   dir = South; 
   cout<<dir;   
   return 0;
}
```
输出:


```cpp
3
```
## 为什么在C++中使用枚举？
​	现在我们了解了什么是枚举，以及如何在程序中使用它们，让我们讨论一下为什么要使用它们。

​	枚举只有在我们期望变量有一个可能的值时才会使用, 例如, 我们有一个存放方向的dir变量. 由于我们有四个方向，这个变量可以取四个值中的任何一个，如果我们试图给这个变量分配一个其他的随机值，就会抛出一个编译错误。这样就增加了编译时的检查，避免了因传递无效常量而发生的错误。


​	另一个经常使用它们的重要地方是[switch case语句](/contents/在C++中的switch%20case语句与示例.html)，在这里，case块所期望的所有值都可以定义在一个enum中。这样我们就可以确保我们在switch括号中传递的枚举变量没有接受任何不该接受的随机值。


## 如何改变Enum的默认值
```cpp
#include using namespace std;
enum direction {East=11, West=22, North=33, South=44};
int main(){
   direction dir;
   dir = South;
   cout<<dir; 
   return 0;
}
```
  **输出：**


```cpp
44
```
