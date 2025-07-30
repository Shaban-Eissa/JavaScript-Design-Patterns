class EmailService {
  send(message) {
    console.log(`📧 Email sent: ${message}`);
  }
}

class SMSService {
  send(message) {
    console.log(`📱 SMS sent: ${message}`);
  }
}

class PushNotificationService {
  send(message) {
    console.log(`🔔 Push notification sent: ${message}`);
  }
}

class NotificationSender {
  constructor(service) {
    this.service = service; // Bridge to the implementation
  }

  sendNotification(message) {
    this.service.send(message);
  }
}

// Create different services
const emailService = new EmailService();
const smsService = new SMSService();
const pushService = new PushNotificationService();

// Bridge abstraction to each service
const emailSender = new NotificationSender(emailService);
const smsSender = new NotificationSender(smsService);
const pushSender = new NotificationSender(pushService);

// Send notifications via different channels
emailSender.sendNotification("Your order has been shipped!");
smsSender.sendNotification("Your OTP is 123456");
pushSender.sendNotification("You have a new follower!");
