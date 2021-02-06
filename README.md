##  一、todoList案例相关知识点
    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态初始化列表，如何确定将数据放在哪个组件的state里面？
        ——某个组件使用：放在其自身的state里
        ——某些组件使用：放在它们共同的父组件state里（状态提示）
    3.关于父子之间通信：
      1.【父组件】给【子组件】传数据：通过props
      2.【子组件】给【父组件】传数据：通过props，要求父组件提前给子组件传递一个函数
    4.注意defaultChecked 和 checked的区别，类似的还要：defaultValue 和 value
    5.状态在哪里，操作状态的方法就在哪里

## 项目启动：
命令行进入ido目录后输入`yarn start`

默认启动在http://localhost:3000/