declare namespace API {
  type assistant = {
    /** id 主键id */
    id: string;
    /** 助手男性头像 */
    maleAvatar: string;
    /** 助手女性头像 */
    femaleAvatar: string;
    /** 欢迎语 */
    greetWords: string;
    /** 年龄 */
    age: number;
    /** 职业 */
    profession: string;
    /** 机器人扮演的角色 */
    botCharacter: string;
    /** 擅长领域 */
    personalStrength: string;
    /** 回答策略 */
    answerStrategy: string[];
    /** 机器人推荐策略 */
    botRecommendStrategy: string;
    /** 故事推荐策略 */
    storyRecommendStrategy: string;
    /** 回答策略集合 */
    rules: {
      key: string;
      rule: { question: string; answer: string; weight: string };
    }[];
    /** 预留字段（许久没有聊天，机器人主动打招呼prompt） */
    salutationPrompts?: string;
    /** 打招呼的频率（单位：天）；距离最后一次会话消息多长时间机器人主动给用户发送消息打招呼 */
    salutationFrequency?: number;
    prompts: string;
    /** 支持的数字人配置 */
    digitaHumanService: string[];
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
  };

  type BaseEntity = {
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
  };

  type BaseResult = {
    /** 响应码 */
    code: number;
    /** 响应说明 */
    msg: string;
    data: string;
  };

  type BotCollection = {
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id。管理员。 */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
    /** 集合类型 TALES、EXPERT、GAME */
    type: string;
    /** 图标 */
    avatar: string;
    /** 名称 */
    collectionName: string;
    /** 分类 如果设置了分类，则此集合将关联到分类列表 */
    categoryId: number;
  };

  type BotDetailVO = {
    /** 机器人id */
    id: string;
    /** 作者id */
    creator: string;
    /** 作者名称 */
    creatorName: string;
    /** builtIn，userCreated */
    botSource: string;
    /** 机器人名称 */
    botName: string;
    /** 机器人介绍 */
    botIntroduce: string;
    /** 头像 */
    avatar: string;
    /** 性别 */
    gender: string;
    /** 年龄 */
    age: number;
    /** 职业 */
    profession: string;
    /** 个性 */
    personality: string;
    /** 特点 */
    botCharacter: string;
    /** 特长 */
    personalStrength: string;
    /** 回答风格 */
    conversationStyle: string;
    /** 回答策略集合 */
    rules: string[];
    prompts: string;
    /** 0关闭，1开启 */
    knowledgeEnable: boolean;
    /** 学习文件路径集合 */
    knowledges: string[];
    /** 支持模型，多个使用逗号分隔：Midjourney，DigitaHumanService */
    supportedModels: string[];
    /** 相册 */
    album?: string[];
    /** 机器人状态：Online,Offline */
    botStatus: string;
    /** 是否公开机器人 */
    visibled: boolean;
    /** 评分 */
    rating: number;
    /** 聊天数 */
    chatTotal: number;
    /** 订阅者数量 */
    subscriberTotal: number;
    /** 对话数 */
    dialogues: number;
    /** 是否推荐 */
    recommend: boolean;
    /** 推荐排序 */
    sortNo?: number;
    /** 推荐封面 */
    recommendImage?: string;
    /** 推荐词 */
    recommendWords?: string;
    /** 最近更新时间 */
    updatedAt: string;
    /** 是否订阅机器人 */
    subscribed: boolean;
    /** 是否可评论 */
    commented: boolean;
    /** 是否存在未发布更新 */
    hasUpdated: boolean;
    /** 聊天提示语 */
    dialogueTemplates: string[];
  };

  type BotListVO = {
    /** 机器人id */
    id: string;
    /** 机器人名称 */
    botName: string;
    /** 机器人头像 */
    botAvatar: string;
    /** 用户id */
    userId: number;
    /** 创建人id */
    creator: number;
    /** 创建人名称 */
    creatorName: string;
    /** 评分 */
    rating: number;
    /** 订阅者数量 */
    subscriberTotal: number;
    /** 性别 */
    gender: string;
    /** 机器人最新更新时间 */
    updatedAt: string;
    /** 用户关注机器人的最后一次读取时间 */
    lastReadAt?: string;
    /** 机器人状态：unrelease,online,offline */
    botStatus: string;
    /** 会话数量 */
    chatTotal: number;
    /** 推荐封面 */
    recommendImage?: string;
    /** 推荐词 */
    recommendWords?: string;
    /** 机器人介绍 */
    botIntroduce?: string;
    /** 相册 */
    album: string[];
    /** builtIn，userCreated */
    botSource: string;
  };

  type ChapterPassDto = {
    /** 主键id，当前章节的id */
    id: number;
    storyId: string;
    /** 章节名称，非必填 */
    chapterName: string;
    /** 此章节的形象 */
    image: string;
    /** 章节封面（通关或失败的图片） */
    picture: string;
    /** 文案（显示上一个章节的通关文案或者） */
    copywriting: string;
    /** 'PLAYING', 'FAIL', 'SUCCESS' */
    status: string;
  };

  type ChatMessageRecordVO = {
    /** 聊天对象id */
    objectId: string;
    /** 'TEXT','VOICE','IMAGE','VIDEO','botRecommend','storyRecommend' */
    contentType: string;
    json?: string;
    /** 多媒体（oss文件链接） */
    media?: string;
    /** 文本内容 */
    textContent?: string;
    /** 来源类型：user，bot，assistant，story */
    sourceType: string;
    /** 用户id */
    userId: string;
    /** 消息状态: created, processing, success, fail */
    msgStatus: string;
    /** 已读标记：false未读，true已读 */
    readFlag: boolean;
    /** 读取消息时间 */
    readTime: string;
    /** 机器人回复的消息id */
    replyMessageId: string;
    /** 创建时间 */
    createdAt: string;
    /** 消息唯一标识 */
    msgId: string;
    /** 语音文件属性 */
    fileProperty: string;
    videoUrl: string;
    /** created, success, fail */
    videoStatus: string;
    /** 是否数字人消息 */
    digitHuman: boolean;
    /** 是否标记为不好的回复 */
    badAnswer: boolean;
  };

  type CommentDto = {
    /** id */
    id: number;
    /** 评论内容 */
    content: string;
    /** 语音链接 */
    voiceUrl: string;
    /** 回帖id */
    postId: number;
    /** 回复人id */
    creator: number;
    /** 回复人头像 */
    avatar: string;
    /** 回帖时间 */
    createdAt: string;
    /** 昵称 */
    nickname: string;
    /** 回复 */
    replyTo: string[];
  };

  type deleteAdminResourcesIdParams = {
    /** 资源id */
    id: string;
  };

  type deleteAdminRoleIdParams = {
    /** 角色id */
    id: number;
  };

  type deleteAdminUserIdParams = {
    /** 用户id */
    id: number;
  };

  type deleteBotAppBotIdParams = {
    /** 机器人id */
    id: string;
  };

  type deleteBotAppBotIdUnsubscribeParams = {
    /** 机器人id */
    id: string;
  };

  type deleteBotAppChatBotIdParams = {
    /** 机器人id */
    id: string;
  };

  type deleteBotAppChatMsgMsgIdParams = {
    /** 某一条消息的id，若删除的用户消息，会连带删除对应的机器人回复该用户的消息 */
    msgId: string;
  };

  type deleteBotManageAssistantDigitaHumanVideoVideoIdParams = {
    /** 视频id */
    videoId: string;
  };

  type deleteBotManageBotIdParams = {
    /** 机器人id */
    id: string;
  };

  type deleteBotManageCategoryIdParams = {
    /** 类型id */
    id: number;
  };

  type deleteBotManageGame24idParams = {
    id: string;
  };

  type deleteBotManageGameGameResult24idParams = {
    id: string;
  };

  type deleteBotManageShpere24idParams = {
    id: string;
  };

  type deleteBotManageShpereBot24idParams = {
    id: string;
  };

  type deleteContentAppComment24idParams = {
    id: number;
  };

  type deleteContentAppFollowRelation24idParams = {
    /** 关注记录id */
    id: number;
  };

  type deleteContentAppPosts24idParams = {
    id: string;
  };

  type deleteContentAppUserCollectStoryStoryIdParams = {
    /** 故事id */
    storyId: string;
  };

  type deleteContentManageCategoryIdParams = {
    id: string;
  };

  type deleteContentManageChapterIdParams = {
    id: string;
  };

  type deleteContentManageGiftIdParams = {
    id: string;
  };

  type deleteContentManageStoryIdParams = {
    id: string;
  };

  type deleteOrderManageServicePackageIdParams = {
    /** 服务包id */
    id: number;
  };

  type deleteUserAppFeedbackIdParams = {
    /** 反馈id */
    id: string;
  };

  type deleteUserAppFollowingFollowingIdParams = {
    /** 已关注用户id */
    followingId: number;
  };

  type deleteUserAppUserImageIdParams = {
    /** 图片的id号 */
    id: number;
  };

  type deleteUserManageGroupIdParams = {
    id: string;
  };

  type deleteUserManageInterestItemIdParams = {
    id: string;
  };

  type deleteUserManagePushJobIdParams = {
    /** id */
    id: string;
  };

  type deleteUserManageTagIdParams = {
    /** 标签id */
    id: number;
  };

  type deleteUserManageUserIdParams = {
    id: string;
  };

  type dictionary = {
    id: number;
    /** 字典类型 */
    dicType: string;
    /** 字典值 */
    dicValue: string;
    /** 排序 */
    sortNo: number;
  };

  type digitalHumanProfile = {
    /** 配置id */
    id: number;
    /** 数字人配置类型：bot、assistant */
    profileType: string;
    /** 机器人或助手id */
    objectId: string;
    gender: string;
    /** 数字人图片 */
    sourceImage: string;
    /** 表情 The expression to use */
    expression: string;
    /** 强度 Controls the intensity you want for this expression (between 0 no expression, 1 maximum) */
    intensity: number;
    /** 支持的语言 */
    language?: { language: string; voice: string }[];
    /** 生成的欢迎视频Id */
    greetVideoId: string;
    greetVideo: string;
    /** 空闲时待机视频id */
    idleVideoId: string;
    idleVideo: string;
    /** 生成数字人设置的音色 */
    voiceName: string;
  };

  type EditBotVO = {
    /** 是否公开机器人 */
    visibled: boolean;
    /** 机器人名称 */
    botName: string;
    /** 头像 */
    avatar: string;
    /** 性别：1男，2女 */
    gender: string;
    /** 机器人介绍 */
    botIntroduce: string;
    /** 年龄 */
    age: number;
    /** 分类（栏目）id */
    categoryId?: string;
    /** 分类（栏目）名称 */
    categoryName?: string;
    /** 特点 */
    botCharacter: string;
    /** 职业 */
    profession: string;
    /** 个人实力 */
    personalStrength: string;
    /** 回答风格 */
    conversationStyle: string;
    /** 回答策略id集合 */
    rules: string[];
    prompts?: string;
    knowledgeEnable?: string;
    /** 学习文件路径集合 */
    knowledges?: string[];
    /** 支持模型 */
    supportedModels?: string[];
    /** 数字人配置 */
    digitalHumanProfile?: {
      id: number;
      profileType: string;
      objectId: string;
      gender: string;
      sourceImage: string;
      expression: string;
      intensity: number;
      language?: { language: string; voice: string }[];
      greetVideoId: string;
      greetVideo: string;
      idleVideoId: string;
      idleVideo: string;
      voiceName: string;
    };
    /** 相册 */
    album?: string[];
  };

  type Game = {
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
    /** 指南 对应assistant的instructions参数 */
    instructions: string;
    /** 游戏名称 这个给用户看 */
    gameName: string;
    /** AI角色 这个告诉AI它扮演什么角色 */
    assistantName: string;
    /** 使用工具 枚举：code_interpreter，file_search，function */
    tools?: string;
    /** 模型 使用的模型 */
    model?: string;
    /** 在openai上创建的assistant的id */
    assistantId?: string;
    /** 介绍 给用户看的游戏介绍 */
    introduce: string;
    /** 描述 列表封面的描述 */
    description: string;
    /** 问题 */
    questions: string[];
    /** 封面 封面URL */
    cover: string;
    /** 列表封面 列表封面URL */
    listCover: string;
    /** 头像 头像图片URL */
    avatar: string;
    /** 知识文档 知识文档url */
    knowledge: string[];
    /** 列表描述文字 */
    listDesc: string;
    /** 上线/下线 上线和下线的标志，ture false */
    enable: boolean;
    /** 排序 */
    orderNum: number;
  };

  type GameListDto = {
    /** id 主键id */
    id: number;
    /** 游戏名称 这个给用户看 */
    gameName: string;
    /** 介绍 给用户看的游戏介绍 */
    introduce: string;
    /** 描述 列表的描述 */
    description: string;
    /** 封面 封面URL */
    cover: string;
    /** 列表封面 列表封面URL */
    listCover: string;
    /** 头像 头像 */
    avatar: string;
    /** 列表描述文字 */
    listDesc: string;
    /** 上线下线状态 */
    enable: boolean;
  };

  type GameResult = {
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
    gameId: number;
    /** 摘要  */
    summary: string;
    /** 描述 建议使用markdown语法 */
    description: string;
    /** 图片 图片url */
    cover: string;
  };

  type getAdminActiveUsersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminCountryIncomeRankingParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getAdminCountrySubscriberCountRankingParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getAdminCountryUserCountRankingParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getAdminCurrentResourcesParams = {
    token?: string;
  };

  type getAdminDailyIncomeLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminEmailLogsParams = {
    pageNo?: number;
    pageSize?: number;
    email?: string;
    /** 状态：success,fail */
    status?: string;
    content?: string;
    minSendTime?: string;
    maxSendTime?: string;
  };

  type getAdminExpiredSubscribersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminInactiveUsersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminNewSubscribersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminNewUsersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminOperationLogsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 管理员名称 */
    username?: string;
    module?: string;
    action?: string;
    minOperatedTime?: string;
    maxOperatedTime?: string;
    record?: string;
  };

  type getAdminPublicVerifyCodeImageClientCodeParams = {
    /** 验证码的clientCode */
    clientCode: string;
  };

  type getAdminRoleIdParams = {
    /** 角色id */
    id: number;
  };

  type getAdminRolesParams = {
    /** 页码 */
    pageNo?: number;
    /** 每页显示条数 */
    pageSize?: number;
  };

  type getAdminSmsLogsParams = {
    pageNo?: number;
    pageSize?: number;
    phone?: string;
    status?: string;
    content?: string;
    /** 发送时间段查询 */
    minSendTime?: string;
    /** 发送时间段查询 */
    maxSendTime?: string;
  };

  type getAdminTotalIncomeLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminTotalSubscribersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminTotalUsersLineChartParams = {
    /** 开始日期，格式 yyyyMMdd */
    startDate?: string;
    /** 结束日期，格式 yyyyMMdd */
    endDate?: string;
  };

  type getAdminUserIdParams = {
    /** 管理员id */
    id: number;
  };

  type getAdminUsersParams = {
    /** 页码 */
    pageNo?: number;
    /** 每页显示条数 */
    pageSize?: number;
    /** 用户账户 */
    username?: string;
    /** 用户昵称 */
    nickname?: string;
    /** 创建时间段查询，开始时间 */
    minCreatedTime?: string;
    /** 创建时间段查询，结束时间 */
    maxCreatedTime?: string;
    /** 角色id */
    roleId?: number;
  };

  type getBotAppAssistantChatRecordParams = {
    pageNo?: number;
    pageSize?: number;
    /** 查询时间 */
    lastTime?: string;
  };

  type getBotAppAssistantChatRecordRegenerateParams = {
    /** 消息id */
    id?: string;
  };

  type getBotAppBotCategoryParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人栏目 */
    categoryName?: string;
  };

  type getBotAppBotIdParams = {
    /** 机器人id */
    id: string;
    /** unrelease仅作者查询时该值生效,online作者查询已发布的机器人版本详情 */
    botStatus?: string;
  };

  type getBotAppChatRecordsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人id */
    botId: string;
    /** 查询时间 */
    lastTime?: string;
  };

  type getBotAppChatsParams = {
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
  };

  type getBotAppDicParams = {
    /** 字典类型：botRules，botProfession，botConversationStyle，feedbackCategory，feedbackTitle */
    dicType: string;
  };

  type getBotAppExploreBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 关键词 */
    keyword?: string;
    /** 0全部，1栏目，2机器人 */
    type?: string;
    /** 分类的id */
    categoryId?: number;
    /** 按tag搜索 */
    tag?: string;
  };

  type getBotAppGame24idParams = {
    id: string;
  };

  type getBotAppGameParams = {
    pageNo?: string;
    pageSize?: string;
  };

  type getBotAppMyBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
  };

  type getBotAppOwnerBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 指定关注用户的id集合 逗号分隔 */
    botOwnerIds: string;
  };

  type getBotAppProfessionParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotAppRateParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人id */
    botId?: string;
  };

  type getBotAppRecommendBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
  };

  type getBotAppRulesParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotAppSphereBotParams = {
    pageNo: number;
    pageSize: number;
    /** sphere分类id */
    collectionId: string;
  };

  type getBotAppSphereParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotAppSubscribedBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
  };

  type getBotManageBotCategoryParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotManageBotDigitaHumanIdleAnimationIdParams = {
    /** 动画id */
    id: string;
  };

  type getBotManageBotDigitalHumanSalutationIdParams = {
    /** 视频id */
    id: string;
  };

  type getBotManageBotDigitalHumanVideoRecordsParams = {
    pageNo?: string;
    pageSize?: string;
    /** 数字人配置id */
    profileId?: string;
  };

  type getBotManageBotIdParams = {
    /** 机器人id */
    id: number;
  };

  type getBotManageBotIdRecommendParams = {
    id: number;
  };

  type getBotManageBotRecommendParams = {
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
    botName?: string;
    categoryId?: string;
    botSource?: string;
    minRecommendTime?: string[];
    maxRecommendTime?: string;
  };

  type getBotManageBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
    /** 类别id */
    categoryId?: string;
    /** builtIn,userCreated */
    botSource: string;
    /** 状态 */
    botStatus?: string;
    from?: string;
    to?: string;
    /** 作者名称 */
    creatorName?: string;
  };

  type getBotManageCategoryBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 机器人名称 */
    botName?: string;
    /** 是否为数字人：0否，1是 */
    digitalHuman?: number;
    /** builtIn，userCreated */
    botSource?: string;
    /** 分类id */
    categoryId?: string;
  };

  type getBotManageCategoryCanSelectBotsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 必传参数，查询非本栏目下的机器人集合 */
    categoryId: string;
    /** 机器人名称 */
    botName?: string;
    /** 作者姓名 */
    creatorName?: string;
    /** builtIn，userCreated */
    botSource?: string;
  };

  type getBotManageCategoryIdParams = {
    /** 类型id */
    id: number;
  };

  type getBotManageCategoryParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotManageDicParams = {
    /** 字典类型：botRules，botProfession，botConversationStyle，feedbackCategory，feedbackTitle */
    dicType: string;
  };

  type getBotManageDigitaHumanProfileParams = {
    /** 数字人配置类型：bot、assistant */
    profileType: string;
    /** 机器人或助手id */
    objectId: number;
    gender: string;
  };

  type getBotManageGame24idGameResultParams = {
    id: string;
  };

  type getBotManageGame24idParams = {
    id: string;
  };

  type getBotManageGameParams = {
    pageNo?: string;
    pageSize?: string;
  };

  type getBotManageShpereBotParams = {
    pageNo?: string;
    pageSize?: string;
    /** 集合的id号 */
    collectionId?: number;
  };

  type getBotManageShpereParams = {
    pageNo?: number;
    pageSize?: string;
  };

  type getBotManageTtsLanguageParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getBotManageTtsLanguageVoicesParams = {
    /** 语言 */
    language?: string;
    /** 性别：MALE, FEMALE */
    gender?: string;
  };

  type getBotManageTtsVoicesParams = {
    /** 性别：MALE, FEMALE */
    gender?: string;
  };

  type getContentAppAuthorParams = {
    pageNo?: number;
    pageSize?: number;
    keyword?: string;
    /** pop 会按流行度排序，而all则是按匹配度排序 */
    sort?: string;
    /** BOT或者USER */
    type?: string;
  };

  type getContentAppCategoryParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getContentAppCommentParams = {
    pageNo?: number;
    pageSize?: number;
    postId: number;
  };

  type getContentAppFollowingApplyParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getContentAppGiftParams = {
    pageNo?: number;
    pageSize?: number;
    /** 当前故事id */
    storyId?: string;
    chapterId?: string;
  };

  type getContentAppPopPostsParams = {
    pageNo?: number;
    pageSize?: string;
    keywords?: string;
  };

  type getContentAppPost24idParams = {
    id: string;
  };

  type getContentAppPostPostIdCommentUsersParams = {
    postId: number;
    /** 用户名,可为空 */
    username?: string;
    pageSize: number;
    pageNo: number;
  };

  type getContentAppPostsFeedParams = {
    pageNo: number;
    pageSize?: number;
    topicTag?: string;
    keywords?: string;
  };

  type getContentAppPostsFollowParams = {
    pageNo: number;
    pageSize: string;
  };

  type getContentAppPostsPrivateParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getContentAppShortcutParams = {
    /** Fixed 表示是用户自己固定的，在shorcut的表里;All 除了Fixed的以外，最近有更新的Expert。 */
    scope?: string;
  };

  type getContentAppStoryChatRecordParams = {
    pageNo?: number;
    pageSize?: number;
    /** 故事id */
    storyId: string;
    /** 查询时间 */
    lastTime?: string;
  };

  type getContentAppStoryIdChapterParams = {
    id: string;
  };

  type getContentAppStoryIdParams = {
    /** 故事id */
    id: string;
  };

  type getContentAppStoryParams = {
    pageNo?: number;
    pageSize?: number;
    /** 故事名称 */
    storyName?: string;
    /** NOT_STARTED,PLAYING, FAIL, SUCCESS */
    status?: string;
    /** 是否收藏 */
    collected?: boolean;
    /** 分类id */
    categoryId?: number;
  };

  type getContentAppUserCollectStoryParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getContentManageCategoryParams = {
    pageNo?: number;
    pagerSize?: number;
    name?: string;
  };

  type getContentManageChapterIdParams = {
    id: string;
  };

  type getContentManageChapterParams = {
    storyId?: string;
  };

  type getContentManageGiftIdParams = {
    /** 礼物id */
    id: number;
  };

  type getContentManageGiftParams = {
    pageNo?: number;
    pageSize?: number;
    /** 故事id */
    storyId?: number;
    /** 章节id */
    chapterId?: number;
    /** 故事名称 */
    giftName?: string;
  };

  type getContentManageStoryIdParams = {
    id: string;
  };

  type getContentManageStoryParams = {
    pageNo?: number;
    pageSize?: number;
    /** 故事名称 */
    storyName?: string;
    status?: string;
    minCreatedAt?: string;
    maxCreatedAt?: string;
  };

  type getOrderAppPaymentHistoryParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getOrderAppPaymentResultParams = {
    /** 订单号 */
    orderNo?: string;
  };

  type getOrderAppServicePackagesParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type getOrderManageOrderIdParams = {
    /** 订单id */
    id: number;
  };

  type getOrderManageOrdersParams = {
    pageNo?: number;
    pageSize?: number;
    /** 订单号 */
    orderNo?: string;
    /** 用户名称 */
    username?: string;
    /** 邮箱 */
    email?: string;
    /** 电话 */
    phone?: string;
    /** 订单状态：Cancelled，Unpaid，Success */
    status?: string;
    minCreatedAt?: string;
    maxCreatedAt?: string;
    /** 目前仅支持stripe */
    payMethod?: string;
    minPayTime?: string;
    maxPayTime?: string;
  };

  type getOrderManageServicePackageIdParams = {
    /** 服务包id */
    id: number;
  };

  type getOrderManageServicePackageParams = {
    pageNo?: number;
    pageSize?: number;
    /** 服务报名称 */
    packageName?: string;
    /** 状态：Active,Inactive */
    status?: string;
    /** 是否可见：0否，1是 */
    visiblity?: number;
    /** 查询创建时间大于等于该时间的数据 */
    minCreatedAt?: string;
    /** 查询创建时间小于等于该时间的数据 */
    maxCreatedAt?: string;
  };

  type getUserAppFeedbackIdParams = {
    /** 反馈id */
    id: string;
  };

  type getUserAppFeedbackListParams = {
    pageNo?: number;
    pageSize?: number;
    /** 列表类型：processed,finished */
    listType?: string;
  };

  type getUserAppFollowerParams = {
    pageNo?: number;
    pageSize?: number;
    /** 用户姓名 */
    username?: string;
  };

  type getUserAppFollowingParams = {
    pageNo?: number;
    pageSize?: number;
    /** 用户姓名 */
    username?: string;
  };

  type getUserAppFriendsParams = {
    /** 用户名，非必需 */
    username?: string;
    /**  MUTUAL = "互相关注"     FOLLOWING = "我关注他"     FOLLOWED_BY = "他关注我" */
    followStatus?: string;
  };

  type getUserAppInterestItemsParams = {
    /** 表示兴趣习惯的类型。枚举值，包括：PERSONALITY, HABIT,    COMPETITIVE,    SKILLBASED,    ARTISTIC,    LIFESTYLE,    INTELLIGENCE,    OTHER */
    itemType?: string;
  };

  type getUserAppRecommendationParams = {
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
  };

  type getUserAppTagsParams = {
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
  };

  type getUserAppUserCheckUsernameParams = {
    username?: string;
  };

  type getUserAppUserIdParams = {
    /** 用户id */
    id: string;
  };

  type getUserAppUserImageParams = {
    /** 图片、头像 */
    type: string;
    pageNo: number;
    pageSize: number;
  };

  type getUserManageFeedbackIdParams = {
    /** 反馈id */
    id: string;
  };

  type getUserManageFeedbackListParams = {
    pageNo?: string;
    pageSize?: string;
    /** 标题like查询 */
    title?: string;
    /** select框中选中的值进行查询，（字典中预设的值） */
    titleValue?: string;
    /** 分类 */
    category?: string;
    /** 用户昵称 */
    username?: string;
    /** min提交时间 */
    minSubmissionAt?: string;
    /** max提交时间 */
    maxSubmissionAt?: string;
    /** 设备 */
    device?: string;
    /** 系统版本 */
    systemVersion?: string;
    /** underReview, pending, rejected, completed, withdraw */
    status?: string;
    /** iuessId */
    iuessId?: string;
  };

  type getUserManageFeedbackReportQuantityParams = {
    /** 格式：yyyy-MM-dd */
    minSubmissionAt: string;
    /** 格式：yyyy-MM-dd */
    maxSubmissionAt: string;
    username?: string;
    status?: string;
    /** 字典接口返回的tilte值 */
    titleValue?: string;
  };

  type getUserManageFeedbackStatusStatisticsParams = {
    /** 格式：yyyy-MM-dd */
    minSubmissionAt: string;
    /** 格式：yyyy-MM-dd */
    maxSubmissionAt: string;
    username?: string;
    status?: string;
    title?: string;
  };

  type getUserManageFeedbackTitleStatisticsParams = {
    /** 格式：yyyy-MM-dd */
    minSubmissionAt: string;
    /** 格式：yyyy-MM-dd */
    maxSubmissionAt: string;
    username?: string;
    status?: string;
    title?: string;
  };

  type getUserManageGroupParams = {
    /** 分组名称 */
    groupName?: string;
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
  };

  type getUserManageInterestItemsParams = {
    /** 页码 */
    pageNo?: number;
    /** 每页显示条数 */
    pageSize?: number;
    /** 兴趣类型 */
    interestType?: string;
    /** itemName */
    itemName?: string;
  };

  type getUserManagePushJobDetailParams = {
    /** id */
    id?: string;
  };

  type getUserManagePushJobListParams = {
    pageNo?: string;
    pageSize?: string;
    /** 名称 */
    name?: string;
    /** 任务类型：instant实时推送,scheduledSingle单次定时推送,scheduledRecurring定时循环推送,eventTriggerInactive不活跃用户事件推送 */
    category?: string;
    /** 状态：waiting待执行，pending执行中，executed已执行 */
    status?: string;
    /** 创建时间起始 */
    minCreatedAt?: string;
    /** 创建时间截止 */
    maxCreatedAt?: string;
    sysJob?: number;
  };

  type getUserManagePushListIdParams = {
    /** 推送记录id */
    id: number;
  };

  type getUserManagePushListsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 推送标题 */
    title?: string;
    /** 内容 */
    content?: string;
    operator?: string;
    /** 推送时间段查询 */
    minPushTime?: string;
    /** 推送时间段查询 */
    maxPushTime?: string;
  };

  type getUserManageSubscriptionParams = {
    /** 用户昵称/姓名 */
    username?: string;
    /** 订阅状态：Valid，Expired */
    subStatus?: string;
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
    minSubscriptionTime?: string;
    maxSubscriptionTime?: string;
    email?: string;
    phone?: string;
    groupId?: number;
    /** 剩余时间，单位：天（(90/30/7)） */
    remainingDays?: string;
  };

  type getUserManageTagsParams = {
    pageNo?: number;
    pageSize?: number;
    /** 标签名称 */
    tagName?: string;
  };

  type getUserManageUserIdParams = {
    id: string;
  };

  type getUserManageUserParams = {
    /** 页码 */
    pageNo?: number;
    /** 页容量 */
    pageSize?: number;
    /** 用户昵称 */
    username?: string;
    /** 状态；0.enabled，1.disabled */
    status?: number;
    /** 用户分组id */
    groupId?: number;
    phone?: string;
    email?: string;
    /** 性别：'MALE','HIDE','FEMALE' */
    gender?: string;
    country?: string;
    tags?: string;
    /** 2024-03-01 01:34:30  */
    minCreatedAt?: string;
    /** 2024-03-01 01:34:30  */
    maxCreatedAt?: string;
  };

  type getUserPublicEmailClientCodeParams = {
    /** 邮件中生成的clientCode校验标识 */
    clientCode: string;
  };

  type getUserPublicPwdResetClientCodeParams = {
    /** 用户修改密码的唯一验证标识 */
    clientCode: string;
  };

  type getUserPublicRefreshTokenParams = {
    /** 注册邮件返回的clientCode */
    clientCode?: string;
  };

  type gift = {
    id: number;
    /** 礼物名称 */
    giftName: string;
    /** 每个礼物增加的友好分 */
    friendDegree: number;
    /** 每个礼物增加的情节分 */
    storyDegree: number;
    /** 故事id，可以为空，为空表示全局通用 */
    storyId?: number;
    /** 章节id，可以为空，为空表示故事通用 */
    chapterId?: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    /** 创建的管理员ID */
    creator: number;
    deleted: boolean;
    dataVersion: number;
  };

  type interestItem = {
    /** 'PERSONALITY':人格,'HABIT'：习惯,'COMPETITIVE'：竞技类体育兴趣,'SKILLBASED'：技巧类体育兴趣,'ARTISTIC'：美术类,'LIFESTYLE'：生活方式类兴趣,'INTELLIGENCE'：智力类兴趣 */
    interestType: string;
    itemName: string;
    /** 是否有多个选项 */
    multiple: boolean;
    /** 向量值 */
    valueArray: { optName: string; value: string }[];
    /** 备注 */
    remark: string;
    /** 默认填id号，按此升序排列。 */
    orderNum: number;
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
  };

  type LineChartCoordinates = {
    /** 数值 */
    numYaxis: string;
    /** 日期 */
    dateXaxis: string;
  };

  type order = {
    /** id 主键id */
    id: number;
    /** 订单号 */
    orderNo: string;
    /** app用户id */
    userId: number;
    /** 消费者姓名 */
    username: string;
    /** 电话 */
    phone: string;
    /** 邮箱 */
    email: string;
    /** 消费金额（单位分） */
    amount: number;
    /** 服务包id */
    packageId: number;
    /** 服务包名称 */
    packageName: string;
    /** 订单状态：Cancelled，Unpaid，Success */
    status: string;
    /** 支付回调时间 */
    callbackAt?: string;
    /** 取消时间 */
    cancelAt?: string;
    /** 订阅过期时间 */
    expiredAt?: string;
    /** 国家 */
    country: string;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
  };

  type PageData = {
    /** 数据总条数 数据总条数 */
    total: number;
    /** 当前页码 当前页码 */
    pageNum: number;
    /** 页容量 页容量 */
    pageSize: number;
    /** 页数 页数 */
    pages: number;
    /** 返回集合数据 返回集合数据 */
    list: string[];
  };

  type PageResult = {
    /** 响应码 */
    code: number;
    /** 响应说明 */
    msg: string;
    /** 响应数据 */
    data: {
      total: number;
      pageNum: number;
      pageSize: number;
      pages: number;
      list: Record<string, any>[];
    };
  };

  type patchAdminUserIdParams = {
    /** 用户id */
    id: number;
  };

  type patchUserManagePushJobIdStatusParams = {
    /** id */
    id: string;
    /** 状态：0停用，1启用 */
    status: number;
  };

  type Post = {
    /** 标题 */
    title: string;
    /** 摘要内容 thread的第一个节点内容 */
    summary: string;
    /** 内容 一个帖子的内容，会按照thread的格式来存储，类似一个时间线 */
    thread: { title: string; content: string; images: string[] }[];
    id: number;
    /** 封面 取thread里的第一张图片做封面，字段冗余 */
    cover: string;
    /** 主题标签 在文章中的 #tags 这样的标签就对应一个topicTags，从文章中抽取出来，用逗号隔开，放到这里 */
    topicTags: string;
    createdAt: string;
    updatedAt?: string;
    /** 作者id */
    author: number;
    /** BOT 还是 USER 枚举 */
    type: string;
    /** 点赞数 点赞数 */
    likes: number;
    /** 回复数 回复数 */
    reposts: number;
    /** 访问数 访问数 */
    visits: number;
    /** 关键字 多个关键字以逗号隔开 */
    keywords: string;
    /** 系统生成的推荐标签，多个推荐标签逗号隔开 */
    recommendTags: string;
  };

  type postUserAppFirebaseBindTokenParams = {
    /** 用户设备唯一标识 */
    token: string;
  };

  type PostVO = {
    /** 标题 */
    title?: string;
    /** 摘要内容 thread的第一个有内容的节点的内容 */
    summary?: string;
    /** 内容 一个帖子的内容，会按照thread的格式来存储，类似一个时间线 */
    thread: { title: string; content: string; images: string[] }[];
    /** 封面 取thread里的第一张图片做封面，字段冗余 */
    cover?: string;
    /** 主题标签 在文章中的 #tags 这样的标签就对应一个topicTags，从文章中抽取出来，用逗号隔开，放到这里 */
    topicTags?: string;
    /** id 可以为空，为空的时候为新增 */
    id?: number;
  };

  type putBotAppBotIdParams = {
    id: string;
  };

  type putBotAppBotIdReleaseParams = {
    /** 机器人id */
    id: string;
  };

  type putBotManageBotIdParams = {
    id: string;
  };

  type putBotManageBotIdUnrecommendParams = {
    /** 机器人id */
    id: number;
  };

  type putUserAppFeedbackIdReadParams = {
    /** 反馈id */
    id: string;
  };

  type RankingVO = {
    /** 国家 */
    country: string;
    /** 统计出的数据 */
    data: number;
  };

  type resource = {
    /** 上级菜单ID */
    parentId: number;
    /** 菜单名称 */
    name: string;
    /** 资源类型 */
    type: string;
    /** 图标 */
    icon?: string;
    /** 前端功能页面路由 */
    route: string;
    /** 功能点请求路径，多个路径使用逗号分隔 */
    paths?: string;
    /** 排序号 */
    sortNo: number;
    /** 是否默认权限，默认权限无需分配所有账号默认拥有 */
    defaultResource: boolean;
    /** id 主键id */
    id: number;
    /** 创建时间 */
    createdAt: string;
    /** 创建人id */
    creator?: number;
    /** 更新时间 */
    updatedAt: string;
    /** 更新人 */
    updater?: number;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
  };

  type SphereBotDto = {
    id: number;
    /** 列表封面 */
    listCover: string;
    /** 头像 */
    avatar: string;
    /** 名称 */
    name: string;
    /** 机器人类型 TALES、EXPERT、GAME */
    type: string;
    /** 描述 对应不同类型机器人的描述 */
    description: string;
    botId: number;
    collectionId: number;
  };

  type SphereDto = {
    /** id 主键id */
    id: number;
    /** 集合类型 TALES、EXPERT、GAME */
    type: string;
    /** 图标 */
    avatar: string;
    /** 集合名词 */
    collectionName: string;
    /** 分类id 如果关联了对应的分类，则跳转到相应的分类上去 */
    category?: number;
  };

  type SphereVO = {
    /** id 主键id */
    id: number;
    /** 集合类型 TALES、EXPERT、GAME */
    type: string;
    /** 图标 */
    avatar: string;
    /** 名称 */
    collectionName: string;
    /** 分类 如果设置了分类，则此集合将关联到分类上去 */
    category: number;
  };

  type story = {
    /** id 主键id */
    id: number;
    /** 故事名称 */
    storyName: string;
    /** 故事分值，赢得故事后获得此分值 */
    rewardsScore: number;
    /** 开启游戏的分值，只有获得超过这个分值才能玩这个游戏 */
    cutoffScore: number;
    /** 故事角色性别 */
    gender: string;
    /** 默认形象 */
    defaultImage: string;
    /** 故事简介 */
    introduction: string;
    /** 封面（此封面用于没有开始游戏时） */
    cover: string;
    /** 用于列表（此封面用于没有开始游戏时） */
    listCover: string;
    /** 故事失败的文案 */
    failureCopywriting: string;
    /** 故事失败的图片 */
    failurePicture: string;
    /** 状态：active, inactive , 表示故事上线或下线 */
    status: string;
    /** 标签 标签，多个使用逗号分隔，将分类作为标签放入其中 */
    tags: string;
    /** 故事任务信息 */
    taskIntroduction: string;
    /** 创建时间 */
    createdAt: string;
    /** 更新时间 */
    updatedAt: string;
    /** 数据版本，每更新一次+1 */
    dataVersion: number;
    /** 是否删除：0否，1是 */
    deleted: boolean;
    /** 创建故事的管理员id */
    creator: number;
    /** 分类id 一个故事有可能属于多个分类 */
    categoryId: number[];
  };

  type StoryChapter = {
    /** 主键id */
    id: number;
    storyId: number;
    /** 章节名称，非必填 */
    chapterName: string;
    /** 章节顺序，从1开始。 */
    chapterOrder: number;
    /** 章节封面 */
    cover: string;
    /** 章节封面Dark */
    coverDark: string;
    /** 章节封面（用于列表） */
    listCover: string;
    /** 章节封面（用于列表）dark模式 */
    listCoverDark: string;
    /** 此阶段的形象 */
    image: string;
    /** 描述个性的Prompt */
    personality: string;
    /** 章节情节说明 */
    introduction: string;
    /** 通关文案 */
    passedCopywriting: string;
    /** 通关图片 */
    passedPicture: string;
    /** 背景介绍提示词 */
    backgroundPrompt: string;
    /** 回答语气限定提示词 */
    tonePrompt: string;
    /** 字数限制提示词：short简短回答（20字以内） normal普通篇幅（20-50）detail详细回答（50-100） */
    wordNumberPrompt: string;
    /** 本章目标分 */
    chapterScore: number;
    /** 章节聊天分钟数 */
    chatMinutes: number;
    /** 章节任务信息 */
    taskIntroduction: string;
    /** 背景图片 */
    backgroundPicture: string;
    /** 背景图片dark模式 */
    backgroundPictureDark: string;
    chapterRule: {
      key?: string;
      rule: {
        question: string;
        recommendAnswer: string;
        weight: number;
        friendDegree: number;
        storyDegree: number;
      };
    }[];
    /** 创建时间 */
    createdAt: string;
    /** 修改时间 */
    updatedAt: string;
    /** 数据版本，每更新一次+1 */
    dataVersion: string;
    /** 删除标志 */
    deleted: number;
    /** 创建的管理员id */
    creator: number;
  };

  type StoryListDto = {
    /** id 主键id */
    id: number;
    /** 故事名称 */
    storyName: string;
    /** 故事分值，赢得故事后获得此分值 */
    rewardsScore: number;
    /** 是否被锁定了 */
    locked: boolean;
    /** 故事角色性别 */
    gender: string;
    /** 当前角色形象图片的url */
    image: string;
    /** 故事简介 */
    introduction: string;
    /** 列表封面 */
    listCover: string;
    /** 列表显示的封面dark模式 */
    listCoverDark: string;
    /** 当前章节进度 0-1 之间的一个小数 */
    storyProcess: number;
    /** NOT_START,PLAYING, FAIL, SUCCESS */
    status: string;
    collected: boolean;
  };
}
