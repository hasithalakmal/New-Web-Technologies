var app = angular.module("carSearch", []);


app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function carSearchController($scope){

	$scope.items = [
		{
			url: 'http://www.astonmartin.com/',
            title:'Aston Martin 1',
			type: 'British manufacturer of luxury sports cars and grand tourers.',
			image: 'images/Cars/aston-martin-1.jpg'
		},
        {
			url: 'http://www.astonmartin.com/',
            title:'Aston Martin 2',
			type: 'British manufacturer of luxury sports cars and grand tourers.',
			image: 'images/Cars/aston-martin-2.jpg'
		},
        {
			url: 'http://www.astonmartin.com/',
            title:'Aston Martin 3',
			type: 'British manufacturer of luxury sports cars and grand tourers.',
			image: 'images/Cars/aston-martin-3.jpg'
		},
        {
			url: 'http://www.astonmartin.com/',
            title:'Aston Martin 4',
			type: 'British manufacturer of luxury sports cars and grand tourers.',
			image: 'images/Cars/aston-martin-4.jpg'
		},
		{
			url: 'http://www.audi.com/index.html',
            title:'Audi 1',
			type: 'Discover the diversity of the Audi models',
			image: 'images/Cars/audi-1.jpg'
		},
        {
			url: 'http://www.audi.com/index.html',
            title:'Audi 2',
			type: 'Discover the diversity of the Audi models',
			image: 'images/Cars/audi-2.jpg'
		},
        {
			url: 'http://www.audi.com/index.html',
            title:'Audi 3',
			type: 'Discover the diversity of the Audi models',
			image: 'images/Cars/audi-3.jpg'
		},
        {
			url: 'http://www.audi.com/index.html',
            title:'Audi 4',
			type: 'Discover the diversity of the Audi models',
			image: 'images/Cars/audi-4.jpg'
		},
        {
			url: 'https://www.mercedes-benz.com/en/',
            title:'Benz 1',
			type: 'Every decade for almost 130 years, Mercedes-Benz has reinvented the automobile.',
			image: 'images/Cars/benz-1.jpg'
		},
        {
			url: 'https://www.mercedes-benz.com/en/',
            title:'Benz 2',
			type: 'Every decade for almost 130 years, Mercedes-Benz has reinvented the automobile.',
			image: 'images/Cars/benz-2.jpg'
		},
        {
			url: 'https://www.mercedes-benz.com/en/',
            title:'Benz 3',
			type: 'Every decade for almost 130 years, Mercedes-Benz has reinvented the automobile.',
			image: 'images/Cars/benz-3.jpg'
		},
        {
			url: 'https://www.mercedes-benz.com/en/',
            title:'Benz 4',
			type: 'Every decade for almost 130 years, Mercedes-Benz has reinvented the automobile.',
			image: 'images/Cars/benz-4.jpg'
		},
        {
			url: 'http://www.bmw.com/com/en/',
            title:'BMW 1',
			type: 'LESS FUEL CONSUMPTION.MORE DRIVING PLEASURE.',
			image: 'images/Cars/bmw-1.jpg'
		},
        {
			url: 'http://www.bmw.com/com/en/',
            title:'BMW 2',
			type: 'LESS FUEL CONSUMPTION.MORE DRIVING PLEASURE.',
			image: 'images/Cars/bmw-2.jpg'
		}, 
        {
			url: 'http://www.bmw.com/com/en/',
            title:'BMW 3',
			type: 'LESS FUEL CONSUMPTION.MORE DRIVING PLEASURE.',
			image: 'images/Cars/bmw-3.jpg'
		}, 
        {
			url: 'http://www.bmw.com/com/en/',
            title:'BMW 4',
			type: 'LESS FUEL CONSUMPTION.MORE DRIVING PLEASURE.',
			image: 'images/Cars/bmw-4.jpg'
		}, 
        {
			url: 'http://www.bugatti.com/en/home.html',
            title:'Bugatti 1',
			type: 'Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles',
			image: 'images/Cars/bugatti-1.jpg'
		}, 
        {
			url: 'http://www.bugatti.com/en/home.html',
            title:'Bugatti 2',
			type: 'Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles',
			image: 'images/Cars/bugatti-2.jpg'
		},
        {
			url: 'http://www.bugatti.com/en/home.html',
            title:'Bugatti 3',
			type: 'Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles',
			image: 'images/Cars/bugatti-3.jpg'
		},
        {
			url: 'http://www.bugatti.com/en/home.html',
            title:'Bugatti 4',
			type: 'Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles',
			image: 'images/Cars/bugatti-4.jpg'
		},
        {
			url: 'http://www.ferrari.com/en_en/',
            title:'ferrari 1',
			type: 'Ferrari S.p.A. is an Italian luxury sports car',
			image: 'images/Cars/freeari-1.jpg'
		},
        {
			url: 'http://www.ferrari.com/en_en/',
            title:'ferrari 2',
			type: 'Ferrari S.p.A. is an Italian luxury sports car',
			image: 'images/Cars/freeari-2.jpg'
		},
        {
			url: 'http://www.ferrari.com/en_en/',
            title:'ferrari 3',
			type: 'Ferrari S.p.A. is an Italian luxury sports car',
			image: 'images/Cars/freeari-3.jpg'
		},
        {
			url: 'http://www.ferrari.com/en_en/',
            title:'ferrari 4',
			type: 'Ferrari S.p.A. is an Italian luxury sports car',
			image: 'images/Cars/freeari-4.jpg'
		},
                
	];

}