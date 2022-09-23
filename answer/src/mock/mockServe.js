//先引入mockjs模块
import Mock from 'mockjs'
//把JSON数据格式引入进来
//JSON格式没有对外暴露但是可以引入
import data from './data.json';
//mock数据:第一个参数是请求的地址，第二个参数是请求的数据
Mock.mock("/mock/data",{code:200,data:data});

