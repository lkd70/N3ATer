import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    accounts(cursor: String, limit: Int): AccountConnection!
    account(id: ID!): Account!
  }

  extend type Mutation {
    deleteAccount(id: ID!): Boolean!
    updateAccount(playerBeanObject: String!): Account!
    updateAccountWithKey(private_key: String!, playerBeanObject: String!): Account!
  }

  type AccountConnection {
    edges: [Account!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type PlayerInfo {
    population: Int
    id: Int
    faceUrl: String
    prestige: Int
    accountName: String
    office: String
    alliance: String
    levelId: Int
    lastLoginTime: String
    sex: Int
    honor: Int
    createrTime: String
    flag: String
    castleCount: Int
    userName: String
    userId: Int
    allianceLevel: String
    titleId: Int
    medal: Int
    bdenyotherplayer: Int
    ranking: Int
  }

  type TradesArray {
    price: Float
    id: Int
    resType: Int
    amount: Int
    tradeTypeName: String
    resourceName: String
    dealedTotal: Int
    dealedAmount: Int
    tradeType: Int
  }

  type TransingTradesArray {
    price: Float
    endTime: Int
    id: Int
    total: Int
    resType: Int
    amount: Int
    resourceName: String
  }

  type Fortification {
    rollingLogs: Int
    rockfall: Int
    trap: Int
    arrowTower: Int
    abatis: Int
    typOrder: [String]
  }

  type BuildingsArray {
    status: Int
    positionId: Int
    level: Int
    typeId: Int
    name: String
    startTime: Int
    endTime: Int
  }

  type FieldsArray {
    type: Int
    id: Int
    coords: String
    name: String
    level: Int
    statu: Int
    armysArray: [String]
  }

  type Wood {
    max: Int
    amount: Int
    workPeople: Int
    increaseRate: Int
    storeRercent: Int
  }

  type Iron {
    max: Int
    amount: Float
    workPeople: Int
    increaseRate: Int
    storeRercent: Int
  }

  type Stone {
    max: Int
    amount: Float
    workPeople: Int
    increaseRate: Int
    storeRercent: Int
  }

  type Food {
    max: Int
    amount: Float
    workPeople: Int
    increaseRate: Int
    storeRercent: Int
  }

  type Resource {
    gold: Float
    consumeRate: Int
    taxIncome: Int
    support: Int
    maxPopulation: Int
    complaint: Int
    curPopulation: Int
    texRate: Int
    maxWorkers: Int
    buildPeople: Int
    troopCostFood: Int
    workPeople: Int
    herosSalary: Int
    populationDirection: Int
    wood: Wood
    iron: Iron
    stone: Stone
    food: Food
  }

  type Troop {
    scouter: Int
    foodConsumeRate: Int
    peasants: Int
    pikemen: Int
    swordsmen: Int
    archer: Int
    heavyCavalry: Int
    batteringRam: Int
    lightCavalry: Int
    ballista: Int
    carriage: Int
    catapult: Int
    militia: Int
    typOrder: [String]
  }

  type HerosArray {
    politics: Int
    managementAdded: Int
    stratagem: Int
    id: Int
    nameLowerCase: String
    logoUrl: String
    base: Int
    heroToString: String
    score: Int
    isMarching: Boolean
    isReturning: Boolean
    power: Int
    remainPoint: Int
    stratagemBuffAdded: Int
    type: Int
    isIdle: Boolean
    name: String
    isCaptured: Boolean
    itemId: String
    isAvailable: Boolean
    managementWithBuffAdded: Int
    isAttackHero: Boolean
    powerBuffAdded: Int
    powerWithBuffAdded: Int
    management: Int
    scoreAI: Int
    salary: Int
    intel: Int
    attack: Int
    isBusy: Boolean
    itemAmount: Int
    isPoliticsHero: Boolean
    loyalty: Int
    isIntelHero: Boolean
    level: Int
    expLevels: Int
    stratagemWithBuffAdded: Int
    heroWithBaseToString: String
    isLoyal: Boolean
    isMayor: Boolean
    powerAdded: Int
    stratagemAdded: Int
    isDefending: Boolean
    experience: Int
    managementBuffAdded: Int
    status: Int
    upgradeExp: Int
  }

  type CastlesArray {
    status: Int
    id: Int
    allowAlliance: Boolean
    hasEnemy: Boolean
    usePACIFY_SUCCOUR_OR_PACIFY_PRAY: Int
    name: String
    oid: Int
    fieldId: Int
    logUrl: String
    goOutForBattle: Boolean
    tradesArray: [TradesArray]
    transingTradesArray: [TransingTradesArray]
    fortification: Fortification
    buildingsArray: [BuildingsArray]
    fieldsArray: [FieldsArray]
    resource: Resource
    troop: Troop
    buildingQueuesArray: [String]
    herosArray: [HerosArray]
  }

  type SaleItemBeansArray {
    saleType: Int
    items: String
  }

  type SelfArmysArray {
    startCoords: String
    restTime: Int
    armyId: Int
    targetPosName: String
    direction: Int
    heroLevel: Int
    missionType: Int
    hero: String
    targetFieldId: Int
    alliance: String
    reachTime: Int
    targetCoords: String
    startFieldId: Int
    king: String
    startPosName: String
    startTime: Int
    resource: Resource
    troop: Troop
  }

  type ItemsArray {
    maxCount: Int
    id: String
    name: String
    minCount: Int
    count: Int
  }

  type SaleTypeBeansArray {
    typeName: String
    items: String
  }

  type Account {
    finishedQuestCount: Int
    gamblingItemIndex: Int
    furloughDay: Int
    gameSpeed: Int
    tutorialStepId: Int
    mapSizeX: Int
    mapSizeY: Int
    furlough: Boolean
    newReportCount: Int
    newMailCount: Int
    changedFace: Boolean
    newReportCount_army: Int
    autoFurlough: Boolean
    currentTime: Int
    newReportCount_trade: Int
    currentDateTime: String
    isSetSecurityCode: Boolean
    redCount: Int
    newReportCount_other: Int
    newMaileCount_inbox: Int
    freshMan: Boolean
    newMaileCount_system: Int
    playerInfo: PlayerInfo
    packageBeanArray: [String]
    castlesArray: [CastlesArray]
    enemyArmysArray: [String]
    friendBeansArray: [String]
    friendArmysArray: [String]
    blockBeansArray: [String]
    saleItemBeansArray: [SaleItemBeansArray]
    selfArmysArray: [SelfArmysArray]
    itemsArray: [ItemsArray]
    castleSignBeanArray: [String]
    saleTypeBeansArray: [SaleTypeBeansArray]
    id: ID!
    user: User!
    createdAt: Date!
    uid: String
  }

  extend type Subscription {
    accountCreated: AccountCreated!
  }

  type AccountCreated {
    account: ID!
  }
`;
