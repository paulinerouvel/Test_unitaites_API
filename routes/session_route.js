'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ListController = require('../controllers').listController;



const router = express.Router();
router.use(bodyParser.json());


    /***********************************************************************************/
    /**                                   GET  REQUESTS                               **/
    /***********************************************************************************/

router.get('/', async (req, res) => {
    //get all list by User
    if (req.query.idUser) {
        const produit = await ListController.getAllListsByUser(req.query.idUser);
        if (produit) {
            return res.json(produit);
        }
        return res.status(408).end();
    }
    else {

    }
});

router.get('/products', async (req, res) => {
    //get all product by list
    if (req.query.id) {
        const produit = await ListController.getAllProductsByList(req.query.id);
        if (produit) {
            return res.json(produit);
        }
        return res.status(408).end();
    }
});

module.exports = router;