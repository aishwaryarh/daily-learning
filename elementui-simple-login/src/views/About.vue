<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="demo-input-size">
  <el-input
    size="large"
    placeholder="Please Input"
    v-model="input6">
  </el-input>
  <el-input
    placeholder="Please Input"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="Please Input"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="Please Input"
    v-model="input9">
  </el-input>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>