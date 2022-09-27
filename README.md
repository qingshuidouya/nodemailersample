# NODEMAILER SAMPLE WITH MAIL TRAP

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Using SMTP Server from [![mailtrap](https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg)](https://mailtrap.io/)

``` javascript
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ca430249d1d3d9",
    pass: "2e88326bafd6c7"
  }
});
```
