# C++中的字符串
​	字符串是由字符组成的词，因此被称为字符序列。在C++中，我们有两种方法来创建和使用字符串。

​		1) 通过创建char数组并将其作为字符串处理 

​		2) 通过创建`string`对象。


​	让我们先讨论一下这两种创建字符串的方法，然后再看看哪种方法更好，为什么。


## 1) 字符数组--又称C字符串
**例子1:** 
	一个简单的例子，我们在声明时初始化了char数组。


```cpp
#include using namespace std;
int main(){
   char book[50] = "A Song of Ice and Fire";
   cout<<book;
   return 0;
}
```
  **输出：**


```cpp
A Song of Ice and Fire
```
**例子2：以字符串形式获取用户输入**。
	这可以说是一种低效的读取用户输入的方法，为什么？因为当我们使用`cin`读取用户输入的字符串时，只有字符串的第一个字被存储在char数组中，其余的被忽略。cin函数将字符串中的空格作为定界符，而忽略了后面的部分。


```cpp
#include using namespace std;
int main(){
   char book[50];
   cout<<"Enter your favorite book name:";
   // 读取用户输入
   cin>>book;
   cout<<"You entered: "<<book;
   return 0;
}
```
  **输出：**


```cpp
Enter your favorite book name:The Murder of Roger Ackroyd
You entered: The
```
​	你可以看到，书中只抓到了 "The"，空间之后的剩余部分被忽略了。那么如何处理这个问题呢？好吧，为此我们可以使用`cin.get`函数，它可以读取用户输入的完整行。

**例3：使用cin.get捕捉用户输入字符串的正确方法**


```cpp
#include using namespace std;
int main(){
   char book[50];
   cout<<"Enter your favorite book name:";
 
   // 读取用户输入
   cin.get(book, 50);
   cout<<"You entered: "<<book;
   return 0;
}
```
  **输出：**


```cpp
Enter your favorite book name:The Murder of Roger Ackroyd
You entered: The Murder of Roger Ackroyd
```
### 此方法的缺点
​	1）char数组的大小是固定的，也就是说通过它创建的字符串大小是固定的，在运行时不能给它分配更多的内存。例如，假设你创建了一个大小为10的字符数组，而用户输入了大小为15的字符串，那么最后五个字符将从字符串中被截断。

   	另一方面，如果你创建了一个更大的数组来容纳用户的输入，那么如果用户的输入很小，而数组比需要的大得多，就会浪费内存。


​	2）在这种方法中，你只能使用为数组创建的内置函数，而这些函数对字符串的操作帮助不大。

**解决这些问题的方法是什么呢**？
	我们可以使用字符串对象创建字符串。让我们看看如何做到这一点。


## C++中的String对象
​	到目前为止，我们已经看到了如何在C++中使用char数组处理字符串。让我们看看在C++中处理字符串的另一种更好的方法--String对象。


```cpp
#includeusing namespace std;
int main(){
   // 我们是这样创建String对象的
   string str;
   cout<<"Enter a String:";
   // 这是用来获取用户的输入并将其存储到str
   getline(cin,str);
   cout<<"You entered: ";
   cout<<str<<endl;
   // 此函数在字符串末尾添加一个字符。
   str.push_back('A');
   cout<<"The string after push_back: "<<str<<endl;
   // 该函数从字符串末尾删除一个字符。
   str.pop_back();
   cout << "The string after pop_back: "<<str<<endl;
   return 0;
}
```
  **输出：**


```cpp
Enter a String:XYZ
You entered: XYZ
The string after push_back: XYZA
The string after pop_back: XYZ
```
​	使用这种方法的好处是不需要声明字符串的大小，大小是在运行时确定的，所以这是一种比较好的内存管理方法。内存是在运行时动态分配的，所以不会浪费内存。
