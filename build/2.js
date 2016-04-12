var names=['Alice','Emily','Kate'];
ReactDOM.render(
    <div>
        {
            names.map(function(name){
                return <div>Hello,{name}!</div>;
            })
        }
    </div>,  //子节点外面的一层DOM包裹不能省略！
    document.getElementById('example')
);