new Vue({mixins:[Mui.vueMixinInit],el:"#message_detailList",data:{userdata:{},items:[],page:1,totalpage:1,allowrefresh:!0},methods:{init:function(){this.getList()},getList:function(){this.allowrefresh&&this.page<=this.totalpage&&(this.allowrefresh=!1,Vue.http.get(url+"index.php?m=Api&c=mall&a=mall_xiaoxi",{mall_id:this.userdata.current_mall_id,page:this.page}).then(function(t){if(this.allowrefresh=!0,1==t.data.status){var a=t.data.data.list,i=_.map(a,function(t){var a={title:t.title,img:url+t.img,url:url+"index.php?m=Home&c=Message&a=message_detail&id="+t.id,about:t.about};return a});this.items=_.concat(this.items,i),this.page+=1,this.totalpage=t.data.data.totalpage}else Mui.message.toast({msg:t.data.info})}.bind(this))["catch"](function(t){this.allowrefresh=!0,alert(t)}.bind(this)))}}});