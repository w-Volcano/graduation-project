(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{386:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"c-中的字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的字符串"}},[t._v("#")]),t._v(" C++中的字符串")]),t._v(" "),a("p",[t._v("​\t字符串是由字符组成的词，因此被称为字符序列。在C++中，我们有两种方法来创建和使用字符串。")]),t._v(" "),a("p",[t._v("​\t\t1) 通过创建char数组并将其作为字符串处理")]),t._v(" "),a("p",[t._v("​\t\t2) 通过创建"),a("code",[t._v("string")]),t._v("对象。")]),t._v(" "),a("p",[t._v("​\t让我们先讨论一下这两种创建字符串的方法，然后再看看哪种方法更好，为什么。")]),t._v(" "),a("h2",{attrs:{id:"_1-字符数组-又称c字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符数组-又称c字符串"}},[t._v("#")]),t._v(" 1) 字符数组--又称C字符串")]),t._v(" "),a("p",[a("strong",[t._v("例子1:")]),t._v("\n一个简单的例子，我们在声明时初始化了char数组。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A Song of Ice and Fire"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("输出：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("A Song of Ice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" Fire\n")])])]),a("p",[a("strong",[t._v("例子2：以字符串形式获取用户输入")]),t._v("。\n这可以说是一种低效的读取用户输入的方法，为什么？因为当我们使用"),a("code",[t._v("cin")]),t._v("读取用户输入的字符串时，只有字符串的第一个字被存储在char数组中，其余的被忽略。cin函数将字符串中的空格作为定界符，而忽略了后面的部分。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter your favorite book name:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取用户输入")]),t._v("\n   cin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You entered: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("输出：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("Enter your favorite book name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("The Murder of Roger Ackroyd\nYou entered"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" The\n")])])]),a("p",[t._v('​\t你可以看到，书中只抓到了 "The"，空间之后的剩余部分被忽略了。那么如何处理这个问题呢？好吧，为此我们可以使用'),a("code",[t._v("cin.get")]),t._v("函数，它可以读取用户输入的完整行。")]),t._v(" "),a("p",[a("strong",[t._v("例3：使用cin.get捕捉用户输入字符串的正确方法")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter your favorite book name:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取用户输入")]),t._v("\n   cin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You entered: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("输出：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("Enter your favorite book name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("The Murder of Roger Ackroyd\nYou entered"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" The Murder of Roger Ackroyd\n")])])]),a("h3",{attrs:{id:"此方法的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#此方法的缺点"}},[t._v("#")]),t._v(" 此方法的缺点")]),t._v(" "),a("p",[t._v("​\t1）char数组的大小是固定的，也就是说通过它创建的字符串大小是固定的，在运行时不能给它分配更多的内存。例如，假设你创建了一个大小为10的字符数组，而用户输入了大小为15的字符串，那么最后五个字符将从字符串中被截断。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("另一方面，如果你创建了一个更大的数组来容纳用户的输入，那么如果用户的输入很小，而数组比需要的大得多，就会浪费内存。\n")])])]),a("p",[t._v("​\t2）在这种方法中，你只能使用为数组创建的内置函数，而这些函数对字符串的操作帮助不大。")]),t._v(" "),a("p",[a("strong",[t._v("解决这些问题的方法是什么呢")]),t._v("？\n我们可以使用字符串对象创建字符串。让我们看看如何做到这一点。")]),t._v(" "),a("h2",{attrs:{id:"c-中的string对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的string对象"}},[t._v("#")]),t._v(" C++中的String对象")]),t._v(" "),a("p",[t._v("​\t到目前为止，我们已经看到了如何在C++中使用char数组处理字符串。让我们看看在C++中处理字符串的另一种更好的方法--String对象。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("includeusing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们是这样创建String对象的")]),t._v("\n   string str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter a String:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是用来获取用户的输入并将其存储到str")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You entered: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此函数在字符串末尾添加一个字符。")]),t._v("\n   str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string after push_back: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该函数从字符串末尾删除一个字符。")]),t._v("\n   str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string after pop_back: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("输出：")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("Enter a String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("XYZ\nYou entered"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" XYZ\nThe string after push_back"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" XYZA\nThe string after pop_back"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" XYZ\n")])])]),a("p",[t._v("​\t使用这种方法的好处是不需要声明字符串的大小，大小是在运行时确定的，所以这是一种比较好的内存管理方法。内存是在运行时动态分配的，所以不会浪费内存。")])])}),[],!1,null,null,null);s.default=r.exports}}]);