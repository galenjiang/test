var app=new Vue({mixins:[Mui.vueMixinInit],el:"#activity_detail_original",data:{userdata:{},activeinfo:{},id:"",mall:null,statusJoin:!1,fastClick:!0,shareMaskStatus:!1},methods:{init:function(){Vue.http.get(url+"index.php?m=Api&c=Active&a=public_active",{mall_id:this.mall||this.userdata.current_mall_id,id:this.id}).then(function(t){util.console.log(t.data),1==t.data.status?(this.activeinfo=_.mapValues(t.data.data,function(t,i){return"img"==i&&(t=url+t),t}),this.activeinfo.iscoupon&&this.activeinfo.iscoupon>=1&&(this.statusJoin=!0)):Mui.message.toast({msg:t.data.info})}.bind(this),function(t){Mui.message.toast({msg:t.data}),util.console.log(t.data)}),this.shareInit()},join:function(){this.fastClick&&(this.fastClick=!1,Vue.http.get("./index.php?m=Api&c=Active&a=repeat_public",{mall_id:this.mall||this.userdata.current_mall_id,active_id:this.id}).then(function(t){this.fastClick=!0,1==t.data.status?0==this.statusJoin?this.statusJoin=!0:1==this.statusJoin&&Mui.message.toast({msg:"您已参加本活动"}):Mui.message.toast({msg:t.data.info})}.bind(this),function(t){this.fastClick=!0,Mui.message.toast({msg:t.data}),util.console.log(t.data)}))},shareInit:function(){var t={title:"乐坊商场",desc:this.activeinfo.active_name,link:window.location.href+"&mall="+this.mall||this.userdata.current_mall_id,imgUrl:this.activeinfo.img,success:function(){Mui.message.toast({msg:"分享成功"})},cancel:function(){Mui.message.toast({msg:"系统错误"})}};wx.onMenuShareAppMessage(t),wx.onMenuShareTimeline(t)},share:function(){this.shareMaskStatus?this.shareMaskStatus=!1:this.shareMaskStatus=!0,event.preventDefault()}},created:function(){var t=util.urlQuery();this.id=t.id,this.mall=t.mall}});