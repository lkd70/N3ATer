import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
	{
		saleTypeBeansArray: {
			type: Array,
			items: {
				type: Object,
				properties: {
					typeName: {
						type: String
					},
					items: {
						type: String
					}
				},
				required: [
					'typeName',
					'items'
				]
			}
		},
		finishedQuestCount: {
			type: Number
		},
		gamblingItemIndex: {
			type: Number
		},
		furloughDay: {
			type: Number
		},
		castleSignBeanArray: {
			type: Array,
			items: {}
		},
		gameSpeed: {
			type: Number
		},
		itemsArray: {
			type: Array,
			items: {
				type: Object,
				properties: {
					maxCount: {
						type: Number
					},
					id: {
						type: String
					},
					name: {
						type: String
					},
					minCount: {
						type: Number
					},
					count: {
						type: Number
					}
				},
				required: [
					'maxCount',
					'id',
					'name',
					'minCount',
					'count'
				]
			}
		},
		tutorialStepId: {
			type: Number
		},
		mapSizeX: {
			type: Number
		},
		selfArmysArray: {
			type: Array,
			items: {
				type: Object,
				properties: {
					startCoords: {
						type: String
					},
					restTime: {
						type: Number
					},
					armyId: {
						type: Number
					},
					targetPosName: {
						type: String
					},
					direction: {
						type: Number
					},
					heroLevel: {
						type: Number
					},
					missionType: {
						type: Number
					},
					hero: {
						type: [
							String,
							String
						]
					},
					troop: {
						type: Object,
						properties: {
							scouter: {
								type: String
							},
							pikemen: {
								type: String
							},
							swordsmen: {
								type: String
							},
							archer: {
								type: String
							},
							heavyCavalry: {
								type: String
							},
							batteringRam: {
								type: String
							},
							lightCavalry: {
								type: String
							},
							ballista: {
								type: String
							},
							carriage: {
								type: String
							},
							catapult: {
								type: String
							},
							militia: {
								type: String
							},
							peasants: {
								type: String
							}
						}
					},
					targetFieldId: {
						type: Number
					},
					alliance: {
						type: String
					},
					resource: {
						type: Object,
						properties: {
							gold: {
								type: Number
							},
							stone: {
								type: Number
							},
							iron: {
								type: Number
							},
							resOrder: {
								type: Array,
								items: {}
							},
							total: {
								type: Number
							},
							wood: {
								type: Number
							},
							food: {
								type: Number
							}
						}
					},
					reachTime: {
						type: Number
					},
					targetCoords: {
						type: String
					},
					startFieldId: {
						type: Number
					},
					king: {
						type: String
					},
					startPosName: {
						type: String
					},
					startTime: {
						type: Number
					}
				},
				required: [
					'startCoords',
					'restTime',
					'armyId',
					'targetPosName',
					'direction',
					'heroLevel',
					'missionType',
					'hero',
					'troop',
					'targetFieldId',
					'alliance',
					'resource',
					'reachTime',
					'targetCoords',
					'startFieldId',
					'king',
					'startPosName',
					'startTime'
				]
			}
		},
		mapSizeY: {
			type: Number
		},
		furlough: {
			type: Boolean
		},
		saleItemBeansArray: {
			type: Array,
			items: {
				type: Object,
				properties: {
					saleType: {
						type: Number
					},
					items: {
						type: String
					}
				},
				required: [
					'saleType',
					'items'
				]
			}
		},
		newReportCount: {
			type: Number
		},
		blockBeansArray: {
			type: Array,
			items: {}
		},
		friendArmysArray: {
			type: Array,
			items: {}
		},
		friendBeansArray: {
			type: Array,
			items: {}
		},
		enemyArmysArray: {
			type: Array,
			items: {}
		},
		newMailCount: {
			type: Number
		},
		changedFace: {
			type: Boolean
		},
		newReportCount_army: {
			type: Number
		},
		autoFurlough: {
			type: Boolean
		},
		currentTime: {
			type: Number
		},
		castlesArray: {
			type: Array,
			items: {
				type: Object,
				properties: {
					status: {
						type: Number
					},
					herosArray: {
						type: Array,
						items: {
							type: Object,
							properties: {
								politics: {
									type: Number
								},
								managementAdded: {
									type: Number
								},
								stratagem: {
									type: Number
								},
								id: {
									type: Number
								},
								nameLowerCase: {
									type: String
								},
								logoUrl: {
									type: String
								},
								base: {
									type: Number
								},
								heroToString: {
									type: String
								},
								score: {
									type: Number
								},
								isMarching: {
									type: Boolean
								},
								isReturning: {
									type: Boolean
								},
								power: {
									type: Number
								},
								remainPoint: {
									type: Number
								},
								stratagemBuffAdded: {
									type: Number
								},
								type: {
									type: Number
								},
								isIdle: {
									type: Boolean
								},
								name: {
									type: String
								},
								isCaptured: {
									type: Boolean
								},
								itemId: {
									type: [
										String,
										String
									]
								},
								isAvailable: {
									type: Boolean
								},
								managementWithBuffAdded: {
									type: Number
								},
								isAttackHero: {
									type: Boolean
								},
								powerBuffAdded: {
									type: Number
								},
								powerWithBuffAdded: {
									type: Number
								},
								management: {
									type: Number
								},
								scoreAI: {
									type: Number
								},
								salary: {
									type: Number
								},
								intel: {
									type: Number
								},
								attack: {
									type: Number
								},
								isBusy: {
									type: Boolean
								},
								itemAmount: {
									type: Number
								},
								isPoliticsHero: {
									type: Boolean
								},
								loyalty: {
									type: Number
								},
								isIntelHero: {
									type: Boolean
								},
								level: {
									type: Number
								},
								expLevels: {
									type: Number
								},
								stratagemWithBuffAdded: {
									type: Number
								},
								heroWithBaseToString: {
									type: String
								},
								isLoyal: {
									type: Boolean
								},
								isMayor: {
									type: Boolean
								},
								powerAdded: {
									type: Number
								},
								stratagemAdded: {
									type: Number
								},
								isDefending: {
									type: Boolean
								},
								buffs: {
									type: Object,
									properties: {}
								},
								experience: {
									type: Number
								},
								managementBuffAdded: {
									type: Number
								},
								status: {
									type: Number
								},
								upgradeExp: {
									type: Number
								}
							},
							required: [
								'politics',
								'managementAdded',
								'stratagem',
								'id',
								'nameLowerCase',
								'logoUrl',
								'base',
								'heroToString',
								'score',
								'isMarching',
								'isReturning',
								'power',
								'remainPoint',
								'stratagemBuffAdded',
								'type',
								'isIdle',
								'name',
								'isCaptured',
								'itemId',
								'isAvailable',
								'managementWithBuffAdded',
								'isAttackHero',
								'powerBuffAdded',
								'powerWithBuffAdded',
								'management',
								'scoreAI',
								'salary',
								'intel',
								'attack',
								'isBusy',
								'itemAmount',
								'isPoliticsHero',
								'loyalty',
								'isIntelHero',
								'level',
								'expLevels',
								'stratagemWithBuffAdded',
								'heroWithBaseToString',
								'isLoyal',
								'isMayor',
								'powerAdded',
								'stratagemAdded',
								'isDefending',
								'buffs',
								'experience',
								'managementBuffAdded',
								'status',
								'upgradeExp'
							]
						}
					},
					id: {
						type: Number
					},
					buildingQueuesArray: {
						type: Array,
						items: {}
					},
					troop: {
						type: Object,
						properties: {
							scouter: {
								type: Number
							},
							foodConsumeRate: {
								type: Number
							},
							peasants: {
								type: Number
							},
							pikemen: {
								type: Number
							},
							swordsmen: {
								type: Number
							},
							archer: {
								type: Number
							},
							heavyCavalry: {
								type: Number
							},
							batteringRam: {
								type: Number
							},
							lightCavalry: {
								type: Number
							},
							ballista: {
								type: Number
							},
							carriage: {
								type: Number
							},
							catapult: {
								type: Number
							},
							typOrder: {
								type: Array,
								items: {}
							},
							militia: {
								type: Number
							}
						}
					},
					resource: {
						type: Object,
						properties: {
							food: {
								type: Object,
								properties: {
									max: {
										type: Number
									},
									amount: {
										type: Number
									},
									workPeople: {
										type: Number
									},
									increaseRate: {
										type: Number
									},
									storeRercent: {
										type: Number
									}
								}
							},
							gold: {
								type: Number
							},
							consumeRate: {
								type: Number
							},
							stone: {
								type: Object,
								properties: {
									max: {
										type: Number
									},
									amount: {
										type: Number
									},
									workPeople: {
										type: Number
									},
									increaseRate: {
										type: Number
									},
									storeRercent: {
										type: Number
									}
								}
							},
							taxIncome: {
								type: Number
							},
							iron: {
								type: Object,
								properties: {
									max: {
										type: Number
									},
									amount: {
										type: Number
									},
									workPeople: {
										type: Number
									},
									increaseRate: {
										type: Number
									},
									storeRercent: {
										type: Number
									}
								}
							},
							support: {
								type: Number
							},
							maxPopulation: {
								type: Number
							},
							complaint: {
								type: Number
							},
							curPopulation: {
								type: Number
							},
							texRate: {
								type: Number
							},
							maxWorkers: {
								type: Number
							},
							buildPeople: {
								type: Number
							},
							troopCostFood: {
								type: Number
							},
							workPeople: {
								type: Number
							},
							herosSalary: {
								type: Number
							},
							wood: {
								type: Object,
								properties: {
									max: {
										type: Number
									},
									amount: {
										type: Number
									},
									workPeople: {
										type: Number
									},
									increaseRate: {
										type: Number
									},
									storeRercent: {
										type: Number
									}
								}
							},
							populationDirection: {
								type: Number
							}
						}
					},
					allowAlliance: {
						type: Boolean
					},
					fieldsArray: {
						type: Array,
						items: {
							type: Object,
							properties: {
								type: {
									type: Number
								},
								id: {
									type: Number
								},
								coords: {
									type: String
								},
								name: {
									type: String
								},
								level: {
									type: Number
								},
								armysArray: {
									type: Array,
									items: {}
								},
								statu: {
									type: Number
								}
							},
							required: [
								'type',
								'id',
								'coords',
								'name',
								'level',
								'armysArray',
								'statu'
							]
						}
					},
					hasEnemy: {
						type: Boolean
					},
					buildingsArray: {
						type: Array,
						items: {
							type: Object,
							properties: {
								status: {
									type: Number
								},
								positionId: {
									type: Number
								},
								level: {
									type: Number
								},
								typeId: {
									type: Number
								},
								name: {
									type: String
								},
								startTime: {
									type: Number
								},
								endTime: {
									type: Number
								}
							},
							required: [
								'status',
								'positionId',
								'level',
								'typeId',
								'name',
								'startTime',
								'endTime'
							]
						}
					},
					usePACIFY_SUCCOUR_OR_PACIFY_PRAY: {
						type: Number
					},
					name: {
						type: String
					},
					oid: {
						type: Number
					},
					fortification: {
						type: Object,
						properties: {
							rollingLogs: {
								type: Number
							},
							rockfall: {
								type: Number
							},
							trap: {
								type: Number
							},
							arrowTower: {
								type: Number
							},
							abatis: {
								type: Number
							},
							typOrder: {
								type: Array,
								items: {}
							}
						}
					},
					transingTradesArray: {
						type: Array,
						items: {
							type: Object,
							properties: {
								price: {
									type: Number
								},
								endTime: {
									type: Number
								},
								id: {
									type: Number
								},
								total: {
									type: Number
								},
								resType: {
									type: Number
								},
								amount: {
									type: Number
								},
								resourceName: {
									type: String
								}
							},
							required: [
								'price',
								'endTime',
								'id',
								'total',
								'resType',
								'amount',
								'resourceName'
							]
						}
					},
					buffs: {
						type: Object,
						properties: {}
					},
					fieldId: {
						type: Number
					},
					logUrl: {
						type: String
					},
					goOutForBattle: {
						type: Boolean
					},
					tradesArray: {
						type: Array,
						items: {
							type: Object,
							properties: {
								price: {
									type: Number
								},
								id: {
									type: Number
								},
								resType: {
									type: Number
								},
								amount: {
									type: Number
								},
								tradeTypeName: {
									type: String
								},
								resourceName: {
									type: String
								},
								dealedTotal: {
									type: Number
								},
								dealedAmount: {
									type: Number
								},
								tradeType: {
									type: Number
								}
							},
							required: [
								'price',
								'id',
								'resType',
								'amount',
								'tradeTypeName',
								'resourceName',
								'dealedTotal',
								'dealedAmount',
								'tradeType'
							]
						}
					}
				},
				required: [
					'status',
					'herosArray',
					'id',
					'buildingQueuesArray',
					'troop',
					'resource',
					'allowAlliance',
					'fieldsArray',
					'hasEnemy',
					'buildingsArray',
					'usePACIFY_SUCCOUR_OR_PACIFY_PRAY',
					'name',
					'oid',
					'fortification',
					'transingTradesArray',
					'buffs',
					'fieldId',
					'logUrl',
					'goOutForBattle',
					'tradesArray'
				]
			}
		},
		packageBeanArray: {
			type: Array,
			items: {}
		},
		playerInfo: {
			type: Object,
			properties: {
				population: {
					type: Number
				},
				id: {
					type: Number
				},
				faceUrl: {
					type: String
				},
				prestige: {
					type: Number
				},
				accountName: {
					type: String
				},
				office: {
					type: String
				},
				alliance: {
					type: String
				},
				levelId: {
					type: Number
				},
				lastLoginTime: {
					type: Number
				},
				sex: {
					type: Number
				},
				honor: {
					type: Number
				},
				createrTime: {
					type: Number
				},
				flag: {
					type: String
				},
				castleCount: {
					type: Number
				},
				userName: {
					type: String
				},
				userId: {
					type: Number
				},
				allianceLevel: {
					type: String
				},
				titleId: {
					type: Number
				},
				medal: {
					type: Number
				},
				bdenyotherplayer: {
					type: Number
				},
				ranking: {
					type: Number
				}
			}
		},
		newReportCount_trade: {
			type: Number
		},
		currentDateTime: {
			type: String
		},
		isSetSecurityCode: {
			type: Boolean
		},
		buffs: {
			type: Object,
			properties: {}
		},
		redCount: {
			type: Number
		},
		newReportCount_other: {
			type: Number
		},
		newMaileCount_inbox: {
			type: Number
		},
		freshMan: {
			type: Boolean
		},
		newMaileCount_system: {
			type: Number
		},
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		uid: {
			type: String,
			required: true,
			dropDups: true
		},
	},
	{
		timestamps: true,
	},
);

const Account = mongoose.model('Account', accountSchema);

export default Account;
