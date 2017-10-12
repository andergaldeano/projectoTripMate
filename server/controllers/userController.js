var userModel = require('../models/User.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {
    // 
    // /**
    //  * userController.list()
    //  */
    // list: function (req, res) {
    //     userModel.find(function (err, users) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user.',
    //                 error: err
    //             });
    //         }
    //         console.log("estoy dentro de base de datos")
    //         console.log(res.json(users))
    //         return res.json(users);
    //
    //     });
    // },
    //
    //
    // /**
    //  * userController.show()
    //  */
    //
    // show: function (req, res) {
    //     var id = req.params.id;
    //     userModel.findOne({_id: id}, function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user.',
    //                 error: err
    //             });
    //         }
    //         if (!user) {
    //             return res.status(404).json({
    //                 message: 'No such user'
    //             });
    //         }
    //         return res.json(user);
    //     });
    // },
    //
    // /**
    //  * userController.create()
    //  */
    // create: function (req, res) {
    //     var user = new userModel({
		// 	name : req.body.name
    //
    //     });
    //
    //     user.save(function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when creating user',
    //                 error: err
    //             });
    //         }
    //         return res.status(201).json(user);
    //     });
    // },
    //
    // /**
    //  * userController.update()
    //  */
    // update: function (req, res) {
    //     var id = req.params.id;
    //     userModel.findOne({_id: id}, function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting user',
    //                 error: err
    //             });
    //         }
    //         if (!user) {
    //             return res.status(404).json({
    //                 message: 'No such user'
    //             });
    //         }
    //
    //         user.name = req.body.name ? req.body.name : user.name;
    //
    //         user.save(function (err, user) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     message: 'Error when updating user.',
    //                     error: err
    //                 });
    //             }
    //
    //             return res.json(user);
    //         });
    //     });
    // },
    //
    // /**
    //  * userController.remove()
    //  */
    // remove: function (req, res) {
    //     var id = req.params.id;
    //     userModel.findByIdAndRemove(id, function (err, user) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when deleting the user.',
    //                 error: err
    //             });
    //         }
    //         return res.status(204).json();
    //     });
    // }
};
