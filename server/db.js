const mongoose = require('mongoose');

mongoose.connect('mongodb:27017/users',
                    { useNewUrlParser: true, useUnifiedTopology: true },
                    () => console.log('Seveur Mongodb connected'));