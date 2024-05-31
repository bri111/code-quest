const DecisionPoints = () => {
  const [step, setStep] = React.useState(0);

  const handleDecision = (nextStep) => {
    setStep(nextStep);
  };

  const goHome = () => {
    window.location.href = '../index.html'; // Redirect to the home page
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="top-text">
            <h2 align="center">Career as a UI/UX Designer</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose your next step in your UI/UX design career, incorporating elements of Hawaii and its culture.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p><strong>Web Design - </strong>
                  Focus on designing websites with a strong emphasis on user experience.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Mobile App Design - </strong>
                  Specialize in designing mobile applications with intuitive interfaces.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="top-text">
            <h2 align="center">Web Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specialization within web design.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(3)}>
                <p><strong>eCommerce Websites - </strong>
                  Design websites for online stores, focusing on conversion optimization.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(4)}>
                <p><strong>Portfolio Websites - </strong>
                  Create stunning portfolio websites for artists and creatives.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="top-text">
            <h2 align="center">Mobile App Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a platform to design for.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(5)}>
                <p><strong>iOS - </strong>
                  Design sleek and intuitive interfaces for Apple devices.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(6)}>
                <p><strong>Android - </strong>
                  Create engaging and user-friendly designs for Android devices.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="top-text">
            <h2 align="center">eCommerce Websites</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of eCommerce web design to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(7)}>
                <p><strong>User Flow Optimization - </strong>
                  Improve the shopping experience by optimizing user flows.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(8)}>
                <p><strong>Visual Design - </strong>
                  Focus on the visual appeal of eCommerce websites to attract customers.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="top-text">
            <h2 align="center">Portfolio Websites</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a focus area within portfolio web design.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(9)}>
                <p><strong>Responsive Design - </strong>
                  Ensure that portfolio websites look great on all devices.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(10)}>
                <p><strong>Interactive Elements - </strong>
                  Add interactive elements to make portfolio websites more engaging.
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="top-text">
            <h2 align="center">iOS Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of iOS design to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(11)}>
                <p><strong>UI Design - </strong>
                  Focus on creating beautiful user interfaces for iOS apps.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(12)}>
                <p><strong>UX Research - </strong>
                  Conduct research to improve the user experience of iOS apps.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="top-text">
            <h2 align="center">Android Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of Android design to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(13)}>
                <p><strong>Material Design - </strong>
                  Use Google's Material Design guidelines to create stunning apps.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(14)}>
                <p><strong>User Testing - </strong>
                  Conduct user testing to refine and improve app designs.
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="top-text">
            <h2 align="center">User Flow Optimization</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific area of user flow optimization to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(15)}>
                <p><strong>Checkout Process - </strong>
                  Streamline the checkout process to reduce cart abandonment.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(16)}>
                <p><strong>Navigation - </strong>
                  Improve website navigation to enhance user experience.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="top-text">
            <h2 align="center">Visual Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of visual design to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(17)}>
                <p><strong>Color Theory - </strong>
                  Apply color theory to create visually appealing websites.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(18)}>
                <p><strong>Typography - </strong>
                  Use typography to enhance the readability and aesthetics of websites.
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="top-text">
            <h2 align="center">Responsive Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of responsive design to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(19)}>
                <p><strong>Mobile-First Design - </strong>
                  Design with a mobile-first approach to ensure compatibility.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(20)}>
                <p><strong>Grid Systems - </strong>
                  Use grid systems to create responsive layouts.
                </p>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="top-text">
            <h2 align="center">Interactive Elements</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of interactive element to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(21)}>
                <p><strong>Animations - </strong>
                  Add animations to make websites more dynamic and engaging.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(22)}>
                <p><strong>Interactive Forms - </strong>
                  Create interactive forms to improve user engagement.
                </p>
              </div>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="top-text">
            <h2 align="center">UI Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of UI design to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(23)}>
                <p><strong>Prototyping - </strong>
                  Create detailed prototypes to visualize app designs.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(24)}>
                <p><strong>Iconography - </strong>
                  Design custom icons to enhance app interfaces.
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="top-text">
            <h2 align="center">UX Research</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific area of UX research to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(25)}>
                <p><strong>User Interviews - </strong>
                  Conduct user interviews to gather insights for app design.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(26)}>
                <p><strong>Usability Testing - </strong>
                  Perform usability testing to identify design improvements.
                </p>
              </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="top-text">
            <h2 align="center">Material Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of Material Design to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(27)}>
                <p><strong>Components - </strong>
                  Use Material Design components to build cohesive app interfaces.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(28)}>
                <p><strong>Theming - </strong>
                  Apply theming principles to create visually consistent apps.
                </p>
              </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="top-text">
            <h2 align="center">User Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of user testing to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(29)}>
                <p><strong>A/B Testing - </strong>
                  Perform A/B testing to compare different design versions.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(30)}>
                <p><strong>Beta Testing - </strong>
                  Conduct beta testing to gather user feedback before launch.
                </p>
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="top-text">
            <h2 align="center">Checkout Process</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of the checkout process to improve.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(31)}>
                <p><strong>Simplification - </strong>
                  Simplify the checkout process to make it quicker and easier.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(32)}>
                <p><strong>Security - </strong>
                  Enhance security features to protect user information during checkout.
                </p>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="top-text">
            <h2 align="center">Navigation</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific area of website navigation to improve.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(33)}>
                <p><strong>Menu Design - </strong>
                  Design intuitive and accessible navigation menus.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(34)}>
                <p><strong>Breadcrumbs - </strong>
                  Implement breadcrumbs to help users understand their location on the site.
                </p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="top-text">
            <h2 align="center">Color Theory</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of color theory to apply.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(35)}>
                <p><strong>Contrast - </strong>
                  Use contrast to enhance readability and visual appeal.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(36)}>
                <p><strong>Color Psychology - </strong>
                  Apply color psychology to influence user behavior.
                </p>
              </div>
            </div>
          </div>
        );
      case 18:
        return (
          <div className="top-text">
            <h2 align="center">Typography</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of typography to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(37)}>
                <p><strong>Font Pairing - </strong>
                  Select and pair fonts to create a cohesive look.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(38)}>
                <p><strong>Readability - </strong>
                  Enhance readability through careful font selection and layout.
                </p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="top-text">
            <h2 align="center">Mobile-First Design</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific area of mobile-first design to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(39)}>
                <p><strong>Touch Interactions - </strong>
                  Optimize touch interactions for mobile devices.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(40)}>
                <p><strong>Performance - </strong>
                  Ensure fast loading times and smooth performance on mobile devices.
                </p>
              </div>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="top-text">
            <h2 align="center">Grid Systems</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of grid system to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(41)}>
                <p><strong>Bootstrap - </strong>
                  Use Bootstrap's grid system to create responsive layouts.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(42)}>
                <p><strong>CSS Grid - </strong>
                  Utilize CSS Grid for flexible and modern layouts.
                </p>
              </div>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="top-text">
            <h2 align="center">Animations</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of animation to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(43)}>
                <p><strong>Microinteractions - </strong>
                  Add subtle animations to enhance user interactions.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(44)}>
                <p><strong>Transitions - </strong>
                  Use transitions to create smooth changes between different states.
                </p>
              </div>
            </div>
          </div>
        );
      case 22:
        return (
          <div className="top-text">
            <h2 align="center">Interactive Forms</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of interactive form to create.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(45)}>
                <p><strong>Survey Forms - </strong>
                  Design engaging survey forms to gather user feedback.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(46)}>
                <p><strong>Registration Forms - </strong>
                  Create user-friendly registration forms to enhance sign-up rates.
                </p>
              </div>
            </div>
          </div>
        );
      case 23:
        return (
          <div className="top-text">
            <h2 align="center">Prototyping</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific tool for prototyping.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(47)}>
                <p><strong>Figma - </strong>
                  Use Figma for collaborative design and prototyping.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(48)}>
                <p><strong>Sketch - </strong>
                  Utilize Sketch for high-fidelity prototypes.
                </p>
              </div>
            </div>
          </div>
        );
      case 24:
        return (
          <div className="top-text">
            <h2 align="center">Iconography</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of iconography to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(49)}>
                <p><strong>Custom Icons - </strong>
                  Design custom icons to match the app's style.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(50)}>
                <p><strong>Icon Libraries - </strong>
                  Use icon libraries to speed up the design process.
                </p>
              </div>
            </div>
          </div>
        );
      case 25:
        return (
          <div className="top-text">
            <h2 align="center">User Interviews</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific method for conducting user interviews.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(51)}>
                <p><strong>In-Person Interviews - </strong>
                  Conduct in-person interviews to gather detailed feedback.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(52)}>
                <p><strong>Remote Interviews - </strong>
                  Use remote interviews to gather insights from a broader audience.
                </p>
              </div>
            </div>
          </div>
        );
      case 26:
        return (
          <div className="top-text">
            <h2 align="center">Usability Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of usability testing to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(53)}>
                <p><strong>Heuristic Evaluation - </strong>
                  Conduct heuristic evaluations to identify usability issues.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(54)}>
                <p><strong>User Observation - </strong>
                  Observe users interacting with the app to identify pain points.
                </p>
              </div>
            </div>
          </div>
        );
      case 27:
        return (
          <div className="top-text">
            <h2 align="center">Components</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of Material Design component to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(55)}>
                <p><strong>Buttons - </strong>
                  Design and implement interactive buttons.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(56)}>
                <p><strong>Cards - </strong>
                  Use cards to present information in a clear and concise way.
                </p>
              </div>
            </div>
          </div>
        );
      case 28:
        return (
          <div className="top-text">
            <h2 align="center">Theming</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of theming to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(57)}>
                <p><strong>Dark Mode - </strong>
                  Implement dark mode for a modern and user-friendly design.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(58)}>
                <p><strong>Custom Themes - </strong>
                  Create custom themes to match the brand's identity.
                </p>
              </div>
            </div>
          </div>
        );
      case 29:
        return (
          <div className="top-text">
            <h2 align="center">A/B Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific aspect of A/B testing to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(59)}>
                <p><strong>Headline Testing - </strong>
                  Test different headlines to see which performs better.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(60)}>
                <p><strong>Layout Testing - </strong>
                  Compare different layouts to determine the most effective one.
                </p>
              </div>
            </div>
          </div>
        );
      case 30:
        return (
          <div className="top-text">
            <h2 align="center">Beta Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">Choose a specific type of beta testing to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(61)}>
                <p><strong>Open Beta - </strong>
                  Conduct an open beta to gather feedback from a large user base.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(62)}>
                <p><strong>Closed Beta - </strong>
                  Perform a closed beta to gather detailed feedback from selected users.
                </p>
              </div>
            </div>
          </div>
        );
      case 31:
        return (
          <div>
            <h2 align="center">Simplification</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to simplify the checkout process. Your efforts have made it quicker and easier for users to complete their purchases, resulting in increased conversion rates and customer satisfaction.
              Congratulations! Your expertise in user flow optimization has significantly improved the eCommerce experience.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 32:
        return (
          <div>
            <h2 align="center">Security</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to enhance the security of the checkout process. Your efforts have protected user information and increased trust in the eCommerce platform.
              Congratulations! Your expertise in security has ensured a safer shopping experience for users.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 33:
        return (
          <div>
            <h2 align="center">Menu Design</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to improve the design of navigation menus. Your intuitive and accessible menus have enhanced the overall user experience on the website.
              Congratulations! Your expertise in menu design has made navigation easier and more enjoyable for users.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 34:
        return (
          <div>
            <h2 align="center">Breadcrumbs</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to implement breadcrumbs. Your efforts have helped users understand their location on the site and navigate more efficiently.
              Congratulations! Your expertise in navigation design has improved the overall usability of the website.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 35:
        return (
          <div>
            <h2 align="center">Contrast</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to focus on contrast in color theory. Your designs are now more readable and visually appealing, enhancing the user experience.
              Congratulations! Your expertise in color theory has improved the visual impact of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 36:
        return (
          <div>
            <h2 align="center">Color Psychology</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to apply color psychology. Your designs now influence user behavior effectively, leading to better engagement and satisfaction.
              Congratulations! Your understanding of color psychology has enhanced the emotional impact of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 37:
        return (
          <div>
            <h2 align="center">Font Pairing</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to focus on font pairing. Your carefully selected font combinations have created a cohesive and professional look for your designs.
              Congratulations! Your expertise in typography has elevated the visual appeal of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 38:
        return (
          <div>
            <h2 align="center">Readability</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to enhance readability. Your careful font selection and layout design have improved the user experience, making content easier to read and understand.
              Congratulations! Your focus on readability has made your designs more user-friendly.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 39:
        return (
          <div>
            <h2 align="center">Touch Interactions</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to optimize touch interactions for mobile devices. Your efforts have made your designs more intuitive and user-friendly on mobile platforms.
              Congratulations! Your expertise in mobile-first design has enhanced the user experience on mobile devices.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 40:
        return (
          <div>
            <h2 align="center">Performance</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to focus on performance. Your efforts have ensured fast loading times and smooth performance on mobile devices, enhancing the overall user experience.
              Congratulations! Your expertise in performance optimization has made your designs more efficient and user-friendly.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 41:
        return (
          <div>
            <h2 align="center">Bootstrap</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to use Bootstrap's grid system. Your designs are now more responsive and adaptable to different screen sizes, providing a better user experience.
              Congratulations! Your expertise in Bootstrap has enhanced the flexibility and responsiveness of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 42:
        return (
          <div>
            <h2 align="center">CSS Grid</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to utilize CSS Grid. Your designs are now more modern and flexible, allowing for creative and responsive layouts.
              Congratulations! Your expertise in CSS Grid has enhanced the visual appeal and functionality of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 43:
        return (
          <div>
            <h2 align="center">Microinteractions</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to add microinteractions. Your subtle animations have enhanced user interactions, making your designs more engaging and enjoyable.
              Congratulations! Your expertise in microinteractions has improved the overall user experience of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 44:
        return (
          <div>
            <h2 align="center">Transitions</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to use transitions. Your smooth and seamless changes between different states have improved the flow and feel of your designs.
              Congratulations! Your expertise in transitions has enhanced the visual appeal and user experience of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 45:
        return (
          <div>
            <h2 align="center">Survey Forms</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to design engaging survey forms. Your interactive forms have gathered valuable user feedback, leading to better design decisions.
              Congratulations! Your expertise in interactive forms has improved user engagement and data collection.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 46:
        return (
          <div>
            <h2 align="center">Registration Forms</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to create user-friendly registration forms. Your efforts have enhanced sign-up rates and improved the user onboarding experience.
              Congratulations! Your expertise in registration forms has made the sign-up process more efficient and enjoyable for users.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 47:
        return (
          <div>
            <h2 align="center">Figma</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to use Figma for collaborative design and prototyping. Your ability to work seamlessly with your team has resulted in more cohesive and well-executed designs.
              Congratulations! Your expertise in Figma has enhanced your team's productivity and design quality.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 48:
        return (
          <div>
            <h2 align="center">Sketch</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to utilize Sketch for high-fidelity prototypes. Your detailed prototypes have provided clear and precise design directions, resulting in better final products.
              Congratulations! Your expertise in Sketch has elevated the quality of your design prototypes.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 49:
        return (
          <div>
            <h2 align="center">Custom Icons</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to design custom icons. Your unique and cohesive icon sets have enhanced the visual identity of your apps.
              Congratulations! Your expertise in iconography has improved the overall look and feel of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 50:
        return (
          <div>
            <h2 align="center">Icon Libraries</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to use icon libraries. Your efficient use of ready-made icons has sped up the design process while maintaining high quality.
              Congratulations! Your expertise in using icon libraries has made your design process more efficient and effective.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 51:
        return (
          <div>
            <h2 align="center">In-Person Interviews</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to conduct in-person interviews. Your detailed and personal feedback sessions have provided valuable insights for your designs.
              Congratulations! Your expertise in user interviews has led to more user-centric design decisions.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 52:
        return (
          <div>
            <h2 align="center">Remote Interviews</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to conduct remote interviews. Your ability to gather insights from a broader audience has enriched your design perspectives.
              Congratulations! Your expertise in remote interviews has led to more inclusive and diverse design solutions.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 53:
        return (
          <div>
            <h2 align="center">Heuristic Evaluation</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to conduct heuristic evaluations. Your systematic approach to identifying usability issues has improved the overall user experience.
              Congratulations! Your expertise in heuristic evaluations has led to more intuitive and user-friendly designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 54:
        return (
          <div>
            <h2 align="center">User Observation</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to observe users interacting with the app. Your detailed observations have identified critical pain points, leading to significant design improvements.
              Congratulations! Your expertise in user observation has enhanced the usability of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 55:
        return (
          <div>
            <h2 align="center">Buttons</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to design and implement interactive buttons. Your well-designed buttons have improved the interactivity and user experience of your apps.
              Congratulations! Your expertise in designing buttons has enhanced the functionality and aesthetics of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 56:
        return (
          <div>
            <h2 align="center">Cards</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to use cards to present information. Your clear and concise card designs have improved the readability and organization of your app's content.
              Congratulations! Your expertise in using cards has enhanced the visual clarity and user experience of your designs.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 57:
        return (
          <div>
            <h2 align="center">Dark Mode</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to implement dark mode. Your modern and user-friendly dark mode designs have provided users with a comfortable viewing experience in low light conditions.
              Congratulations! Your expertise in dark mode implementation has made your designs more accessible and visually appealing.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 58:
        return (
          <div>
            <h2 align="center">Custom Themes</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to create custom themes. Your personalized themes have enhanced the brand identity and visual appeal of your designs.
              Congratulations! Your expertise in creating custom themes has strengthened the brand consistency and aesthetic quality of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 59:
        return (
          <div>
            <h2 align="center">Headline Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to perform headline testing. Your efforts have identified the most effective headlines, resulting in increased user engagement and conversion rates.
              Congratulations! Your expertise in A/B testing has optimized the impact of your content.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 60:
        return (
          <div>
            <h2 align="center">Layout Testing</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to compare different layouts. Your data-driven approach has identified the most effective layout, enhancing the overall user experience.
              Congratulations! Your expertise in A/B testing has improved the design and usability of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 61:
        return (
          <div>
            <h2 align="center">Open Beta</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to conduct an open beta. Your wide-reaching feedback collection has provided valuable insights, leading to significant improvements in your app.
              Congratulations! Your expertise in beta testing has ensured a successful and well-received app launch.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 62:
        return (
          <div>
            <h2 align="center">Closed Beta</h2>
            <p align="center" className="fs-5 flex-paragraph">
              You've chosen to perform a closed beta. Your detailed feedback collection from selected users has resulted in a polished and refined app.
              Congratulations! Your expertise in beta testing has ensured a high-quality app release.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );

      default:
        return <div>You've reached the end of The Code Quest!
          <div className="inner-container">
            <button onClick={goHome}>Go back to home</button>
            {/* Button to go back to home */}
          </div>
        </div>;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

ReactDOM.render(<DecisionPoints/>, document.getElementById('root'));
