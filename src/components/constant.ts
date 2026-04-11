import ANGULAR from '../assets/angular.png';
import BOOTSTRAP from '../assets/bootstrap.png';
import CSS from '../assets/css.png';
import GIT from '../assets/git.png';
import HTML from '../assets/html.png';
import JAVA from '../assets/java.png';
import JHIPSTER from '../assets/jhipster.png';
import JQUERY from '../assets/jquery.png';
import LINUX from '../assets/linux.svg';
import MONGODB from '../assets/mongodb.png';
import MUI from '../assets/mui.png';
import NODE from '../assets/node.png';
import PHP from '../assets/php.png';
import POSTGRES from '../assets/postgres.webp';
import REACT from '../assets/react.svg';
import SPRING from '../assets/spring.png';
import SQL from '../assets/sql.png';
import WEBMETHODS from '../assets/webMethods.png';
import { Skills } from './skills';
import { Position } from './travels';

export const software: Skills = {
  title: 'skills.software',
  skills: [
    {
      image: JAVA,
      href: 'https://www.java.com/fr/',
      tooltip: 'Java'
    }
  ]
};

export const esb: Skills = {
  title: 'skills.esb',
  skills: [
    {
      image: WEBMETHODS,
      href: 'https://www.ibm.com/fr-fr/products/webmethods-integration',
      tooltip: 'Software AG / IBM webMethods',
      size: 96
    }
  ]
};

export const web: Skills = {
  title: 'skills.web',
  skills: [
    {
      image: REACT,
      href: 'https://reactjs.org/',
      tooltip: 'React'
    },
    {
      image: MUI,
      href: 'https://mui.com/',
      tooltip: 'Material UI'
    },
    {
      image: BOOTSTRAP,
      href: 'https://getbootstrap.com/',
      tooltip: 'Bootstrap'
    },
    {
      image: ANGULAR,
      href: 'https://angular.io/',
      tooltip: 'Angular'
    },
    {
      image: MONGODB,
      href: 'https://www.mongodb.com/',
      tooltip: 'MongoDB'
    },
    {
      image: JQUERY,
      href: 'https://jquery.com/',
      tooltip: 'JQuery'
    },
    {
      image: PHP,
      href: 'https://www.php.net/',
      tooltip: 'PHP',
      size: 42
    },
    {
      image: SQL,
      href: 'https://en.wikipedia.org/wiki/SQL',
      tooltip: 'SQL',
      size: 25
    }
  ]
};

export const others: Skills = {
  title: 'skills.other',
  skills: [
    {
      image: GIT,
      href: 'https://git-scm.com/',
      tooltip: 'Git',
      class: 'iconToWhite'
    },
    {
      image: LINUX,
      href: 'https://www.linux.org/',
      tooltip: 'Linux'
    }
  ]
};

export const extraSkills: Skills = {
  title: 'Extra Skills',
  skills: [
    {
      image: NODE,
      href: 'https://nodejs.org/',
      tooltip: 'Node.js',
    },
    {
      image: JHIPSTER,
      href: 'https://www.jhipster.tech/',
      tooltip: 'JHipster',
    },
    {
      image: SPRING,
      href: 'https://spring.io/',
      tooltip: 'Spring',
    },
    {
      image: POSTGRES,
      href: 'https://www.postgresql.org/',
      tooltip: 'Postgres SQL',
    },
    {
      image: HTML,
      href: 'https://en.wikipedia.org/wiki/HTML',
      tooltip: 'HTML'
    },
    {
      image: CSS,
      href: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
      tooltip: 'CSS'
    },
  ]
};

// List of position and label of tooltip for the GeoJson object, for each country
export const countries: { [key: string]: Position } = {
  DEU: {
    latlng: { lat: 51.0834196, lng: 10.4234469 },
    tooltip: [
      'travel.germany.berlin',
      'travel.germany.frankfurt',
      'travel.germany.speyer',
      'travel.germany.heidelberg',
      'travel.germany.country'
    ]
  },
  CZE: {
    latlng: { lat: 49.667628, lng: 15.326962 },
    tooltip: [
      'travel.tchequie.prague',
      'travel.tchequie.country'
    ]
  },
  ESP: {
    latlng: { lat: 40.463669, lng: -3.749220 },
    tooltip: [
      'travel.spain.barcelona',
      'travel.spain.alicante',
      'travel.spain.calpe',
      'travel.spain.altea',
      'travel.spain.country'
    ]
  },
  FRA: {
    latlng: { lat: 46.2276380, lng: 2.2137490 },
    tooltip: [
      'travel.fr.marseille',
      'travel.fr.montpellier',
      'travel.fr.mont_saint_michel',
      'travel.fr.limoges',
      'travel.fr.tours',
      'travel.fr.lille',
      'travel.fr.country'
    ]
  },
  NLD: {
    latlng: { lat: 52.1326340, lng: 5.2912660 },
    tooltip: [
      'travel.netherlands.amsterdam',
      'travel.netherlands.country'
    ]
  },
  HRV: {
    latlng: { lat: 45.1000000, lng: 15.2000000 },
    tooltip: [
      'travel.croatia.dubrovnik',
      'travel.croatia.country'
    ]
  },
  POL: {
    latlng: { lat: 51.9189046, lng: 19.1343786 },
    tooltip: [
      'travel.poland.warsaw',
      'travel.poland.wroclaw',
      'travel.poland.country'
    ]
  },
  AUT: {
    latlng: { lat: 47.5162000, lng: 14.5501000 },
    tooltip: [
      'travel.austria.ischgl',
      'travel.austria.mayrhofen',
      'travel.austria.country'
    ]
  },
  TUR: {
    latlng: { lat: 38.9637010, lng: 35.2433290 },
    tooltip: [
      'travel.turkey.country'
    ]
  },
  BIH: {
    latlng: { lat: 43.9159, lng: 17.6791 },
    tooltip: [
      'travel.bosnia.mostar',
      'travel.bosnia.country'
    ]
  }
};

// List of position and tooltip for the cities Markers
export const cities: Position[] = [
  // Germany
  {
    latlng: { lat: 52.51763153076172, lng: 13.40965747833252 },
    tooltip: 'travel.germany.berlin'
  },
  {
    latlng: { lat: 50.1109221, lng: 8.6821267 },
    tooltip: 'travel.germany.frankfurt'
  },
  {
    latlng: { lat: 49.3170, lng: 8.4330 },
    tooltip: 'travel.germany.speyer'
  },
  {
    latlng: { lat: 49.3988, lng: 8.6724 },
    tooltip: 'travel.germany.heidelberg'
  },

  // Czech Republic
  {
    latlng: { lat: 50.05708312988281, lng: 14.44813060760498 },
    tooltip: 'travel.tchequie.prague'
  },

  // Spain
  {
    latlng: { lat: 41.39219284057617, lng: 2.164867401123047 },
    tooltip: 'travel.spain.barcelona'
  },
  {
    latlng: { lat: 38.3451500, lng: -0.4814900 },
    tooltip: 'travel.spain.alicante'
  },
  {
    latlng: { lat: 38.6444900, lng: 0.0452200 },
    tooltip: 'travel.spain.calpe'
  },
  {
    latlng: { lat: 38.6040500, lng: -0.0483400 },
    tooltip: 'travel.spain.altea'
  },

  // France
  {
    latlng: { lat: 43.2961743, lng: 5.3699525 },
    tooltip: 'travel.fr.marseille'
  },
  {
    latlng: { lat: 43.6112422, lng: 3.8767337 },
    tooltip: 'travel.fr.montpellier'
  },
  {
    latlng: { lat: 48.6359541, lng: -1.5114422 },
    tooltip: 'travel.fr.mont_saint_michel'
  },
  {
    latlng: { lat: 45.8354243, lng: 1.2647529 },
    tooltip: 'travel.fr.limoges'
  },
  {
    latlng: { lat: 47.3900474, lng: 0.6889268 },
    tooltip: 'travel.fr.tours'
  },
  {
    latlng: { lat: 50.6365654, lng: 3.0635282 },
    tooltip: 'travel.fr.lille'
  },
  {
    latlng: { lat: 45.5060, lng: 6.6770 },
    tooltip: 'travel.fr.la_plagne'
  },
  {
    latlng: { lat: 46.1920, lng: 6.7760 },
    tooltip: 'travel.fr.avoriaz'
  },
  {
    latlng: { lat: 45.2970, lng: 6.5800 },
    tooltip: 'travel.fr.val_thorens'
  },
  {
    latlng: { lat: 45.5440, lng: 3.2490 },
    tooltip: 'travel.fr.issoire'
  },
  {
    latlng: { lat: 47.0810, lng: 2.3980 },
    tooltip: 'travel.fr.bourges'
  },
  {
    latlng: { lat: 45.7772, lng: 3.0870 },
    tooltip: 'travel.fr.clermont_ferrand'
  },
  {
    latlng: { lat: 49.4190, lng: 0.2320 },
    tooltip: 'travel.fr.honfleur'
  },
  {
    latlng: { lat: 49.4944, lng: 0.1079 },
    tooltip: 'travel.fr.le_havre'
  },
  {
    latlng: { lat: 43.2480, lng: 3.2900 },
    tooltip: 'travel.fr.valras_plage'
  },
  {
    latlng: { lat: 43.5210, lng: 4.1370 },
    tooltip: 'travel.fr.port_camargue'
  },
  {
    latlng: { lat: 48.5890, lng: 0.6560 },
    tooltip: 'travel.fr.tourouvre'
  },
  {
    latlng: { lat: 49.1596, lng: 5.3843 },
    tooltip: 'travel.fr.verdun'
  },

  // Netherlands
  {
    latlng: { lat: 52.3675734, lng: 4.9041389 },
    tooltip: 'travel.netherlands.amsterdam'
  },

  // Croatia
  {
    latlng: { lat: 42.6507197, lng: 18.0943534 },
    tooltip: 'travel.croatia.dubrovnik'
  },

  // Poland
  {
    latlng: { lat: 52.2296756, lng: 21.0122287 },
    tooltip: 'travel.poland.warsaw'
  },
  {
    latlng: { lat: 51.1000000, lng: 17.0333300 },
    tooltip: 'travel.poland.wroclaw'
  },

  // Austria
  {
    latlng: { lat: 47.0151800, lng: 10.2915700 },
    tooltip: 'travel.austria.ischgl'
  },
  {
    latlng: { lat: 47.1667000, lng: 11.8667000 },
    tooltip: 'travel.austria.mayrhofen'
  },

  // Turkey
  {
    latlng: { lat: 41.0082, lng: 28.9784 },
    tooltip: 'travel.turkey.istanbul'
  },
  {
    latlng: { lat: 39.9334, lng: 32.8597 },
    tooltip: 'travel.turkey.ankara'
  },
  {
    latlng: { lat: 38.4000, lng: 26.7833 },
    tooltip: 'travel.turkey.mordogan'
  },
  {
    latlng: { lat: 38.4237, lng: 27.1428 },
    tooltip: 'travel.turkey.izmir'
  },
  {
    latlng: { lat: 37.9244, lng: 29.1170 },
    tooltip: 'travel.turkey.pamukkale'
  },

  // Bosnia and Herzegovina
  {
    latlng: { lat: 43.3438, lng: 17.8078 },
    tooltip: 'travel.bosnia.mostar'
  },
];
