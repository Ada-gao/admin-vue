<template>
  <!-- 讲师列表 -->
  <div class="body teacher-list">
    <!-- 面包屑 -->
    <ol class="breadcrumb">
      <li><a href="javascript:;">讲师管理</a></li>
      <li class="active">讲师列表</li>
    </ol>
    <div class="page-title">
      <router-link class="btn btn-success btn-sm pull-right" to="/teacher/add"><i class="fa fa-bell"></i> 添加讲师
      </router-link>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <form action="" class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control input-sm">
            <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
          </div>
        </form>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>编号</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="teacher in teachers">
            <td>{{ teacher.id }}</td>
            <td>{{ teacher.tc_name }}</td>
          </tr>
        </tbody>
      </table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    </div>
  </div>
</template>
<script>

</script>
<style>
</style>
