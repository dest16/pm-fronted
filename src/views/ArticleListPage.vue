<template>
<!--  <Layout header-class="header-transparent" :footer-style="3">-->
  <Layout >
<!--    <Breadcrumb title="Blog Grid Style" current-url="Blog Grid"/>-->
    <!-- Start Timeline Area  -->
    <div class="rwt-timeline-area rn-section-gap">
      <div class="container">
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <SectionTitle-->
<!--                text-align="center"-->
<!--                subtitle="Laws And Regulations"-->
<!--                title="法律法规"-->
<!--                description="所有拍卖均遵守以下法律法规"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
        <div class="row mt_dec--30">
          <div class="col-lg-12">
            <Article :posts="posts"/>
          </div>
        </div>
        <div class="col-lg-12 text-center">
          <div class="rwt-load-more text-center mt--60">
            <a class="btn-default" href="#">
              View More Post <Icon name="loader"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- End Timeline Area -->
  </Layout>
</template>

<script>
import Layout from '../components/common/Layout'
import Icon from '../components/icon/Icon'
import Separator from '../components/elements/separator/Separator'
import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
import ServiceOne from '../components/elements/service/ServiceOne'
import Portfolio from '../components/elements/portfolio/Portfolio'
import Timeline from '../components/elements/timeline/Timeline'
import Video from '../components/elements/video/Video'
import Testimonial from '../components/elements/testimonial/Testimonial'
import BlogPost from '../components/blog/BlogPost'
import CallToAction from '../components/elements/callToAction/CallToAction'
import Article from "@/components/elements/article/Article";
import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
import BlogPostMixin from "@/mixins/BlogPostMixin";
import ArticlePostMixin from "@/mixins/ArticlePostMixin";

export default {
  name: 'ArticleListPage',
  components: {
    Article,
    ServiceOne,
    CallToAction,
    BlogPost,
    Testimonial,
    Video,
    Timeline,
    Portfolio,
    SectionTitle,
    Separator,
    Icon,
    Layout,
    Breadcrumb
  },
  mixins: [ArticlePostMixin]
}
</script>