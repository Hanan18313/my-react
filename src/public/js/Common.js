//const base_url = 'https://testsummer.langjie.com'
// const Menu_url = 'https://testsummer.langjie.com'
const base_url = 'http://192.168.50.80:7090'
//const Menu_url = 'http://192.168.50.80:7001'
//const proxy_url ='https://api.langjie.com/action/reg/1234567'

var urlList = {
    // getMemberByScoreRule:base_url+'/getMemberByScoreRule',
    // getMemberInfo:base_url+'/getMemberInfo',
    // getQuizInfo:base_url+'/getQuizInfo',
    // getParticipantsList: base_url+'/getParticipantsList',
    // getMenuSider:Menu_url+'/getMenuSider',
    // proxy:proxy_url
    getMenuSider: base_url+'/getMenuSider',
    getUserAll: base_url+'/findAll',
}

module.exports = urlList