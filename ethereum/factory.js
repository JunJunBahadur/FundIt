import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xA71294F2fC80c741f6CE450674aD15cCbF00b59E'
);

export default instance;