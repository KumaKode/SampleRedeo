function createTemplate(data) {
  const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Static Template</title>
    
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style="
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          font-size: 14px;
        "
      >
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            padding: 45px 30px 60px;
            background: #f4f7ff;
            background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
            background-repeat: no-repeat;
            background-size: 800px 452px;
            background-position: top center;
            font-size: 14px;
            color: #434343;
          "
        >
          <header>
            <table style="width: 100%">
              <tbody>
                <tr style="height: 0">
                  <td>
                    <img
                      alt=""
                      src="https://lh3.google.com/u/0/d/1I4ajk3kyzzIdNjAqkn2to038Qcs4_p_T=w1227-h912-iv1"
                      height="120px"
                    />
                  </td>
                  <td style="text-align: right">
                    <span
                      style="
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 30px;
                        color: #222d51;
                      "
                      >12 Nov, 2021</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </header>
    
          <main>
            <div
              style="
                margin: 0;
                margin-top: 70px;
                padding: 92px 30px 115px;
                background: #ffffff;
                border-radius: 30px;
                text-align: center;
              "
            >
              <div style="width: 100%; max-width: 489px; margin: 0 auto">
                <h1
                  style="
                    margin: 0;
                    font-size: 24px;
                    font-weight: 500;
                    color: #1f1f1f;
                  "
                >
                  Verification Email
                </h1>
                <p
                  style="
                    margin: 0;
                    margin-top: 17px;
                    font-size: 16px;
                    font-weight: 500;
                  "
                >
                  Hey ${data.name},
                </p>
                <p
                  style="
                    margin: 0;
                    margin-top: 17px;
                    font-weight: 500;
                    letter-spacing: 0.56px;
                  "
                >
                  Thank you for signing up for JobWebsite.com. Use the following OTP
                  to complete the procedure to change your email address. OTP is
                  valid for
                  <span style="font-weight: 600; color: #1f1f1f">5 minutes</span>.
                  Do not share this code with others.
                </p>
                <p
                  style="
                    margin: 0;
                    margin-top: 60px;
                    font-size: 40px;
                    font-weight: 600;
                    letter-spacing: 25px;
                    color: #ba3d4f;
                  "
                >
                  ${data.otp}
                </p>
    
                <p
                  style="margin-top: 17px; font-weight: 500; letter-spacing: 0.56px"
                >
                  Please enter this OTP on the verification page to activate your
                  account. If you did not request this registration, please ignore
                  this email.
                </p>
              </div>
            </div>
    
            <p
              style="
                max-width: 400px;
                margin: 0 auto;
                margin-top: 90px;
                text-align: center;
                font-weight: 500;
                color: #8c8c8c;
              "
            >
              Need help? Ask at
              <a
                href=""
                style="color: #499fb6; text-decoration: none"
                >jobslab@gmail.com</a
              >
              or visit our
              <a
                href=""
                target="_blank"
                style="color: #499fb6; text-decoration: none"
                >Help Center</a
              >
            </p>
          </main>
    
          <footer
            style="
              width: 100%;
              max-width: 490px;
              margin: 20px auto 0;
              text-align: center;
              border-top: 1px solid #e6ebf1;
            "
          >
            <p
              style="
                margin: 0;
                margin-top: 40px;
                font-size: 16px;
                font-weight: 600;
                color: #434343;
              "
            >
              JobSlab
            </p>
            <p style="margin: 0; margin-top: 8px; color: #434343">
              Address 540, City, State.
            </p>
            <div style="margin: 0; margin-top: 16px">
              <a href="" target="_blank" style="display: inline-block">
                <img
                  width="36px"
                  alt="Facebook"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                />
              </a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px"
              >
                <img
                  width="36px"
                  alt="Instagram"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
              /></a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px"
              >
                <img
                  width="36px"
                  alt="Twitter"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                />
              </a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px"
              >
                <img
                  width="36px"
                  alt="Youtube"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
              /></a>
            </div>
            <p style="margin: 0; margin-top: 16px; color: #434343">
              Copyright © 2024 Company. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
    `;
  return template;
}

module.exports = { createTemplate };
