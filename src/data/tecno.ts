export interface IconData {
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
    { component: Hashi },
    { component: Decrypto },
    { component: CDN },
    { component: Alekai },
    { component: EMP },
    { component: Dfria },
];

export default technologiesData;