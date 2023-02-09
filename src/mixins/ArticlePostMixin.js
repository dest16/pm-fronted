import AppFunctions from '../helpers/AppFunctions'

export default {
    data() {
        return {
            posts: [
                {
                    id: '1',
                    img: require(`@/assets/images/blog/blog-01.jpg`),
                    author: 'Irin Pervin',
                    authorId: '1',
                    view: '70 views',
                    publishedAt: '2020-05-14 17:54',
                    title: '拍卖管理办法 （2015修正）',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p class="MsoNormal" align="left" style="text-align:left"><b>基本信息</b></p><p class="MsoNormal" align="left" style="text-align:left">&nbsp;</p><p class="MsoNormal" align="left" style="text-align:left">发文字号商务部令<span>2015</span>年第<span>2</span>号</p><p class="MsoNormal" align="left" style="text-align:left">效力级别部门规章</p><p class="MsoNormal" align="left" style="text-align:left">时效性现行有效</p><p class="MsoNormal" align="left" style="text-align:left">发布日期<span>2015-10-28</span></p><p class="MsoNormal" align="left" style="text-align:left">实施日期<span>2015-10-28</span></p><p class="MsoNormal" align="left" style="text-align:left">发布机关商务部</p><p class="MsoNormal" align="left" style="text-align:left">&nbsp;</p><p class="MsoNormal" align="left" style="text-align:left"><b>法律修订</b></p><p class="MsoNormal" align="left" style="text-align:left">2004年<span>12</span>月<span>2</span>日商务部令<span>2004</span>年第<span>24</span>号发布，根据<span>2015</span>年<span>10</span>月<span>28</span>日《商务部关于修改部分规章和规范性文件的决定》修正</p><p class="MsoNormal" align="left" style="text-align:left"><b>正文</b></p><p class="MsoNormal" align="left" style="text-align:left">&nbsp;</p><p class="MsoNormal" align="left" style="text-align:left">第一章&emsp;总 则</p><p class="MsoNormal" align="left" style="text-align:left">第一条</p><p class="MsoNormal" align="left" style="text-align:left">为规范拍卖行为，维护拍卖秩序，推动拍卖业的对外开放，促进拍卖业健康发展，根据《中华人民共和国拍卖法》（以下简称《拍卖法》）和有关外商投资的法律、行政法规和规章，制定本办法。</p><p class="MsoNormal" align="left" style="text-align:left">第二条</p><p class="MsoNormal" align="left" style="text-align:left">本办法适用于中华人民共和国境内拍卖企业进行的拍卖活动。 各种经营性拍卖活动，应当由依法取得从事拍卖业务许可的企业进行。</p><p class="MsoNormal" align="left" style="text-align:left">第三条</p><p class="MsoNormal" align="left" style="text-align:left">本办法所称拍卖企业，是指依法在中国境内设立的从事经营性拍卖活动的有限责任公司或者股份有限公司。</p><p class="MsoNormal" align="left" style="text-align:left">第四条</p><p class="MsoNormal" align="left" style="text-align:left">商务部是拍卖行业主管部门，对全国拍卖业实施监督管理。 省、自治区、直辖市人民政府（以下简称省级）和设区的市人民政府<span>(</span>以下简称市级<span>)</span>商务主管部门对本行政区域内的拍卖业实施监督管理。</p><p class="MsoNormal" align="left" style="text-align:left">第五条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业从事拍卖活动，应当遵守《拍卖法》及其他有关法律、行政法规、规章的规定，遵循公开、公平、公正、诚实信用的原则。</p><p class="MsoNormal" align="left" style="text-align:left">第二章&emsp;企业申请从事拍卖业务的许可、变更和终止</p><p class="MsoNormal" align="left" style="text-align:left">第六条</p><p class="MsoNormal" align="left" style="text-align:left">申请从事拍卖业务许可的企业的投资者应有良好的信誉，无违反中国法律、行政法规、规章的行为。</p><p class="MsoNormal" align="left" style="text-align:left">第七条</p><p class="MsoNormal" align="left" style="text-align:left">企业申请取得从事拍卖业务的许可，应当具备下列条件： （一）有一百万元人民币以上的注册资本； （二）有自己的名称、组织机构和章程； （三）有固定的办公场所； （四）有至少一名拍卖师； （五）有符合有关法律、行政法规及本办法规定的拍卖业务规则； （六）符合商务主管部门有关拍卖行业发展规划。</p><p class="MsoNormal" align="left" style="text-align:left">第八条</p><p class="MsoNormal" align="left" style="text-align:left">企业申请取得从事拍卖业务的许可，应当提交下列材料： （一）申请书； （二）公司章程、拍卖业务规则； （三）企业法人营业执照副本（复印件）； （四）法定代表人简历和有效身份证明； （五）拟聘任的拍卖师执业资格证书； （六）固定办公场所产权证明或租用合同。</p><p class="MsoNormal" align="left" style="text-align:left">第九条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业从事文物拍卖的，应当遵循有关文物拍卖的法律、行政法规的规定。 国家行政机关依法没收的物品，充抵税款、罚款的物品、人民法院依法没收的物品，充抵罚金、罚款的物品以及无法返还的追回物品和其他特殊国有资产等标的的拍卖应由具有相应拍卖资格的拍卖企业承担，具体资格条件由省级商务主管部门会同有关部门依据规范管理、择优选用的原则制定，并报商务部备案。</p><p class="MsoNormal" align="left" style="text-align:left">第十条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业分公司申请取得从事拍卖业务的许可，应当符合下列条件： （一）符合拍卖业发展规划； （二）有固定的办公场所； （三）经营拍卖业务三年以上，最近两年连续盈利，其上年拍卖成交额超过五千万元人民币；或者上年拍卖成交额超过二亿元人民币。</p><p class="MsoNormal" align="left" style="text-align:left">第十一条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业分公司申请取得从事拍卖业务的许可，申请人需要提交下列材料<span>:</span>（一）申请报告； （二）企业法人营业执照副本（复印件）； （三）最近两年经会计师事务所审计的年度财务会计报表； （四）分公司负责人简历及有效身份证明； （五）拟聘任的拍卖师执业资格证书； （六）固定办公场所的产权证明或租用合同。</p><p class="MsoNormal" align="left" style="text-align:left">第十二条</p><p class="MsoNormal" align="left" style="text-align:left">企业及分公司申请取得从事拍卖业务的许可，按照下列程序办理： 企业及分公司申请取得从事拍卖业务的许可，应当先经企业或分公司所在地市级商务主管部门审查后，报省级商务主管部门核准并颁发拍卖经营批准证书。 省级商务主管部门对企业及分公司申请取得从事拍卖业务的许可可以采取听证方式。 拍卖经营批准证书由省级商务主管部门统一印制。</p><p class="MsoNormal" align="left" style="text-align:left">第十三条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业向工商行政管理机关申请变更注册登记项目后，应当报省级商务主管部门核准，并由其换发拍卖经营批准证书。</p><p class="MsoNormal" align="left" style="text-align:left">第十四条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业及分公司申请取得从事拍卖业务的许可后连续<span>6</span>个月无正当理由未举办拍卖会或没有营业纳税证明的，由商务主管部门收回拍卖经营批准证书。</p><p class="MsoNormal" align="left" style="text-align:left">第十五条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业根据章程规定事由、股东会决议或其他事由解散的；或者因违反法律、行政法规及本办法规定被责令关闭的；或者因不能清偿到期债务，被依法宣告破产的，由有关部门依法注销。</p><p class="MsoNormal" align="left" style="text-align:left">第三章&emsp;外商投资企业申请取得从事拍卖业务的许可、变更和终止</p><p class="MsoNormal" align="left" style="text-align:left">第十六条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资拍卖企业可以从事经营性拍卖活动，法律、行政法规另有规定的除外。</p><p class="MsoNormal" align="left" style="text-align:left">第十七条</p><p class="MsoNormal" align="left" style="text-align:left">鼓励具有较强的经济实力、先进的拍卖技术和经营管理经验、广泛的国际拍卖营销网络的外国投资者设立外商投资拍卖企业。</p><p class="MsoNormal" align="left" style="text-align:left">第十八条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资企业申请取得从事拍卖业务的许可除应符合本办法第七条的规定外还应当符合下列条件： （一）符合外商投资企业注册资本和投资总额的有关规定； （二）外商投资拍卖企业的经营期限一般不超过三十年，在中西部设立外商投资拍卖企业的经营期限一般不超过四十年。</p><p class="MsoNormal" align="left" style="text-align:left">第十九条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资企业申请取得从事拍卖业务的许可，申请人除提交本办法第八条规定的材料外<span>,</span>还应提交下列材料： （一）合同、章程（外资拍卖企业只报送章程）及其附件等； （二）投资各方的银行资信证明、登记注册证明（复印件）； （三）投资各方经会计师事务所审计的最近一年的审计报告； （四）中国投资者拟投入到中外合资、合作拍卖企业的国有资产的评估报告； （五）外商投资企业董事会成员名单及投资各方董事委派书。 外商投资拍卖企业分公司申请取得从事拍卖业务的许可，申请人应提交本办法第十一条规定的材料。</p><p class="MsoNormal" align="left" style="text-align:left">第二十条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资企业及分公司申请取得从事拍卖业务的许可，按照下列程序办理： 申请人应向所在地的省、自治区、直辖市商务部门报送第十九条规定的申请材料。商务部门应自收到全部申请材料之日起在规定时间内作出是否批准的决定，对于批准的，颁发外商投资企业批准证书，申请人凭外商投资企业批准证书向工商行政管理机关申请企业注册登记后，凭外商投资企业批准证书和营业执照向商务部门申请颁发拍卖经营批准证书，对于不批准的，应说明原因。 对外商投资企业及分公司申请取得从事拍卖业务的许可可以采取听证方式。</p><p class="MsoNormal" align="left" style="text-align:left">第二十一条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资企业及分公司申请取得从事拍卖业务的许可后连续<span>6</span>个月无正当理由未举办拍卖会或没有营业纳税证明的，由省级商务主管部门收回拍卖经营批准证书。</p><p class="MsoNormal" align="left" style="text-align:left">第二十二条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资拍卖企业根据章程规定事由、股东会或董事会决议或其他事由解散的；或者因违反法律、行政法规及本办法规定被责令关闭的；或者因不能清偿到期债务，被依法宣告破产的，由有关部门依法注销。</p><p class="MsoNormal" align="left" style="text-align:left">第四章&emsp;拍卖从业人员及拍卖活动</p><p class="MsoNormal" align="left" style="text-align:left">第二十三条</p><p class="MsoNormal" align="left" style="text-align:left">国家对拍卖专业技术人员实行执业资格制度，获得拍卖师执业资格证书的人员，经注册后，方可主持拍卖活动。 本办法所称拍卖师是指经全国统一考试合格，取得人事部、商务部联合用印的，由中国拍卖行业协会颁发的《中华人民共和国拍卖师执业资格证书》，并经注册登记的人员。</p><p class="MsoNormal" align="left" style="text-align:left">第二十四条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖师只能在一个拍卖企业注册执业且不得以其拍卖师个人身份在其他拍卖企业兼职。 拍卖师不得将《中华人民共和国拍卖师执业资格证书》借予他人或其他单位使用。</p><p class="MsoNormal" align="left" style="text-align:left">第二十五条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖师可以变更执业注册单位。拍卖师变更执业注册单位的，应当向中国拍卖行业协会办理注册变更手续。 中国拍卖行业协会应将拍卖师注册登记及变更情况每月定期报商务部备案。</p><p class="MsoNormal" align="left" style="text-align:left">第二十六条</p><p class="MsoNormal" align="left" style="text-align:left">下列物品或者财产权利禁止拍卖： （一）法律、法规禁止买卖的； （二）所有权或者处分权有争议，未经司法、行政机关确权的； （三）尚未办结海关手续的海关监管货物。</p><p class="MsoNormal" align="left" style="text-align:left">第二十七条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业应当依法开展拍卖活动，不得有下列行为： （一）出租、擅自转让拍卖经营权； （二）对拍卖标的进行虚假宣传，给买受人造成经济损失； （三）雇佣未依法注册的拍卖师或其他人员充任拍卖师主持拍卖活动的； （四）采用恶意降低佣金比例或低于拍卖活动成本收取佣金，甚至不收取佣金（义拍除外）或给予委托人回扣等手段进行不正当竞争的； （五）其他违反法律法规的行为。</p><p class="MsoNormal" align="left" style="text-align:left">第二十八条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业发现拍卖标的中有公安机关通报协查物品或赃物，应当立即向所在地公安机关报告。</p><p class="MsoNormal" align="left" style="text-align:left">第二十九条</p><p class="MsoNormal" align="left" style="text-align:left">竞买人委托他人代理竞买的，应当出具授权委托书和竞买人、代理人的身份证明复印件。 授权委托书应载明代理人的姓名或者名称、代理事项、代理权限和期间。</p><p class="MsoNormal" align="left" style="text-align:left">第三十条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖实施前，拍卖企业与委托人应当就拍卖未成交的有关事宜或因委托人中止或终止拍卖所造成损失的赔偿责任等事项达成书面协议。</p><p class="MsoNormal" align="left" style="text-align:left">第三十一条</p><p class="MsoNormal" align="left" style="text-align:left">对委托人送交的拍卖物品，拍卖企业应当由专人负责，妥善保管，建立拍卖品保管、值班和交接班制度，并采取必要的安全防范措施。</p><p class="MsoNormal" align="left" style="text-align:left">第三十二条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业举办拍卖活动，应当根据拍卖标的物的属性及拍卖的性质，按照《拍卖法》及相关法律、行政法规规定的日期进行公告。公告应当发布在拍卖标的所在地以及拍卖会举行地商务主管部门指定的发行量较大的报纸或其他有同等影响的媒体。</p><p class="MsoNormal" align="left" style="text-align:left">第三十三条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业应当在拍卖会前展示拍卖标的，为竞买人提供查看拍卖标的的条件并向竞买人提供有关资料。 展示时间应不少于两日，鲜活物品或其他不易保存的物品除外。</p><p class="MsoNormal" align="left" style="text-align:left">第三十四条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业有权查明或者要求委托人书面说明拍卖标的的来源和瑕疵。 拍卖企业应当向竞买人说明其知道或者应当知道的拍卖标的的瑕疵。</p><p class="MsoNormal" align="left" style="text-align:left">第三十五条</p><p class="MsoNormal" align="left" style="text-align:left">法律、行政法规和规章对拍卖标的受让人有特别规定的，拍卖企业应当将标的拍卖给符合法律、行政法规和规章要求的竞买人。 拍卖标的是依照法律、行政法规和规章规定需要行政许可的经营资格且依法可以转让的，委托人应在拍卖前应当征得行政许可机关的同意。</p><p class="MsoNormal" align="left" style="text-align:left">第三十六条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业可以在拍卖会现场设立委托竞买席，并在拍卖会开始时对全体竞买人作出说明。</p><p class="MsoNormal" align="left" style="text-align:left">第三十七条</p><p class="MsoNormal" align="left" style="text-align:left">有下列情形之一的，应当中止拍卖： （一）没有竞买人参加拍卖的； （二）第三人对拍卖标的所有权或处分权有争议并当场提供有效证明的； （三）委托人在拍卖会前以正当理由书面通知拍卖企业中止拍卖的； （四）发生意外事件致使拍卖活动暂时不能进行的； （五）出现其他依法应当中止的情形的。 中止拍卖由拍卖企业宣布。中止拍卖的事由消失后，应恢复拍卖。</p><p class="MsoNormal" align="left" style="text-align:left">第三十八条</p><p class="MsoNormal" align="left" style="text-align:left">有下列情形之一的，应当终止拍卖： （一）人民法院、仲裁机构或者有关行政机关认定委托人对拍卖标的无处分权并书面通知拍卖企业的； （二）拍卖标的被认定为赃物的； （三）发生不可抗力或意外事件致使拍卖活动无法进行的； （四）拍卖标的在拍卖前毁损、灭失的； （五）委托人在拍卖会前书面通知拍卖企业终止拍卖的； （六）出现其他依法应当终止的情形的。 终止拍卖由拍卖企业宣布。拍卖终止后，委托人要求继续进行拍卖的，应当重新办理拍卖手续。</p><p class="MsoNormal" align="left" style="text-align:left">第三十九条</p><p class="MsoNormal" align="left" style="text-align:left">外商投资拍卖企业与内资拍卖企业联合在中华人民共和国境内举办拍卖会的，其拍卖标的应符合法律、行政法规及本办法的有关规定。</p><p class="MsoNormal" align="left" style="text-align:left">第五章&emsp;监督管理</p><p class="MsoNormal" align="left" style="text-align:left">第四十条</p><p class="MsoNormal" align="left" style="text-align:left">商务部组织制定有关拍卖行业规章、政策，指导各地制定拍卖行业发展规划，依法建立拍卖业监督核查、行业统计和信用管理制度；负责拍卖行业利用外资的促进与管理；对拍卖行业自律组织进行业务指导。</p><p class="MsoNormal" align="left" style="text-align:left">第四十一条</p><p class="MsoNormal" align="left" style="text-align:left">省级商务主管部门负责制定和实施本地区拍卖行业发展规划，并将规划报商务部备案。 省级商务主管部门应建立本地区拍卖企业和从业人员的监督核查和行业统计及信用管理制度；负责企业和分公司申请取得从事拍卖业务的许可审核；管理与指导本地区的拍卖行业自律组织。 省级商务主管部门应当创造条件，建立与拍卖企业、其他有关行政机关计算机档案系统互联网络，对拍卖经营活动监督检查的情况和处理结果应当予以记录。每年度应当出具对拍卖企业的监督核查意见。对核查不合格的拍卖企业，应当责令限期整改，并将核查情况通报有关部门。</p><p class="MsoNormal" align="left" style="text-align:left">第四十二条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖行业协会依法并根据章程，对拍卖企业和拍卖师进行监督。拍卖行业协会应当制定拍卖行业规范，加强行业自律管理，协调会员企业与政府有关部门及会员企业之间的关系，为会员企业提供服务，维护会员企业的合法权益。 中国拍卖行业协会在商务部的指导下，具体实施全国拍卖企业信用管理制度和组织拍卖师考试、考核和资格认定工作。</p><p class="MsoNormal" align="left" style="text-align:left">第六章&emsp;法律责任</p><p class="MsoNormal" align="left" style="text-align:left">第四十三条</p><p class="MsoNormal" align="left" style="text-align:left">未经许可从事经营性拍卖活动的企业，应依照国家有关规定予以取缔。</p><p class="MsoNormal" align="left" style="text-align:left">第四十四条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖师违反本办法第二十三条、第二十四条规定或有向监管部门隐瞒情况、提供虚假材料等其他违规行为的，省级商务主管部门可将其违规事实及处理建议通告中国拍卖行业协会，中国拍卖行业协会应依照有关规定对违规拍卖师进行处理，并将处理结果在十个工作日内书面抄送拍卖师执业地省级商务主管部门和行业协会。</p><p class="MsoNormal" align="left" style="text-align:left">第四十五条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业违反本办法第二十六条规定，对买受人造成损失的，拍卖企业应当给予赔偿；属于委托人责任的，拍卖企业有权向委托人追偿。</p><p class="MsoNormal" align="left" style="text-align:left">第四十六条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业违反第二十七条第（一）项，由省级商务主管部门责令其改正，并处三万元以下罚款。</p><p class="MsoNormal" align="left" style="text-align:left">第四十七条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业违反本办法第二十七条第（三）项的规定，由省级商务主管部门视情节轻重予以警告，并处以非法所得额一倍以上的罚款，但最高不超过三万元；没有非法所得的，处以一万元以下的罚款。造成委托人和买受人损失的，拍卖企业应当依法给予赔偿。</p><p class="MsoNormal" align="left" style="text-align:left">第四十八条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业违反本办法第二十七条第（二）项、第（四）项规定的，由有关行政机关依法进行处罚。</p><p class="MsoNormal" align="left" style="text-align:left">第四十九条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业违反本办法第三十二条、第三十三条规定，拍卖前违规进行公告或展示的，由省级商务主管部门视情节轻重予以警告，责令改正，延期拍卖或处以一万元以下罚款。</p><p class="MsoNormal" align="left" style="text-align:left">第五十条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖企业、委托人违反本办法第三十四条规定，未说明拍卖标的的瑕疵，给买受人造成损害的，买受人有权要求拍卖企业给予赔偿；属于委托人责任的，拍卖企业有权向委托人追偿。 拍卖企业、委托人在拍卖前声明不能保证拍卖标的真伪或者品质的，不承担瑕疵担保责任（以下简称免责声明）。但是拍卖企业、委托人明确知道或应当知道拍卖标的有瑕疵时，免责声明无效。</p><p class="MsoNormal" align="left" style="text-align:left">第五十一条</p><p class="MsoNormal" align="left" style="text-align:left">拍卖成交后，委托人没有协助买受人依法办理证照变更、产权过户手续，造成买受人或拍卖企业损失的，委托人应当依法给予赔偿。 委托人提出中止或者终止拍卖，给拍卖企业或者竞买人造成损失的，应当依法给予赔偿。</p><p class="MsoNormal" align="left" style="text-align:left">第五十二条</p><p class="MsoNormal" align="left" style="text-align:left">有下列情形之一的，省级商务主管部门或商务部可以撤销有关拍卖企业及分公司从事拍卖业务的许可决定： （一）工作人员滥用职权、玩忽职守作出准予许可决定的； （二）违反《拍卖法》和本办法规定的取得从事拍卖业务的许可条件作出准予许可决定的； （三）超越法定职权作出准予从事拍卖业务的许可决定的。</p><p class="MsoNormal" align="left" style="text-align:left">第五十三条</p><p class="MsoNormal" align="left" style="text-align:left">商务主管部门以及行业协会的工作人员在工作中滥用职权、徇私舞弊、玩忽职守、索贿受贿的，对负有责任的主管人员和直接责任人员依法给予行政处分；构成犯罪的，依法追究刑事责任。</p><p class="MsoNormal" align="left" style="text-align:left">第五十四条</p><p class="MsoNormal" align="left" style="text-align:left">商务主管部门工作人员对在执行公务中获知的有关拍卖企业、委托人、竞买人、买受人要求保密的内容，应当按保密规定为其保密，造成泄密的，按有关规定处理。拍卖企业认为向管理机关报送的材料有保密内容的，应注明<span>"</span>保密<span>"</span>字样并密封。</p><p class="MsoNormal" align="left" style="text-align:left">第七章&emsp;附 则</p><p class="MsoNormal" align="left" style="text-align:left">第五十五条</p><p class="MsoNormal" align="left" style="text-align:left">农产品批发市场、机动车交易市场等商品交易市场引入拍卖方式及利用互联网经营拍卖业务的管理，原则上参照本办法执行，具体办法另行制定。</p><p class="MsoNormal" align="left" style="text-align:left">第五十六条</p><p class="MsoNormal" align="left" style="text-align:left">国有独资拍卖企业应按照国家有关规定进行改制。</p><p class="MsoNormal" align="left" style="text-align:left">第五十七条</p><p class="MsoNormal" align="left" style="text-align:left">本办法由商务部负责解释。</p><p class="MsoNormal" align="left" style="text-align:left">第五十八条</p><p class="MsoNormal" align="left" style="text-align:left">&nbsp;</p><p class="MsoNormal" align="left" style="text-align:left">本办法自<span>2005</span>年<span>1</span>月<span>1</span>日起施行。</p><p class="MsoNormal"><span></span></p>`,
                    categories: ['Development', 'Company', 'Marketing'],
                    tags: ['Corporate', 'Agency', 'Creative', 'Design']
                },
                {
                    id: '2',
                    img: require(`@/assets/images/blog/blog-02.jpg`),
                    author: 'Fatima Asrafy',
                    authorId: '2',
                    view: '70 views',
                    publishedAt: '30 Nov 2022',
                    title: 'Should Fixing Corporate Take 100 Steps.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['UX Design', 'Company'],
                    tags: ['Minimal', 'Company', 'Development', 'Design']
                },
                {
                    id: '3',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: 'John Dou',
                    authorId: '3',
                    view: '70 views',
                    publishedAt: '12 Oct 2022',
                    title: 'The Next 100 Things To Immediately Do About.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Development', 'UX Design', 'Business', 'Company'],
                    tags: ['App Landing', 'Startup', 'Development', 'Design']
                },
                {
                    id: '4',
                    img: require(`@/assets/images/blog/blog-04.jpg`),
                    author: 'Jannin',
                    authorId: '4',
                    view: '70 views',
                    publishedAt: '25 Aug 2022',
                    title: 'Top 5 Lessons About Corporate To Learn Before.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Marketing', 'UX Design', 'Business'],
                    tags: ['App', 'Business', 'Software', 'Design']
                },
                {
                    id: '5',
                    img: require(`@/assets/images/blog/blog-05.jpg`),
                    author: 'Jannin',
                    authorId: '5',
                    view: '70 views',
                    publishedAt: '23 Jul 2022',
                    title: 'Master The Art Of Corporate With These 5 Tips.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['App Development', 'UX Design', 'Application', 'Art'],
                    tags: ['Company', 'Corporate', 'Development', 'Design']
                },
                {
                    id: '6',
                    img: require(`@/assets/images/blog/blog-06.jpg`),
                    author: 'John Dou',
                    authorId: '6',
                    view: '70 views',
                    publishedAt: '30 Jun 2022',
                    title: 'Corporate Is Your Worst Enemy. 5 Ways To Defeat It.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Application', 'UX Design', 'Art'],
                    tags: ['App', 'Landing', 'Design', 'Software']
                },
                {
                    id: '7',
                    img: require(`@/assets/images/blog/blog-02.jpg`),
                    author: 'Fatima Asrafy',
                    authorId: '2',
                    view: '70 views',
                    publishedAt: '30 Nov 2022',
                    title: 'Should Fixing Corporate Take 100 Steps.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['UX Design', 'Company'],
                    tags: ['Minimal', 'Company', 'Development', 'Design']
                },
                {
                    id: '8',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: 'John Dou',
                    authorId: '3',
                    view: '70 views',
                    publishedAt: '12 Oct 2022',
                    title: 'The Next 100 Things To Immediately Do About.',
                    excerpt: 'We have always known the power of digital we\'ve.',
                    body: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>`,
                    categories: ['Development', 'UX Design', 'Business', 'Company'],
                    tags: ['App Landing', 'Startup', 'Development', 'Design']
                }
            ],
            categories: '',
            tags: '',
            AppFunctions
        }
    },
    methods: {
        blogCategories() {
            let cats = this.posts.map(item => {
                    return item.categories;
                }),
                singleCatArray = AppFunctions.flatDeep(cats),
                categories = [];

            singleCatArray.forEach(cat => {
                const obj = {
                    title: cat.trim(),
                    slug: AppFunctions.slugify(cat),
                    count: 1
                }
                const objIndex = AppFunctions.containsObject(obj, categories);
                if (objIndex !== -1) {
                    const prevCount = categories[objIndex].count;
                    categories[objIndex] = {
                        title: cat.trim(),
                        slug: AppFunctions.slugify(cat),
                        count: prevCount + 1
                    }
                } else {
                    categories.push(obj);
                }
            });

            this.categories = categories;
        },
        blogTags() {
            let tags = this.posts.map(item => {
                    return item.tags;
                }),
                singleTagArray = AppFunctions.flatDeep(tags),
                tagsData = [];

            singleTagArray.forEach(tag => {
                const obj = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    },
                    objIndex = AppFunctions.containsObject(obj, tagsData);

                if (objIndex !== -1) {
                    tagsData[objIndex] = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    }
                } else {
                    tagsData.push(obj);
                }
            });

            this.tags = tagsData;
        }
    },
    created() {
        this.blogCategories();
        this.blogTags();
    }
}