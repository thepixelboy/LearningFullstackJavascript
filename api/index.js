import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req, res) => {
    res.send({
        contests: contests
    });
});

router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie velit risus, eget vulputate elit porttitor mattis. Sed tincidunt dictum varius. Ut ullamcorper in arcu sit amet dictum. Sed viverra accumsan neque, vitae vestibulum odio efficitur quis. Duis blandit sit amet elit ac luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh leo, ornare eu eros quis, mattis viverra justo. Proin ac dui fermentum, molestie sem id, semper ipsum. Nunc placerat, dui in tincidunt eleifend, purus ligula consectetur nibh, at consectetur lorem libero eu augue. In erat dui, dapibus ac erat id, luctus rutrum eros. Aenean accumsan tempus suscipit. Vivamus nec dolor ut ex congue pulvinar in non urna. Nulla a euismod sapien, sit amet accumsan turpis. Curabitur facilisis, nisl quis mattis vehicula, orci lorem posuere ipsum, in tincidunt sem ante vitae arcu. Proin commodo semper augue, vitae bibendum purus porttitor vel.';

    res.send(contest);
});

export default router;