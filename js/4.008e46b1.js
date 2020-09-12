(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("q-page",{staticClass:"full-width "},t._l(t.charts,(function(e,i){return l("div",{key:i},[l("div",{staticClass:"title"},[t._v(t._s(e.title))]),l("div",{staticClass:"row q-pa-sm"},t._l(e.data,(function(t,e){return l("div",{key:t.title+e,staticClass:"mycard col-md-3 col-xs-12 col-sm-12 q-mt-xs"},[l("Chart",{staticStyle:{width:"95%"},attrs:{source:t.source,title:t.title,xTitle:t.xTitle,yTitle:t.yTitle,danwei:t.danwei,type:t.type}})],1)})),0)])})),0)},s=[],o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("q-card",[l("Chart",{attrs:{options:t.chartOptions}})],1)},a=[],c=l("4452"),n={name:"Column",props:["source","title","yTitle","xTitle","type","danwei"],components:{Chart:c["Chart"]},computed:{chartOptions(){return"column"===this.type?{chart:{type:"column"},title:{text:this.title},yAxis:{title:{text:this.yTitle}},xAxis:{categories:[this.xTitle],crosshair:!0},series:this.source.map(t=>({name:t.split(",")[0],data:[Number(t.split(",")[1])]}))}:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:this.title},series:[{name:this.danwei,colorByPoint:!0,data:this.source.map(t=>({name:t.split(",")[0],y:parseFloat(Number(t.split(",")[1]).toFixed(2))}))}]}}}},r=n,u=l("2877"),p=l("f09f"),y=l("eebe"),d=l.n(y),m=Object(u["a"])(r,o,a,!1,null,null,null),T=m.exports;d()(m,"components",{QCard:p["a"]});const x=[{title:"总体运营指标",data:[{title:"独立访客数(每小时)",xTitle:"时间",yTitle:"独立访客数",type:"column",source:["02,119","08,117","12,115","13,115","23,115","00,112","20,112","10,112","16,111","01,109","09,108","22,108","15,107","18,107","11,106","19,106","21,105","03,105","14,105","17,104","06,103","07,103","05,101","04,101"]},{title:"独立访客数（每日）",danwei:"数量",type:"pie",source:["直通车,254","淘宝直播,228","淘宝社区,175","淘宝橱窗,168","聚划算,160","淘宝搜索,141"]},{title:"页面访问数（PV）",xTitle:"时间",yTitle:"页面访问数（PV）",type:"column",source:["02,119","08,117","12,115","13,115","23,115","00,112","20,112","10,112","16,111","01,109","09,108","22,108","15,107","18,107","11,106","19,106","21,105","03,105","14,105","17,104","06,103","07,103","05,101","04,101"]},{title:"人均页面访问数",type:"pie",danwei:"数量",source:["直通车,16.0","淘宝直播,13.0","聚划算,10.0","淘宝社区,8.0","淘宝橱窗,8.0","淘宝搜索,5.0"]},{title:"总订单数量",type:"pie",danwei:"数量",source:["淘宝搜索,78","淘宝橱窗,148","淘宝直播,262","淘宝社区,127","直通车,186","聚划算,376","阿里博客,128"]},{title:"访问到下单转化率",type:"pie",danwei:"转化率",source:["淘宝搜索,0.74","淘宝橱窗,0.09012539184952978","淘宝直播,0.06589403973509934","淘宝社区,0.08309037900874636","直通车,0.03195207189216176","聚划算,0.15028177833437695"]},{title:"成交金额（GMV）",type:"column",xTitle:"渠道",yTitle:"金额",source:["聚划算,4131.8","淘宝直播,3611.14","直通车,2059.09","淘宝橱窗,1829.8","淘宝社区,1335.19","阿里博客,1278.95","淘宝搜索,973.49"]},{title:"客单价",type:"column",xTitle:"渠道",yTitle:"金额",source:["淘宝橱窗,32.67","淘宝直播,29.6","聚划算,28.89","淘宝搜索,27.81","直通车,27.09","淘宝社区,25.68","阿里博客,25.58"]},{title:"毛利率",type:"column",xTitle:"渠道",yTitle:"毛利率",source:["淘宝搜索,0.02","淘宝橱窗,-0.05","淘宝直播,0.04","淘宝社区,-0.04","直通车,0.18","聚划算,0.07","阿里博客,0.04"]}]},{title:"流量类指标",data:[{title:"人均页面访问数",xTitle:"渠道",yTitle:"次数",type:"column",source:["淘宝搜索,5.4","淘宝橱窗,7.6","淘宝直播,13.2","淘宝社区,7.8","直通车,15.8","聚划算,10.0"]},{title:"访客获取成本",xTitle:"渠道",yTitle:"成本",type:"column",source:["淘宝搜索,6.15","淘宝橱窗,8.73","淘宝社区,9.05","聚划算,11.19","淘宝直播,15.1","直通车,17.77"]}]},{title:"网站销售类指标",data:[{title:"下单-支付金额转化率",xTitle:"渠道",yTitle:"转换率",type:"column",source:["淘宝搜索,0.5","淘宝橱窗,0.56","淘宝直播,0.58","淘宝社区,0.46","直通车,0.53","聚划算,0.48","阿里博客,0.48"]},{title:"下单-支付买家数转化率",xTitle:"渠道",yTitle:"转换率",type:"column",source:["淘宝搜索,0.53","淘宝橱窗,0.5","淘宝直播,0.58","淘宝社区,0.54","直通车,0.53","聚划算,0.49","阿里博客,0.52"]},{title:"退款总订单量",danwei:"数量",type:"pie",source:["拍错/多拍,74","收到商品破损污渍,67","材质与商品描述不符,130"]},{title:"退款率",xTitle:"渠道",yTitle:"退款率",type:"column",source:["淘宝搜索,0.21","淘宝橱窗,0.44","淘宝直播,0.35","淘宝社区,0.46","直通车,0.41","聚划算,0.46","阿里博客,0.33"]}]},{title:"商品类指标",data:[{title:"出版社图书前十名",xTitle:"出版社",yTitle:"图书数量",type:"column",source:["北京教育出版社,48","吉林文史出版社,31","四川少年儿童出版社,29","黑龙江美术出版社,24","中国华侨出版社,23","人民教育出版社,22","天地出版社,18","浙江少年儿童出版社,18","山东美术出版社,18","长江文艺出版社,16"]},{title:"图书销量前五",xTitle:"出版社",yTitle:"图书数量",type:"column",source:["明天出版社,393898","北京教育出版社,162740","延边大学出版社,147402","江苏少年儿童出版社,129183","北方妇女儿童出版社,123054"]},{title:"出版年份分布前十名",xTitle:"出版社",yTitle:"年份数量",type:"column",source:["北京教育出版社,7","黑龙江美术出版社,7","中国华侨出版社,6","四川少年儿童出版社,6","长江文艺出版社,5","吉林美术出版社,5","浙江少年儿童出版社,4","湖南文艺出版社,4","人民邮电出版社,4","中国人口出版社,4"]}]},{title:"营销类指标",data:[{title:"单品投资价格",xTitle:"渠道",yTitle:"价格",type:"column",source:["直通车,4514.7","淘宝直播,3441.7","聚划算,1790.7","淘宝社区,1583.9","淘宝橱窗,1466.6","淘宝搜索,867.6"]}]},{title:"物流类指标",data:[{title:"发货时间最快的城市前十",xTitle:"城市",yTitle:"分钟",type:"column",source:["宁夏,87.25","山西,99.12","河南,100.85","福建,101.66","安徽,102.37","江苏,102.51","贵州,104.75","广西,104.76","重庆,104.88","内蒙古,105.76"]}]}];var h={name:"PageIndex",components:{Chart:T},data:()=>({charts:x})},w=h,C=l("9989"),f=Object(u["a"])(w,i,s,!1,null,null,null);e["default"]=f.exports;d()(f,"components",{QPage:C["a"]})}}]);