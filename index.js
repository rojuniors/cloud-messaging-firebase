var admin = require("firebase-admin")

var serviceAccount = require("./app-educ-de660-firebase-adminsdk-gmhqf-51e35db479.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://app-educ-de660.firebaseio.com"
})


// This registration token comes from the client FCM SDKs.
var registrationToken = 'cJBrjfuLDjI:APA91bFrt9YVqiCanjI0ju9rg1C4jtI87gxehGL9CSGuJUpI9JNXBrjdleBGBtK7lZCHOhskEsI0D-QjKPx8JPRrgOma9nKj9mk-O7olJcpg63K5KzgQserU-QJKX5ZdF85CiD2UopKk'

var payload = {
  notification: {
    title: 'Atenção Pais!',
    body: 'Venha busca seu filho na escola. Pois o mesmo não quer estudar.'
  },
  data: {
    id: '123'
  }
}

var options = {
  priority: 'high',
  timeToLive: 60 * 60 * 24
}

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, payload, options)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response)
  })
  .catch((error) => {
    console.log('Error sending message:', error)
});
