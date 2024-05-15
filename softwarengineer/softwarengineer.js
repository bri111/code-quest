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
            <h2 align="center">Software Engineer</h2>
            <p align="center" className="fs-5">Choose your next job as a software engineer. Take a step into a day in a life of a software engineer!</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p> <strong>Tech Giants Inc. - </strong>
                  A large, well-established tech company offering a high salary and excellent benefits. You'll work on a team developing a popular mobile app.
            </p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Startup Innovations -</strong>
                  A small startup with a great product and a passionate team. They offer a lower
                  salary but promise more hands-on experience and the opportunity to grow quickly.
              </p>
            </div>
                </div>
          </div>
        ); // home page
      case 1: // tech giants
        return (
          <div>
            <h2 align="center">Welcome to Tech Giants</h2>
            <p align="center" className="fs-5">You've joined Tech Giants Inc. and are settling into your new role. Your team is working on a major update to the mobile app, and you're assigned a challenging task:
            </p>
            <p align="center" className="fs-5">Task: Implement a new feature that allows users to customize their app experience with themes and colors.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2)}>
              <p> <strong>Follow the existing code structure -</strong>
                Stick closely to the current codebase and follow the patterns already in place.
                This is safer but may limit your creativity.</p>
              </div>
              <div className="box" onClick={() => handleDecision(1.3)}>
                <p><strong>Propose a new architecture -</strong>
                  Suggest a new, more flexible architecture that could better accommodate future changes and improvements.
                  This is riskier but could lead to a more innovative solution.</p>
              </div>
            </div>
          </div>
        );
      case 1.2: // tech giants
        return (
          <div>
            <h2 align="center">The Feature Rollout</h2>
            <p align="center" className="fs-5">You decide to follow the existing code structure to implement the new feature. It's a challenging task, but you manage to complete it on time and without major issues. As a result of your successful implementation,
              you're given the opportunity to lead a small team on a new project. </p>
            <p align="center" className="fs-5">Task: Choose the technology stack for the web app.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21)}>
                <p><strong>React.js with Node.js and MongoDB - </strong>
                  A modern, JavaScript-based stack that offers flexibility and scalability.</p>
              </div>
              <div className="box" onClick={() => handleDecision(1.22)}>
                <p><strong>Angular with ASP.NET Core and SQL Server -</strong>
                  A more traditional stack with strong enterprise support and tooling.</p>
              </div>
            </div>
          </div>
        );
      case 1.21: // tech giants
        return (
          <div>
            <h2 align="center">The Web App Development</h2>
            <p align="center" className="fs-5">You choose to use React.js with Node.js and MongoDB for the web app development.
              Your team starts making progress, but you encounter a challenge: </p>
            <p align="center" className="fs-5">Challenge: The web app's performance is not
              meeting expectations, especially when handling large amounts of data.
              Your team is divided on the best approach to optimize performance.</p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.212)}>
                <p><strong>
                  Optimize the front-end - </strong>
                  Focus on optimizing the React.js components and reducing unnecessary re-renders.
                  This may involve refactoring code and implementing better state management.</p>
              </div>
              <div className="box" onClick={() => handleDecision(1.213)}>
                <p><strong>Optimize the back-end - </strong>
                  Improve the Node.js server's performance by optimizing database queries, caching data, and optimizing server-side code.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.212: // tech giants
        return (
          <div>
            <h2 align="center">The Optimization Effort</h2>
            <p align="center" className="fs-5">After optimizing the front-end with React.js, performance improved, delighting users and earning a promotion to senior software engineer. Now, I lead a cross-functional team integrating AI into the mobile app.
            </p>
            <p align="center" className="fs-5">Task: Choose the AI technology to integrate into the mobile app.</p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2121)}>
                <p><strong>Natural Language Processing (NLP) -</strong>
                  Enhance the app's chat feature with AI-powered natural language understanding and response generation.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2122)}>
                <p><strong>Machine Learning (ML) - </strong>
                  Implement personalized recommendations and predictive features based on user behavior and data.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2123)}>
                <p><strong>Computer Vision (CV) -</strong>
                  Add image recognition capabilities for enhanced photo search and augmented reality features.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.2121: // tech giants
        return (
          <div>
            <h2 align="center">The AI Integration</h2>
            <p align="center" className="fs-5">
              The new chat feature is a hit with users, who find it more intuitive and responsive. Your leadership is impressed with your work and offers you a leadership position in the company's AI research division.
            </p>
            <p align="center" className="fs-5">
              Task: Choose a research project to lead in the AI research division.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21211)}>
                <p><strong>Sentiment Analysis -</strong>
                  Develop a system that can analyze user feedback and determine the sentiment (positive, negative, neutral) to improve customer support and product development.                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.21212)}>
                <p><strong>Chatbot Development - </strong>
                  Create a chatbot that can assist users with common queries and tasks, using advanced NLP techniques to understand and respond accurately.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2123)}>
                <p><strong>Speech Recognition -</strong>
                  Build a system that can transcribe speech to text, enabling hands-free interaction with the mobile app.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.21211: // tech giants
        return (
          <div>
            <h2 align="center">AI Integration</h2>
            <p align="center" className="fs-5">
              Leading the Sentiment Analysis project, my team developed a system to analyze user feedback, improving customer support and product development. The system performs admirably in the initial tests, accurately analyzing user feedback and providing valuable insights.
            </p>
            <p align="center" className="fs-5">
              As a result, the company decides to integrate the sentiment analysis system into its customer support workflow and product development process.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21212: // tech giants
        return (
          <div>
            <h2 align="center">The Chatbot Revolution
            </h2>
            <p align="center" className="fs-5">
              You've chosen to lead the Chatbot Development project, aiming to create a chatbot that can assist users with common queries and tasks. Your expertise in NLP and AI techniques proves invaluable as you and your team work tirelessly to develop a chatbot that exceeds expectations.
              After months of hard work, the chatbot is ready for deployment. It's a resounding success, providing users with quick and accurate responses to their queries. Your leadership is impressed with your leadership and technical skills, and you're promoted to the position of Chief Technology Officer (CTO).
            </p>
            <p align="center" className="fs-5">
              As CTO, you're responsible for overseeing all technical aspects of the company, including product development and technology strategy. Your journey from a junior software engineer to CTO is complete, and you're now at the forefront of innovation in the tech industry.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21213: // tech giants
        return (
          <div>
            <h2 align="center">The Speech Recognition Project
            </h2>
            <p align="center" className="fs-5">
              You've chosen to lead the Speech Recognition project, aiming to build a system that can transcribe speech to text, enabling hands-free interaction with the mobile app. The project is challenging but rewarding, and after months of hard work, your team successfully develops a robust speech recognition system. Users love the new hands-free interaction feature, and it greatly improves the app's accessibility.
              With this success, you've solidified your reputation as a leader in AI technology. Your contributions have not gone unnoticed, and you're offered a promotion to a higher leadership position within the company.
            </p>
            <p align="center" className="fs-5">
              Your journey as a software engineer has been filled with challenges and triumphs, and your future in the world of technology looks brighter than ever before.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );

      case 1.2122: // tech giants
        return (
          <div>
            <h2 align="center">The Machine Learning Initiative
            </h2>
            <p align="center" className="fs-5">
              You've chosen to implement Machine Learning (ML) to enhance the app's capabilities. Your team is excited about the project, and you're ready to tackle the challenges ahead. As you dive into the implementation, you encounter a
              major decision:
            </p>
            <p align="center" className="fs-5">
              Decision: Choose the approach for training the ML models.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21221)}>
                <p><strong>On-Device Training -</strong>
                  Train the ML models directly on the user's device to personalize recommendations without sending user data to the server. This approach prioritizes user privacy but may require more computational resources on the device.
                </p>
                </div>
              <div className="box" onClick={() => handleDecision(1.21222)}>
                <p><strong>Sentiment Analysis -</strong>
                  Develop a system that can analyze user feedback and determine the sentiment (positive, negative, neutral) to improve customer support and product development. </p>
              </div>
            </div>

          </div>
        );
        case 1.21221: // tech giants
        return (
          <div>
            <div className="top-text">
              <h2 align="center">The On-Device Training
              </h2>
              <p align="center" className="fs-5">
                You've chosen to implement on-device training for the ML models, prioritizing user privacy. This approach requires careful optimization to ensure that the models can be trained efficiently on the user's device without
                draining battery or consuming too much storage. Your team works hard to optimize the training process, and after several iterations,
                you successfully deploy the new personalized recommendations and predictive features. </p>
              <p align="center" className="fs-5">
                As a result of your successful implementation, you're offered a new role as a Technical Architect, focusing on designing and overseeing the implementation of complex software solutions. Your journey as a software engineer
                has been full of challenges and successes, and you've made a significant impact on the app and its users.
              </p>
            </div>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.21222: // tech giants
        return (
          <div>
            <h2 align="center">The Successful Integration
            </h2>
            <p align="center" className="fs-5">
              You've chosen to implement server-side training for the ML models, prioritizing powerful and personalized recommendations. Your team successfully integrates the ML features into the app, and users are thrilled with the
              personalized experience. As a result of your successful project, you're recognized as a key contributor and are offered a promotion to Technical Architect.
            </p>
            <p align="center" className="fs-5">
              Congratulations on completing The Code Quest and shaping your career as a software engineer! Your journey has been full of challenges and decisions, and your choices have led to exciting opportunities and growth.            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.21223: // tech giants
        return (
          <div>
            <h2 align="center">The Visual Revolution
            </h2>
            <p align="center" className="fs-5">
              You've chosen to integrate Computer Vision (CV) into the mobile app, adding image recognition capabilities. The team works hard to implement this feature, and it's a hit with users, boosting engagement and app usage.
              As a result of your successful integration of CV, you're offered a new role as a Technical Architect, overseeing the design and implementation of complex software solutions at Tech Giants Inc. This is a challenging but rewarding role that allows you to have a broad impact on the company's technology stack and direction.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );


      case 1.213: // tech giants
        return (
          <div>
            <h2 align="center">The Launch Delay
            </h2>
            <p align="center" className="fs-5">
              You've chosen React.js with Node.js and MongoDB for the web app project. The development is going well, but during a security audit, a critical vulnerability
              is discovered. The team estimates it will take two weeks to fix, delaying the launch.
            </p>


            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2131)}>
                <p><strong>Delay the launch -</strong>
                  Address the security vulnerability before launching the app, ensuring it's secure but risking losing momentum and user interest.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2132)}>
                <p><strong>Launch as is -  </strong>
                  Launch the app without fixing the vulnerability, risking potential security issues but maintaining momentum and user interest.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.2131: // tech giants
        return (
          <div>
            <h2 align="center">The Senior Developer
            </h2>
            <p align="center" className="fs-5">
              You've decided to delay the launch to address the security vulnerability. The team works hard, and after two weeks, the issue is resolved, and the app is ready for launch. Your dedication and leadership during this challenging
              time are noticed by senior management, and you're offered a promotion to a senior developer role.
            </p>
            <p align="center" className="fs-5">
              As a senior developer, you'll have more responsibility and influence over the direction of projects. Do you accept the promotion?
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21311)}>
                <p><strong>Accept the promotion</strong>
                 </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.21312)}>
                <p><strong>Decline the promotion</strong>
                </p>
              </div>
            </div>
          </div>
        );
        case 1.21311: // tech giants
        return (
          <div>
            <h2 align="center">The Journey Continues
            </h2>
            <p align="center" className="fs-5">
              Congratulations on accepting the promotion! You've successfully navigated through various challenges and opportunities in your career as a software engineer. As a senior developer, you'll continue to grow and make impactful contributions to the world of technology.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons!             </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21312: // tech giants
        return (
          <div>
            <h2 align="center">The Journey Continues
            </h2>
            <p align="center" className="fs-5">
              You've declined the promotion to a senior developer role, preferring to focus on hands-on development rather than management. Your decision allows you to continue honing your technical skills and contributing directly to exciting projects at Tech Giants Inc.
              Your journey as a software engineer is far from over, and new challenges and adventures await you as you navigate the ever-evolving world of technology.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons!             </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.2132: // tech giants
        return (
          <div>
            <h2 align="center">The App Launch
            </h2>
            <p align="center" className="fs-5">
              You've decided to launch the app without fixing the security vulnerability. The launch is successful, and the app receives positive feedback from users. However, a few weeks after the launch, the security vulnerability is exploited, leading to a data breach. The team quickly patches the vulnerability and implements additional security measures.
              Despite the setback, the app continues to grow in popularity, and you're recognized for your leadership during the crisis. As a result, you're offered a promotion to a senior developer role.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21321)}>
                <p><strong> Accept the promotion </strong>
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.21322)}>
                <p><strong>Decline the promotion </strong>
                 </p>
              </div>
            </div>
          </div>
        );
        case 1.21321: // tech giants
        return (
          <div>
            <h2 align="center">The Journey Continues
            </h2>
            <p align="center" className="fs-5">
              Congratulations on accepting the promotion! You've successfully navigated through various challenges and opportunities in your career as a software engineer. As a senior developer, you'll continue to grow and make impactful
              contributions to the world of technology.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons! </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21322: // tech giants
        return (
          <div>
            <h2 align="center">The Journey Continues
            </h2>
            <p align="center" className="fs-5">
              You've declined the promotion to a senior developer role, preferring to focus on hands-on development rather than management. Your decision allows you to continue honing your technical skills and contributing directly to exciting projects at Tech Giants Inc.
              Your journey as a software engineer is far from over, and new challenges and adventures await you as you navigate the ever-evolving world of technology.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons!             </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );

      case 1.22: // tech giants
        return (
          <div>
            <h2 align="center">The Project Launch
            </h2>
            <p align="center" className="fs-5">
              You've chosen Angular with ASP.NET Core and SQL Server as the technology stack for the new web app project. The development phase goes smoothly, and the app is ready for launch. However, just before the launch date, you
              discover a critical security vulnerability that could compromise user data.
            </p>
            <p align="center" className="fs-5">
              Task: Decide how to handle the security vulnerability before the app's launch.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.221)}>
                <p><strong> Delay the launch -</strong>
                  Postpone the launch to fix the security vulnerability and ensure the app is secure before release.
                  This could impact the project timeline and cause frustration among stakeholders.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.222)}>
                <p><strong>Launch as planned -</strong>
                  Proceed with the launch as scheduled and address the security vulnerability in a future update.
                  This could risk compromising user data but would keep the project on track.
                </p>
              </div>
            </div>
          </div>
        );

      case 1.221: // tech giants
        return (
          <div>
            <h2 align="center">The Security Overhaul
            </h2>
            <p align="center" className="fs-5">
              You've decided to delay the launch to address the security vulnerability. Your team works tirelessly to fix the issue and implement additional security measures to protect user data. The launch is rescheduled, and this time, everything goes smoothly.
              The app is well-received by users, and your attention to security earns you recognition within the company. As a result, you're offered a promotion to a senior developer role with more responsibilities.
            </p>
            <p align="center" className="fs-5">
              Task: Choose your area of specialization for the new role.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2211)}>
                <p><strong>Security Specialist -</strong>
                  Focus on ensuring the security and integrity of the company's software products.</p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2212)}>
                <p><strong>Security Specialist -</strong>
                  Design and oversee the implementation of complex software solutions, ensuring they meet the company's technical requirements and standards.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2213)}>
                <p><strong>Security Specialist -</strong>
                  Lead a team of developers, guiding them in their work and ensuring the successful delivery of projects.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.2211: // tech giants
          return (
            <div>
              <h2 align="center">The Security Sentinel
              </h2>
              <p align="center" className="fs-5">
                Your expertise in security becomes invaluable to the company, and you're tasked with leading the security efforts for a high-profile project. Your attention to detail and dedication to security ensure the project's success, earning you a reputation as a security expert in the industry.
              </p>
              <div className="inner-container">
                <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
              </div>
            </div>
          );
        case 1.2212: // tech giants
          return (
            <div>
              <h2 align="center">The Architect's Legacy
              </h2>
              <p align="center" className="fs-5">
                Congratulations on choosing the path of a Technical Architect! In your new role, you excel at designing and overseeing the implementation of complex software solutions for Tech Giants Inc. Your attention to detail and
                commitment to technical excellence ensure that the company's projects meet the highest standards.
              </p>
              <p align="center" className="fs-5">
                As you continue to grow in your career, your contributions leave a lasting legacy at the company. Your innovative ideas and leadership inspire those around you, shaping the future of software development at Tech Giants Inc.
              </p>
              <div className="inner-container">
                <button onClick={goHome}>Go back to home</button>
                {/* Button to go back to home */}
              </div>
            </div>
          );
        case 1.2213: // tech giants
          return (
            <div>
              <h2 align="center">Leadership Journey
              </h2>
              <p align="center" className="fs-5">
                You've chosen to become a Team Lead, taking on the responsibility of guiding a team of developers and ensuring the successful delivery of projects. Your journey as a leader begins with enthusiasm and dedication. You mentor your team members, provide support, and foster a collaborative environment where everyone can thrive.
              </p>
              <p align="center" className="fs-5">
                As a Team Lead, you face challenges and obstacles along the way, but with your leadership skills and technical expertise, you navigate through them successfully. Your team achieves remarkable milestones, and you gain recognition not only within your company but also in the broader tech community.
              </p>
              <div className="inner-container">
                <button onClick={goHome}>Go back to home</button>
                {/* Button to go back to home */}
              </div>
            </div>
          );

      case 1.222: // tech giants
        return (
          <div>
            <h2 align="center">The Launch
            </h2>
            <p align="center" className="fs-5">
              You've decided to proceed with the launch as planned, addressing the security vulnerability in a future update. The app is launched successfully, and initial user feedback is positive. However, a few weeks after the launch, the security vulnerability is exploited, leading to a data breach and a loss of user trust.
            </p>
            <p align="center" className="fs-5">
              Task: Determine how to handle the aftermath of the data breach.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2221)}>
                <p><strong>Apologize and offer compensation -</strong>
                  Issue a public apology, offer compensation to affected users, and take steps to improve security and regain trust.                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2222)}>
                <p><strong>Investigate and fix the vulnerability - </strong>
                  Conduct a thorough investigation to identify the cause of the breach, fix the vulnerability, and implement additional security measures to prevent future breaches.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.2221: // tech giants
        return (
          <div>
            <h2 align="center">The End
            </h2>
            <p align="center" className="fs-5">
              You've chosen to apologize and offer compensation to users affected by the data breach. Your prompt action helps to restore some trust and goodwill among users. However, the incident serves as a valuable lesson in the importance of prioritizing security in software development.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.2222: // tech giants
        return (
          <div>
            <h2 align="center">The Resolution
            </h2>
            <p align="center" className="fs-5">
              You choose to investigate the data breach thoroughly, fix the vulnerability, and implement additional security measures. After a thorough investigation, you identify the cause of the breach and implement measures to prevent future breaches. Your swift action and transparency help regain user trust, and the app's reputation is restored.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );

      case 1.3: // tech giants
        return (
          <div>
            <h2 align="center">Innovative Strategies</h2>
            <p align="center" className="fs-5">
              You propose a new architecture for the customization feature, emphasizing modularity and scalability. Your idea is well-received by your team and management, and you're given the green light to proceed.
            </p>
            <p align="center" className="fs-5">
              Task: Design and implement the new architecture for the customization feature.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.31)}>
                <p><strong>Refactor the entire codebase -  </strong>
                  Spend extra time refactoring the existing code to make it more modular and compatible with your new architecture.
                  This will delay the project but could lead to a cleaner codebase overall.                </p>
              </div>
            </div>
          </div>
        );

      case 1.31: // tech giants
        return (
          <div>
            <h2 align="center">The Code Cleanup</h2>
            <p align="center" className="fs-5">
              You embark on the ambitious task of refactoring the entire codebase to align with your new architecture. It's a daunting challenge, but you're determined to see it through.
              After several weeks of hard work, the refactoring is complete. The codebase is now more modular, easier to maintain, and ready for the new customization feature. Your team is impressed by your dedication and the improvements you've made.
            </p>
            <p align="center" className="fs-5">
              Task: Integrate the new customization feature using the refactored codebase.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.311)}>
                <p><strong>Spend extra time fixing all bugs and optimizing performance -</strong>
                  This will ensure a smooth user experience but will delay the project slightly. </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.312)}>
                <p><strong>Launch the feature as is and address issues later - </strong>
                  This will allow you to meet the deadline but may result in a less polished product initially.</p>
              </div>
            </div>
          </div>
        );
        case 1.311: // tech giants
          return (
            <div>
              <h2 align="center">The Successful Launch</h2>
              <p align="center" className="fs-5">
                You dedicate extra time to fixing bugs and optimizing performance, ensuring that the new customization feature is seamless and efficient. Your hard work pays off, and the feature is ready for launch.
              </p>
              <p align="center" className="fs-5">
                Task: Launch the new customization feature to the app store and monitor user feedback.
                The feature is well-received by users, who appreciate the new level of customization. Your team celebrates the successful launch, and you receive recognition for your contribution to the project.
              </p>
              <div className="inner-container">
                <div className="box" onClick={() => handleDecision(1.3111)}>
                  <p>Congratulations on completing the challenge. Your adventure as a software engineer is just beginning and many more challenges and opportunities await you in the world of software development.</p>
                </div>
              </div>
            </div>
          );
        case 1.3111: // tech giants
          return (
            <div>
              <h2 align="center">The Successful Launch</h2>
              <p align="center" className="fs-5">
                After the successful launch and positive reception of the new customization feature, you continue to work closely with the user base, gathering feedback and implementing improvements. Your dedication to enhancing the user
                experience leads to continued success, with the app gaining popularity and acclaim for its innovative features.
              </p>
              <p align="center" className="fs-5">
                Your role evolves as you take on more responsibilities, leading to opportunities to mentor junior developers and contribute to high-profile projects within the company. Your expertise and leadership qualities shine through, earning you a reputation as a valuable asset to the team.
              </p>

              <div className="inner-container">
                <button onClick={goHome}>Go back to home</button>
                {/* Button to go back to home */}
              </div>
            </div>
          );

      case 1.312: // tech giants
        return (
          <div>
            <h2 align="center">The Launch</h2>
            <p align="center" className="fs-5">
              With the deadline looming, you decide to launch the feature as is, knowing that you can address any issues that arise later. The customization feature goes live, and users start exploring the new options in the app.
            </p>
            <p align="center" className="fs-5">
              Task: Prioritize and address the bugs and performance issues reported by users.            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.3121)}>
                <p><strong>Address all reported issues immediately - </strong>
                  Dedicate extra resources to fixing all reported bugs and optimizing performance as quickly as possible.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.3122)}>
                <p><strong>Prioritize critical issues first - </strong>
                  Focus on fixing the most critical bugs and performance issues that are impacting user experience the most, then address the remaining issues gradually.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.3121: // tech giants
        return (
          <div>
            <h2 align="center">The Bug Squashing</h2>
            <p align="center" className="fs-5">
              You dive headfirst into addressing the reported issues, working tirelessly to ensure a smooth user experience. With the support of your team, you quickly identify and fix the bugs while optimizing performance where needed.
            </p>
            <p align="center" className="fs-5">
              Task: Continue monitoring user feedback and addressing any remaining issues to further improve the app's performance and stability.
            </p>
            <p align="center" className="fs-5">
              Opportunity: A prestigious technology conference is seeking speakers for a panel discussion on innovative software development practices. Your team nominates you to represent the company and share your experience with the recent project.            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.31211)}>
                <p><strong>Accept the nomination and prepare to speak at the conference -</strong>
                  This could be a great opportunity to showcase your skills and network with industry professionals.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.31212)}>
                <p><strong>Decline the nomination and focus on your current responsibilities - </strong>
                  You're busy with resolving issues and want to prioritize your work commitments.
                </p>
              </div>
            </div>
          </div>
        );
          case 1.31211: // tech giants
        return (
          <div>
            <h2 align="center">The Conference
            </h2>
            <p align="center" className="fs-5">
              You accept the nomination and begin preparing for the conference. You work on crafting a compelling presentation that highlights the innovative software development practices you implemented in the customization feature project.
              The day of the conference arrives, and you deliver a captivating presentation. Your insights and experiences resonate with the audience, earning you recognition from industry experts and fellow developers. You also have the opportunity to network with professionals from various tech companies, opening doors for future collaborations and career opportunities.
              Outcome: Your participation in the conference enhances your reputation as a thought leader in software development. You return to work with renewed inspiration and continue to excel in your role at Tech Giants Inc.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
          case 1.31212: // tech giants
        return (
          <div>
            <h2 align="center">The Continued Success
            </h2>
            <p align="center" className="fs-5">
              You decline the nomination to focus on your current responsibilities, prioritizing the stability and performance of the app. Your dedication pays off, and soon, the app is running smoothly with minimal issues.
              Your team recognizes your hard work and contributions to the project, and you're given a promotion to a senior software engineer role. You now have more responsibilities and opportunities to lead projects and mentor junior
              developers.
              Outcome: Your participation in the conference enhances your reputation as a thought leader in software development. You return to work with renewed inspiration and continue to excel in your role at Tech Giants Inc.
            </p>
            <p align="center" className="fs-5">
              Outcome: Your participation in the conference enhances your reputation as a thought leader in software development. You return to work with renewed inspiration and continue to excel in your role at Tech Giants Inc.
            </p>
            <p align="center" className="fs-5">
              Task: Embrace your new role as a senior software engineer and continue to innovate and contribute to the success of the company.
              As you settle into your new role, you reflect on your journey so far. From joining a prestigious tech company to leading a major project and now being promoted, you've come a long way in your career as a software engineer.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );


      default:
        return <div>You've reached the end of The Code Quest!</div>;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

ReactDOM.render(<DecisionPoints/>, document.getElementById('root'));
