<template>
    <Layout>
        <!-- Start Contact Area  -->
        <div class="rwt-contact-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle="Contact Us"
                            title="联系我们"
                        />
                    </div>
                </div>
                <div class="row row--15">
                    <div class="col-lg-12">
                        <div class="rn-contact-address mt_dec--30">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="headphones" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">联系电话</h4>
                                            <p><a href="tel:18372337683">18372337683</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="mail" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">邮编邮箱</h4>
                                            <p><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="rn-address">
                                        <div class="icon">
                                            <Icon name="map-pin" :size="40"/>
                                        </div>
                                        <div class="inner">
                                            <h4 class="title">地址</h4>
                                            <p>湖北省宜昌市西陵区云集路 <br /> 25-1-504号</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--                <div class="row mt&#45;&#45;40 row&#45;&#45;15">-->
<!--                    <div class="col-lg-7">-->
<!--                        <ContactForm/>-->
<!--                    </div>-->
<!--                    <div class="col-lg-5 mt_md&#45;&#45;30 mt_sm&#45;&#45;30">-->
<!--                        <GoogleMap/>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
        <!-- End Contact Area  -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Icon from "../components/icon/Icon";
    import GoogleMap from "../components/elements/contact/GoogleMap";
    import ContactForm from "../components/elements/contact/ContactForm";

    export default {
        name: 'ContactPage',
        components: {ContactForm, GoogleMap, Icon, SectionTitle, Breadcrumb, Layout}
    }
</script>
