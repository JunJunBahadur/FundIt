import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8eb7Cd9FE06Add554EbA9aA627199c69225Edb39'
);

export default instance;