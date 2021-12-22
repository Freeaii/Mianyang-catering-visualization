function DrawMap() {
    var map=echarts.init(document.querySelector(".daiding .chart"))
    option={
        geo:{
            show:true,
            type:'map',
            map:"绵阳",
            left:"left",
            right:"40%",
            itemStyle:{
                normal:{
                    label:{
                        show: true,
                    },
                    position:'center',
                    textStyle:{
                        color:"red",
                        fontSize:10,
                        fontFamily:"楷体"
                    }
                },
                emphasis:{
                    label: {
                        show:true
                    }
                }
            },
            roam:true,
            center: [104.888447,31.691416],
            zoom: 0.6,
        },
    }
    map.setOption(option)
    window.addEventListener("resize",function () {
        map.resize();
    });
}
