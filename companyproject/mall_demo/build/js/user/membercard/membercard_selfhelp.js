var app=new Vue({mixins:[Mui.vueMixinInit],el:"#app",components:{"mui-tabs":Mui.tabs},data:{userdata:{},tabList:[{name:"待审核"},{name:"已通过"},{name:"未通过"}],cur:0,status:0,items:[],page:1,totalpage:1,allowrefresh:!0},methods:{init:function(){this.getList(),Mui.message.alert({msg:"规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明规则说明"})},getList:function(){util.console.log(this.status,this.page,this.totalpage),this.allowrefresh&&this.page<=this.totalpage&&(this.allowrefresh=!1,Vue.http.get(url+"index.php?m=Api&c=UserCard&a=receipt",{card_no:this.userdata.card_no,status:this.status,page:this.page}).then(function(t){if(this.allowrefresh=!0,1==t.data.status){this.page+=1,this.totalpage=t.data.data.totalpage;var e=_.map(t.data.data.list,function(t){return 0==this.status?(t.des="待审核",t.href=url+"index.php?m=Home&c=User&a=membercard_selfhelp_detail&status=0&id="+t.id,t.consume_time=new Date(1e3*t.consume_time).Format("yyyy-MM-dd")):1==this.status?(t.href=url+"index.php?m=Home&c=User&a=membercard_selfhelp_detail&status=1&id="+t.id,t.des="获得积分："+t.receipt_integral,t.consume_time=new Date(1e3*t.consume_time).Format("yyyy-MM-dd")):2==this.status&&(t.href=url+"index.php?m=Home&c=User&a=membercard_selfhelp_detail&status=2&id="+t.id,t.des=t.content,t.consume_time=new Date(1e3*t.consume_time).Format("yyyy-MM-dd")),t}.bind(this));this.items=_.concat(this.items,e)}else Mui.message.toast({msg:t.data.info})}.bind(this))["catch"](function(t){this.allowrefresh=!0,alert(t)}.bind(this)))}},events:{tab:function(t){this.status=t,this.page=1,this.totalpage=1,this.items=[],this.getList()}}});