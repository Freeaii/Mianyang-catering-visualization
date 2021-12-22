function relationship() {
    var myChart=echarts.init(document.querySelector('.reindeer .chart'))
    option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color:['#83e0ff','#45f5ce','#b158ff'],
        series: [
            {
                type: 'graph',
                layout: 'force',
                force:{
                    repulsion:1000,
                    edgeLength:50
                },
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [
                    {
                        name: '火锅',

                        symbolSize: 60,
                        draggable: true,
                        category: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 3,
                                shadowBlur: 20,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        }
                    },
                    {
                        name: '奶茶',
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },
                        category: 1,

                    },
                    {
                        name: '中餐',
                        symbolSize: 40,
                        category: 1,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '川菜',
                        symbolSize: 40,
                        category: 1,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '烧烤',
                        symbolSize: 40,
                        category: 1,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '烤肉',
                        symbolSize:50,
                        category: 2,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '自助',
                        symbolSize:40,
                        category: 2,
                        itemStyle: {
                            normal: {
                                borderColor: '#b457ff',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#b457ff',
                                color: '#001c43'
                            }
                        },

                    },
                    {
                        name: '西餐',
                        symbolSize:40,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'

                            }
                        },
                        category: 2,

                    },
                    {
                        name: '面食',
                        symbolSize:40,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'
                            }
                        },
                        category: 2,

                    },
                    {
                        name: '饮品',
                        symbolSize:40,
                        category: 2,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'
                            }
                        },

                    }],
                links: [
                    {
                        source: '火锅',
                        target: '奶茶'

                    },
                    {
                        source: '火锅',
                        target: '烧烤',
                    },
                    {
                        source: '奶茶',
                        target: '中餐',
                    },
                    {
                        source: '奶茶',
                        target: '川菜',
                    },
                    {
                        source: '奶茶',
                        target: '烧烤',
                    },
                    {
                        source: '火锅',
                        target: '烤肉',
                    },
                    {
                        source: '烤肉',
                        target: '西餐',
                    },
                    {
                        source: '烤肉',
                        target: '自助',
                    },
                    {
                        source: '烤肉',
                        target: '饮品',
                        value: 'DNA',
                    },{
                        source: '烤肉',
                        target: '面食'

                    }
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 3,
                        curveness: 0
                    }
                },
                categories:[
                    {name: '0'},
                    {name: '1'},
                    {name: '2'}
                ]
            }
        ]
    }
    myChart.setOption(option)
    window.addEventListener("resize",function () {
        myChart.resize();
    });
}