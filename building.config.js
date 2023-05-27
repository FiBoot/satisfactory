BUILDINGS = [
    {
        keyCode: 49,
        name: 'Splitter',
        size: { x: 40, y: 40 },
        inputs: [
            { x: 0, y: 20, o: ORIENTATION.SOUTH }
        ],
        outputs: [
            { x: -20, y: 0, o: ORIENTATION.WEST },
            { x: 0, y: -20, o: ORIENTATION.NORTH },
            { x: 20, y: 0, o: ORIENTATION.EAST }
        ]
    },
    {
        keyCode: 50,
        name: 'Merger',
        size: { x: 40, y: 40 },
        inputs: [
            { x: -20, y: 0, o: ORIENTATION.WEST },
            { x: 0, y: 20, o: ORIENTATION.NORTH },
            { x: 20, y: 0, o: ORIENTATION.EAST },
        ],
        outputs: [
            { x: 0, y: -20, o: ORIENTATION.SOUTH },
        ]
    },
    {
        keyCode: 51,
        name: 'Miner',
        size: { x: 60, y: 140 },
        outputs: [
            { x: 0, y: -70, o: ORIENTATION.NORTH }
        ]
    },
    {
        keyCode: 52,
        name: 'Smelter',
        size: { x: 60, y: 90 },
        inputs: [
            { x: 0, y: 45, o: ORIENTATION.SOUTH }
        ],
        outputs: [
            { x: 0, y: -45, o: ORIENTATION.NORTH }
        ]
    },
    {
        keyCode: 53,
        name: 'Constructor',
        size: { x: 80, y: 100 },
        inputs: [
            { x: 0, y: 50, o: ORIENTATION.SOUTH },
        ],
        outputs: [
            { x: 0, y: -50, o: ORIENTATION.NORTH },
        ]
    },
    {
        keyCode: 54,
        name: 'Assembler',
        size: { x: 100, y: 140 },
        inputs: [
            { x: -20, y: 70, o: ORIENTATION.SOUTH },
            { x: 20, y: 70, o: ORIENTATION.SOUTH },
        ],
        outputs: [
            { x: 0, y: -70, o: ORIENTATION.NORTH },
        ]
    },
    {
        keyCode: 55,
        name: 'Manufacturer',
        size: { x: 180, y: 200},
        inputs: [
            { x: -60, y: 100, o: ORIENTATION.SOUTH },
            { x: -20, y: 100, o: ORIENTATION.SOUTH },
            { x: 20, y: 100 , o: ORIENTATION.SOUTH},
            { x: 60, y: 100 , o: ORIENTATION.SOUTH},
        ],
        outputs: [
            { x: 0, y: -100 , o: ORIENTATION.NORTH},
        ]
    },
]