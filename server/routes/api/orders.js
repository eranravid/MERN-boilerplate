const Order = require('../../models/Order');
var bodyParser = require('body-parser');

module.exports = (app) => {

  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.get('/api/orders', (req, res, next) => {
    Order.find()
      .exec()
      .then((order) => res.json(order))
      .catch((err) => next(err));
  });

  app.post('/api/newOrder', function (req, res, next) {
    const order = new Order();
    order.firstName = req.body.firstName;
    order.lastName = req.body.lastName;
    order.address = req.body.address;
    order.zipcode = req.body.zipcode;
    order.phoneNumber = req.body.phoneNumber;
    order.notes = req.body.notes;
    order.save()
      .then(() => res.json(order))
      .catch((err) => next(err));
  });

  app.delete('/api/orders/:id', function (req, res, next) {
    Order.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((order) => res.json())
      .catch((err) => next(err));
  });
};
