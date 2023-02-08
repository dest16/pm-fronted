<template>
    <Layout>
        <Breadcrumb title="AUCTION ANNOUNCEMENT" current-url="拍卖公告"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row mt_dec--30">
                    <div class="col-lg-12">
                        <div class="row row--15">
                            <div class="col-lg-4 col-md-6 col-12 mt--30"
                                 data-aos="slide-up"
                                 data-aos-duration="800"
                                 :data-aos-delay="100 + index"
                                 v-for="(blog, index) in portfolioItems"
                                 :key="index">
                                <Message :blog="blog"/>
                            </div>
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
        </div>
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import Icon from '../components/icon/Icon'
    import Message from "@/components/elements/message/Message.vue";
    import MessageItemMixin from "@/mixins/MessageItemMixin";

    export default {
        name: 'MessagePage',
        components: {Icon, Message, Layout, Breadcrumb},
        mixins: [MessageItemMixin]
    }
</script>