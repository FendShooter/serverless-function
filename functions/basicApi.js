const personnel = require('../db/data');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(personnel),
  };
};
