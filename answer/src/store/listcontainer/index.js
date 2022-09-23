
import {reqDataList} from '@/API'
const state={
   dataList:[]
};
const mutations={
    //修改state里dataList的值
    GETDATALIST(state,dataList){
        state.dataList=dataList
    },
    //向state里dataList添加新记录
    ADDDATA(state,form){
        state.dataList.push(form)
    },
    //删除state里dataList下标为index的记录
    DELETEDATA(state,index){
        if(index==-2){
            state.dataList=[]
        }else{
            state.dataList.splice(index,1);
        }
        
    }
};
const actions={
       //发送请求向（mock）获取前三条数据
       async getDataList({commit}){
        let result=await reqDataList();
        console.log(result);
        //成功
        if(result.code==200){
            //提交mutation
            commit("GETDATALIST",result.data)
        }
    },
    //添加数据
    async addData({commit},form){
        //提交mutation
       commit("ADDDATA",form)
    }
    ,
    //删除数据
    async deleteData({commit},index){
        var i=--index;
        commit("DELETEDATA",i)
    
},
};
//计算属性，在项目中为了简化数据而生
//可以把我们将来在组件当中需要的数据简化一下
const getters={ 
  
};
export default {
    state,
    mutations,
    actions,
    getters,
}