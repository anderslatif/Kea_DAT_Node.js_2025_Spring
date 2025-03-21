# Send emails 

Hand-in: No Teams hand in required since this will be part of mandatory II and thus part of the exam project.

Send emails but beware:

* **NEVER** use your personal email for this.

* **NEVER** push credentials, API keys, secrets or passwords to Git. 

Do not spend too much time on this assignment. Go with the easiest way if you are stuck.

## Suggestion 1: Nodemailer

https://nodemailer.com/

Nodemailer provides a fake SMTP server for testing called Ethereal Mail. It is fine to use this but no actual emails will be sent out. You can check Ethereal mail to get a link to the email that would’ve been sent.

Here is an example of how to use Ethereal Mail.

```js
import nodemailer from 'nodemailer';

const testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

const info = await transporter.sendMail({
  from: '"Your Name" <your.email@example.com>',
  to: 'recipient@example.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>Hello world?</b>',
});

console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
```

---

## Option 2: Resend

If you have a domain, getting started with resend is really easy and works nicely.

https://www.resend.com

---

## [Option 3] Use Gmail

It is not required to configure Nodemailer with an actual SMTP server. For instance, you could use Gmail to act as an SMTP server that sends out emails.  

In Gmail the old way was to enable "Less Secure Apps". Now, use: **Generate an App password**:

https://www.youtube.com/watch?v=MkLX85XU5rU

**Prerequisites**: Requires 2FA (phone verification for instance) and also a recovery email. 

I recommend that you create a new email for this instead of using your personal one. Google does not allow you to spoof the “from” email key.

It will show the app password in 4 character chunks with space in between. The password needs to be without those spaces. 

Here is what to write with Nodemailer:

```javascript
    auth: {
        user: ‘<your_account>@gmail.com', 
        pass: ‘<‘your_pass>
    }
```

That’s it!

NEVER use your personal email with Nodemailer and be careful not to leak the credentials by pushing them to pubilc Git repositories. 

Please check your spam.

## Suggestion 3: Other

Sendgrid, Twillio, Mailgun, Amazon SES etc. 