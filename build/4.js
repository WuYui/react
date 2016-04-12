var HelloMessage=React.createClass({  //组件类的名字首字母必须大写，并且只能包含一个顶层标签
    render:function(){
        return <h1>Hello,{this.props.name}</h1>
    }
});
ReactDOM.render(
    <HelloMessage name="Jhon"></HelloMessage>,  //组件里面的属性，class要写成className，for要写成htmlFor
    document.getElementById('example')
);