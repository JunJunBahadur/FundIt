import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x6c80b21FF07E999f1e3Ed277B1B93F196e0b2CEb'
);

export default instance;