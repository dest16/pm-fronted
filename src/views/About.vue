<template>
    <Layout header-class="header-transparent" :show-newsletter="true" :show-cta="false">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 height-850 bg_image"
             data-black-overlay="7"
             :style="{'background-image': `url(${require(`@/assets/images/bg/yichang-bg1.jpeg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner pt--80 text-center">
                            <div>
                                <h3 class="rn-sub-badge" data-aos="fade-up" data-aos-delay="100">
                                    <span class="theme-gradient">Hubei Dongsheng Paimai Co.,Ltd.</span>
                                </h3>
                            </div>
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="150">
                              湖北东晟拍卖有限公司
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <!-- Start Service Area -->
        <div class="service-area rn-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="content" data-aos="fade-up">
                            <h3 class="title">湖北东晟拍卖有限公司，成立于2023年，位于湖北省宜昌市，是一家以从事金融业为主的企业</h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="mb--10" data-aos="fade-up">
                          湖北东晟拍卖有限公司经湖北省商务厅、湖北省市场监督管理局批准，是一家全国性拍卖机构，有着丰富的资产处置经验，拥有良好的网络化拍卖设施，可与各地交易平台联动开展优质的招、拍、挂服务。
                          公司专业从事：国有资产处置、司法强制拍卖、破产财产变现、金融机构不良资产处置等业务。拍卖标的涉及：企业国有产权、实物资产、行政事业资产、租赁权、文化艺术品、股权、无形资产等。
                          公司位于宜昌核心区域——西陵区，办公场所内设施齐全。除现场拍卖外，还可同步支持网上拍卖、在线拍卖，网络拍卖技术包括视频、音频同步，报价数据同步等，并实现了拍卖会的网络直播，包括远程报价、网上标的物展示、客户身份确认、网络代理竞投等。同时，公司还可根据标的不同特性，结合客户需求，量身定制资产处置整体策划方案、市场运作化方案、招商宣传方案，确保实现委托人利益的最大化。
                          新世纪、新企业、新征程。湖北东晟拍卖有限公司将坚持“规范、诚信、高效”的服务宗旨，力争成为您身边最专业的资产处置服务管家。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Brand Area -->
        <div class="rwt-brand-area pb--60 pt--30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt--10">
                        <Brand :brand-list="brandList" :brand-style="3"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Brand Area -->

        <Separator/>

        <!-- Start Service Area -->
        <div class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="What we can do for you"
                            title="Services provide for you."
                            description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <ServiceOne
                    service-style="service__style--1 bg-color-blackest radius mt--25"
                    icon-size="62"
                    text-align="center"
                />
            </div>
        </div>
        <!-- End Service Area -->

        <div class="rwt-timeline-area rn-section-gapBottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Timeline :timeline-data="timelineData" :timeline-style="3"/>
                    </div>
                </div>
            </div>
        </div>

        <Separator/>

        <AboutFour :image="require(`@/assets/images/about/contact-image.jpg`)"/>

        <!-- Start Elements Area -->
        <div class="rwt-counterup-area pb--100">
            <div class="container mt_dec--30">
                <Counter
                    :counter-style="5"
                    text-align="center"
                    :counter-data="counterData"
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                />
            </div>
        </div>
        <!-- End Elements Area -->

        <Separator/>

        <!-- Start Elements Area -->
        <div class="rwt-team-area rn-section-gap">
            <div class="container">
                <div class="row mb--20">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Our Corporate Team."
                            title="Corporate Team Member."
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
                         v-for="(teamMember, index) in teamData"
                         :key="index">
                        <Team :team-member="teamMember" :team-style="4"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Elements Area -->
    </Layout>
</template>

<script>
    import Layout from '../components/common/Layout'
    import Separator from '../components/elements/separator/Separator'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import AboutFour from '../components/elements/about/AboutFour'
    import ServiceOne from '../components/elements/service/ServiceOne'
    import Timeline from '../components/elements/timeline/Timeline'
    import Counter from '../components/elements/counterUp/Counter'
    import Brand from '../components/elements/brand/Brand'
    import Team from '../components/elements/team/Team'

    export default {
        name: 'About',
        components: {Team, Brand, Counter, Timeline, ServiceOne, AboutFour, SectionTitle, Separator, Layout},
        data() {
            return {
                brandList: [
                    {
                        image: require(`@/assets/images/brand/brand-01.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-02.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-03.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-04.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-05.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-06.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-07.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-08.png`)
                    },
                    {
                        image: require(`@/assets/images/brand/brand-01.png`)
                    },

                ],
                timelineData: [
                    {
                        id: '1',
                        title: 'Knowledge',
                        description: 'Present all available features in Essentials.',
                    },
                    {
                        id: '2',
                        title: 'Working',
                        description: 'All Feature available features in Essentials.',
                    },
                    {
                        id: '3',
                        title: 'Solution',
                        description: 'Popular Feature available features in Essentials.',
                    },
                    {
                        id: '4',
                        title: 'Process',
                        description: 'Latest Feature available features in Essentials.',
                    },
                ],
                counterData: [
                    {
                        number: 199,
                        title: 'Happy Clients',
                    },
                    {
                        number: 575,
                        title: 'Employees',
                    },
                    {
                        number: 69,
                        title: 'Useful Programs',
                    },
                    {
                        number: 500,
                        title: 'Useful Programs',
                    }
                ],
                teamData: [
                    {
                        image: 'team-dark-01',
                        name: 'Sr Janen Sara',
                        designation: 'Sr Product Designer',
                        location: 'CO Miego, AD, USA',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-02',
                        name: 'Corporate Jane',
                        designation: 'Manager',
                        location: 'Bangladesh',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-03',
                        name: 'Jara Saraif',
                        designation: 'Software Developer',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                    {
                        image: 'team-dark-04',
                        name: 'Afanan Sifa',
                        designation: 'Accounts Manager',
                        location: 'Poland',
                        description: 'Yes, I am a product designer. I have a passion for product design.'
                    },
                ]
            }
        }
    }
</script>
