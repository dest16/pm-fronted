<template>
  <Layout>
    <div class="rwt-portfolio-details rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <!-- 风格1 -->
            <div class="inner">
              <div class="frame-image">
<!--                <div class="thumbnail alignwide">-->
<!--                  <img class="radius w-100" :src="portfolio.largeImage" alt="Corporate Image"/>-->
<!--                </div>-->

                <div class="row  row--25">
                  <div class="col-lg-6">
                    <div class="content-left">
                      <span class="date-of-timeline" data-aos="fade-up" data-aos-delay="50">
                        公告中
                      </span>
                      <h2 class="title">{{ portfolio.title }}</h2>
                      <div class="single-list-wrapper">
                        <div class="single-list">
                          <label>拍卖时间:</label>
                          <span>{{ portfolio.date }}</span>
                        </div>
                        <div class="single-list">
                          <label>参考价:</label>
                          <span>{{ portfolio.client }}</span>
                        </div>
                        <div class="single-list">
                          <label>联系方式:</label>
                          <span>{{ portfolio.category }}</span>
                        </div>
                      </div>
<!--                      <div class="view-btn mt&#45;&#45;50">-->
<!--                        <a class="btn-default btn-large round" :href="portfolio.btn.link">-->
<!--                          {{ portfolio.btn.buttonText }}-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                  </div>
                  <div class="col-lg-6 mt_md--30 mt_sm--30">
                    <div class="content-right">
<!--                      <h5 class="subtitle">{{ portfolio.subtitle }}</h5>-->
<!--                      <div class="description" v-html="portfolio.body"/>-->
                      <div class="thumbnail" >
                        <img class="radius w-100" :src="portfolio.largeImage" alt="Banner Images"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            <!-- 风格2 -->
<!--            <div class="slider-area slider-style-1 bg-transparent height-750">-->
<!--              <div class="inner">-->
<!--                <div class="row align-items-center">-->
<!--                  <div class="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md&#45;&#45;40 mt_sm&#45;&#45;40">-->
<!--                    <div class="inner text-left">-->
<!--&lt;!&ndash;                            <span class="subtitle" data-aos="fade-up" data-aos-delay="100">&ndash;&gt;-->
<!--&lt;!&ndash;                                DIGITAL CONSULTING AGENCY&ndash;&gt;-->
<!--&lt;!&ndash;                            </span>&ndash;&gt;-->
<!--                      <h1>{{ portfolio.title }}</h1>-->
<!--                      <ul class="list-icon" data-aos="fade-up" data-aos-delay="200">-->
<!--                        <li>-->
<!--                          <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>-->
<!--                          {{ portfolio.date }}-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>-->
<!--                          {{ portfolio.client }}-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <Icon name="check" size="20" icon-class="icon d-inline-flex align-items-center justify-content-center"/>-->
<!--                          {{ portfolio.category }}-->
<!--                        </li>-->
<!--                      </ul>-->
<!--                      <div class="button-group mt&#45;&#45;40" data-aos="fade-up" data-aos-delay="250">-->
<!--                        <a class="btn-default btn-medium round btn-icon"-->
<!--                           href="#">-->
<!--                          联系我们-->
<!--                          <Icon name="arrow-right" size="20" icon-class="icon"/>-->
<!--                        </a>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="col-lg-5 col-xl-6 order-1 order-lg-2">-->
<!--                    <div class="thumbnail " >-->
<!--                      <img class="radius w-100" :src="portfolio.image" alt="Banner Images"/>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

              <div class="portfolio-gallery mt--60">
                <div class="content">
                  <p v-html="portfolio.body"/>
                </div>
<!--                <div class="gallery mt&#45;&#45;30">-->
<!--                  <div class="thumbnail">-->
<!--                    <img class="radius w-100" :src="portfolio.gallery.imageOne"-->
<!--                         alt="Corporate Image"/>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="gallery mt&#45;&#45;30">-->
<!--                  <div class="thumbnail">-->
<!--                    <img class="radius w-100" :src="portfolio.gallery.imageTwo"-->
<!--                         alt="Corporate Image"/>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="gallery mt&#45;&#45;30">-->
<!--                  <div class="thumbnail">-->
<!--                    <img class="radius w-100" :src="portfolio.gallery.imageThree"-->
<!--                         alt="Corporate Image"/>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import PortfolioItemMixin from '../mixins/PortfolioItemMixin'
import MessageItemMixin from "@/mixins/MessageItemMixin";

export default {
  name: 'MessageDetailsPage',
  components: {Layout},
  mixins: [MessageItemMixin],
  data() {
    return {
      id: this.$route.params.id,
      portfolio: {}
    }
  },
  methods: {
    getPortfolio(portfolioId) {
      this.portfolio = this.portfolioItems.find(item => item.id == portfolioId);
    }
  },
  created() {
    this.getPortfolio(this.id);
  }
}
</script>
