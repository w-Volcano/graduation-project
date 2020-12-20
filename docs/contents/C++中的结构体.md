# C++中的结构体
​	结构体是一种复合数据类型，包含不同类型的变量。例如，你想存储学生的详细信息，如学生姓名，学生卷号，学生年龄。你有两种方法，一种方法是为每个数据创建不同的变量，但这种方法的缺点是，如果你想存储多个学生的详细信息，在这种情况下，为每个学生创建单独的变量集是不可行的。

​	第二种也是最好的方法，通过创建这样的结构体来实现。


```cpp
struct Student
{
    char stuName[30];
    int stuRollNo;
    int stuAge;
};
```
​	现在这三个成员组合在一起就像一个独立的变量，你可以创建这样的结构变量：


```cpp
structure_name variable_name
```
​	所以如果你想用这种结构来保存两个学生的信息，那么你可以这样做：


```cpp
Student s1, s2;
```
​	然后我可以这样访问学生结构的成员：


```cpp
//将名字分配给第一个学生
s1.stuName = "Ajeet";
//将年龄分配给第二个学生
s2.stuAddr = 22;
```
​	同样我也可以为每个学生设置和获取结构中其他数据成员的值。让我们看一个完整的例子，把这一切都实现了。


## C++中的结构体实例
```cpp
#include using namespace std;
struct Student{
   char stuName[30];
   int stuRollNo;
   int stuAge;
};
int main(){
   Student s;
   cout<<"Enter Student Name: ";
   cin.getline(s.stuName, 30);
   cout<<"ENter Student Roll No: ";
   cin>>s.stuRollNo;
   cout<<"Enter Student Age: ";
   cin>>s.stuAge;
   cout<<"Student Record:"<<endl;
   cout<<"Name: "<<s.stuName<<endl;
   cout<<"Roll No: "<<s.stuRollNo<<endl;
   cout<<"Age: "<<s.stuAge;
   return 0;
}
```
  **输出：**


```cpp
Enter Student Name: Negan
ENter Student Roll No: 4101003
Enter Student Age: 22
Student Record:
Name: Negan
Roll No: 4101003
Age: 22
```
