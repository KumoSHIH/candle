<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <h6 class="sidebar-heading d-flex justify-content-between
            align-items-center px-3 mt-4 mb-1 text-muted">
            <span>管理員</span>
            <a class="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              <i class="fas fa-th mr-1"></i>
              <strong>產品列表</strong>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">
              <i class="fas fa-file-alt mr-1"></i>
              <strong>訂單列表</strong>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon">
              <i class="fas fa-ticket-alt mr-1"></i>
              <strong>優惠券</strong>
            </router-link>
          </li>
          <h6 class="sidebar-heading d-flex justify-content-between
            align-items-center px-3 mt-4 mb-1 text-muted">
            <span>模擬功能</span>
            <a class="d-flex align-items-center text-muted" href="#">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer_order">
              <i class="fas fa-project-diagram mr-1"></i>
              <strong>模擬訂單</strong>
            </router-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>


<script>


</script>