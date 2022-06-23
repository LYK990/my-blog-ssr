<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>个人博客登录</span>
        </div>
      </template>
      <el-input size="large" v-model="userName" placeholder="请输入用户名" />
      <el-input size="large" v-model="password" placeholder="请输入密码" />
      <el-button @click="submit" type="primary" size="large" style="width: 100%">登录</el-button>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="Login">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { apilogin } from '@/api/users';

const userName = ref('lyk');
const password = ref('123456');
const router = useRouter();
const submit = async () => {
  const data = { userName, password };
  const result = await apilogin(data);
  if (result.code == 200) {
    router.push('/');
    ElMessage.success('登录成功');
  }
};
</script>
<style lang="less" scoped>
.login {
  background: url('@/assets/images/登录注册.jpg') no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    background: none;
    border: 0;
    :deep(.el-card__header) {
      border: 0;
      display: flex;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
  :deep(.el-input) {
    background: none;
    margin-bottom: 20px;
    .el-input__inner {
      background: none;
      box-shadow: 0 0 0 1px rgb(132, 128, 128);
      color: rgb(27, 26, 26);
      font-size: 16px;
    }
  }
}
</style>
