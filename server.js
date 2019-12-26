const expresee =reauire('express');
const app = express();
const path = require('path');

app.use(expres.static(__dirname + '/dist'));

app.listen(preocess.env.PORT || 8080);

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

