<template>
  <div class="main">
      <table class="table">
         <tr class="tr1">
             <th class="th">Total</th>
             <th class="th">Completed</th>
             <th class="th">Not Completed</th>
         </tr>
         <tr class="tr2">
             <td class="td">{{dataList.length}}</td>
             <td class="td">1</td>
             <td class="td">17</td>
         </tr>
      </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'TotalHeader',
    computed:{
        ...mapState({
            dataList:state=>state.listcontainer.dataList
        })
    }
}
</script>
 
<style  lang="less" scoped>
 .main{
      .table{
      background-color: white;
       width: 550px;
       border-collapse: collapse;
      .tr1{
           height: 70px;
           .th{
                vertical-align: bottom;
                color: gray;
           }
      }
      .tr2{
           height: 70px;
           .td{
               text-align: center;
                vertical-align: top;
                color: gray;
                font-size: 25px;
           }
      }

  }
 }


</style>