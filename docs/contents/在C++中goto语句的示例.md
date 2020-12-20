# 在C++中goto语句的示例
​	goto语句用于将程序的控制权转移到一个给定的标签上。goto语句的语法如下：


```cpp
goto label_name;
```
  **程序结构：**


```cpp
label1:
...
...
goto label2;
...
..
label2:
...
```
​	在一个程序中，我们有任意多条的goto语句和label语句，goto语句后面都有一个标签名，每当遇到goto语句时，程序的控制权就会跳转到goto语句中指定的标签。


> 在任何开发中，几乎从不使用goto语句，因为它们很复杂，使你的程序可读性大大降低，而且更容易出错。你可以使用[continue](/contents/C++中的continue语句示例.html)和[break语句](/contents/在C++中的break语句与示例.html)来代替goto。


## C++中的goto语句示例
```cpp
#include using namespace std;
int main(){
   int num; cout<<"Enter a number: "; cin>>num;
   if (num % 2==0){
      goto print;
   }
   else {
      cout<<"Odd Number";
   }
   print:
   cout<<"Even Number";
   return 0;
}
```
  **输出：**


```cpp
Enter a number: 42
Even Number
```
