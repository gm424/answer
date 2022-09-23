<template>
 <div class="Add">
  <button type="text" @click="dialogFormVisible = true" class="btn">Add</button> 
   <!-- 添加一条新纪录的弹窗 -->
  <el-dialog title="AddNote" :visible.sync="dialogFormVisible" class="dialog">
  <el-form :model="form">
    <el-form-item >
      <el-input v-model="form.title" autocomplete="off" placeholder="Add title"></el-input>
    </el-form-item>
    <el-form-item >
    <el-input  v-model="form.content" placeholder="Add content"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="Add">确 定</el-button>
  </div>
</el-dialog> 
 </div>
</template>

<script>
export default {
name:'AddList',
  data() {
      return {
        // 控制弹窗的开关
        dialogFormVisible: false,
        form: {
          // 一条新纪录的id
          id:'',
          // 一条新纪录的title
          title: '',
          // 一条新纪录的内容
          content: '',
          // 一条新纪录的状态
          status:'Not completed',
          // 一条新纪录的勾选状态，0为不勾选
          check:0
        },
        formLabelWidth: '120px'
      };
    },
    methods:{
      //Add弹窗里的确定按钮绑定的事件
      Add(){
        //点击确认后关闭弹窗
        this.dialogFormVisible = false
        //进行深拷贝避免旧值被新的值覆盖
        let formdata= JSON.parse(JSON.stringify(this.form))
        //触发兄弟组件传值，将新添加的记录传给ListContainer组件
        this.$bus.$emit("AddList",formdata)
      },
    },

}
</script>

<style lang="less">
.Add{
  width: 80%;
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
 
}
</style>