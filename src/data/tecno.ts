export interface IconData {
    name:string;
    component: React.FC<any>; 
}
import Hashi from '../../src/app/technologies/Hashi';
import Decrypto from '../../src/app/technologies/Decrypto';
import CDN from '../../src/app/technologies/CDN';
import Alekai from '../../src/app/technologies/Alekai';
///////////////////////////////////////////////////////
import EMP from '../../src/app/technologies/Next';
import Dfria from '../../src/app/technologies/Astro';


const technologiesData: IconData[] = [
    { name: '@Hashi', component: Hashi },
    { name: '@Decrypto', component: Decrypto },
    { name: '@Club de negocios', component: CDN },
    { name: '@Alekai', component: Alekai },
    { name: '@EMP', component: EMP },
    { name: '@La ducha fria', component: Dfria },
  ];

export default technologiesData;