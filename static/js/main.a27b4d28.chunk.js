(this["webpackJsonphwk-07-01"]=this["webpackJsonphwk-07-01"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(7),l=a.n(s),i=a(8),r=a(1),c=a(2),d=a(4),u=a(3),m=a(5),h=function(){return o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",{className:"header"},"todos"))},f=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).handleOnChange=function(e){localStorage.setItem("input",e.target.value),t.setState({input:e.target.value}),console.log("yes")},t.state={input:localStorage.getItem("input")?localStorage.getItem("input"):""},t}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.nameInput.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"What needs to be done?",className:"input",id:"todo-input",defaultValue:this.state.input,onChange:this.handleOnChange,ref:function(e){t.nameInput=e},onKeyDown:this.props.handleKeyDown}))}}]),e}(o.a.Component),p=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.todos,a=t.removeTodo,n=t.handleChangeTodoStatus,s=t.renameTodo,l=t.handleRenameTodo;return o.a.createElement("div",null,e.map((function(t){return o.a.createElement("div",{key:t.id,className:"todo"},o.a.createElement("div",{className:"todo-left-part"},o.a.createElement("input",{id:t.id,type:"checkbox",className:"mark",defaultChecked:!!t.isComplited,onClick:function(){return n(t.id)}}),o.a.createElement("div",{className:"todo-text-container",onDoubleClick:function(){return s(t.id)}},o.a.createElement("span",{style:t.isRenaming?{display:"none"}:{display:"block"},className:t.isComplited?"complited":"active"},t.name),o.a.createElement("input",{defaultValue:t.name,onKeyDown:function(e){return l(e,t.id)},className:"todo-text-container-input",style:t.isRenaming?{display:"block"}:{display:"none"},type:"text"}))),o.a.createElement("div",{className:"x-icon"},o.a.createElement("span",{className:"remove-x",style:{fontSize:"25px"},onClick:function(){return a(t.id)}},"\u2718")))})))}}]),e}(o.a.Component),g=function(t){var e=t.handleChangeStateStatus,a=t.status,n=t.clearTodos;return o.a.createElement("div",{className:"buttons-container"},o.a.createElement("div",null,o.a.createElement("button",{className:"all"===a?"select":"",onClick:function(){return e("all")}},"All"),o.a.createElement("button",{className:"active"===a?"select":"",onClick:function(){return e("active")}},"Active"),o.a.createElement("button",{className:"complited"===a?"select":"",onClick:function(){return e("complited")}},"Comlited"),o.a.createElement("button",{onClick:function(){return n()}},"Clear")))},v=function(t){var e=t.todos.filter((function(t){return!1===t.isComplited}));return o.a.createElement("div",null,e.length?"".concat(e.length," items left"):null)},S=(a(14),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).handleRenameTodo=function(e,a){if("Enter"===e.key){if(!e.target.value)return"";var n=t.state.todos.map((function(t){return t.id===a&&(t.name=e.target.value,t.isRenaming=!t.isRenaming),t}));t.setState({todos:n})}},t.renameTodo=function(e){var a=t.state.todos.map((function(t){return t.id===e&&(t.isRenaming=!t.isRenaming),t}));t.setState({todos:a})},t.filterTodos=function(){return"active"===t.state.status?t.state.todos.filter((function(t){return!1===t.isComplited})):"complited"===t.state.status?t.state.todos.filter((function(t){return!0===t.isComplited})):"clearAll"===t.state.status?[]:t.state.todos},t.handleKeyDown=function(e){if("Enter"===e.key){if(!e.target.value)return null;t.setState({todos:[].concat(Object(i.a)(t.state.todos),[{id:t.state.todoId+1,name:e.target.value,isComplited:!1,isRenaming:!1}]),todoId:t.state.todoId+1})}},t.handleChangeStateStatus=function(e){console.log(e),t.setState({status:e})},t.handleChangeTodoStatus=function(e){var a=t.state.todos;a.find((function(t){return t.id===e})).isComplited=!a.find((function(t){return t.id===e})).isComplited,t.setState({todos:a})},t.removeTodo=function(e){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})},t.clearTodos=function(){t.setState({todos:[],filterTodos:[],todoId:0},localStorage.clear())},t.state={todos:JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[],todoId:localStorage.getItem("todoId")?+localStorage.getItem("todoId"):0,status:localStorage.getItem("status")?localStorage.getItem("status"):"all"},t}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos)),localStorage.setItem("todoId",this.state.todoId),localStorage.setItem("status",this.state.status),console.log(localStorage)}},{key:"render",value:function(){var t=this.state,e=t.todos,a=t.status,n=this.filterTodos();return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("div",{className:"todo-part"},o.a.createElement("div",{className:"todos-container"},o.a.createElement("div",{className:"todos"},o.a.createElement(f,{handleKeyDown:this.handleKeyDown}),o.a.createElement(p,{todos:n,removeTodo:this.removeTodo,handleChangeTodoStatus:this.handleChangeTodoStatus,renameTodo:this.renameTodo,handleRenameTodo:this.handleRenameTodo}),e.length?o.a.createElement(v,{status:a,todos:e}):null,e.length?o.a.createElement(g,{handleChangeStateStatus:this.handleChangeStateStatus,status:this.state.status,clearTodos:this.clearTodos}):null))))}}]),e}(o.a.Component));l.a.render(o.a.createElement(S,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a27b4d28.chunk.js.map