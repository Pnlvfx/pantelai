import PolicyHeader from '@/components/policies/PolicyHeader';
import UIpolicyHead from '@/components/policies/UIpolicyHead';
import UIpolicyText from '@/components/policies/UIpolicyText';

const PolicyPage = () => {
  return (
    <div>
      <PolicyHeader title="Privacy policy" />
      <div>
        <div>
          <UIpolicyText spacingClass="mt-spacing-7">
            <p>
              We at PantelAI (together with our affiliates, “PantelAI”, “we”, “our” or “us”) respect your privacy and are strongly committed to
              keeping secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal
              Information we collect from or about you when you use our website and services (collectively, “Services”).
            </p>
          </UIpolicyText>
          <UIpolicyHead title="1. Personal information we collect" />
          <UIpolicyText spacingClass="mt-spacing-4">
            <p>
              We collect information that alone or in combination with other information in our possession could be used to identify you (“Personal
              Information”) as follows:
            </p>
            <p>
              <strong>Personal Information You Provide</strong>: We may collect Personal Information if you create an account to use our Services or
              communicate with us as follows:
            </p>
            <ul>
              <li>
                <em>Account information: </em>
                When you create an account with us, we will collect information associated with your account, including your name, contact
                information, account credentials, payment card information, and transaction history, (collectively, “Account Information”).
              </li>
              <li>
                <em>User Content: </em>
                When you use our Services, we may collect Personal Information that is included in the input, file uploads, or feedback that you
                provide to our Services (“Content”).
              </li>
              <li>
                <em>Cookies: </em>
                We use cookies to operate and administer our Services, and improve your experience on it. A “cookie” is a piece of information sent to
                your browser by a website you visit. You can set your browser to accept all cookies, to reject all cookies, or to notify you whenever
                a cookie is offered so that you can decide each time whether to accept it. However, refusing a cookie may in some cases preclude you
                from using, or negatively affect the display or function of, a website or certain areas or features of a website.
              </li>
            </ul>
          </UIpolicyText>
          <UIpolicyHead title="2. How we use personal information" />
          <UIpolicyText spacingClass="mt-spacing-4">
            <p>We may use Personal Information for the following purposes:</p>
            <ul>
              <li>To provide, administer, maintain, improve and/or analyze the Services;</li>
              <li>To communicate with you;</li>
              <li>
                To prevent fraud, criminal activity, or misuses of our Services, and to ensure the security of our IT systems, architecture, and
                networks; and
              </li>
              <li>
                To comply with legal obligations and legal process and to protect our rights, privacy, safety, or property, and/or that of our
                affiliates, you, or other third parties.
              </li>
            </ul>
          </UIpolicyText>
          <UIpolicyHead title="3. Your rights" />
          <UIpolicyText spacingClass="mt-spacing-4">
            <p>
              Depending on location, individuals in the EEA, the UK, and across the globe may have certain statutory rights in relation to their
              Personal Information. For example, you may have the right to:
            </p>
          </UIpolicyText>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
