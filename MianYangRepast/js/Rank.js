function DrawRank() {
    var rank=echarts.init(document.querySelector('.rank .rankmap'))
    var color=['#56D0E3','#F57474','#F8B448','#8B78F6','#1089E7']
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
        },
        xAxis: {
            show:false,
        },
        yAxis:[{
            axisLine:{
                show: false,
            },
            axisTick:{
                show:false,
            },
            axisLabel:{
                color:'white',
            },
            type:'category',
            data: ['黄焖鸡米饭', '三顾冒菜', '大味美蛙鱼头火锅', '芭夯兔', '书亦烧仙草']
        },
            {
                axisLine:{
                    show: false,
                },
                axisTick:{
                    show:false,
                },
                axisLabel:{
                    color:'white',
                },
                data: ['NO.5', 'NO.4', 'NO.3', "NO.2", "NO.1"]
            }
            ],
        series: [
            {
                name: '条',
                barCategoryGap:50,
                barWidth:10,
                itemStyle:{
                    normal:{
                        barBorderRadius:20,
                        color:function (mycolor){
                            var num=color.length;
                            return color[mycolor.dataIndex % num]
                        }
                    }
                },
                yAxisIndex:0,
                label:{
                    normal: {
                        show:true,
                        position:'inside',
                        formatter:"热度：{c}"
                    }
                },
                type: 'bar',
                data: [48, 54.6, 60.4, 78.3, 88.5]
            },
            {
                name: '框',
                barCategoryGap:50,
                barWidth:15,
                itemStyle: {
                    color:'none',
                    borderColor:'#00c1de',
                    borderWidth:3,
                    barBorderRadius:15,
                },
                yAxisIndex:1,
                type: 'bar',
                data: [100, 100, 100, 100, 100]
            }
        ]
    };
    rank.setOption(option)
    window.addEventListener("resize",function () {
        rank.resize();
    });
}