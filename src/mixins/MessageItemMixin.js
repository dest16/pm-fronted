export default {
    data() {
        return {
           portfolioItems:  [
               {
                   id: 1,
                   portfolioImage: require(`@/assets/images/message/message-001.png`),
                   image: require(`@/assets/images/message/message-001.png`),
                   title: '宜昌市夷陵路98号处办公用房4-6层 19个月租赁权拍卖公告',
                   subtitle: '拍卖详情',
                   date: '2023-05-24',
                   client: '见公告',
                   category: '见公告',
                   awards: ['2020 Design beautiful apps Finale Awards'],
                   excerpt: 'Design beautiful apps.',
                   body: `<p style="text-align:center;line-height:26px"><strong><span style="font-size:21px;color:black">宜昌市夷陵路98号处办公用房4-6层</span></strong></p><p style="text-align:center;line-height:26px"><strong><span style="font-size:21px;color:black">19</span></strong><strong><span style="font-size:21px;color:black">个月租赁权拍卖公告</span></strong></p><p style="text-indent:40px;line-height:26px"><span style="font-size:20px;color:black">受委托，我公司定于2023年5月24日15时在宜昌市公共资源交易中心701室对位于宜昌市夷陵路98号的1处办公用房4-6层19个月租赁权进行公开拍卖，拟出租面积约1386平方米。年租金参考价319334元，19个月总租金参考价505612.8元，竞买保证金为15000元。</span></p><p style="line-height:26px"><span style="font-size:20px;color:black">    租赁期限:从合同签订之日起至2024年12月31日止。在同等条件下，原承租人享有优先租赁权。</span></p><p style="line-height:26px"><span style="font-size:20px;color:black">    上述标的自公告之日起在标的物所在地公开展示，本次拍卖按标的物现状进行，有意租赁者请持有效身份证件到我公司咨询，按拍卖文件要求交纳竞买保证金并办理竞拍手续，报名及保证金交纳截止时间为2023年5月23日17时，以款到公司指定账户为有效支付(户名:湖北东晟拍卖有限公司；开户行:湖北银行股份有限公司宜昌南湖支行；账号:&nbsp;1107&nbsp;0230&nbsp;0000&nbsp;00352)。</span></p><p style="line-height:26px"><span style="font-size:20px;color:black">    联系地址:宜昌市西陵区旅游广场1号楼5楼518室</span></p><p style="line-height:26px"><span style="font-size:20px;color:black">    咨询电话:&nbsp;18372337683&nbsp;&nbsp; 16671725559</span></p><p style="text-indent:280px;line-height:26px"><span style="font-size:20px">&nbsp;</span></p><p style="text-indent:280px;line-height:26px"><span style="font-size:20px">&nbsp;</span></p><p style="text-indent:280px;line-height:26px"><span style="font-size:20px">&nbsp;</span></p><p style="text-align:right;line-height:26px"><span style="font-size:20px;color:black">湖北东晟拍卖有限公司</span></p><p style="text-indent: 380px; line-height: 26px; text-align: right;"><span style="font-size:20px;color:black">2023</span><span style="font-size:20px;color:black">年5月16日</span></p><p><br/></p>`,
                   btn: {
                       buttonText: '联系我们',
                       link: '/'
                   },
                   largeImage: require(`@/assets/images/message/message-001.png`),
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
                       imageOne: require(`@/assets/images/message/message-001.png`),
                       imageTwo: require(`@/assets/images/message/message-002.jpg`),
                       // imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
                   }
               },
               // {
               //     id: 2,
               //     portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //     image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //     title: 'Business Development',
               //     subtitle: 'Awesome portfolio',
               //     date: '01 March 2022',
               //     client: 'Rainbow Themes',
               //     category: 'design',
               //     awards: ['2020 Design beautiful apps Finale Awards'],
               //     excerpt: 'Design beautiful apps.',
               //     body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
               //     btn: {
               //         buttonText: 'View Projects',
               //         link: '/'
               //     },
               //     largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //     subContent: {
               //         title: 'Digital Marketing.',
               //         subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent2: {
               //         title: 'App Development.',
               //         subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent3: {
               //         title: 'Solution.',
               //         subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     gallery: {
               //         imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               //         imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //         imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
               //     }
               // },
               // {
               //     id: 3,
               //     portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
               //     image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
               //     title: 'Photoshop Design',
               //     subtitle: 'Awesome portfolio',
               //     date: '01 March 2022',
               //     client: 'Rainbow Themes',
               //     category: 'art',
               //     awards: ['2020 Design beautiful apps Finale Awards'],
               //     excerpt: 'Design beautiful apps.',
               //     body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
               //     btn: {
               //         buttonText: 'View Projects',
               //         link: '/'
               //     },
               //     largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
               //     subContent: {
               //         title: 'Digital Marketing.',
               //         subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent2: {
               //         title: 'App Development.',
               //         subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent3: {
               //         title: 'Solution.',
               //         subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     gallery: {
               //         imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               //         imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //         imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
               //     }
               // },
               // {
               //     id: 4,
               //     portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
               //     image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
               //     title: 'Native Application',
               //     subtitle: 'Awesome portfolio',
               //     date: '01 March 2022',
               //     client: 'Rainbow Themes',
               //     category: 'development',
               //     awards: ['2020 Design beautiful apps Finale Awards'],
               //     excerpt: 'Design beautiful apps.',
               //     body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
               //     btn: {
               //         buttonText: 'View Projects',
               //         link: '/'
               //     },
               //     largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
               //     subContent: {
               //         title: 'Digital Marketing.',
               //         subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent2: {
               //         title: 'App Development.',
               //         subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent3: {
               //         title: 'Solution.',
               //         subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     gallery: {
               //         imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               //         imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //         imageThree: require(`@/assets/images/portfolio/portfolio-04.jpg`)
               //     }
               // },
               // {
               //     id: 5,
               //     portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
               //     image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
               //     title: 'Vue.js Development',
               //     subtitle: 'Awesome portfolio',
               //     date: '01 March 2022',
               //     client: 'Rainbow Themes',
               //     category: 'design',
               //     awards: ['2020 Design beautiful apps Finale Awards'],
               //     excerpt: 'Design beautiful apps.',
               //     body: `<p>In a typical Vue.js application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
               //     btn: {
               //         buttonText: 'View Projects',
               //         link: '/'
               //     },
               //     largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
               //     subContent: {
               //         title: 'Digital Marketing.',
               //         subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent2: {
               //         title: 'App Development.',
               //         subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent3: {
               //         title: 'Solution.',
               //         subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     gallery: {
               //         imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               //         imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //         imageThree: require(`@/assets/images/portfolio/portfolio-03.jpg`)
               //     }
               // },
               // {
               //     id: 6,
               //     portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
               //     image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
               //     title: 'App Installment',
               //     subtitle: 'Awesome portfolio',
               //     date: '01 March 2022',
               //     client: 'Rainbow Themes',
               //     category: 'design',
               //     awards: ['2020 Design beautiful apps Finale Awards'],
               //     excerpt: 'Design beautiful apps.',
               //     body: `<p>In a typical Vue application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme).</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p> <br /> <p>that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>`,
               //     btn: {
               //         buttonText: 'View Projects',
               //         link: '/'
               //     },
               //     largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
               //     subContent: {
               //         title: 'Digital Marketing.',
               //         subtext: 'We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent2: {
               //         title: 'App Development.',
               //         subtext: 'We provide App Development services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     subContent3: {
               //         title: 'Solution.',
               //         subtext: 'We provide problem solutions services to startups and small businesses. We help our clients succeed by creating brand identities.'
               //     },
               //     gallery: {
               //         imageOne: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               //         imageTwo: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               //         imageThree: require(`@/assets/images/portfolio/portfolio-06.jpg`)
               //     }
               // }
           ]
        }
    }
}
