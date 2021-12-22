function DrawPie() {
    var pie = echarts.init(document.querySelector('.pie .chart'));
    var option = {
        color:['#3EACE5','#3F77FE','#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left:'0%',
            itemWidth:10,
            itemHeight:10,
            textStyle:{
              color:'white',
              fontSize:12,
            },
            data: ['涪城区', '游仙区', '平武县', '江油市', '梓潼县','三台县','盐亭县','安州区','北川羌族自治县']
        },
        series: [
            {
                name: '店铺数量',
                type: 'pie',
                center:['55%','50%'],
                radius: ['0%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [{value: 1295, name: '涪城区'}, {value: 138, name: '游仙区'}, {value: 3, name: '平武县'}, {value: 160, name: '江油市'}, {value: 35, name: '梓潼县'}, {value: 48, name: '三台县'}, {value: 18, name: '盐亭县'}, {value: 41, name: '安州区'}, {value: 5, name: '北川羌族自治县'},]
            },
            {
                name: '店铺类型',
                type: 'pie',
                center:['55%','50%'],
                radius: ['65%', '80%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    color:'white',
                    // position: 'center'
                },
                labelLine: {
                    show: true,
                },
                data: [{value: 403, name: '火锅串串'}, {value: 203, name: '糕点房'}, {value: 262, name: '中餐'}, {value: 149, name: '饮品'}, {value: 246, name: '烧烤'}, {value: 33, name: '西餐'}, {value: 199, name: '海鲜'}, {value: 47, name: '面食'}, {value: 60, name: '快餐汉堡'}, {value: 32, name: '冒菜'}, {value: 15, name: '料理'}, {value: 41, name: '酒店农家乐'}, {value: 53, name: '小吃'},]
            },
        ]
    };
    pie.setOption(option);
    function eConsole(param){
        if (typeof param.seriesIndex != 'undefined') {
            if (param.type == 'click') {
                var peiLenght= option.legend.data.length;
                for(var i=0;i<peiLenght;i++){
                    //seriesIndex==0：选择内环饼图；param.dataIndex==i：散区
                    if(param.seriesIndex==0&&param.dataIndex==i){
                        if(i==0){
                            var FuCheng = pie.getOption();
                            FuCheng.series[1].name='涪城区餐饮类型';
                            FuCheng.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                FuCheng.series[1].data=[{"value": "300", "name": "火锅串串"}, {"value": "143", "name": "糕点房"}, {"value": "195", "name": "中餐"}, {"value": "122", "name": "饮品"}, {"value": "187", "name": "烧烤烤肉"}, {"value": "22", "name": "西餐"}, {"value": "153", "name": "海鲜"}, {"value": "33", "name": "面食"}, {"value": "45", "name": "快餐汉堡"}, {"value": "20", "name": "冒菜"}, {"value": "10", "name": "料理"}, {"value": "27", "name": "酒店农家乐"}, {"value": "38", "name": "小吃"}];
                            pie.setOption(FuCheng);
                        }else if(i==1){
                            var YouXian = pie.getOption();
                            YouXian.series[1].name='游仙区餐饮类型';
                            YouXian.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                YouXian.series[1].data=[{"value": "39", "name": "火锅串串"}, {"value": "15", "name": "糕点房"}, {"value": "22", "name": "中餐"}, {"value": "7", "name": "饮品"}, {"value": "19", "name": "烧烤烤肉"}, {"value": "2", "name": "西餐"}, {"value": "18", "name": "海鲜"}, {"value": "2", "name": "面食"}, {"value": "3", "name": "快餐汉堡"}, {"value": "4", "name": "冒菜"}, {"value": "1", "name": "料理"}, {"value": "3", "name": "酒店农家乐"}, {"value": "3", "name": "小吃"},];
                            pie.setOption(YouXian);
                        }else if(i==2){
                            var PingWu = pie.getOption();
                            PingWu.series[1].name='平武县餐饮类型';
                            PingWu.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                PingWu.series[1].data=[{"value": "1", "name": "糕点房"}, {"value": "1", "name": "酒店农家乐"}, {"value": "1", "name": "面食"},];
                            pie.setOption(PingWu);
                        }else if(i==3){
                            var JiangYou = pie.getOption();
                            JiangYou.series[1].name='江油市餐饮类型';
                            JiangYou.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                JiangYou.series[1].data=[{"value": "37", "name": "火锅串串"}, {"value": "16", "name": "糕点房"}, {"value": "26", "name": "中餐"}, {"value": "10", "name": "饮品"}, {"value": "20", "name": "烧烤烤肉"}, {"value": "6", "name": "西餐"},{"value": "10", "name": "海鲜"}, {"value": "7", "name": "面食"},{"value": "4", "name": "快餐汉堡"}, {"value": "4", "name": "冒菜"}, {"value": "4", "name": "料理"}, {"value": "8", "name": "酒店农家乐"}, {"value": "8", "name": "小吃"},];
                            pie.setOption(JiangYou);
                        }else if(i==4){
                            var ZiTong = pie.getOption();
                            ZiTong.series[1].name='梓潼县餐饮类型';
                            ZiTong.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                ZiTong.series[1].data=[{"value": "8", "name": "火锅串串"}, {"value": "6", "name": "糕点房"}, {"value": "4", "name": "中餐"}, {"value": "5", "name": "饮品"}, {"value": "6", "name": "海鲜"}, {"value": "3", "name": "烧烤烤肉"}, {"value": "1", "name": "冒菜"}, {"value": "2", "name": "快餐汉堡"},];
                            pie.setOption(ZiTong);
                        }else if(i==5){
                            var SanTai = pie.getOption();
                            SanTai.series[1].name='三台县餐饮类型';
                            SanTai.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                SanTai.series[1].data=[{"value": "8", "name": "火锅串串"}, {"value": "10", "name": "糕点房"}, {"value": "6", "name": "中餐"}, {"value": "5", "name": "饮品"}, {"value": "7", "name": "烧烤烤肉"}, {"value": "2", "name": "小吃"}, {"value": "5", "name": "海鲜"}, {"value": "4", "name": "快餐汉堡"}, {"value": "1", "name": "冒菜"},];
                            pie.setOption(SanTai);
                        }else if(i==6){
                            var YanTing = pie.getOption();
                            YanTing.series[1].name='盐亭县餐饮类型';
                            YanTing.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                YanTing.series[1].data=[{"value": "8", "name": "火锅串串"}, {"value": "6", "name": "糕点房"}, {"value": "4", "name": "中餐"}, {"value": "5", "name": "饮品"}, {"value": "3", "name": "烧烤烤肉"}, {"value": "1", "name": "冒菜"}, {"value": "6", "name": "海鲜"}, {"value": "2", "name": "快餐汉堡"},];
                            pie.setOption(YanTing);
                        }else if(i==7){
                            var AnZhou = pie.getOption();
                            AnZhou.series[1].name='安州区餐饮类型';
                            AnZhou.series[1].color=['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                AnZhou.series[1].data=[{"value": "6", "name": "火锅串串"}, {"value": "8", "name": "糕点房"}, {"value": "8", "name": "中餐"}, {"value": "2", "name": "酒店农家乐"}, {"value": "5", "name": "烧烤烤肉"}, {"value": "1", "name": "冒菜"}, {"value": "5", "name": "海鲜"}, {"value": "2", "name": "快餐汉堡"}, {"value": "2", "name": "小吃"}, {"value": "3", "name": "面食"},];
                            pie.setOption(AnZhou);
                        }else if(i==8) {
                            var BeiChuan = pie.getOption();
                            BeiChuan.series[1].name = '北川羌族自治县餐饮类型';
                            BeiChuan.series[1].color = ['#065aab','#066eab','#0682ab','#0696ab','#06a0ab'],
                                BeiChuan.series[1].data = [{"value": "3", "name": "火锅串串"}, {"value": "1", "name": "糕点房"}, {"value": "1", "name": "西餐"}];
                            pie.setOption(BeiChuan);
                        }
                    }
                }
            }
        }
    }
    pie.on("click", eConsole);
    window.addEventListener("resize",function () {
        pie.resize();
    });
}

