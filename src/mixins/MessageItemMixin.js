export default {
    data() {
        return {
           portfolioItems:  [
               {
                   id: 1,
                   portfolioImage: require(`@/assets/images/message/message-01.png`),
                   image: require(`@/assets/images/message/message-01.png`),
                   title: '宜昌市夷陵区小溪塔长江市场香山花园住宅、香山凤凰城商业房产变卖公告',
                   subtitle: '拍卖详情',
                   date: '2022-05-03',
                   client: '20.7元/㎡/月',
                   category: 'development',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p align="center" style="text-align:center"><strong><span style="font-size:22px;">鼓楼核心地段商铺拍租公告</span></strong></p><p style="text-align:justify">&nbsp;</p><p style="text-align:justify">受委托，兹定于<span>2023</span>年<span>1</span>月<span>14</span>日上午<span>10</span>时至<span>2023</span>年<span>1</span>月<span>1</span>5日上午<span>10</span>时止（延时的除外）在阿里拍卖（<span>https://zc-paimai.taobao.com/</span>）举行房地产租赁权拍卖会。<strong>拍卖标的：福建省福州市鼓楼区核心地段华屏路<span>25</span>号省直屏东小区商铺十年期租赁权（出租建筑面积约<span>7895</span>平方米，原为大型商超）。</strong></p><p style="text-align:justify">符合资格条件的竞租人（竞租人资格详询拍卖人），请与本公司联系看样，办理相关报名登记手续。</p><p style="text-align:justify">★展示时间：即日起至<span>2023年</span><span>1</span>月<span>10</span>日 &nbsp;&nbsp;</p><p style="text-align:justify">★展示地点：标的物现场</p><p style="text-align:justify">★联系电话：陈先生：<span>18301106341</span>；焦先生：<span>18060514808</span></p><p style="text-align:justify">★联系地址：福建省福州市五四路<span>210</span>号国际大厦<span>20</span>层</p><p style="text-align:justify">★网 &nbsp;&nbsp;&nbsp;址：<a href="http://www.fjhxpmh.com/">http://www.fjhxpmh.com</a></p><p style="text-align:justify">★公司微信号：<span>hxpmh1995</span>&nbsp;</p><p style="text-align:justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p align="right" style="text-align:right">福建省海峡拍卖行有限公司</p><p style="text-align:justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022年<span>12月<span>21</span>日</span></p><p class="MsoNormal"><span>&nbsp;</span></p>`,
                   btn: {
                       buttonText: '联系我们',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/message/message-01.png`),
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
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'design',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'art',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'development',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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
                   title: 'Vue.js Development',
                   subtitle: 'Awesome portfolio',
                   date: '01 March 2022',
                   client: 'Rainbow Themes',
                   category: 'design',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
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
                   date: '01 March 2022',
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