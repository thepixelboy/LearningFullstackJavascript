import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    assert.equal(null, err);
    mdb = client.db('test');
});

const router = express.Router();

router.get('/contests', (req, res) => {
    let contests = {};
    mdb.collection('contests').find({})
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1
        })
        .each((err, contest) => {
            assert.equal(null, err);

            if (!contest) { // no more contests
                res.send({contests});
                return;
            }

            contests[contest.id] = contest;
        });
});

router.get('/contests/:contestId', (req, res) => {
    mdb.collection('contests')
        .findOne({id: Number(req.params.contestId)})
        .then(contest => res.send(contest))
        .catch(console.error);
});

export default router;