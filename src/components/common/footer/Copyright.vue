<template>
    <!-- Start Copy Right Area  -->
    <div class="copyright-area copyright-style-one">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-8 col-sm-12 col-12">
                    <div class="copyright-left">
                        <ul class="ft-menu link-hover">
                            <li>
                                <router-link to="#">隐私政策</router-link>
                            </li>
                            <li>
                                <router-link to="#">投诉与建议</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">联系我们</router-link>
                            </li>
                            <li>
                              <a href="https://beian.miit.gov.cn/">鄂ICP备2023006209号-1</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4 col-sm-12 col-12">
                    <div class="copyright-right text-center text-lg-end">
                        <p class="copyright-text">© 湖北东晟拍卖有限公司 {{ new Date().getFullYear() }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Copy Right Area  -->
</template>

<script>
    import * as https from "https";

    export default {
        name: 'Copyright',
      methods: {
        https() {
          return https
        }
      }
    }
</script>
