BUILDINGS = [
	{
		keyCode: 49,
		name: 'Splitter',
		size: { x: 40, y: 40 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: 0, y: 20, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: -20, y: 0, orientation: ORIENTATION.WEST },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -20, orientation: ORIENTATION.NORTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: 20, y: 0, orientation: ORIENTATION.EAST },
		],
	},
	{
		keyCode: 50,
		name: 'Merger',
		size: { x: 40, y: 40 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: -20, y: 0, orientation: ORIENTATION.WEST },
			{ type: CONNECTION_TYPES.INPUT, x: 0, y: 20, orientation: ORIENTATION.NORTH },
			{ type: CONNECTION_TYPES.INPUT, x: 20, y: 0, orientation: ORIENTATION.EAST },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -20, orientation: ORIENTATION.SOUTH },
		],
	},
	{
		keyCode: 51,
		name: 'Miner',
		size: { x: 60, y: 140 },
		connections: [
			{
				type: CONNECTION_TYPES.OUTPUT,
				type: CONNECTION_TYPES.OUTPUT,
				x: 0,
				y: -70,
				orientation: ORIENTATION.NORTH,
			},
		],
	},
	{
		keyCode: 52,
		name: 'Smelter',
		size: { x: 60, y: 90 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: 0, y: 45, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -45, orientation: ORIENTATION.NORTH },
		],
	},
	{
		keyCode: 53,
		name: 'Constructor',
		size: { x: 80, y: 100 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: 0, y: 50, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -50, orientation: ORIENTATION.NORTH },
		],
	},
	{
		keyCode: 54,
		name: 'Assembler',
		size: { x: 100, y: 140 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: -20, y: 70, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.INPUT, x: 20, y: 70, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -70, orientation: ORIENTATION.NORTH },
		],
	},
	{
		keyCode: 55,
		name: 'Manufacturer',
		size: { x: 180, y: 200 },
		connections: [
			{ type: CONNECTION_TYPES.INPUT, x: -60, y: 100, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.INPUT, x: -20, y: 100, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.INPUT, x: 20, y: 100, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.INPUT, x: 60, y: 100, orientation: ORIENTATION.SOUTH },
			{ type: CONNECTION_TYPES.OUTPUT, x: 0, y: -100, orientation: ORIENTATION.NORTH },
		],
	},
]
