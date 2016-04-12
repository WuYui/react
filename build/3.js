var arr=[
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>
];
ReactDOM.render(
    <div>
        {arr}
    </div>,  //JSX会自动展开js对象中的数组
    document.getElementById('example')
);