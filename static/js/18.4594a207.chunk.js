(this["webpackJsonpAgroGenieSuperadmin-0.1.0"]=this["webpackJsonpAgroGenieSuperadmin-0.1.0"]||[]).push([[18],{222:function(e,a,t){"use strict";t.r(a);var l=t(61),n=t(0),r=t.n(n),c=t(258),i=t(124),s=t(259),m=t(136),o=t(126),d=t(3),u=t(58),E=t(59),h=t(25),p=t(4),f=t(26);a.default=Object(f.b)((function(e){return{reduxActiveTabKey:e.customerTabKey}}),(function(e){return{onChangeActiveTab:function(a){return e({type:p.g,payload:a})}}}))((function(e){var a=Object(d.h)().custId,t=e.reduxActiveTabKey,p=Object(n.useState)(""),f=Object(l.a)(p,2),b=f[0],N=f[1];return Object(n.useEffect)((function(){N(t)}),[]),r.a.createElement(h.a,null,r.a.createElement(E.a,{modulename:"Customer Management",title:"Customer Management",listingtitle:"Customer Management",listinglink:"/customer-management",detailstitle:"Customer Detail",detailslink:"/customer-management/".concat(a,"/customer-details")}),r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"main-body"},r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{title:"Customer Details"},r.a.createElement("div",null,"Customer Id:",r.a.createElement(s.a,{variant:"warning",className:"ml-1"},"Customer-",a)),r.a.createElement(m.a,{variant:"pills",activeKey:b,onSelect:function(a){return function(a){console.log("actve tab key selected==>",a),N(a),e.onChangeActiveTab(a)}(a)},className:"mb-3",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,{eventKey:"Farm Details",title:"Farm Details"},r.a.createElement("div",{className:"blockquote"},"Basic Plan"),r.a.createElement("hr",null),r.a.createElement("div",{className:"blockquote"},"Data Plan (Basic + Data)"),r.a.createElement("hr",null),r.a.createElement("div",{className:"blockquote"},"Weather Plan (Data + Weather)"),r.a.createElement("hr",null),r.a.createElement("div",{className:"blockquote"},"Satellite Plan (Weather + Satellite)"),r.a.createElement("hr",null)),r.a.createElement(o.a,{eventKey:"Current Plan",title:"Current Plan"}),r.a.createElement(o.a,{eventKey:" Reward Point Transaction History",title:" Reward Point Transaction History"}))))))))))}))},58:function(e,a,t){"use strict";var l=t(21),n=t(14),r=t(15),c=t(17),i=t(16),s=t(0),m=t.n(s),o=t(260),d=t(263),u=t(191),E=t(55),h=t.n(E),p=t(25),f=t(51),b=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t,n,r,c=this,i=[];return this.state.isOption&&(t=m.a.createElement("div",{className:"card-header-right"},m.a.createElement(o.a,{alignRight:!0,className:"btn-group card-option"},m.a.createElement(o.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},m.a.createElement("i",{className:"feather icon-more-horizontal"})),m.a.createElement(o.a.Menu,{as:"ul",className:"list-unstyled card-option"},m.a.createElement(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){c.setState((function(e){return{fullCard:!e.fullCard}}))}},m.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),m.a.createElement("a",{href:f.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),m.a.createElement(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){c.setState((function(e){return{collapseCard:!e.collapseCard}}))}},m.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),m.a.createElement("a",{href:f.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),m.a.createElement(o.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},m.a.createElement("i",{className:"feather icon-refresh-cw"}),m.a.createElement("a",{href:f.a.BLANK_LINK}," Reload ")),m.a.createElement(o.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},m.a.createElement("i",{className:"feather icon-trash"}),m.a.createElement("a",{href:f.a.BLANK_LINK}," Remove ")))))),n=m.a.createElement(d.a.Header,null,m.a.createElement(d.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(i=[].concat(Object(l.a)(i),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(i=[].concat(Object(l.a)(i),["card-load"]),a=m.a.createElement("div",{className:"card-loader"},m.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(i=[].concat(Object(l.a)(i),["d-none"])),this.props.cardClass&&(i=[].concat(Object(l.a)(i),[this.props.cardClass])),r=m.a.createElement(d.a,{className:i.join(" "),style:e},n,m.a.createElement(u.a,{in:!this.state.collapseCard},m.a.createElement("div",null,m.a.createElement(d.a.Body,null,this.props.children))),a),m.a.createElement(p.a,null,r)}}]),t}(s.Component);a.a=h()(b)},59:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(20),c=t(13),i=t(25),s=t(51);a.a=function(e){var a,t=e.title,l=e.modulename,m=e.listingtitle,o=e.listinglink,d=e.detailstitle,u=e.detailslink;return document.title=t+" | Agro Genie Admin",u&&(a=n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:c.a.basename+u},d))),n.a.createElement(i.a,null,n.a.createElement("div",{className:"page-header"},n.a.createElement("div",{className:"page-block"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"page-header-title"},n.a.createElement("h5",{className:"m-b-10"},t)),n.a.createElement("ul",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"/"},n.a.createElement("i",{className:"feather icon-home"}))),n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:s.a.BLANK_LINK},l)),n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:c.a.basename+o},m)),a))))))}}}]);