module.exports = {
  title: 'C++ 教程',
  description: 'C++教程 - 通过实例学习C++编程',
  head: [
    
  ],
  base:'/',
  themeConfig: {
    sidebar: {
      "/": [
        {
          title: "C++ 教程",
          collapsable: false,
          children: [
			{ title: "C++ 教程", path: "/" },
			{ title: "第一个C++程序", path: "/contents/第一个C++程序 - Hello World" },
			{ title: "C++ 变量", path: "/contents/C++中的变量" },
			{ title: "C++ 数据类型", path: "/contents/C++中的数据类型" },
			{ title: "C++ 运算符", path: "/contents/C++中的运算符" }
          ]
        },
        {
          title: "流程控制",
          collapsable: false,
		  children: [
			{ title: "C++ if-else", path: "/contents/C++中的if-else语句" },
			{ title: "C++ switch case", path: "/contents/在C++中的switch case语句与示例" },
			{ title: "C++ for 循环", path: "/contents/在C++中的for循环与示例" },
			{ title: "C++ while循环", path: "/contents/在C++中while循环的示例" },
			{ title: "C++ do-while循环", path: "/contents/C++中的do-while循环示例" },
			{ title: "C++ continue", path: "/contents/C++中的continue语句示例" },
			{ title: "C++ break", path: "/contents/在C++中的break语句与示例" },
			{ title: "C++ goto", path: "/contents/在C++中goto语句的示例" }
          ]
        },
		{
          title: "函数",
          collapsable: false,
		  children: [
			{ title: "C++ 函数", path: "/contents/C++中的函数与示例" },
			{ title: "C++ 函数中的默认参数", path: "/contents/C++函数中的默认参数" },
			{ title: "C++ 递归", path: "/contents/C++递归与示例" }
		  ]
        },
		{
          title: "数组",
          collapsable: false,
		  children: [
			{ title: "C++ 数组", path: "/contents/C++中的数组" },
			{ title: "C++ 多维数组", path: "/contents/C++中的多维数组" },
			{ title: "C++ 数组函数", path: "/contents/在C++中向函数传递数组" },
			{ title: "C++ 字符串", path: "/contents/C++中的字符串" }
		  ]
        },
		{
          title: "指针",
          collapsable: false,
		  children: [
			{ title: "C++ 指针", path: "/contents/C++中的指针" },
			{ title: "C++ 'this'指针", path: "/contents/C++的'this'指针" }
		  ]
        },
		{
          title: "OOPs概念",
          collapsable: false,
		  children: [
			{ title: "C++ OOP", path: "/contents/C++中的OOPs概念" },
			{ title: "C++ 构造函数", path: "/contents/C++中的构造函数" },
			{ title: "C++ 析构函数", path: "/contents/C++中的析构函数" },
			{ title: "C++ 结构体", path: "/contents/C++中的结构体" },
			{ title: "C++ 结构体与函数", path: "/contents/C++中的结构体与函数" },
			{ title: "C++ 枚举", path: "/contents/C++中的枚举" },
			{ title: "C++ 继承", path: "/contents/C++中的继承" },
			{ title: "C++ 多态", path: "/contents/C++中的多态性" },
			{ title: "C++ 函数重载", path: "/contents/C++中的函数重载" },
			{ title: "C++ 函数重写", path: "/contents/C++中的函数重写" },
			{ title: "C++ 虚函数", path: "/contents/C++中的虚函数：运行时多态性" },
			{ title: "C++ 封装", path: "/contents/在C++中封装示例" },
			{ title: "C++ 抽象", path: "/contents/C++抽象的示例" },
			{ title: "C++ 接口", path: "/contents/C++中的接口：抽象类" },
			{ title: "C++ 函数和对象", path: "/contents/从C++函数中传递和返回对象" },
			{ title: "C++ 友元类和友元函数", path: "/contents/C++中的友元类和友元函数" }
		  ]
        }
      ]
    },
    sidebarDepth: 0,
	markdown: {
		lineNumbers: false
	}
  }
}