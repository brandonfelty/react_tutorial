import palm from './images/palm Small.png';
import forest from './images/forest Small.png';
import elk from './images/elk Small.png';
import branDawg from './images/p_b.png';


export const travelJournalData = [
  {
    title: 'The Forest',
    location: 'Beautiful British Columbia',
    googleMapsLink: 'https://www.google.com/maps/place/British+Columbia,+Canada/@49.0527878,-160.1441018,4z/data=!3m1!4b1!4m5!3m4!1s0x537a66c7aa6b6aaf:0x881b41e937e7f1f9!8m2!3d53.7266683!4d-127.6476205',
    startDate: '2016-05-03',
    endDate: '2016-07-09',
    description: 'lorem ipsuma askdjfhasdlkfjhlasdkfjhalsdkfjahsd ljkahs fkjhasldkjfh lkahsdfkasjdhfl ajldkjahdf alksdhfjahsdflk',
    imgURL: {forest}
  },
  {
    title: 'Down to San Fran',
    location: 'Larkspur, California',
    googleMapsLink: 'https://www.google.com/maps/place/Larkspur+Ferry+Terminal/@37.9452541,-122.5124776,17z/data=!3m1!4b1!4m5!3m4!1s0x80859b8778e0c37b:0x281c825133b5d97c!8m2!3d37.9452499!4d-122.5102836',
    startDate: '2022-11-14',
    endDate: '2022-12-06',
    description: 'orem ipsuma askdjfhasdlkfjhlasdkfjhalsdkfjahsd ljkahs fkjhasldkjfh lkahsdfkasjdhfl ajldkjahdf alksdhfjahsdflk',
    imgURL: {palm}
  },
  {
    title: 'Hunting Trip',
    location: 'Whoknows, AB',
    googleMapsLink: 'https://www.google.com/maps/place/Alberta,+Canada/@54.1764814,-123.9809242,5z/data=!3m1!4b1!4m5!3m4!1s0x5309b282a82419b5:0xb0a9479a409b8e9e!8m2!3d53.9332706!4d-116.5765035',
    startDate: '2012-10-01',
    endDate: '2012-10-02',
    description: 'orem ipsuma askdjfhasdlkfjhlasdkfjhalsdkfjahsd ljkahs fkjhasldkjfh lkahsdfkasjdhfl ajldkjahdf alksdhfjahsdflk',
    imgURL: {elk}
  },
  {
    title: 'Near Home',
    location: 'Calgary, AB',
    googleMapsLink: 'https://www.google.com/maps/place/Calgary+International+Airport/@51.1215064,-114.0098096,17z/data=!3m1!4b1!4m5!3m4!1s0x5371640f7bf63b77:0xdbe9871f5cbc7457!8m2!3d51.1215031!4d-114.0076156',
    startDate: '2022-08-10',
    endDate: '2022-08-10',
    description: 'orem ipsuma askdjfhasdlkfjhlasdkfjhalsdkfjahsd ljkahs fkjhasldkjfh lkahsdfkasjdhfl ajldkjahdf alksdhfjahsdflk',
    imgURL: {branDawg}
  },
];


export const expData = [
  {
    img: palm,
    rating: 
    {
      stars: 5,
      amount: 3,
      location: 'USA'  
    },
    title: 'Our lady palm with Andy Zolang',
    cost: 136,
    openSpots: 0,
    fire: true
  },
  {
    img: forest,
    rating: 
    {
      stars: 5,
      amount: 30,
      location: 'CAN'  
    },
    title: 'Run Forest Run!',
    cost: 170,
    openSpots: 5,
    fire: false,
  },{
    img: elk,
    rating: 
    {
      stars: 4.8,
      amount: 5,
      location: 'USA'  
    },
    title: 'Do you elk what I elk?',
    cost: 169,
    openSpots: 0,
    fire: false
  },
];

export const jokeData = [
  {
    setup: 'setup1',
    punchline: 'punchline1'
  },
  {
    setup: 'setup2',
    punchline: 'punchline2'
  },
  {
    setup: 'setup3',
    punchline: 'punchline3'
  },
  {
    setup: 'setup4',
    punchline: 'punchline4'
  },
  {
    setup: 'setup5',
    punchline: 'punchline5'
  },
]