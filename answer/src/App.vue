<template>
<div class="container">
 <TotalHeader></TotalHeader>
  <ListContainer></ListContainer>
  <AddList></AddList>
</div>
</template>

<script>
import TotalHeader from './components/TotalHeader'
import ListContainer from './components/ListContainer'
import AddList from './components/AddList'

export default {
  name: 'App',
  components: {
    TotalHeader,
    ListContainer,
    AddList,
    
  }
}
</script>
 
<style scoped>
.container{
     height:600px;
     width: 80%;
     margin: 20px;
     padding: 30px;
     background-color: rgba(224, 226, 228, 0.897);
}
</style>
