# C++中的结构体与函数
在本篇[上篇教程](/contents/C++中的结构体.html)中，我们学习了结构体，即将不同类型的变量分组的复合数据类型。在本教程中，我们将学习如何将结构体作为参数传递给函数，以及如何从函数中返回结构体。


## 如何将结构体作为参数传递给函数
​	这里我们有一个函数`printStudentInfo()`，它以结构`Student`为参数，使用结构varaible打印学生的详细信息。这里要注意的是，你应该总是在函数声明之前声明结构，否则你会得到编译错误。


```cpp
#include using namespace std;
struct Student{
   char stuName[30];
   int stuRollNo;
   int stuAge;
};
void printStudentInfo(Student);
int main(){
   Student s;
   cout<<"Enter Student Name: ";
   cin.getline(s.stuName, 30);
   cout<<"Enter Student Roll No: ";
   cin>>s.stuRollNo;
   cout<<"Enter Student Age: ";
   cin>>s.stuAge;
   printStudentInfo(s);
   return 0;
}
void printStudentInfo(Student s){
   cout<<"Student Record:"<<endl;
   cout<<"Name: "<<s.stuName<<endl;
   cout<<"Roll No: "<<s.stuRollNo<<endl;
   cout<<"Age: "<<s.stuAge;
}
```
  **输出：**


```cpp
Enter Student Name: Rick
Enter Student Roll No: 666123
Enter Student Age: 19
Student Record:
Name: Rick
Roll No: 666123
Age: 19
```
## 如何从函数中返回结构体
  在这个例子中，我们有两个[函数](https://beginnersbook.com/2017/08/cpp-functions/)，一个是从用户那里获取值，将它们分配给结构体成员并返回结构，另一个函数将该结构体作为参数并打印细节。


```cpp
#include using namespace std;
struct Student{
   char stuName[30];
   int stuRollNo;
   int stuAge;
};
Student getStudentInfo();
void printStudentInfo(Student);
int main(){
   Student s;
   s = getStudentInfo();
   printStudentInfo(s);
   return 0;
}
/* 该函数提示用户输入学生的详细信息，
 * 并将其存储在结构成员中，
 * 然后返回结构体。
 */
Student getStudentInfo(){
   Student s;
   cout<<"Enter Student Name: ";
   cin.getline(s.stuName, 30);
   cout<<"Enter Student Roll No: ";
   cin>>s.stuRollNo;
   cout<<"Enter Student Age: ";
   cin>>s.stuAge;
   return s;
}
void printStudentInfo(Student s){
   cout<<"Student Record:"<<endl;
   cout<<"Name: "<<s.stuName<<endl;
   cout<<"Roll No: "<<s.stuRollNo<<endl;
   cout<<"Age: "<<s.stuAge;
}
```
  输出:


```cpp
Enter Student Name: Tyrion lannister
Enter Student Roll No: 333901
Enter Student Age: 39
Student Record:
Name: Tyrion lannister
Roll No: 333901
Age: 39
```
