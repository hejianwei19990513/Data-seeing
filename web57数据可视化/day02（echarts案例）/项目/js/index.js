$(function(){
    (function(){
        $(".monitor .tabs a").click(function(){
            $(this).addClass("active").siblings("a").removeClass("active")
            $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
        })
        $(".content .marquee-view .marquee").each(function(i,ele){
            var rows = $(this).children().clone()
            $(this).append(rows)
        })
        var myChart = echarts.init(document.querySelector(".pie"))
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ["10%", "70%"],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    data: [
                        {value: 10, name: "云南"},
                        {value: 5, name:  "北京"},
                        {value: 15, name: "山东"},
                        {value: 25, name: "河北"},
                        {value: 20, name: "江苏"},
                        {value: 35, name: "浙江"},
                        {value: 30, name: "四川"},
                        {value: 40, name: "湖北"}
                    ],
                    // 修饰饼形图文字相关的样式 label对象
                    label: {
                    fontSize: 10
                    },
                    // 修饰引导线样式
                    labelLine: {
                      // 连接到图形的线长度
                      length: 6,
                      // 连接到文字的线长度
                      length2: 8
                    }
                }
            ]
        };
        myChart.setOption(option)
        //  当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function() {
         // 让我们的图表调用 resize这个方法
        myChart.resize();
  });
    })();
    (function(){
        var item = {
            name: "",
            value: 1200,
            // 1. 修改当前柱形的样式
            itemStyle: {
              color: "#254065"
            },
            // 2. 鼠标放到柱子上不想高亮显示
            emphasis: {
              itemStyle: {
                color: "#254065"
              }
            },
            // 3. 鼠标经过柱子不显示提示框组件
            tooltip: {
              extraCssText: "opacity: 0"
            }
          };
        // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar"));
  // 2. 指定配置和数据
  var option = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: "item"
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆"
        ],
        axisTick: {
          alignWithLabel: false,
          // 把x轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // x轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          // 把y轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240
        ]
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
    })();
    (function(){
        // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
        var myChart = echarts.init(document.querySelector(".line"))
        var option = {
            color: ["#00f2f1", "#ed3f35"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // 距离容器10%
                right: "10%",
                // 修饰图例文字的颜色
                textStyle: {
                  color: "#4c9bfd"
                }
                // 如果series 里面设置了name，此时图例组件的data可以省略
                // data: ["邮件营销", "联盟广告"]
              },
            grid: {
                top: "20%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [
                  "1月",
                  "2月",
                  "3月",
                  "4月",
                  "5月",
                  "6月",
                  "7月",
                  "8月",
                  "9月",
                  "10月",
                  "11月",
                  "12月"
                ],
                // 去除刻度
                axisTick: {
                  show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                  color: "#4c9bfd"
                },
                // 去除x坐标轴的颜色
                axisLine: {
                  show: false
                }
            },
            yAxis: {
                type: "value",
                // 去除刻度
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                    color: "#4c9bfd"
                },
                // 修改y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                    color: "#012f4a"
                    }
                }
            },
            series: [
                {
                    name: "预期销售额",
                    type: "line",
                    stack: "总量",
                    // 是否让线条圆滑显示
                    smooth: true,
                    data: data.year[0]
                },
                {
                    name: "实际销售额",
                    type: "line",
                    stack: "总量",
                    smooth: true,
                    data: data.year[1]
                }
            ]
        };
        myChart.setOption(option)
        $(".sales .caption a").on("click",function(){
            var type = $(this).data("type")
            index = $(this).index()-1
            option.series[0].data = data[type][0]
            option.series[1].data = data[type][1]
            myChart.setOption(option)
            $(this).addClass("active").siblings().removeClass("active")
        })
        $(".sales").on("mouseover",function(){
            clearInterval(time)
        })
        $(".sales").on("mouseout",function(){
            time = setInterval(function(){
                index++
                if(index == 4) {
                    index = 0
                }
                $(".sales .caption a").eq(index).trigger("click")
            },1000)
        })
        var index = 0;
        var time = setInterval(function(){
            index++
            if(index == 4) {
                index = 0
            }
            $(".sales .caption a").eq(index).click()
        },1000)
    })();
    (function(){
        // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置

  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"]
    },
    radar: {
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 }
      ],
      // 修改雷达图的大小
      radius: "65%",
      shape: "circle",
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色
        textStyle: {
          color: "#4c9bfd"
        }
      },
      // 分割的圆圈线条的样式
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255, 0.5)"
        }
      },
      splitArea: {
        show: false
      },
      // 坐标轴的线修改为白色半透明
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      }
    },
    series: [
      {
        name: "北京",
        type: "radar",
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
          }
        },
        data: [[90, 19, 56, 11, 34]],
        // 设置图形标记 （拐点）
        symbol: "circle",
        // 这个是设置小圆点大小
        symbolSize: 5,
        // 设置小圆点颜色
        itemStyle: {
          color: "#fff"
        },
        // 让小圆点显示数据
        label: {
          show: true,
          fontSize: 10
        },
        // 修饰我们区域填充的背景颜色
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)"
        }
      }
    ]
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
    })()
})