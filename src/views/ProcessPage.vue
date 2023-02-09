<template>
<!--  <Layout header-class="header-transparent" :footer-style="3">-->
  <Layout >

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
            <Process :timeline-data="timelineData"/>
          </div>
        </div>
<!--        <div class="col-lg-12 text-center">-->
<!--          <div class="rwt-load-more text-center mt&#45;&#45;60">-->
<!--            <a class="btn-default" href="#">-->
<!--              View More Post <Icon name="loader"/>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
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
import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
import Process from "@/components/elements/process/Process.vue";

export default {
  name: 'ProcessPage',
  components: {
    Process,
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
  data() {
    return {
      timelineData: [
        {
          id: '1',
          date: 'Step-1',
          title: '查阅标的',
          description: '仔细阅读标的公告与竞买须知，了解标的物基本信息。',
          image: 'timeline-01',
          workingStep: [
            {
              stepTitle: 'Gain your works',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
            {
              stepTitle: 'Working process',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
          ]
        },
        {
          id: '2',
          date: 'Step-2',
          title: '办理报名手续',
          description: '联系我司工作人员缴纳项目保证金并办理报名手续。',
          image: 'timeline-02',
          workingStep: [
            {
              stepTitle: 'Follow this process',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
            {
              stepTitle: 'Working experience',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
          ]
        },
        {
          id: '3',
          date: 'Step-3',
          title: '参与竞拍',
          description: '拍卖会时间参加拍卖会举牌竞价。',
          image: 'timeline-02',
          workingStep: [
            {
              stepTitle: 'Follow this process',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
            {
              stepTitle: 'Working experience',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
          ]
        },
        {
          id: '4',
          date: 'Step-4',
          title: '标的交割',
          description: '成为买受人后，委托或自行办理过户手续。',
          image: 'timeline-02',
          workingStep: [
            {
              stepTitle: 'Follow this process',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
            {
              stepTitle: 'Working experience',
              stepDescription: 'Lorem ipsum dolor sit amet at consectetur adipisicing',
            },
          ]
        },
      ],
      videoData: [
        {
          thumb: require(`@/assets/images/bg/bg-image-4.jpg`),
          src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
          title: `Watch the creative process behind <br/> the digital marketing.`
        }
      ],
      testimonialData5: [
        {
          form: 'Poland',
          description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
          name: 'John Due',
          subtitle: 'App Developer',
          image: 'testimonial-dark-01'
        },
        {
          form: 'Germany',
          description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
          name: 'John Due',
          subtitle: 'App Developer',
          image: 'testimonial-dark-02'
        },
        {
          form: 'USA',
          description: 'What I am primarily looking for with new projects is a fit on both a visual and aesthetic level as well as on a personal level with the client.',
          name: 'Janen',
          subtitle: 'App Developer',
          image: 'testimonial-dark-03'
        },
      ],
      portfolioData:  [
        {
          id: 1,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
          title: 'App Development',
          subtitle: 'Branded client',
          date: '30 May 2021',
          client: 'Rainbow Themes',
          category: 'development',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
          }
        },
        {
          id: 2,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
          title: 'Business Development',
          subtitle: 'Awesome portfolio',
          date: '01 March 2021',
          client: 'Rainbow Themes',
          category: 'design',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
          }
        },
        {
          id: 3,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
          title: 'Photoshop Design',
          subtitle: 'Awesome portfolio',
          date: '01 March 2021',
          client: 'Rainbow Themes',
          category: 'art',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
          }
        },
        {
          id: 4,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
          title: 'Native Application',
          subtitle: 'Awesome portfolio',
          date: '01 March 2021',
          client: 'Rainbow Themes',
          category: 'development',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-04.jpg`)
          }
        },
        {
          id: 5,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
          title: 'Vue Development',
          subtitle: 'Awesome portfolio',
          date: '01 March 2021',
          client: 'Rainbow Themes',
          category: 'design',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
          }
        },
        {
          id: 6,
          portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
          image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
          title: 'App Installment',
          subtitle: 'Awesome portfolio',
          date: '01 March 2021',
          client: 'Rainbow Themes',
          category: 'design',
          awards: ['2020 Design beautiful apps Finale Awards'],
          excerpt: 'Design beautiful apps.',
          body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
          btn: {
            buttonText: 'View Projects',
            link: '/'
          },
          largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
          subContent: {
            title: 'Digital Marketing.',
            subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent2: {
            title: 'App Development.',
            subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          subContent3: {
            title: 'Solution.',
            subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
          },
          gallery: {
            imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
            imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
            imageThree: require(`@/assets/images/portfolio/portfolio-06.jpg`)
          }
        }
      ]
    }
  }
}
</script>