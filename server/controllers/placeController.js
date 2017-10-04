var placeModel = require('../models/placeModel.js');

/**
 * placeController.js
 *
 * @description :: Server-side logic for managing places.
 */
module.exports = {

    // /**
    //  * placeController.list()
    //  */
    // list: function (req, res) {
    //     placeModel.find(function (err, places) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting place.',
    //                 error: err
    //             });
    //         }
    //         return res.json(places);
    //     });
    // },
    //
    // /**
    //  * placeController.show()
    //  */
    // show: function (req, res) {
    //     var id = req.params.id;
    //     placeModel.findOne({_id: id}, function (err, place) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting place.',
    //                 error: err
    //             });
    //         }
    //         if (!place) {
    //             return res.status(404).json({
    //                 message: 'No such place'
    //             });
    //         }
    //         return res.json(place);
    //     });
    // },
    //
    // /**
    //  * placeController.create()
    //  */
    // create: function (req, res) {
    //     var place = new placeModel({
		// 	name : req.body.name,
		// 	activities : req.body.activities,
		// 	people : req.body.people
    //
    //     });
    //
    //     place.save(function (err, place) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when creating place',
    //                 error: err
    //             });
    //         }
    //         return res.status(201).json(place);
    //     });
    // },
    //
    // /**
    //  * placeController.update()
    //  */
    // update: function (req, res) {
    //     var id = req.params.id;
    //     placeModel.findOne({_id: id}, function (err, place) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting place',
    //                 error: err
    //             });
    //         }
    //         if (!place) {
    //             return res.status(404).json({
    //                 message: 'No such place'
    //             });
    //         }
    //
    //         place.name = req.body.name ? req.body.name : place.name;
		// 	place.activities = req.body.activities ? req.body.activities : place.activities;
		// 	place.people = req.body.people ? req.body.people : place.people;
		//
    //         place.save(function (err, place) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     message: 'Error when updating place.',
    //                     error: err
    //                 });
    //             }
    //
    //             return res.json(place);
    //         });
    //     });
    // },
    //
    // /**
    //  * placeController.remove()
    //  */
    // remove: function (req, res) {
    //     var id = req.params.id;
    //     placeModel.findByIdAndRemove(id, function (err, place) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when deleting the place.',
    //                 error: err
    //             });
    //         }
    //         return res.status(204).json();
    //     });
    // }
};
