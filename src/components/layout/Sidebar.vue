<template>
  <div class="aside">
    <!-- 个人资料 -->
    <div class="profile">
      <!-- 头像 -->
      <div class="avatar img-circle">
        <img src="../../assets/img/avatar.jpg">
      </div>
      <h4>布头儿</h4>
    </div>
    <!-- 导航菜单 -->
    <div class="navs">
      <ul class="list-unstyled">
        <li>
          <!-- 
            router-link 默认是包含该路径的都会被高亮，
            可以通过 exact 来配置只有必须是 / 的时候才会高亮
           -->
          <router-link to="/home" exact><i class="fa fa-bell"></i> 仪表盘
          </router-link>
        </li>
        <li>
          <router-link to="/user"><i class="fa fa-bell"></i> 用户管理
          </router-link>
        </li>
        <li>
          <router-link to="/teacher"><i class="fa fa-bell"></i> 讲师管理
          </router-link>
        </li>
        <li>
          <a href="javascript:;">
                            <i class="fa fa-cog"></i>
                            课程管理
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
          <ul class="list-unstyled">
            <li>
              <a href="./course_add.html">
                                     课程添加
                                </a>
            </li>
            <li>
              <a href="./course_list.html">
                                    课程列表
                                </a>
            </li>
            <li>
              <a href="./course_category.html">
                                    课程分类
                                </a>
            </li>
            <li>
              <a href="./course_topic.html">
                                    课程专题
                                </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./advert_list.html">
                            <i class="fa fa-bell"></i>
                            广告管理
                        </a>
        </li>
        <li>
          <a href="javascript:;">
                            <i class="fa fa-cog"></i>
                            系统设置
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
          <ul class="list-unstyled">
            <li>
              <a href="javascript:;">
                                    网站设置
                                </a>
            </li>
            <li>
              <a href="javascript:;">
                                     权限管理
                                </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
</script>
<style>
</style>
