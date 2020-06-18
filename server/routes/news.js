const express = require('express');
const router = express.Router();
const newsController = require('../controller/NewsController');

router.get('/news', (req, res, next) => {
    newsController.find(req.query, (err, results) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                error: err
            });
            return;
        }
        res.json({
            success: true,
            data: results
        })
    })
});

// router.get('/news/:id', (req, res, next) => {
//     const id = req.params.id;

//     const news = fakeNews.find(x => x.id === id);

//     res.status(200).send({
//         data: news? news : "No news was found with this id"
//     });
// });

router.post('/news', (req, res, next) => {
    newsController.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                error: err
            });
            return;
        }

        res.json({
            success: true,
            data: result
        })
    })
})

module.exports = router;