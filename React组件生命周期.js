/**
 * Created by Dell on 2016/11/10.
 */
var App = React.createClass({
    displayName: 'App',
    componentWillMount: function(){
        // 初始化期，组件加载前调用
    },
    componentWillUpdate: function(){
        // 存在期，组件状态改变后重新渲染前调用
    },
    render: function () {
        // 初始化期或存在期调用
        return (
            <h1>itbilu.com</h1>
        )
    },
    componentWillUnmount: function (){
        // 销毁&清理期调用
    }
});