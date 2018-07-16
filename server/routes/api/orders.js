const Order = require('../../models/Order');

module.exports = (app) => {
  app.get('/api/orders', (req, res, next) => {
    Order.find()
      .exec()
      .then((order) => res.json(order))
      .catch((err) => next(err));
  });

  app.post('/api/orders', function (req, res, next) {
    const order = new Order();

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
