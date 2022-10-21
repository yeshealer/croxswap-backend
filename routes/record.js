const express = require("express")
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record/add/bnb").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = {
        _id: ObjectId('6352a4b156ca3508cfc41d29')
    }
    let myobj = {
        $set: {
            bnbtvl: req.query.bnbtvl,
            bnbCroxStake: req.query.bnbCroxStake
        }
    }
    req.query.bnbtvl !== null && req.query.bnbCroxStake !== null && req.query.bnbCroxStake !== 0 && req.query.bnbtvl !== 0 && db_connect.collection("tvl").updateOne(myquery, myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    })
})

recordRoutes.route("/record/add/heco").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = {
        _id: ObjectId('6352a4b156ca3508cfc41d29')
    }
    let myobj = {
        $set: {
            hecotvl: req.query.hecotvl,
            hecoCroxStake: req.query.hecoCroxStake
        }
    }
    req.query.hecotvl !== 0 && req.query.hecotvl !== null && req.query.hecoCroxStake !== null && req.query.hecoCroxStake !== 0 && db_connect.collection("tvl").updateOne(myquery, myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    })
})

recordRoutes.route("/record/get").get(function (req, response) {
    let db_connect = dbo.getDb("croxstats");
    db_connect.collection("tvl").find({}).toArray(function (err, res) {
        if (err) throw err;
        response.json(res);
    })
})

module.exports = recordRoutes;
