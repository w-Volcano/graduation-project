# C++中的指针
​	指针是C++中的一个变量，它可以保存另一个变量的地址。它们和变量一样有[数据类型](/contents/C++中的数据类型.html)，例如一个整数类型的指针可以存放一个整数变量的地址，一个字符类型的指针可以存放char变量的地址。


#### 指针的语法
```cpp
data_type *pointer_name;
```
  **如何声明一个指针？**


```cpp
/* 这个指针p可以存放一个整数变量的地址，
 * 这里p是一个指针，var只是一个简单的整数变量而已
 */
int *p, var
```
**分配** 

​	正如我在上面提到的，一个整数类型的指针可以持有另一个int变量的地址，这里我们有一个整数变量var，指针p持有var的地址。这里我们有一个整数变量var，指针p持有var的地址，为了将变量的地址分配给指针，我们使用**与符号**（&）。


```cpp
/* 这就是你如何将另一个变量的地址分配给指针的方法
 */
p = &amp;var;
```
  **如何使用它？**


```cpp
// 这将打印变量var的地址
cout<<&amp;var;    
/* 这也将打印变量var的地址，
 * 因为指针p持有var的地址。
 */
cout<<p;    
/* 这将打印出var的值，
 * 这一点很重要，
 * 这是我们通过指针访问变量值的方法。
*/
cout<<*p; 
```
## 指针的例子
​	让我们举一个简单的例子来理解我们上面讨论的内容。


```cpp
#include using namespace std;
int main(){
   //指针声明
   int *p, var=101;
 
   //分配
   p = &amp;var;
   cout<<"Address of var: "<<&amp;var<<endl;
   cout<<"Address of var: "<<p<<endl;
   cout<<"Address of p: "<<&amp;p<<endl;
   cout<<"Value of var: "<<*p;
   return 0;
}
```
  **输出：**


```cpp
Address of var: 0x7fff5dfffc0c
Address of var: 0x7fff5dfffc0c
Address of p: 0x7fff5dfffc10
Value of var: 101
```
## 指针和数组
​	在用指针处理[数组](/contents/C++中的数组)时，你需要注意一些事情。首先，关于数组，需要注意的是，数组的名称本身就代表了数组的基本地址，所以当把数组的地址分配给指针时，不要使用安培符号(&)。要这样做：

**正确：** 因为arr代表数组的地址。


```cpp
p = arr;
```
 **不正确：**


```cpp
p = &amp;arr;
```
### 例子: 使用指针遍历数组
```cpp
#include using namespace std;
int main(){
   //指针声明
   int *p;
   //数组声明
   int arr[]={1, 2, 3, 4, 5, 6};
   //分配
   p = arr;
   for(int i=0; i<6;i++){
     cout<<*p<<endl;
     //++ 将指针移动到下一个int位置
     p++;
   }
   return 0;
}
```
  **输出：**


```cpp
1
2
3
4
5
6
```
## 如何递增指针地址和指针的值？
​	当我们通过指针访问一个变量的值时，有时我们只需要通过它来递增或递减变量的值，或者我们可能需要将指针移动到下一个int的位置（就像我们在上面处理数组时做的那样）。[++运算符](https://beginnersbook.com/2017/08/cpp-operators/)就是用于这个目的的。我们在上面看到的一个++运算符的例子中，我们通过使用++运算符递增指针值来遍历数组。让我们再看几个例子。


```cpp
// 指针移动到下一个int的位置（就像一个数组一样）
p++; 
// 指针移动到下一个int的位置（就像一个数组一样）
++p;   
/* 以下三种情况都是一样的，都是将指针p指向的变量的值递增。
 */
++*p;   
++(*p); 
++*(p); 
```
