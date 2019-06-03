import mongoose from 'mongoose'

import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('Db Is Conected'))
    .catch(err => console.log(err));