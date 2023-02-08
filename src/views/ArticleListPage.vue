<template>
  <Layout header-class="header-transparent" :footer-style="3">


    <!-- Start Timeline Area  -->
    <div class="rwt-timeline-area rn-section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <SectionTitle
                text-align="center"
                subtitle="Working Process"
                title="法律法规"
                description="所有拍卖均遵守以下法律法规"
            />
          </div>
        </div>
        <div class="row mt_dec--20">
          <div class="col-lg-12">
            <Article :timeline-data="timelineData"/>
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
import BlogPostMixin from '../mixins/BlogPostMixin'
import BlogPost from '../components/blog/BlogPost'
import CallToAction from '../components/elements/callToAction/CallToAction'
import Article from "@/components/elements/article/Article";

export default {
  name: 'BusinessConsulting',
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
    Layout
  },
  mixins: [BlogPostMixin],
  data() {
    return {
      timelineData: [
        {
          id: '1',
          date: 'Step-1',
          title: '拍卖管理办法 （2015修正）',
          description: 'Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.',
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
          title: '中华人民共和国合同法（中华人民共和国主席令第15号）',
          description: 'Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.',
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
          title: '企业国有资产交易监督管理办法（国务院国资委、财政部令 第32号）',
          description: 'Lorem ipsum dolor sit amet at — consectetur adipisicing elit. Hic, expedita. Incidunt laboriosam.',
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