const FEEDBACK_MAIL_TEMPLATE = (
  feedback,
  review,
  email,
  pageURL,
  topicName
) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
          .email-wrapper {
            background-color : #F5F5F5;
            padding: 84px 54px;
          }

          .email-wrapper .email-content{
            background-color: #FFFFFF;
            padding: 24px 16px;
          }

          .email-wrapper .email-header {
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }

          .email-wrapper .boomiLogoImage {
            height: 36px;
            }
          
          .email-wrapper .bold-text {
            color: #262626;
            font-feature-settings: "clig" off, "liga" off;
            font-family: Noto Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            letter-spacing: -0.14px;
          }
          
          .email-wrapper .normal-text {
            color: #262626;
            font-feature-settings: "clig" off, "liga" off;
            font-family: Noto Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: -0.28px;
          }
          
          .email-wrapper .link-text {
            color: #006CD6;
            font-feature-settings: "clig" off, "liga" off;
            font-family: Noto Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            text-decoration-line: underline;
          }
          
          .email-wrapper .margin-large {
            margin-top: 24px;
          }
          
          .email-wrapper .margin-small {
            margin-top: 12px;
          }
          
          .email-wrapper .text-gap {
            margin-bottom: 4px;
          }
          
          .email-wrapper .horizontal-rule {
            height: 1px;
            background: #CCC;
          }
          
          .email-wrapper .email-footer {
            color: #707070;
            font-feature-settings: "clig" off, "liga" off;
            font-family: Noto Sans;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            margin-top: 16px;
          }
          </style>
        </head>
        <body>
        <div class="email-wrapper">
        <div class="email-content">
              <div class="email-header">
                <div>
                  <img
                    src="https://cdn.brandfolder.io/2E9KWBX8/at/wj3c7jnx9n7jg7tqp4z79qp/Boomi_2-Color_Logo_Positive.png"                   
                    alt="Boomi Logo"
                    class="boomiLogoImage"
                  />
                </div>
              </div>
              <div>
                <div class="bold-text">Hi,</div>       
                <div class="normal-text">
                  <div class="margin-large">
                    Thank you for your feedback! We have received your message
                    and a member of our team may get back to you if we have questions.
                  </div>
                  <div class="margin-large">
                  Thanks for being part of the Boomi community!
                  </div>
                  <div>The Boomi Documentation Team</div>
                </div>
              </div>
              <div class="horizontal-rule margin-small"></div>
              <div class="margin-large">
                <div class="bold-text text-gap">Topic</div>
                <div class="normal-text">${topicName}</div>
              </div>
              <div class="margin-large">
                <div class="bold-text text-gap">Feedback From</div>
                <div class="link-text">${email}</div>
              </div>
              <div class="margin-large">
                <div class="bold-text text-gap">Helpful</div>
                <div class="normal-text">${feedback}</div>
              </div>
              <div class="margin-large">
                <div class="bold-text text-gap">Comment</div>
                <div class="normal-text">${review}</div>
              </div>
              <div class="margin-large">
                <div class="bold-text text-gap">Page URL</div>
                <div class="link-text">${pageURL}</div>
              </div>
              <div class="horizontal-rule margin-large"></div>
              <div class="normal-text margin-small">
                You are receiving this email because you have been added to an
                AtomSphere account. This is not a marketing email. If you
                believe that you received this email in error, please contact
                <span class="normal-text">customersuccess@boomi.com</span>
              </div>
              <div class="email-footer">
                <span>©2023 Boomi, LP or its affiliates.</span>
                <span>
                  All rights reserved.1400 Liberty Ridge Dr, Chesterbrook, PA
                  19087
                </span>
              </div>
            </div>
            </div>
        </body>
      </html>
    `;
};

export default FEEDBACK_MAIL_TEMPLATE;
