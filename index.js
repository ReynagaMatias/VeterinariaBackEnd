var express = require('express');
var app = express();

const { mongoose } = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/api/mascota', require('./routes/mascota.router'));
app.use('/api/turno', require('./routes/turno.router'));
app.use('/api/usuario', require('./routes/usuario.router'));
app.use('/api/propietario', require('./routes/propietario.router'));
//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});