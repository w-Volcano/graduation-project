# C++中的虚函数：运行时多态性
​	在本指南中，我们将看到**什么是虚函数以及为什么要使用它们** 。当我们在一个类中声明一个函数为虚函数时，所有覆盖这个函数的子类都默认将其函数实现为虚函数（无论它们是否标记为虚函数）。**我们为什么要声明一个函数是虚拟的？**为了让编译器知道对这个函数的调用需要在运行时进行解析（也就是所谓的**迟绑定**和动态链接），从而确定对象类型，调用正确的函数版本。


​	让我们举个例子来了解当我们不把一个[重写函数](/contents/C++中的函数重写.html)标记为虚函数时会发生什么。


## 例1: 重写一个非虚函数
​	看到这里就知道问题所在了。尽管我们的父类指针指向子类的实例（对象），但父类版本的函数还是被调用了。


​	你可能会想我为什么要创建指针，我可以像这样简单地创建子类的对象。Dog obj; 然后把Dog的实例分配给它. 好吧，在这个例子中，我只有一个子类，但是当我们的大项目有几个子类时，不建议单独创建子类的对象，因为这增加了复杂性，代码也容易出错。经过这个例子，对这个问题更加清晰了。


```cpp
#includeusing namespace std;
//父类或超类或基类
class Animal{
public:
   void animalSound(){
      cout<<"This is a generic Function";
   }
};
//子类或派生类
class Dog : public Animal{
public:
   void animalSound(){ 
      cout<<"Woof";
   }
};
int main(){
   Animal *obj;
   obj = new Dog();
   obj->animalSound();
   return 0;
}
```
  **输出：**


```cpp
This is a generic Function
```
## 例2：使用虚函数
​	请看在这种情况下，输出的是Woof，这是我们所期望的。在这种情况下会发生什么呢？由于我们将函数animalSound()标记为虚函数，因此对该函数的调用在运行时被解析，编译器在运行时确定对象的类型并调用相应的函数。


```cpp
#includeusing namespace std;
//父类或超类或基类
class Animal{
public:
   virtual void animalSound(){
      cout<<"This is a generic Function";
   }
};
//子类或派生类
class Dog : public Animal{
public:
   void animalSound(){ 
      cout<<"Woof";
   }
};
int main(){
   Animal *obj;
   obj = new Dog();
   obj->animalSound();
   return 0;
}
```
输出:


```cpp
Woof
```
