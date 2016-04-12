var NoteList=React.createClass({
    render:function(){
        //console.log(this.props.children);
        return (
            <ol>
                {
                    React.Children.map(this.props.children,function(child){  //this.props.children表示组件的所有子节点
                        //console.log(child);
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});
ReactDOM.render(
    <NoteList>
        <span>hello</span>
        <span>world</span>
    </NoteList>,
    document.getElementById('example')
);