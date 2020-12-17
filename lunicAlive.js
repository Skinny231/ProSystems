const lunicActive = require('express');
const packets = express();
packets.all('/', (req, res)=>{
    res.send(' Server created ...')
})
function keepAlive(){
    packets.listen(5360, ()=>{console.log("[LunicBoot]: Listener Started...")});
}
module.exports = lunicAlive;
var lunicAlive = require('./lunicAlive.js')