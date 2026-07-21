const TYPE_ORDER = ["OB", "EX", "SK", "EC", "SB", "PG", "CW", "RR", "SC", "RP", "AV", "TM"];
const TYPE_MAX_SCORE = 12;
const STORAGE_KEY = "belief-personality-progress-v2";

const typeProfiles = {
  OB: {
    name: "秩序建构者",
    role: "先理解结构，再决定行动",
    tagline: "你相信混乱并非不可理解。只要概念足够清楚、关系梳理得足够完整，世界会显出它的骨架。",
    question: "这件事背后真正的结构是什么？",
    quote: "我不怕复杂，我怕的是没有结构。",
    worldview: [
      "你面对问题时，很少满足于零散经验或一句简单判断。你会本能地寻找变量之间的关系：什么是原因，什么只是表象；哪些现象可以放进同一个模型，哪些需要重新分类。理解对你来说不只是知道更多事实，而是让事实之间形成秩序。",
      "你也倾向把自由理解成一种清醒：不是想做什么就做什么，而是知道世界怎样运转、自己的选择会落在什么位置，然后更有把握地行动。一个解释如果只能覆盖眼前个案，却无法形成更稳定的框架，通常很难让你真正放心。"
    ],
    decision: "你通常先整理概念、因果和整体结构，等问题变得可以理解后再行动",
    underPressure: "压力越大，你越想尽快建立秩序。你可能列出规则、画出框架、重新分工，借此把失控感压回可管理的范围。",
    strengths: ["能从杂乱信息中找到规律，看到别人忽略的系统关系。", "擅长把复杂问题讲清楚，并建立可重复使用的方法。", "不容易被一时情绪和表面现象带着走。"],
    blindspots: ["可能把无法量化的感情、偶然与个体差异当成噪音。", "模型一旦建立，容易更重视内部自洽，而不是现实是否已经变化。", "别人还在表达感受时，你可能过早进入分析和解决问题。"],
    secondaryGift: "它会带来结构、长线视角和对概念清晰度的要求",
    prompts: ["这个模型解释不了的人和经验，正在提醒我什么？", "我是在理解现实，还是在要求现实服从我的分类？"],
    thinkers: [
      { name: "柏拉图", note: "相信表面变化背后仍有可理解的形式与秩序。" },
      { name: "斯宾诺莎", note: "把理解原因视为摆脱被动、获得自由的一条道路。" },
      { name: "黑格尔", note: "试图在矛盾与历史变化中把握整体结构。" }
    ],
    accent: "#3f6178",
    tint: "rgba(63, 97, 120, 0.10)"
  },
  EX: {
    name: "经验探索者",
    role: "先去接触现实，再相信结论",
    tagline: "你对漂亮理论保持礼貌，但真正能说服你的，是它在生活里经受过检验。",
    question: "它在真实世界里到底怎样运转？",
    quote: "不要先告诉我世界应该怎样，让我先看看它实际上怎样。",
    worldview: [
      "你相信知识必须和经验保持联系。与其先决定世界应该是什么样子，你更愿意观察、尝试、收集反馈，再一点点形成判断。你通常不迷信一次性的成功，也不因为理论听起来完整就全盘接受；你想知道换一个环境、换一群人，它是否仍然成立。",
      "对你而言，承认自己可能错并不可怕。真正危险的是一个观点已经被现实反驳，人却仍因为面子、身份或信念继续维护它。你愿意修正，也擅长从小规模行动中学习，这让你的判断往往带着朴素而可靠的现实感。"
    ],
    decision: "你通常先观察事实、试一小步、看见反馈，再决定是否扩大行动",
    underPressure: "遇到争论时，你会想把双方从口号拉回具体案例：到底发生了什么，过去试过什么，结果怎样。",
    strengths: ["不容易被空洞口号打动，重视可观察的事实。", "愿意根据新经验修正观点，而不是维护一贯正确的形象。", "擅长小步试错，让行动和学习同时发生。"],
    blindspots: ["眼前有效不代表长期正确，局部经验也未必能推广。", "容易低估抽象理论在发现隐蔽问题上的价值。", "某些原则不能等到伤害发生后才通过试验学习。"],
    secondaryGift: "它会带来现实检验、反馈意识和愿意修正的弹性",
    prompts: ["我看到的是足够有代表性的经验，还是一个刚好支持我的例子？", "有哪些东西不适合用试错来验证？"],
    thinkers: [
      { name: "大卫·休谟", note: "提醒人们谨慎对待超出经验支持的确定结论。" },
      { name: "约翰·洛克", note: "强调经验在知识形成中的基础位置。" },
      { name: "约翰·杜威", note: "把思想看作解决真实问题、接受行动检验的工具。" }
    ],
    accent: "#5c7254",
    tint: "rgba(92, 114, 84, 0.10)"
  },
  SK: {
    name: "怀疑审视者",
    role: "先检查问题，再接受答案",
    tagline: "你不把强烈的确信感当成真理。比起马上站队，你更想知道问题为何被这样提出。",
    question: "我们凭什么认为自己是对的？",
    quote: "我首先想知道，这个问题为什么被这样提出。",
    worldview: [
      "你对任何过于顺滑的答案都有一点警觉。语言怎样划分现实、提问方式排除了什么、说话者站在什么位置，这些往往比结论本身更早进入你的视野。你知道人很容易把习惯当自然、把立场当事实，也知道‘我很确定’和‘事情是真的’之间并没有必然联系。",
      "这种怀疑并不是为了否定一切，而是为了给判断降温。你愿意暂停、拆解、换一种问法，直到隐藏的前提浮出水面。很多时候，你的价值不在于提供又一个答案，而在于阻止大家过早接受一个坏问题。"
    ],
    decision: "你通常先检查概念、证据和隐藏前提，确认问题没有把人带进预设答案",
    underPressure: "别人越催你立刻表态，你越容易后退一步。你会要求定义、来源和反例，以免集体情绪替代判断。",
    strengths: ["能发现论证漏洞、语言陷阱和未经承认的前提。", "不容易被多数意见、权威姿态或情绪气氛裹挟。", "能让团队在犯下不可逆错误前重新思考。"],
    blindspots: ["不断追问可能变成不承担选择的安全区。", "过度拆解会让真诚、信任和共同承诺显得都很可疑。", "在必须行动的时刻，你可能等不到足以安心的确定性。"],
    secondaryGift: "它会带来对前提的检查、对确定性的克制和重新提问的能力",
    prompts: ["我还需要什么信息才愿意行动，那个标准现实吗？", "这次怀疑是在保护判断，还是在保护我不必承担选择？"],
    thinkers: [
      { name: "苏格拉底", note: "通过不断追问，暴露自以为知道其实并不知道的部分。" },
      { name: "皮浪", note: "把暂停判断看作在不确定世界中保持清醒的方式。" },
      { name: "笛卡尔", note: "用方法论怀疑寻找更可靠的知识起点。" }
    ],
    accent: "#5c6680",
    tint: "rgba(92, 102, 128, 0.10)"
  },
  EC: {
    name: "自我塑造者",
    role: "用选择塑造自己，而不是等待答案",
    tagline: "你不认为人生会自动递来一份说明书。意义常常不是先想明白，而是在承担选择之后长出来。",
    question: "我愿意通过这次选择成为什么人？",
    quote: "我不是先知道自己是谁，再作出选择；我通过选择成为自己。",
    worldview: [
      "你对‘这就是我的天性’或‘我没有办法’这类说法会保留一点距离。环境当然重要，过去也会留下痕迹，但你更关心人在此刻是否仍愿意作出选择。对你来说，一个人并不是等待被发现的固定本质，而是在一次次承诺、退出、坚持和承担中逐渐形成。",
      "你能接受世界没有统一答案，因为这并不会自动让一切失去意义。恰恰相反，没有预设剧本意味着人不能把责任交给命运。自由在你这里不是轻松的礼物，而是一种无法完全逃开的负担：你必须选择，也必须承认选择会定义你。"
    ],
    decision: "你通常先问哪个选择是自己真正愿意承担的，以及它会把自己带向怎样的人生",
    underPressure: "当外界都在替你安排答案时，你会更强烈地维护选择权；当没有答案时，你反而可能用行动结束空转。",
    strengths: ["有能力在意义崩塌后重新作出承诺。", "不轻易用身份、过去或环境彻底取消个人责任。", "愿意为真实选择付出代价，而不只保留想象中的可能。"],
    blindspots: ["可能高估意志，低估资源、身体、创伤和制度限制。", "把一切都变成个人选择，会让需要帮助的人承担额外羞耻。", "为了证明自由，可能过快切断仍有价值的关系和传统。"],
    secondaryGift: "它会带来行动、承诺和对个人责任的坚持",
    prompts: ["这个人是真的不愿选择，还是根本没有足够真实的选项？", "我是在创造自己，还是在用剧烈变化逃离旧问题？"],
    thinkers: [
      { name: "萨特", note: "强调人通过选择形成自己，也无法逃避自由的责任。" },
      { name: "西蒙娜·德·波伏娃", note: "讨论自由如何与他人的自由和具体处境相连。" },
      { name: "加缪", note: "在没有最终保证的世界里，仍选择清醒地生活和行动。" }
    ],
    accent: "#53658c",
    tint: "rgba(83, 101, 140, 0.10)"
  },
  SB: {
    name: "自律守界者",
    role: "把注意力带回自己能够负责的部分",
    tagline: "你知道世界不会完全听从意志，但人仍可以训练自己的回应，不把方向交给每一次情绪和意外。",
    question: "在这些不可控之中，我还能控制什么？",
    quote: "我不能决定发生什么，但我可以决定自己如何回应。",
    worldview: [
      "你习惯把世界分成两部分：可以改变的，和暂时无法改变的。与其反复消耗在后者，你更愿意把力气放回自己的行动、习惯、边界和态度。情绪在你看来值得被听见，却不应该自动获得指挥权；真正的自由，需要一个人能够在冲动与行动之间留出距离。",
      "你重视可靠、克制和自我负责。别人也许把纪律看作限制，你却更容易看见它提供的稳定：当外部混乱时，仍有一些东西不会被夺走。你不要求生活永远顺利，但希望自己即使在不顺利中，也不至于完全失去选择回应的能力。"
    ],
    decision: "你通常先划清责任边界，把注意力放回自己能训练、能承担、能持续做到的行动",
    underPressure: "越是混乱，你越会收紧节奏和边界。你可能减少表达，先让自己恢复可控，再处理外部问题。",
    strengths: ["在危机中保持稳定，不轻易让情绪接管行动。", "边界感较清楚，能长期承担而不是短期透支。", "重视实践和品格，不把改变只停留在愿望。"],
    blindspots: ["可能把需要支持误解成不够坚强。", "过度克制会让悲伤、愤怒和依赖没有被真正处理。", "容易把结构性伤害转化成个人修炼任务。"],
    secondaryGift: "它会带来边界、稳定和对可控行动的专注",
    prompts: ["这件事真的只需要我调整心态，还是也需要改变外部条件？", "我的边界是在保护长期承担，还是在避免亲密与脆弱？"],
    thinkers: [
      { name: "爱比克泰德", note: "区分可控与不可控，把自由放在对自身判断的训练中。" },
      { name: "马可·奥勒留", note: "在公共责任和个人修养之间保持克制与清醒。" },
      { name: "康德", note: "把自律理解为按自己认可的原则行动，而非服从冲动。" }
    ],
    accent: "#4f6d67",
    tint: "rgba(79, 109, 103, 0.10)"
  },
  PG: {
    name: "原则守护者",
    role: "先守住不能交换的底线",
    tagline: "你相信有些事即使能带来好结果，也不应该做；有些人即使人数很少，也不能只被当成代价。",
    question: "有没有一条界限，即使对我不利也不该越过？",
    quote: "有些界限不是因为有利才存在，而是因为越过它本身就是错误。",
    worldview: [
      "你不愿把道德简化成一张收益表。结果当然重要，但如果任何权利都可以在足够大的利益面前被交换，那么最弱、最少数的人永远可能成为代价。你更愿意先划出一些界限：人不能只是工具，承诺不能只在方便时有效，原则必须在对自己不利时仍然能够约束行动。",
      "这种判断方式给你一种稳定的道德方向。面对压力、诱惑和多数意见时，你会追问一条规则能否同样适用于自己，能否公开地对所有人说明。你未必总是僵硬，但你需要知道妥协发生在哪里，也需要有人承认那确实是一种妥协。"
    ],
    decision: "你通常先确认尊严、权利和承诺的底线，再讨论怎样在边界内取得最好结果",
    underPressure: "当别人以效率、紧急或多数利益要求越界时，你会比平时更坚定，甚至愿意承担不合群的代价。",
    strengths: ["在利益诱惑和群体压力下仍能保持道德一致。", "能保护少数者不被总体收益轻易牺牲。", "重视承诺与人格尊严，让合作拥有可信底线。"],
    blindspots: ["两个原则冲突时，单纯坚持原则并不会自动给出答案。", "可能低估极端情境中不行动同样会造成伤害。", "容易把复杂责任变成谁更纯洁，而忽略真实后果。"],
    secondaryGift: "它会带来清楚的底线、权利意识和对人格尊严的坚持",
    prompts: ["我坚持的是一条真正普遍的原则，还是对我更方便的规则？", "如果不越过这条线会造成巨大伤害，我愿意承担怎样的责任？"],
    thinkers: [
      { name: "康德", note: "强调人不能只被当成手段，道德原则应能普遍化。" },
      { name: "约翰·罗尔斯", note: "从公平和基本自由出发思考制度正义。" },
      { name: "汉娜·阿伦特", note: "提醒个人不能把责任完全交给命令与体制。" }
    ],
    accent: "#445f78",
    tint: "rgba(68, 95, 120, 0.10)"
  },
  CW: {
    name: "后果衡量者",
    role: "让道德真正减少伤害",
    tagline: "你不只看动机是否漂亮，更在意决定落到现实后，谁因此过得更好，谁承担了代价。",
    question: "事情最后会变成什么？",
    quote: "我关心的不只是你是否出于好心，而是事情最后变成了什么。",
    worldview: [
      "你相信善意不能抵消真实伤害。一个人可以怀着最好的动机作出糟糕决定，也可以在不完美的选项中，凭认真权衡减少大量痛苦。资源有限、时间有限、方案都有代价时，你愿意承认取舍的存在，而不是用原则上的纯洁逃开决定。",
      "你会自然地比较影响范围、严重程度和长期连锁反应。数字不是你的全部，但它能迫使人看见那些不在眼前、却同样会受影响的人。你追求的不是让自己看起来正确，而是让世界因为这个决定真的少一点损失、多一点可生活的可能。"
    ],
    decision: "你通常比较各方案会造成的整体收益与伤害，选择真实后果相对更好的一边",
    underPressure: "危机中，你会迅速进入权衡模式，优先处理影响最大、最紧急或最不可逆的风险。",
    strengths: ["愿意直面资源有限和必须取舍的现实。", "关注决定的连锁影响，不让好意替代结果责任。", "能在多个不完美方案中找到伤害相对更小的一条路。"],
    blindspots: ["总体改善可能掩盖少数人被迫承担的不公。", "不可量化的尊严、忠诚与生命体验容易被压缩成数字。", "对未来后果的预测可能比自己意识到的更不可靠。"],
    secondaryGift: "它会带来后果意识、资源权衡和对真实影响的责任感",
    prompts: ["是谁在承担这个‘总体更好’方案的主要代价？", "有哪些价值一旦换成数字，就已经失去了最重要的部分？"],
    thinkers: [
      { name: "边沁", note: "尝试用可比较的幸福与痛苦衡量公共决定。" },
      { name: "约翰·斯图亚特·密尔", note: "在总体福祉之外，也认真捍卫个体自由。" },
      { name: "彼得·辛格", note: "把道德关注扩展到更远的人与更广的生命。" }
    ],
    accent: "#6b7650",
    tint: "rgba(107, 118, 80, 0.10)"
  },
  RR: {
    name: "关系回应者",
    role: "先看见眼前具体的人",
    tagline: "你不认为人是彼此独立的孤岛。责任常常不是来自抽象合同，而是来自有人正在真实地依赖你。",
    question: "这个具体的人现在需要我回应什么？",
    quote: "我首先面对的不是一条抽象规则，而是眼前这个具体的人。",
    worldview: [
      "你对处境和关系非常敏感。同一句‘公平对待’，放在资源、能力和伤口完全不同的人身上，未必真的公平。你会留意谁没有被听见、谁正在承担额外照顾、谁虽然表面同意却没有安全拒绝的条件。对你来说，道德不只存在于普遍规则，也发生在具体相遇中。",
      "你不把脆弱和依赖看成人性的例外。每个人都曾需要照顾，也迟早会再次需要别人；关系并不是自由的障碍，而是人能够成为自己的条件之一。你愿意让判断为具体的人留出余地，也愿意承认有些责任无法整齐地写进统一规则。"
    ],
    decision: "你通常先看谁正在受伤、谁依赖这段关系，以及怎样回应具体而不相同的需要",
    underPressure: "冲突发生时，你会先稳定关系和受伤者。即使没有完整方案，也很难对眼前的求助保持抽离。",
    strengths: ["能看见抽象规则遗漏的处境差异和隐性劳动。", "对脆弱、依赖与关系伤害有细致感受。", "擅长修复信任，让决定不只正确，也仍然保有人味。"],
    blindspots: ["更容易照顾熟悉的人，忽略不在场的陌生者。", "害怕伤害关系时，可能迟迟不设必要边界。", "承担过多照顾后，容易在耗尽中产生隐性怨恨。"],
    secondaryGift: "它会带来处境敏感、照顾意识和对具体关系的责任",
    prompts: ["如果面对的是陌生人，我还会作出同样判断吗？", "这份照顾是在回应需要，还是在维持我被需要的角色？"],
    thinkers: [
      { name: "卡罗尔·吉利根", note: "让关怀、关系与具体责任进入道德理论的中心。" },
      { name: "列维纳斯", note: "从面对具体他者开始理解无法轻易推卸的责任。" },
      { name: "孔子", note: "把人格修养放在人与人的关系和日常实践中理解。" }
    ],
    accent: "#6d5f82",
    tint: "rgba(109, 95, 130, 0.10)"
  },
  SC: {
    name: "结构批判者",
    role: "看见个人选择背后的制度",
    tagline: "当别人问一个人为什么失败，你还会继续问：是谁制定了成功的标准，又是谁只得到很少的选项？",
    question: "是谁设计了选项，也是谁定义了正常？",
    quote: "我不只想知道一个人为什么这样选择，也想知道是谁设计了选项。",
    worldview: [
      "你很少把一个人的处境完全解释成个人品质。欲望、身份、机会甚至‘正常’的标准，都可能在历史、制度和语言中被塑造。一个看似自由的选择，如果退出代价极高、资源分配悬殊，或可供选择的道路早已被别人决定，那么仅仅强调个人责任就会掩盖真正的问题。",
      "你关注权力如何进入日常，而不只关注明显的命令。表格怎样分类人、学校怎样定义优秀、职场怎样奖励某种生活方式，这些温和而持续的安排同样能塑造命运。你的批判不是为了说明个人什么都做不了，而是希望行动不要只修补被制度不断制造出来的伤口。"
    ],
    decision: "你通常先分析制度、语言和历史条件怎样塑造了眼前选择，再判断责任应如何分配",
    underPressure: "当群体急着寻找一个人负责时，你会把视线拉回规则、资源和反复出现的模式。",
    strengths: ["能识别被个人化的制度问题和被自然化的标准。", "看见谁缺席、谁承担隐形代价、谁有定义问题的权力。", "推动改变从个体补救走向规则和环境层面。"],
    blindspots: ["过度强调结构会让个人行动与责任显得无足轻重。", "容易把真诚、传统和道德也全部解释成权力效果。", "擅长揭露问题，却可能缺少足够具体的可行替代。"],
    secondaryGift: "它会带来制度视角、历史意识和对隐藏权力的敏感",
    prompts: ["指出结构之后，个人此刻仍有哪些真实可行的行动？", "我是否把一切都解释成权力，以至于看不见真诚和偶然？"],
    thinkers: [
      { name: "马克思", note: "从生产关系与物质条件理解社会冲突和人的处境。" },
      { name: "福柯", note: "分析权力如何通过知识、分类与日常规范运作。" },
      { name: "布迪厄", note: "说明资源、习惯与社会场域怎样让差异持续再生产。" }
    ],
    accent: "#4e596f",
    tint: "rgba(78, 89, 111, 0.10)"
  },
  RP: {
    name: "权力现实者",
    role: "先看清资源、利益与执行力",
    tagline: "你不会因为一个系统说得漂亮就相信它。比起公开理由，你更想看资源最后流向哪里。",
    question: "谁真正有能力让结果发生？",
    quote: "判断一个系统，不要只听它宣称什么，要看资源最后流向哪里。",
    worldview: [
      "你知道公共理由和真实动力经常不是一回事。组织会谈价值，个人会谈原则，但预算、位置、联盟和退出成本往往更诚实地暴露了局势。理解这些并不表示你赞成弱肉强食，而是你不愿让善意因为看不懂力量结构而反复失败。",
      "你重视执行能力，也愿意承认谈判、策略和妥协的必要。一个正确主张如果没有支持者、资源和时机，可能只会留下道德姿态；一个人若主动放弃所有筹码，也很难长期保护自己在意的事。你希望理想能够落地，因此会先判断谁能推动、谁能阻止、代价由谁承担。"
    ],
    decision: "你通常先判断利益、资源、联盟和执行权，再选择真正有机会改变结果的策略",
    underPressure: "局势越紧张，你越少听口号，越关注控制权、交换条件和各方不会公开说出的底线。",
    strengths: ["能快速识别谁真正拥有决定权和执行能力。", "不把愿望误当方案，重视时机、联盟和现实成本。", "在复杂谈判中能保护资源，避免过早失去行动能力。"],
    blindspots: ["容易把关爱、忠诚和信念都还原成利益交换。", "长期以防御姿态生活，会越来越难相信合作和善意。", "为了保留力量，可能逐步忘记最初想保护的价值。"],
    secondaryGift: "它会带来策略、资源意识和把理想变成现实的执行视角",
    prompts: ["我是在看清现实，还是已经默认所有人都只为利益行动？", "获得力量之后，我用什么原则约束自己？"],
    thinkers: [
      { name: "马基雅维利", note: "把政治行动放回力量、时机和实际后果中观察。" },
      { name: "霍布斯", note: "从不安全、利益冲突与共同权威理解社会秩序。" },
      { name: "马克斯·韦伯", note: "区分价值热情与对行动后果负责的政治判断。" }
    ],
    accent: "#4c5547",
    tint: "rgba(76, 85, 71, 0.10)"
  },
  AV: {
    name: "生命感受者",
    role: "保护感受力、创造和生命质感",
    tagline: "合理、高效、稳定都很重要，但一段缺少感受、爱与创造的生活，很难让你觉得真正值得。",
    question: "这样的生活还有感受、创造和生命力吗？",
    quote: "我希望日子不只正确，也有感受、有创造。",
    worldview: [
      "你很在意生活有没有真实的感受。工作稳定、安排周全、效率很高，都不能代替兴趣、爱、身体的舒展和创造欲。若日子长期只剩下‘应该做什么’，你会明显感觉自己正在枯萎。",
      "有时，人先被一段音乐、一次旅行、一场谈话或某种身体经验打动，之后才慢慢明白发生了什么。对你来说，这些经验不是生活的装饰；它们会直接改变一个人怎样理解自己和世界。"
    ],
    decision: "你会留意一个选择是否让生活保有感受和创造空间，也会警惕只剩安全与效率的方案",
    underPressure: "日子越机械，你越想换个环境、做点创作，或给自己一次真正期待的体验。",
    strengths: ["能发现效率和正确背后被牺牲的生命质感。", "对艺术、身体、情感与创造性经验保持开放。", "能给僵硬系统带来想象、表达和新的生活可能。"],
    blindspots: ["可能把强烈体验误认为更真实，把稳定误认为没有生命。", "容易美化痛苦、冲动与自我消耗。", "追求鲜活时，可能低估承诺、结构和长期后果。"],
    secondaryGift: "它会带来感受力、创造性和对不可量化生命价值的保护",
    prompts: ["我追求的是更真实的生命，还是只是更强烈的刺激？", "哪些看似普通的稳定，其实正在保护我能够长期创造？"],
    thinkers: [
      { name: "尼采", note: "追问生命是否被肯定，并挑战压抑生命力的价值。" },
      { name: "柏格森", note: "强调流动的生命经验不能被静态概念完全穷尽。" },
      { name: "梅洛-庞蒂", note: "从身体经验出发理解人与世界的关系。" }
    ],
    accent: "#4f7580",
    tint: "rgba(79, 117, 128, 0.10)"
  },
  TM: {
    name: "意义探索理想家",
    role: "用长期理想校准眼前选择",
    tagline: "你不认为眼前舒服或个人获利就是最终尺度。真正值得的生活，需要与长期理想、责任或比自我更大的意义连接。",
    question: "这件事与我真正相信的意义相连吗？",
    quote: "我想要的不只是一个可行选择，而是一个值得长期相信的方向。",
    worldview: [
      "你不会只用眼前的舒适、收益或个人喜好判断一件事是否值得。你会追问：它是否连接着某个更长久的方向——也许是理想、责任、信仰、自然、家人，或一件你愿意长期服务的事情。意义对你来说不是漂亮口号，而是能在取舍时真正改变选择的尺度。",
      "这并不等于必须相信某种宗教或传统。重要的是，你认为个人欲望不该成为一切价值的终点。有些事情即使没有即时回报，也值得忠诚；有些选择即使很成功，如果让人离真正相信的方向越来越远，仍会显得空洞。"
    ],
    decision: "你通常先判断一个选择是否符合长期理想，并让生活与某种超越眼前得失的意义保持连接",
    underPressure: "当生活失去方向时，你会回到真正重视的人、长期信念或愿意服务的事情中，重新确认为什么继续。",
    strengths: ["能用长期意义限制短期诱惑，不轻易被即时回报带走。", "愿意为理想、责任和无法立刻回报自己的事情保持投入。", "在个人目标受挫时，仍可能找到比成败更深的方向感。"],
    blindspots: ["可能把理想抬得过高，忽视身体、资源和现实限度。", "容易因为寻找‘真正意义’而贬低普通但具体的快乐。", "某些权威可能借理想或使命之名，要求你长期牺牲自己。"],
    secondaryGift: "它会带来长期理想、责任感和超越眼前得失的尺度",
    prompts: ["这个理想真的由我相信，还是我害怕辜负别人？", "我能否让意义进入日常，而不是只在宏大目标里寻找它？"],
    thinkers: [
      { name: "维克多·弗兰克尔", note: "在无法控制全部处境时，仍追问人如何以责任回应意义。" },
      { name: "西蒙娜·薇依", note: "把注意、苦难与超越自我的善联系起来。" },
      { name: "老子", note: "让个人意志退后，重新体会人与更大自然秩序的关系。" }
    ],
    accent: "#6c5c83",
    tint: "rgba(108, 92, 131, 0.10)"
  }
};

const archivedQuestionsV1 = [
  {
    text: "朋友工作稳定，却越来越不开心，想突然辞职。你会先提醒他什么？",
    options: [
      { code: "AV", text: "别只看稳定，也要看这份生活还剩多少热情。" },
      { code: "CW", text: "先把辞职和留下的长期后果都算清楚。" },
      { code: "RR", text: "想想这个决定会影响哪些依赖他的人。" },
      { code: "EC", text: "问问自己真正想通过这次选择成为什么人。" }
    ]
  },
  {
    text: "一个社区想帮助长期迷茫的年轻人，资源只够先做一件事。你会选什么？",
    options: [
      { code: "EC", text: "帮助他们重新作出选择，并为目标负责。" },
      { code: "SC", text: "先改善教育、就业和机会不公平的问题。" },
      { code: "CW", text: "选实际帮助人数最多、效果最明显的方案。" },
      { code: "TM", text: "帮他们重新找到归属感和更长远的意义。" }
    ]
  },
  {
    text: "公司想支持一个大胆的新项目，但风险不小。你最先看什么？",
    options: [
      { code: "RP", text: "有没有足够的钱、人和支持者把它真正做成。" },
      { code: "AV", text: "它能不能带来真正的新鲜感和创造力。" },
      { code: "PG", text: "再新也不能碰哪些权利和底线。" },
      { code: "EX", text: "能不能先小范围试做，再看真实效果。" }
    ]
  },
  {
    text: "一个学生成绩一直不好。你觉得最应该先做什么？",
    options: [
      { code: "OB", text: "把能力、方法、环境等原因一项项理清。" },
      { code: "RR", text: "先听听他到底经历了什么、需要什么。" },
      { code: "SB", text: "从他每天还能改变的习惯开始。" },
      { code: "SC", text: "看看学校的标准是不是让某些人总被判定失败。" }
    ]
  },
  {
    text: "成年人想拒绝家里延续多年的责任。你最先考虑什么？",
    options: [
      { code: "RP", text: "家里谁掌握资源，谁其实没有拒绝的条件。" },
      { code: "RR", text: "这个决定会让哪些亲近的人直接受影响。" },
      { code: "TM", text: "这项责任是不是承载着比个人喜好更大的意义。" },
      { code: "EC", text: "他是否愿意为自己选择的人生负责。" }
    ]
  },
  {
    text: "城市要改造一个破旧但很有生活气息的老街区。你最想保护什么？",
    options: [
      { code: "AV", text: "这里独有的生活味道、记忆和创造力。" },
      { code: "CW", text: "让改造给更多居民带来实际好处。" },
      { code: "RR", text: "别让最弱势的居民失去邻里和支持。" },
      { code: "SC", text: "先看‘发展’会让谁获利、让谁离开。" }
    ]
  },
  {
    text: "一个系统把你评为‘不适合’，却不解释原因。你的第一反应更像哪一种？",
    options: [
      { code: "SC", text: "谁制定了这套标准，它会持续排除哪些人？" },
      { code: "SK", text: "它的数据和判断里是不是藏着错误前提？" },
      { code: "SB", text: "先处理我现在还能改变和行动的部分。" },
      { code: "OB", text: "先弄懂它的评分规则到底怎么运作。" }
    ]
  },
  {
    text: "突发危机里，信息不全，但团队必须马上行动。你更依靠什么？",
    options: [
      { code: "CW", text: "先选可能造成总体伤害最小的方案。" },
      { code: "OB", text: "迅速理清原因、角色和行动顺序。" },
      { code: "RP", text: "先确认谁有资源、谁真的能执行。" },
      { code: "TM", text: "先守住团队不能失去的共同信念。" }
    ]
  },
  {
    text: "一套课程声称能让人彻底改变自己。你最想先知道什么？",
    options: [
      { code: "SB", text: "它能不能帮助人建立长期习惯和边界。" },
      { code: "AV", text: "它是否真的让人活得更有感觉和热情。" },
      { code: "SK", text: "它所说的‘更好的人’到底是谁定义的。" },
      { code: "EX", text: "有没有人在真实生活中试过，而且长期有效。" }
    ]
  },
  {
    text: "学校想禁止一部让很多人不舒服的艺术作品。你会先问什么？",
    options: [
      { code: "PG", text: "表达自由和他人尊严的底线在哪里。" },
      { code: "AV", text: "禁止它会不会让表达和想象越来越贫乏。" },
      { code: "SK", text: "大家说的‘伤害’是不是同一回事。" },
      { code: "OB", text: "能不能建立一套以后也适用的清楚规则。" }
    ]
  },
  {
    text: "一个人不知道该选理想工作，还是满足家人的期待。你会建议他先想什么？",
    options: [
      { code: "EC", text: "哪个选择是他愿意真正承担的。" },
      { code: "TM", text: "哪条路更接近他长期相信的使命和意义。" },
      { code: "PG", text: "已经作出的承诺有没有必须守住的部分。" },
      { code: "OB", text: "能不能把工作、家庭和未来放进一个长期安排。" }
    ]
  },
  {
    text: "一个改革方案连续失败。你觉得最该先查什么？",
    options: [
      { code: "RP", text: "它动了谁的利益，又缺少谁的支持。" },
      { code: "OB", text: "方案是不是漏掉了关键原因和环节。" },
      { code: "SK", text: "我们对‘成功’的定义是不是一开始就错了。" },
      { code: "CW", text: "哪些做法真的有效，哪些只是听起来正确。" }
    ]
  },
  {
    text: "一个人总在重复伤害自己的行为。你觉得帮助应该从哪里开始？",
    options: [
      { code: "SB", text: "从他每天能控制的行动和习惯开始。" },
      { code: "EX", text: "用真正被验证过的方法，边做边调整。" },
      { code: "SC", text: "先看贫困、创伤和环境怎样限制了他。" },
      { code: "PG", text: "再想帮助，也不能替他决定一切。" }
    ]
  },
  {
    text: "员工发现公司可能有严重问题，但公开会让很多同事失去工作。你先看什么？",
    options: [
      { code: "PG", text: "诚实和保护无辜者，哪些底线不能交换。" },
      { code: "SB", text: "当事人怎样保持冷静，不被恐惧和愤怒带走。" },
      { code: "CW", text: "公开、内部处理和暂缓，哪种总伤害更小。" },
      { code: "EC", text: "他愿意通过这次选择成为怎样的人。" }
    ]
  },
  {
    text: "一项研究引发巨大争议，专家也没有共识。你更信哪种处理？",
    options: [
      { code: "SK", text: "先检查研究问题里有没有隐藏的假设。" },
      { code: "SC", text: "看看谁有权定义什么算‘可信知识’。" },
      { code: "EX", text: "继续观察、重复验证，等更多真实证据。" },
      { code: "CW", text: "比较判断错误的后果，决定要不要先行动。" }
    ]
  },
  {
    text: "一个古老仪式还在保留，但很多人已经说不清原因。你怎么判断它值不值得留下？",
    options: [
      { code: "TM", text: "它是否还连接着共同记忆和更大的意义。" },
      { code: "OB", text: "它在整个群体里到底起什么作用。" },
      { code: "EX", text: "看看参与它的人实际得到什么、失去什么。" },
      { code: "SB", text: "它能不能帮助人形成稳定的习惯和品格。" }
    ]
  },
  {
    text: "一个人在低谷时加入了一个能提供确定答案的团体。你最先担心或期待什么？",
    options: [
      { code: "TM", text: "它也许能让人重新找到比自己更大的意义。" },
      { code: "EC", text: "他仍需要自己选择，而不是把人生交出去。" },
      { code: "RP", text: "团体怎样获得忠诚，成员能不能自由离开。" },
      { code: "SK", text: "这套答案是不是把复杂问题说得过于简单。" }
    ]
  },
  {
    text: "医院考虑购买一种很贵的新技术。你最希望他们先确认什么？",
    options: [
      { code: "RP", text: "谁在推动购买，利益关系是否透明。" },
      { code: "EX", text: "它在真实病人身上是否真的有效。" },
      { code: "RR", text: "病人和家属的具体需要有没有被听见。" },
      { code: "AV", text: "它改善的是指标，还是病人的生活质量。" }
    ]
  },
  {
    text: "朋友被指控伤害别人，但事实还不完整。你会先做什么？",
    options: [
      { code: "SK", text: "先别急着下结论，把事实和猜测分开。" },
      { code: "SB", text: "先管好自己的情绪，不做无法挽回的事。" },
      { code: "RR", text: "先确保可能受伤的人得到保护和照顾。" },
      { code: "CW", text: "选择最不容易让伤害继续扩大的做法。" }
    ]
  },
  {
    text: "一个社区就是否保留旧生活方式吵得很厉害。你最重视什么？",
    options: [
      { code: "RR", text: "改变会不会破坏邻里之间的照顾和联系。" },
      { code: "TM", text: "旧方式是否保存着共同记忆和归属。" },
      { code: "RP", text: "争论背后谁掌握土地、钱和决定权。" },
      { code: "EX", text: "先试一部分新做法，再看实际结果。" }
    ]
  },
  {
    text: "面对长期失业，社会只能先推一种政策。你更支持哪种？",
    options: [
      { code: "SC", text: "改变一直制造机会不平等的制度。" },
      { code: "EX", text: "先试几种办法，用真实就业结果说话。" },
      { code: "EC", text: "帮助个人重新选择方向并承担目标。" },
      { code: "PG", text: "先保证任何人都不会失去基本尊严和权利。" }
    ]
  },
  {
    text: "学校要处理一个总破坏课堂、但家庭情况很复杂的学生。你先重视什么？",
    options: [
      { code: "RR", text: "先理解他遇到了什么，真正需要什么。" },
      { code: "OB", text: "建立清楚而且以后也能使用的处理办法。" },
      { code: "SC", text: "看看学校的规则是否让某些困难更严重。" },
      { code: "PG", text: "既尊重他，也要守住不能伤害别人的底线。" }
    ]
  },
  {
    text: "一个人要在强烈的爱情和已经承担的责任之间选择。你认为最重要的是什么？",
    options: [
      { code: "EC", text: "他愿意通过选择成为什么样的人。" },
      { code: "PG", text: "已经作出的承诺不能只因感觉改变。" },
      { code: "TM", text: "爱情和责任里，哪个承载着更深的意义。" },
      { code: "AV", text: "没有爱和生命力的正确人生是否值得。" }
    ]
  },
  {
    text: "一个推动社会改变的团体，内部出现严重路线争吵。你最先考虑什么？",
    options: [
      { code: "SB", text: "成员能否保持纪律，不被愤怒带着走。" },
      { code: "RP", text: "哪条路线更能获得资源和真实影响力。" },
      { code: "AV", text: "行动是否还有创造力，能让人想象新的生活。" },
      { code: "SK", text: "双方是不是都接受了一个有问题的问法。" }
    ]
  }
];

const tensionLibrary = [
  {
    codes: ["OB", "SK"],
    title: "建立秩序，还是保留怀疑",
    text: "你一方面希望世界可以被理解，希望概念、模型和结构给行动提供稳定方向；另一方面，你又知道任何结构都可能漏掉现实，甚至把自己的前提伪装成真理。你可能会在‘终于想清楚了’与‘是不是想得太整齐了’之间来回。",
    question: "什么时候，一个足够有用的解释已经可以支持行动；什么时候，你仍应该继续怀疑它？"
  },
  {
    codes: ["OB", "AV"],
    title: "可理解的生活，还是鲜活的生活",
    text: "你既需要结构、计划和长期一致，也不愿让生命被安排得只剩正确。秩序给你安全和方向，鲜活经验却提醒你：被完全规划的人生可能不再真正属于自己。",
    question: "哪些结构正在保护你的生命力，哪些结构只是让你不必面对变化？"
  },
  {
    codes: ["EX", "TM"],
    title: "经验能够证明什么，意义又超出了什么",
    text: "你重视真实检验，不愿相信没有现实根据的说法；但你也隐约知道，忠诚、敬畏和终极意义未必能像实验结果一样被证明。你会在‘没有证据就不该相信’与‘最重要的东西本来就无法这样证明’之间拉扯。",
    question: "哪些信念必须接受经验检验，哪些信念的价值恰好在于它不能被简化为效果？"
  },
  {
    codes: ["SK", "EC"],
    title: "继续追问，还是先作出承诺",
    text: "你能看见答案中的漏洞，也知道人生不会等到所有问题都解决。怀疑保护你不被虚假的确定性带走，选择则要求你在不确定中承担后果。你真正困难的地方，常常不是不知道，而是不知道何时应该停止分析。",
    question: "这一次，你还缺少关键事实，还是已经拥有足够理由，只是害怕承担选择？"
  },
  {
    codes: ["EC", "SC"],
    title: "结构塑造人，还是人必须为自己负责",
    text: "你不愿把失败都归咎于个人，因为选择受到资源、制度和历史塑造；但你也不愿让结构成为取消行动的理由。你既想对不公平保持清醒，又想保留人在限制中重新选择的可能。",
    question: "什么时候，承认结构限制是在更准确地理解责任；什么时候，它开始削弱一个人的行动能力？"
  },
  {
    codes: ["EC", "TM"],
    title: "意义由我创造，还是等待我回应",
    text: "你既相信人必须亲自选择人生，又感觉某些价值并不是任意发明的。自由让你不愿把自己完全交给传统，敬畏又提醒你：个人欲望不一定是最后尺度。",
    question: "一项承诺怎样既真正属于你的选择，又不是只服务于当下的自我？"
  },
  {
    codes: ["SB", "RR"],
    title: "守住自己的边界，还是回应他人的需要",
    text: "你知道没有边界的照顾最终会让人耗尽，也知道关系中的责任无法总用‘这不是我的事’推开。你可能一边努力自我负责，一边又对离开需要你的人感到不安。",
    question: "这次设下边界，是为了让关系能够更长久，还是为了不再感受别人的需要？"
  },
  {
    codes: ["SB", "AV"],
    title: "纪律让人自由，还是生命需要越界",
    text: "你珍惜稳定、克制和长期训练，也害怕生活因此失去热情。纪律能保护一个人不被冲动拖走，但过度掌控同样可能让爱、创造和身体经验没有空间。",
    question: "你现在需要的是更多自我约束，还是允许一种被压住太久的生命感重新出现？"
  },
  {
    codes: ["PG", "CW"],
    title: "不能交换的底线，还是必须承担的后果",
    text: "你既不愿牺牲无辜者来换取多数人的好处，也无法忽视坚持原则可能造成的真实伤害。原则保护人不被工具化，后果意识则提醒你：不行动和保持纯洁同样会改变别人的命运。",
    question: "当所有方案都会伤害某种价值时，什么仍然不能做，剩下的代价又由谁承担？"
  },
  {
    codes: ["PG", "RP"],
    title: "原则不该低头，还是理想需要力量",
    text: "你希望原则在困难时仍有效，却也清楚没有资源、联盟和执行力的正确主张很容易失败。策略可以保护理想，也可能在一次次妥协中逐渐改变理想。",
    question: "为了让原则真正生效，你愿意进行哪些妥协；哪一步妥协会让成功本身失去意义？"
  },
  {
    codes: ["CW", "RR"],
    title: "帮助更多人，还是不放弃眼前的人",
    text: "你能理解有限资源必须追求更大的总体改善，却也很难把眼前具体的人变成统计上的代价。数字帮助你看见不在场的多数，关系则让你无法忘记每一个数字都是一个真实生命。",
    question: "如何让对多数人的负责，不变成对具体受害者的冷漠？"
  },
  {
    codes: ["PG", "SC"],
    title: "普遍原则，还是被历史塑造的原则",
    text: "你需要一些不因身份改变的基本权利，也知道所谓普遍有时只是强势群体经验的放大。结构批判让原则接受历史审查，原则意识又阻止一切价值都被还原成权力。",
    question: "怎样批判一条原则的历史局限，同时不失去保护所有人的共同底线？"
  },
  {
    codes: ["RR", "RP"],
    title: "相信关系，还是先看清力量",
    text: "你愿意回应具体的人，也知道善意并不能自动改变资源悬殊。关系使合作值得尝试，现实感则提醒你：没有边界和筹码的照顾可能被利用。",
    question: "这一次，建立信任需要更多真诚，还是需要先改变双方不对等的条件？"
  },
  {
    codes: ["SC", "TM"],
    title: "意义来自历史，还是超越历史",
    text: "你能看见传统和规范怎样被权力塑造，却也不愿把敬畏、信仰和共同意义全部解释成社会控制。批判让意义保持开放，超越感则让批判不至于只剩拆解。",
    question: "哪些传统只是权力留下的形式，哪些部分仍保存着不应轻易失去的意义？"
  },
  {
    codes: ["AV", "TM"],
    title: "忠于生命感受，还是回应更高的意义",
    text: "你相信爱、身体和创造拥有真实价值，也相信欲望不能成为唯一尺度。生命力反对僵死的规范，超越意义则提醒你：不是所有强烈感受都值得追随。",
    question: "一种限制是在压抑生命，还是在帮助生命不被即时欲望耗尽？"
  }
];

const screens = {
  home: document.getElementById("homeScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const elements = {
  startButton: document.getElementById("startButton"),
  resumeButton: document.getElementById("resumeButton"),
  quitButton: document.getElementById("quitButton"),
  backButton: document.getElementById("backButton"),
  nextButton: document.getElementById("nextButton"),
  resetSelectionButton: document.getElementById("resetSelectionButton"),
  questionText: document.getElementById("questionText"),
  optionsList: document.getElementById("optionsList"),
  selectionHint: document.getElementById("selectionHint"),
  progressText: document.getElementById("progressText"),
  progressPercent: document.getElementById("progressPercent"),
  progressBar: document.getElementById("progressBar"),
  resultContent: document.getElementById("resultContent"),
  shareButton: document.getElementById("shareButton"),
  printButton: document.getElementById("printButton"),
  restartButton: document.getElementById("restartButton"),
  toast: document.getElementById("toast")
};

let state = createNewState();
let currentResultScores = null;

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function createNewState() {
  return {
    current: 0,
    answers: questions.map(() => ({ primary: null, secondary: null })),
    optionOrders: questions.map(() => shuffle([0, 1, 2, 3]))
  };
}

function showScreen(name) {
  Object.entries(screens).forEach(([screenName, element]) => {
    element.classList.toggle("hidden", screenName !== name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.answers?.length !== questions.length || saved.optionOrders?.length !== questions.length) {
      return null;
    }
    return saved;
  } catch {
    return null;
  }
}

function completedAnswerCount() {
  return state.answers.filter((answer) => answer.primary && answer.secondary).length;
}

function renderQuestion() {
  const question = questions[state.current];
  const answer = state.answers[state.current];
  const order = state.optionOrders[state.current];
  const currentNumber = state.current + 1;
  const percent = Math.round((currentNumber / questions.length) * 100);

  elements.progressText.textContent = `第 ${currentNumber} / ${questions.length} 题`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
  elements.questionText.textContent = question.text;
  elements.backButton.disabled = state.current === 0;
  elements.nextButton.disabled = !(answer.primary && answer.secondary);
  elements.nextButton.textContent = state.current === questions.length - 1 ? "查看结果" : "下一题";

  if (!answer.primary) {
    elements.selectionHint.textContent = "请选择第一选择";
  } else if (!answer.secondary) {
    elements.selectionHint.textContent = "再选择一个次接近你的答案";
  } else {
    elements.selectionHint.textContent = "已完成本题，可以继续";
  }

  elements.optionsList.innerHTML = "";
  order.forEach((optionIndex, displayIndex) => {
    const option = question.options[optionIndex];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.code = option.code;

    let rankText = "";
    if (answer.primary === option.code) {
      button.classList.add("selected-primary");
      rankText = "第一选择";
    } else if (answer.secondary === option.code) {
      button.classList.add("selected-secondary");
      rankText = "次选";
    }

    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
      <span class="option-text">${option.text}</span>
      <span class="option-rank">${rankText}</span>
    `;
    button.addEventListener("click", () => selectOption(option.code));
    elements.optionsList.appendChild(button);
  });
}

function selectOption(code) {
  const answer = state.answers[state.current];

  if (answer.primary === code) {
    answer.primary = answer.secondary;
    answer.secondary = null;
  } else if (answer.secondary === code) {
    answer.secondary = null;
  } else if (!answer.primary) {
    answer.primary = code;
  } else if (!answer.secondary) {
    answer.secondary = code;
  } else {
    answer.secondary = code;
  }

  saveProgress();
  renderQuestion();
}

function calculateScores() {
  const scores = Object.fromEntries(TYPE_ORDER.map((code) => [code, 0]));
  state.answers.forEach((answer) => {
    if (answer.primary) scores[answer.primary] += 2;
    if (answer.secondary) scores[answer.secondary] += 1;
  });
  return scores;
}

function sortedCodes(scores) {
  return [...TYPE_ORDER].sort((left, right) => scores[right] - scores[left] || TYPE_ORDER.indexOf(left) - TYPE_ORDER.indexOf(right));
}

function findTension(scores) {
  return tensionLibrary
    .map((tension) => {
      const [left, right] = tension.codes;
      const leftIndex = (scores[left] / TYPE_MAX_SCORE) * 100;
      const rightIndex = (scores[right] / TYPE_MAX_SCORE) * 100;
      return {
        ...tension,
        strength: Math.min(leftIndex, rightIndex) - 0.5 * Math.abs(leftIndex - rightIndex),
        leftIndex,
        rightIndex,
        confirmed: leftIndex >= 55 && rightIndex >= 55
      };
    })
    .sort((a, b) => b.strength - a.strength)[0];
}

function encodeScores(scores) {
  return btoa(TYPE_ORDER.map((code) => scores[code]).join(","));
}

function decodeScores(hash) {
  if (!hash.startsWith("#result=")) return null;
  try {
    const values = atob(hash.slice(8)).split(",").map(Number);
    if (values.length !== TYPE_ORDER.length || values.some((value) => !Number.isInteger(value) || value < 0 || value > TYPE_MAX_SCORE)) {
      return null;
    }
    return Object.fromEntries(TYPE_ORDER.map((code, index) => [code, values[index]]));
  } catch {
    return null;
  }
}

function thinkerCards(profile) {
  return profile.thinkers
    .map(
      (thinker) => `
        <div class="thinker-card">
          <strong>${thinker.name}</strong>
          <span>${thinker.note}</span>
        </div>
      `
    )
    .join("");
}

function spectrumRows(scores) {
  return sortedCodes(scores)
    .map((code) => {
      const profile = typeProfiles[code];
      const width = Math.round((scores[code] / TYPE_MAX_SCORE) * 100);
      return `
        <div class="spectrum-row">
          <span class="spectrum-name">${profile.name}</span>
          <div class="spectrum-track" aria-label="${profile.name} ${scores[code]} 分">
            <div class="spectrum-fill" style="width:${width}%; --type-accent:${profile.accent}"></div>
          </div>
          <span class="spectrum-score">${scores[code]}/${TYPE_MAX_SCORE}</span>
        </div>
      `;
    })
    .join("");
}

function renderResult(scores) {
  currentResultScores = scores;
  const ranking = sortedCodes(scores);
  const primaryCode = ranking[0];
  const secondaryCode = ranking[1];
  const primary = typeProfiles[primaryCode];
  const secondary = typeProfiles[secondaryCode];
  const tension = findTension(scores);
  const tensionLeft = typeProfiles[tension.codes[0]];
  const tensionRight = typeProfiles[tension.codes[1]];
  const closeResult = scores[primaryCode] - scores[secondaryCode] <= 2;
  const titlePrefix = closeResult ? "你最常用的两种方式" : "你最常用的方式";
  const tensionLabel = tension.confirmed ? "你的核心价值拉扯" : "你可能遇到的价值拉扯";

  document.documentElement.style.setProperty("--type-accent", primary.accent);
  document.documentElement.style.setProperty("--type-tint", primary.tint);

  elements.resultContent.innerHTML = `
    <section class="result-hero" style="--type-accent:${primary.accent}; --type-tint:${primary.tint}">
      <p class="result-label">${titlePrefix}</p>
      <h1 class="result-title">${primary.name}</h1>
      <p class="result-tagline">${primary.tagline}</p>
      <blockquote class="quote-block">“${primary.quote}”</blockquote>
    </section>

    <div class="result-summary-grid">
      <article class="summary-card">
        <span class="type-chip">主要倾向 · ${scores[primaryCode]}/${TYPE_MAX_SCORE}</span>
        <h2>${primary.name}</h2>
        <p>${primary.role}。${primary.decision}。</p>
      </article>
      <article class="summary-card">
        <span class="type-chip">辅助倾向 · ${scores[secondaryCode]}/${TYPE_MAX_SCORE}</span>
        <h2>${secondary.name}</h2>
        <p>${secondary.secondaryGift}。</p>
      </article>
    </div>

    <section class="result-section">
      <p class="section-kicker">第一部分 · 做判断时</p>
      <h2>${primary.question}</h2>
      <p>${primary.worldview[0]}</p>
      <p>${primary.worldview[1]}</p>
      <h3>当压力变大时</h3>
      <p>${primary.underPressure}</p>
    </section>

    <section class="result-section two-column">
      <div>
        <p class="section-kicker">第二部分 · 擅长的地方</p>
        <h2>这套方式的优势</h2>
        <ul>${primary.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <p class="section-kicker">第三部分 · 需要留意</p>
        <h2>这套方式的盲点</h2>
        <ul>${primary.blindspots.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="result-section">
      <p class="section-kicker">第四部分 · 另一种常用方式</p>
      <h2>${primary.name} × ${secondary.name}</h2>
      <p>
        遇到问题时，你通常先问“${primary.question}”。随后，${secondary.name}会把注意力带到另一个问题：“${secondary.question}”
        ${secondary.secondaryGift}。
      </p>
      <p>
        两种方式方向一致时，你通常很快就能确定选择。方向相反时，你可能先作出决定，过后又想修改；这种反复往往就来自两边都舍不得放下。
      </p>
    </section>

    <section class="result-section">
      <p class="section-kicker">第五部分 · ${tensionLabel}</p>
      <h2>${tension.title}</h2>
      <div class="tension-band">
        <div class="tension-side"><strong>${tensionLeft.name}</strong></div>
        <div class="tension-arrow">↔</div>
        <div class="tension-side"><strong>${tensionRight.name}</strong></div>
      </div>
      <p>${tension.text}</p>
      <p class="reflection-question">留给你的问题：${tension.question}</p>
    </section>

    <section class="result-section">
      <p class="section-kicker">延伸阅读</p>
      <h2>这些人讨论过相近的问题</h2>
      <p>
        如果你想继续看下去，可以从下面几位人物开始。他们不等于你的测试类型，只是提供不同的思考入口。
      </p>
      <div class="thinker-list">${thinkerCards(primary)}</div>
      <p class="fine-print">这里只列阅读线索，不表示这些人物在所有问题上观点一致。</p>
    </section>

    <section class="result-section">
      <h2>给自己的两个问题</h2>
      <p class="reflection-question">${primary.prompts[0]}</p>
      <p class="reflection-question">${primary.prompts[1]}</p>
    </section>

    <section class="spectrum-card">
      <p class="section-kicker">完整光谱</p>
      <h2>你的 12 种判断方式得分</h2>
      <p class="fine-print">分数表示你在这组题里优先调用某种规则的频率。低分不表示你反对这种价值。前几名只差 1—2 分时，组合比名次更值得看。</p>
      <div class="spectrum-list">${spectrumRows(scores)}</div>
    </section>
  `;

  const encoded = encodeScores(scores);
  history.replaceState(null, "", `${location.pathname}${location.search}#result=${encoded}`);
  showScreen("result");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

async function shareResult() {
  if (!currentResultScores) return;
  const primaryCode = sortedCodes(currentResultScores)[0];
  const primary = typeProfiles[primaryCode];
  const shareData = {
    title: `我的信念人格结果：${primary.name}`,
    text: `我最常用的判断方式是「${primary.name}」。你在没有标准答案时，会先相信什么？`,
    url: window.location.href
  };

  if (location.protocol === "file:") {
    showToast("网页发布后，这里会生成可分享的结果链接");
    return;
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast("结果链接已复制");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("分享失败，请复制浏览器地址");
  }
}

function startNewTest() {
  state = createNewState();
  currentResultScores = null;
  localStorage.removeItem(STORAGE_KEY);
  history.replaceState(null, "", `${location.pathname}${location.search}`);
  saveProgress();
  renderQuestion();
  showScreen("quiz");
}

elements.startButton.addEventListener("click", startNewTest);

elements.resumeButton.addEventListener("click", () => {
  const saved = loadProgress();
  if (saved) state = saved;
  renderQuestion();
  showScreen("quiz");
});

elements.quitButton.addEventListener("click", () => {
  saveProgress();
  elements.resumeButton.classList.toggle("hidden", completedAnswerCount() === 0);
  showScreen("home");
});

elements.backButton.addEventListener("click", () => {
  if (state.current === 0) return;
  state.current -= 1;
  saveProgress();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.nextButton.addEventListener("click", () => {
  const answer = state.answers[state.current];
  if (!(answer.primary && answer.secondary)) return;

  if (state.current === questions.length - 1) {
    const scores = calculateScores();
    localStorage.removeItem(STORAGE_KEY);
    renderResult(scores);
    return;
  }

  state.current += 1;
  saveProgress();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.resetSelectionButton.addEventListener("click", () => {
  state.answers[state.current] = { primary: null, secondary: null };
  saveProgress();
  renderQuestion();
});

elements.shareButton.addEventListener("click", shareResult);
elements.printButton.addEventListener("click", () => window.print());
elements.restartButton.addEventListener("click", startNewTest);

function initialize() {
  const sharedScores = decodeScores(location.hash);
  if (sharedScores) {
    renderResult(sharedScores);
    return;
  }

  const saved = loadProgress();
  if (saved) {
    state = saved;
    elements.resumeButton.classList.toggle("hidden", completedAnswerCount() === 0);
  }
  showScreen("home");
}

initialize();
