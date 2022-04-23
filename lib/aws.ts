import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID_AWS,
  secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS,
  region: 'ap-south-1',
});

const AWS_SES = new AWS.SES({ apiVersion: '2010-12-01' });

module.exports = AWS_SES;
