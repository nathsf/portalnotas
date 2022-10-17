var SampleJSONData = [
    {
        id: 0,
        title: 'Horse'
    }, {
        id: 1,
        title: 'Birds',
		isSelectable: false,
        subs: [
            {
                id: 10,
                title: 'Pigeon',
				isSelectable: false
            }, {
                id: 11,
                title: 'Parrot'
            }, {
                id: 12,
                title: 'Owl'
            }, {
                id: 13,
                title: 'Falcon'
            }
        ]
    }, {
        id: 2,
        title: 'Rabbit'
    }, {
        id: 3,
        title: 'Fox'
    }, {
        id: 5,
        title: 'Cats',
        subs: [
            {
                id: 50,
                title: 'Kitty'
            }, {
                id: 51,
                title: 'Bigs',
                subs: [
                    {
                        id: 510,
                        title: 'Cheetah'
                    }, {
                        id: 511,
                        title: 'Jaguar'
                    }, {
                        id: 512,
                        title: 'Leopard'
                    }
                ]
            }
        ]
    }, {
        id: 6,
        title: 'Fish'
    }
];
var SampleJSONData2 = [
    {
        id: 1,
        title: 'Four Wheels',
		subs: [
			{
				id: 10,
				title: 'Car'
			}, {
				id: 11,
				title: 'Truck'
			}, {
				id: 12,
				title: 'Transporter'
			}, {
				id: 13,
				title: 'Dozer',
                subs: [
                    {
                        id: 510,
                        title: 'Cheetah'
                    }, {
                        id: 511,
                        title: 'Jaguar'
                    }, {
                        id: 512,
                        title: 'Leopard'
                    }
                ]
			}
		]
    }, {
        id: 2,
        title: 'Two Wheels',
        subs: [
            {
                id: 20,
                title: 'Cycle'
            }, {
                id: 21,
                title: 'Motorbike'
            }, {
                id: 22,
                title: 'Scooter'
            }
        ]
    }, {
        id: 2,
        title: 'Van'
    }, {
        id: 3,
        title: 'Bus'
    }
];


jQuery(document).ready(function($) {

  
    
    comboTree3 = $('#justAnInputBox1').comboTree({
        source : SampleJSONData,
        isMultiple: true,
        cascadeSelect: true,
        collapse: false
    });

    comboTree3.setSource(SampleJSONData2);


});