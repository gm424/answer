<template>
  <div class="list">
    <ul class="title-col">
        <li class="col-1">
            <input class="input" type="checkbox"/>
             <span>ID</span>
        </li>
        <li class="col-2">
            <span>Title</span>
        </li>
        <li class="col-3">
            <span>Content</span>
        </li>
        <li class="col-4">
          <span>Status</span>
        </li>
    </ul>
    <ul class="col" v-for="(list,index) in dataList" :key="list.id">
        <li class="col-1">
            <input type="checkbox" @click="Delete(list,index)" :checked="list.check==1" :value="index"/>
             <span>{{++index}}</span>
        </li>
        <li class="col-2">
            <span>{{list.title}}</span>
        </li>
        <li class="col-3">
            <span>{{list.content}}</span>
        </li>
        <li class="col-4">
          <span>{{list.status}}</span>
        </li>
         <div>
    <el-dialog :visible.sync="dialogFormVisible" class="my-info-dialog" width="75%" >
      <div class="change">
      <i class="el-icon-info"></i>
      <span class="text">Do you want to delete this note?</span>
    </div>  
    <div slot="footer" class="dialog-footer">
    <el-button  type="danger" @click="NotDelete()" id="Cancel">NO</el-button>
    <el-button  @click="Deleted()">YES</el-button>
  </div>
  </el-dialog>
  </div>
    </ul>
 
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'ListContainer',
data() {
  return {
     dialogTableVisible: false,
     dialogFormVisible: false,
     index:'',
     list:''
  }
},
 mounted(){
    //触发action事件getDataList
   this.$store.dispatch("getDataList");
   //接收AddList传过来的数据
    this.$bus.$on("AddList",(form)=>{
      //触发addData action事件，传入参数form
     this.$store.dispatch("addData",form)
   })
 },
 computed:{
   ...mapState({
     //获取Vuex仓库中的dataList数组
    dataList:state=>state.listcontainer.dataList
  })
 },
 methods:{
   //点击复选框触发的事件
   Delete(list,index){
     //打开删除提示的弹窗
     this.dialogFormVisible=true
     //将对应的数据的勾选值改为1.即已勾选
     list.check=1
     //将点击的哪一条记录的index和list内容赋值给全局变量
     this.index=index
     this.list=list
   },
   //点击弹窗中的NO按钮
       NotDelete(){
         //将点击对应的记录的勾选状态改为未勾选
          this.dataList[--this.index].check=0
          //关闭弹窗
          this.dialogFormVisible=false
          //提示删除以取消
          this.$message('Delete cancel');
   },
   //点击弹窗的确定按钮
   Deleted(){
     //将要删除的记录的index作为参数，触发一个action通知vuex修改数据
     this.$store.dispatch("deleteData",this.index)
          this.$message('Delete success!');
          //弹窗关闭
          this.dialogFormVisible=false
   }
  
  
   
}
}
</script>

<style lang="less" scope>
.list{
   margin-top:50px;
   width: 80%;
   overflow: hidden;
  .col{
       margin: 0px;
       padding: 15px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        background-color: white;
        & > li {
          float: left;
          list-style: none;
        }
    .col-1{
       width: 19.9%;
       color: rgb(85, 74, 241);
    }
    .col-2{
       width: 29.9%;
    }
    .col-3{
       width: 29.9%;
    }
    .col-4{
       width: 19.9%;
    }
  }
   .title-col{
     background-color: rgb(163, 159, 159);
        margin: 0px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        height: 40px;
         padding-left: 10px;
        & > li {
          float: left;
          list-style: none;
          color: white;
          margin-left: 0;
          border-collapse: collapse;
          line-height: 40px;
        }
    .col-1{
       width: 19%;
       padding-left: 2px;
    }
    .col-2{
       width: 29%;
       border-left: 1px solid white;
      padding-left: 3px;
    }
    .col-3{
       width: 29%;
       border-left: 1px solid white;
       padding-left: 3px;
    }
    .col-4{
       width: 19%;
       border-left: 1px solid white;
       padding-left: 3px;
    }
  }
 .btn{
    float: right;
    background-color: rgb(89, 89, 248);
    color:white;
    height: 40px;
    width: 150px;
    border: 1px solid rgb(89, 89, 248);
    font-size: 15px;
    margin-top: 10px;
  }
 .text{
    color: white;
}
.change{
    font-size: 20px;
}
.btn1{
     border: 1px solid white ;
     background: red;
     color: white;
 }
.el-icon-info{
    color:white 
}
.el-dialog__body{
  background-color: red;
}
.el-dialog__header{
background-color: red;
}
 .el-dialog__footer{
background-color: red;
 }
 
}


</style>