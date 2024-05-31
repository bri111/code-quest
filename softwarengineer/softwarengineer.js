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
            <p align="center" className="fs-5">Choose your next job as a software engineer. Take a step into a day in the life of a software engineer!</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p><strong>Tech Giants Inc. -</strong> A large, well-established tech company offering a high salary and excellent benefits. You'll work on a team developing a popular mobile app.</p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Startup Innovations -</strong> A small startup with a great product and a passionate team. They offer a lower salary but promise more hands-on experience and the opportunity to grow quickly.</p>
              </div>
            </div>
          </div>
        ); // home page
// tech giants
      case 1: // tech giants
        return (
          <div>
            <h2 align="center">Welcome to Tech Giants</h2>
            <p align="center" className="fs-5 flex-paragraph">You've joined Tech Giants Inc. and are settling into your new role. Your team is working on a major update to the mobile app, and you're assigned a challenging task:
            </p>
            <p align="center" className="fs-5 flex-paragraph">Task: Implement a new feature that allows users to customize their app experience with themes and colors.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2)}>
                <p><strong>Follow the existing code structure -</strong>
                  Stick closely to the current code and patterns. This is safer but may limit your creativity.
              </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.3)}>
                <p><strong>Propose a new architecture -</strong>
                  Suggest a new, more flexible architecture that could better accommodate future changes. This is riskier but could lead to a more innovative solution.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.2: // tech giants
        return (
          <div>
            <h2 align="center">The Feature Rollout</h2>
            <p align="center" className="fs-5 flex-paragraph">You decide to follow the existing code structure to implement the new feature. It's a challenging task, but you manage to complete it on time and without major issues. As a result, you're given the opportunity to lead a small team on a new project. </p>
            <p align="center" className="fs-5 flex-paragraph">Task: Choose the technology stack for the web app.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21)}>
                <p><strong>React.js with Node.js and MongoDB - </strong>
                  A modern, JavaScript-based stack that offers flexibility and scalability.
                </p>
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
            <p align="center" className="fs-5">
              Challenge: The web app's performance is not meeting expectations, especially when handling large amounts of data.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.212)}>
                <p><strong>Optimize the front-end - </strong>
                  Focus on improving the React.js components and reducing unnecessary re-renders.
                </p>
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
              Users love the new chat feature, finding it easier to use. Your boss is impressed and offers you a leadership role in the company's AI research team.
            </p>
            <p align="center" className="fs-5">
              Task: Choose a project to lead in the AI research team.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21211)}>
                <p><strong>Sentiment Analysis -</strong>
                  Create a system that can understand if user feedback is positive, negative, or neutral. This can help improve customer support and product development.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.21212)}>
                <p><strong>Chatbot Development - </strong>
                  Make a chatbot that can help users with common questions and tasks. It uses advanced language techniques to understand and respond correctly.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2123)}>
                <p><strong>Speech Recognition -</strong>
                  Build a system that can understand and write down spoken words. This allows users to interact with the app without using their hands.
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
              You decided to lead the Chatbot Development project, creating a chatbot to help users with common questions. After months of hard work, the chatbot is a success, providing quick and accurate answers. Your leadership skills impress the company, and you're promoted to Chief Technology Officer (CTO).
            </p>
            <p align="center" className="fs-5">
              As CTO, you oversee all technical aspects of the company, including product development and technology strategy. You've come a long way from a junior engineer to a leader in innovation.
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
              You chose to lead the Speech Recognition project, creating a system that turns speech into text for hands-free app interaction. After months of hard work, your team successfully develops a robust speech recognition system.
              Users love the new feature, and it greatly improves the app's accessibility.
              Your leadership is recognized, and you're offered a higher leadership position in the company.
            </p>
            <p align="center" className="fs-5">
              Your journey as a software engineer has been challenging and rewarding, and your future in technology looks bright.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );

      case 1.2122: // tech giants
        return (
          <div>
            <h2 align="center">The Machine Learning Initiative
            </h2>
            <p align="center" className="fs-5">
              You've chosen to use Machine Learning (ML) to improve the app. Your team is excited, and you're ready for the challenges ahead. As you start, you face a big decision:
            </p>
            <p align="center" className="fs-5">
              Decision: Choose how to train the ML models.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21221)}>
                <p><strong>On-Device Training -</strong>
                  Train the ML models on the user's device to personalize recommendations without sending data to the server. This protects user privacy but needs more device resources.
                </p>
                </div>
              <div className="box" onClick={() => handleDecision(1.21222)}>
                <p><strong>Sentiment Analysis -</strong>
                  Train the ML models on the server using user data. This may raise privacy concerns but requires fewer device resources.
                </p>
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
                You've chosen to train the ML models on the user's device, prioritizing user privacy. This needs careful optimization to work well without draining battery or using too much storage. Your team works hard, and after many tries, you successfully deploy the new personalized features.
              </p>
              <p align="center" className="fs-5">
                Because of your success, you're offered a new role as a Technical Architect, focusing on designing complex software solutions. Your journey as a software engineer has been challenging and rewarding, and you've made a big impact.
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
            <h2 align="center">The ML Model Training
            </h2>
            <p align="center" className="fs-5">
              You've chosen to train the ML models on the server, focusing on powerful and personalized recommendations. Your team successfully adds these features to the app, and users love the personalized experience. Because of your
              success, you're promoted to Technical Architect.
            </p>
            <p align="center" className="fs-5">
              Congratulations on completing The Code Quest! Your journey as a software engineer has been challenging and rewarding, leading to exciting opportunities and growth.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.21223: // tech giants
        return (
          <div>
            <h2 align="center">The Image Recognition Project</h2>
            <p align="center" className="fs-5">
              You've chosen to add image recognition capabilities to the app using Computer Vision (CV). The team works hard to implement this feature, and it's a hit with users, making the app more engaging and popular. Because of your
              successful integration of CV, you're promoted to Technical Architect.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );


      case 1.213: // tech giants
        return (
          <div>
            <h2 align="center">The Launch Delay</h2>
            <p align="center" className="fs-5">
              You've chosen to use React.js with Node.js and MongoDB for the web app project. Everything is going well, but a critical security issue is found during a security audit. Fixing it will take two weeks, delaying the launch.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2131)}>
                <p><strong>Delay the launch -</strong>
                  Fix the security issue before launching, ensuring the app is secure but risking losing momentum and user interest.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2132)}>
                <p><strong>Launch as is - </strong>
                  Launch the app without fixing the issue, risking security problems but keeping momentum and user interest.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.2131: // tech giants
        return (
          <div>
            <h2 align="center">The Security Fix</h2>
            <p align="center" className="fs-5">
              You've decided to delay the launch to fix the security issue. After two weeks of hard work, the problem is solved, and the app is ready for launch. Your dedication and leadership are recognized, and you're offered a promotion
              to a senior developer role.
            </p>
            <p align="center" className="fs-5">
              As a senior developer, you'll have more responsibility and influence over projects. Do you accept the promotion?
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.21311)}>
                <p><strong>Accept the promotion</strong></p>
              </div>
              <div className="box" onClick={() => handleDecision(1.21312)}>
                <p><strong>Decline the promotion</strong></p>
              </div>
            </div>
          </div>
        );
        case 1.21311: // tech giants
        return (
          <div>
            <h2 align="center">The New Role</h2>
            <p align="center" className="fs-5">
              Congratulations on accepting the promotion! You've overcome challenges and grown in your career as a software engineer. As a senior developer, you'll continue to learn and make a difference in the tech world.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons! </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21312: // tech giants
        return (
          <div>
            <h2 align="center">The Decision</h2>
            <p align="center" className="fs-5">
              You've chosen to stay in your current role, focusing on hands-on development. This decision allows you to keep improving your technical skills and working on exciting projects at Tech Giants Inc.
              Your journey in the tech world continues, and there are more challenges and adventures ahead.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons! </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.2132: // tech giants
        return (
          <div>
            <h2 align="center">The App Launch
            </h2>
            <p align="center" className="fs-5">
              You've decided to launch the app without fixing a security issue. It goes well initially, but the security problem is later exploited, leading to a data breach. The team fixes the issue and improves security measures. Despite
              this setback, the app remains popular, and you're recognized for your leadership during the crisis.
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
            <h2 align="center">The Next Step
            </h2>
            <p align="center" className="fs-5">
              Congratulations on accepting the promotion! You've shown resilience and leadership in your career as a software engineer. As a senior developer, you'll continue to learn and contribute to the tech world.
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
              You've decided not to take the promotion to a senior developer role, choosing to focus on hands-on development. This allows you to keep improving your technical skills and work on exciting projects at Tech Giants Inc.
            </p>
            <p align="center" className="fs-5">
              Keep coding and exploring new horizons! </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.22: // tech giants
        return (
          <div>
            <h2 align="center">The Project Launch
            </h2>
            <p align="center" className="fs-5">
              You've chosen technologies for a new web app project. Just before the launch, a security issue is found that could compromise user data.
            </p>
            <p align="center" className="fs-5">
              Decide how to handle the security issue before the launch.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.221)}>
                <p><strong> Delay the launch -</strong>
                  Fix the security issue before launch, which might delay the project and upset stakeholders.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.222)}>
                <p><strong>Launch as planned -</strong>
                  Proceed with the launch and fix the security issue later, risking user data but keeping the project on track.
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
              You've decided to delay the launch to fix a security issue. Your team works hard to address the vulnerability and protect user data. The launch is rescheduled successfully, and the app is well-received.
              As a result, you're offered a promotion to a senior developer role with more responsibilities.
            </p>
            <p align="center" className="fs-5">
              Task: Choose your area of specialization for the new role.
            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.2211)}>
                <p><strong>Security Specialist -</strong>
                  Focus on ensuring the security and integrity of the company's software products.
                </p>
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
                Congratulations on choosing the path of a Technical Architect! In your new role, you excel at designing and overseeing the implementation of complex software solutions for Tech Giants Inc. Your attention to detail and commitment to technical excellence ensure that the company's projects meet the highest standards.
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
                  Issue a public apology, offer compensation to affected users, and take steps to improve security and regain trust.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2222)}>
                <p><strong>Investigate and fix the vulnerability - </strong>
                  Conduct a thorough investigation to identify the cause of the breach, fix the vulnerability, and implement additional security measures to prevent future breaches.
                  investigation to identify the cause of the breach, fix the vulnerability, and implement additional security measures to prevent future breaches.
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
              You come up with a new plan for a feature that lets users customize their experience. Your team likes your idea, and you get the go-ahead to make it happen.
            </p>
            <p align="center" className="fs-5">
              Task: Make the new feature work with the rest of the app.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.31)}>
                <p><strong>Change the code to fit the new plan - </strong>
                  Spend extra time making sure the new feature fits in with the rest of the app. This will take longer but will make the app easier to work with in the future.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.31: // tech giants
        return (
          <div>
            <h2 align="center">The Code Cleanup</h2>
            <p align="center" className="fs-5">
              You decide to change the code to fit the new plan. It's a big job, but you're determined to do it right.
              After a few weeks, the changes are done. The code is now easier to work with, and your team is impressed with your work.
            </p>
            <p align="center" className="fs-5">
              Task: Make sure everything works well and is fast.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.311)}>
                <p><strong>Fix any problems and make it run smoothly -</strong>
                  This will take a bit more time but will make the new feature work perfectly.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.312)}>
                <p><strong>Launch it as is and fix problems later - </strong>
                  This will let you launch on time but might mean some problems at first.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.311: // tech giants
          return (
            <div>
              <h2 align="center">The Successful Launch</h2>
              <p align="center" className="fs-5">
                You spend extra time making sure everything works well. The new feature is ready to go.
              </p>
              <p align="center" className="fs-5">
                Task: Launch the new feature and see what people think. People like the new feature, and your team is happy with your work.
              </p>
              <div className="inner-container">
                <div className="box" onClick={() => handleDecision(1.3111)}>
                  <p>Great job! Your adventure as a software engineer is just beginning, and there are many more challenges and opportunities ahead.</p>
                </div>
              </div>
            </div>
          );
        case 1.3111: // tech giants
          return (
            <div>
              <h2 align="center">The Successful Launch</h2>
              <p align="center" className="fs-5">
                After the successful launch and positive feedback, you continue to work closely with users to make the app even better. Your hard work pays off, and the app becomes even more popular.
              </p>
              <p align="center" className="fs-5">
                You start mentoring other developers and working on important projects. Your skills and leadership make you an important part of the team.
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
              With the deadline coming up, you decide to launch the new feature even though there might be some problems. Users can now use the new feature in the app.
            </p>
            <p align="center" className="fs-5">
              Task: Fix the problems users report with the new feature.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.3121)}>
                <p><strong>Address all reported issues immediately - </strong>
                  Spend extra time fixing all the reported issues to make sure the feature works perfectly.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.3122)}>
                <p><strong>Prioritize critical issues first - </strong>
                  Focus on fixing the most important problems first, then work on the less important ones.
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
              You dive into fixing the reported issues, working hard to ensure the app runs smoothly. With your team's help, you quickly find and fix bugs while making the app faster where needed.
            </p>
            <p align="center" className="fs-5">
              Task: Keep listening to user feedback and fixing any remaining issues to make the app even better.
            </p>
            <p align="center" className="fs-5">
              Opportunity: A big tech conference wants speakers for a panel on cool software ideas. Your team picks you to share what you did on the app project.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.31211)}>
                <p><strong>Accept the nomination and prepare to speak at the conference -</strong>
                  This could be a great chance to show off and meet other tech people.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.31212)}>
                <p><strong>Decline the nomination and focus on your current responsibilities - </strong>
                  You're busy fixing things and want to keep your promises.
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
              You say yes and start getting ready. You make a good presentation that talks about what you did on the app. On the day, you give a great talk. What you say makes sense to others in tech, and they like it. You also meet other tech people, which might help you later.
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
              You say no to focus on fixing the app. Your hard work pays off, and soon, the app works well with few issues. Your team sees your good work and gives you a better job as a senior engineer. Now, you have more work and chances to lead and help others.
            </p>
            <p align="center" className="fs-5">
              Task: Embrace your new job and keep making the app better. You think about how far you've come from starting at a big tech company to now leading a big project and getting a promotion.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );

 // Startup Industries
      case 2: // tech giants
        return (
          <div>
            <h2 align="center">Welcome to Startup Innovations</h2>
            <p align="center" className="fs-5">
              You've joined Startup Innovations, a small but promising company. Your first project is to develop a new feature for their flagship product, a mobile app that helps people track their fitness goals.
            </p>
            <p align="center" className="fs-5">
              Challenge 1: Feature Development
              The feature you're working on is a social sharing feature that allows users to share their progress with friends. You need to decide which technology to use for this feature:            </p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.1)}>
                <p><strong>React Native -
                </strong>
                  Fast development time, but you're less familiar with it.                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.2)}>
                <p><strong>Native iOS/Android -</strong>
                  More challenging, but you're comfortable with it.                </p>
              </div>
            </div>
          </div>
        );
      case 2.1: //startup
        return (
          <div>
            <h2 align="center">React Native Challenges
            </h2>
            <p align="center" className="fs-5">
              You've chosen to use React Native for the social sharing feature. The development goes smoothly, but you encounter a bug that's difficult to trace. You can either:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.11)}>
                <p><strong>Debug the Issue Yourself -
                </strong>
                  Spend extra time figuring it out but gain valuable experience.
                </p>
                <p>
                  Your dedication and problem-solving skills impress the team. The CEO offers you a promotion to lead the next project—a complete redesign of the app's UI.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.12)}>
                <p><strong>Seek Help from a Senior Developer -</strong>
                  Get the bug fixed quickly but miss out on the learning opportunity
                </p>
              </div>
            </div>
          </div>
        );
      case 2.11: // startup
        return (
          <div>
            <h2 align="center">Problem-Solving</h2>
            <p align="center" className="fs-5">
              You roll up your sleeves and dive into debugging the issue. After several hours of digging through code and logs, you finally find the root cause—a typo in a variable name. You fix it, and the feature works perfectly!
            </p>
            <p align="center" className="fs-5">
              Your dedication and problem-solving skills impress the team. The CEO offers you a promotion to lead the next project—a complete redesign of the app's UI.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 2.12: // startup
        return (
          <div>
            <h2 align="center">Learning from Experience
            </h2>
            <p align="center" className="fs-5">
              You decide to seek help from a senior developer. They quickly identify the issue and guide you through the debugging process. You learn a lot from the experience and gain a better understanding of React Native's debugging
              tools.
            </p>
            <p align="center" className="fs-5">
              As the app gains popularity, the team decides to add more features and scale up the infrastructure. You're given the opportunity to lead the infrastructure scaling project.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.121)}>
                <p><strong>Debug the Issue Yourself -
                </strong>
                  Spend extra time figuring it out but gain valuable experience.
                </p>
                <p>
                  Your dedication and problem-solving skills impress the team. The CEO offers you a promotion to lead the next project—a complete redesign of the app's UI.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.122)}>
                <p><strong>Seek Help from a Senior Developer -</strong>
                  Get the bug fixed quickly but miss out on the learning opportunity
                </p>
              </div>
            </div>
          </div>
        );
        case 2.2: // startup
        return (
          <div>
            <h2 align="center">The Path of Mastery
            </h2>
            <p align="center" className="fs-5">
              You dive into the world of native iOS and Android development, impressing your team with your skills. Your next challenge is to lead a project to improve the app's performance.
              You have two approaches to choose from:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.21)}>
                <p><strong>Code Optimization-
                </strong>
                  Spend time refactoring and optimizing the existing codebase for better performance.                </p>
                <p>
                  Your dedication and problem-solving skills impress the team. The CEO offers you a promotion to lead the next project—a complete redesign of the app's UI.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.22)}>
                <p><strong>Feature Freeze -</strong>
                  Implement a feature freeze to focus solely on performance improvements without adding new features.                </p>
              </div>
            </div>
          </div>
        );
        case 2.21: // startup
        return (
          <div>
            <h2 align="center">The Code Wizard
            </h2>
            <p align="center" className="fs-5">
              You dive into the world of native iOS and Android development, impressing your team with your skills. Your next challenge is to lead a project to improve the app's performance.
              You have two approaches to choose from:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.211)}>
                <p><strong>Technical Architect -
                </strong>
                  Focus on designing and overseeing the implementation of complex software solutions.                </p>
                <p>
                  Your dedication and problem-solving skills impress the team. The CEO offers you a promotion to lead the next project—a complete redesign of the app's UI.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.212)}>
                <p><strong>Team Lead -</strong>
                  Lead a team of developers, ensuring successful project delivery.                </p>
              </div>
            </div>
          </div>
        );
         case 2.211: // startup
        return (
          <div>
            <h2 align="center">The AI Integration
            </h2>
            <p align="center" className="fs-5">
              You successfully oversee the outsourcing of AI development, and the integration into the app is a success. The app now offers personalized recommendations to users, improving user engagement.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.2111)}>
                <p><strong>Implement End-to-End Encryption -
                </strong>
                  Encrypt all user data to ensure it's only accessible to the intended recipients.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.2112)}>
                <p><strong>Implement Two-Factor Authentication (2FA)-</strong>
                  Add an extra layer of security by requiring users to verify their identity using a second factor, such as a code sent to their phone.
                </p>
              </div>
            </div>
          </div>
        );
            case 2.2111: // startup
        return (
          <div>
            <h2 align="center">The Secure Future</h2>
            <p align="center" className="fs-5">
              With end-to-end encryption implemented, the app's security is greatly enhanced, earning praise from users and industry experts alike. Your journey as a Technical Architect has been filled with challenges and successes, shaping you into a skilled and respected software engineer.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
            case 2.2112: // startup
        return (
          <div>
            <h2 align="center">The Journey Continues</h2>
            <p align="center" className="fs-5">
              With Two-Factor Authentication (2FA) implemented, the app's security is significantly improved, and users feel more confident in using it. Your journey as a Technical Architect continues, with new challenges and adventures awaiting you.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 2.212: // startup
        return (
          <div>
            <h2 align="center">Leadership Journey
            </h2>
            <p align="center" className="fs-5">
              You dive into the world of native iOS and Android development, impressing your team with your skills. Your next challenge is to lead a project to improve the app's performance.
              You have two approaches to choose from:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.2121)}>
                <p><strong>Team Building Activities -
                </strong>
                  Organize team-building activities to foster better relationships and improve communication.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.2122
              )}>
                <p><strong>One-on-One Meetings - </strong>
                  Have individual meetings with team members to understand their concerns and mediate conflicts.
                </p>
                </div>
            </div>
          </div>
        );
        case 2.2121: // startup
        return (
          <div>
            <h2 align="center">The Journey Continues</h2>
            <p align="center" className="fs-5">
              Your team-building activities are a success! The team bonds over shared experiences, and communication improves. Your leadership skills are praised, and your team becomes known for its cohesion and productivity.
            </p>
            <p align="center" className="fs-5">
              Congratulations on completing The Code Quest! Your journey as a software engineer has been filled with challenges and opportunities, shaping you into a skilled and respected professional in the field.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 2.2122: // startup
        return (
          <div>
            <h2 align="center">The Journey Continues</h2>
            <p align="center" className="fs-5">
              Congratulations on completing The Code Quest! As a Team Lead, you've successfully navigated through various challenges and emerged as a strong leader. Your journey as a software engineer continues, with new adventures and opportunities ahead. Keep coding, keep learning, and keep shaping the future of technology!
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 2.22: // startup
        return (
          <div>
            <h2 align="center">The Rise of Innovation
            </h2>
            <p align="center" className="fs-5">
              You lead the team in implementing a feature freeze, allowing you to focus entirely on improving the app's performance. Your dedication pays off, and the app becomes faster and more responsive than ever.
            </p>
            <p align="center" className="fs-5">
              Challenge 3: The Next Big Thing
              With the success of the performance improvements, the company's CEO approaches you with an exciting new project: to develop a revolutionary AI-powered feature for the app.
              Decision Time: AI Integration
              You have two options for integrating AI into the app:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.221)}>
                <p><strong>Voice Assistant -</strong>
                  Develop a voice-controlled assistant that helps users track their fitness goals and provides personalized recommendations.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.222)}>
                <p><strong>Image Recognition -</strong>
                  Implement image recognition technology to help users analyze their workout routines and provide feedback.
                </p>
              </div>
            </div>
          </div>
        );
      case 2.221: // startup
        return (
          <div>
            <h2 align="center"> The Voice of Success
            </h2>
            <p align="center" className="fs-5">
              You lead the team in developing a voice-controlled assistant for the app, which becomes a huge success. Users love the new feature, and the app's popularity soars.
            </p>
            <p align="center" className="fs-5">
              Challenge 4: Scaling Up
              With the app's user base growing rapidly, you face the challenge of scaling up the infrastructure to handle the increased traffic and data processing requirements.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.2211)}>
                <p><strong>Cloud Migration -</strong>
                  Develop a voice-controlled assistant that helps users track their fitness goals and provides personalized recommendations.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.2212)}>
                <p><strong>On-Premises Upgrade -</strong>
                  Implement image recognition technology to help users analyze their workout routines and provide feedback.
                </p>
              </div>
            </div>
          </div>
        );
       case 2.2211: // startup
        return (
          <div>
            <h2 align="center">The Journey Continues</h2>
            <p align="center" className="fs-5">
              You successfully migrate the app to a cloud-based infrastructure, improving its scalability and reliability. The app continues to grow in popularity, and you are recognized as a key player in its success.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 2.2212: // startup
        return (
          <div>
            <h2 align="center">The Legacy of Innovation</h2>
            <p align="center" className="fs-5">
              You choose to upgrade the on-premises infrastructure, ensuring that the app can handle the increased load and maintain its high level of performance. Your dedication to innovation and problem-solving has left a lasting legacy at Startup Innovations, and your career as a software engineer continues to thrive.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 2.222: // startup
        return (
          <div>
            <h2 align="center"> The Next Level
            </h2>
            <p align="center" className="fs-5">
              Your success at Startup Innovations catches the attention of a larger company, Tech Titans Corp., who offers you a position as a Senior Developer with a focus on AI integration.
            </p>
            <p align="center" className="fs-5">
              Final Decision: Do you accept the offer from Tech Titans Corp. and embrace the new challenges that await you?
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(2.2221)}>
                <p><strong>Accept the offer from Tech Titans Corp.</strong>
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2.2222)}>
                <p><strong>Stay at Startup Innovations and continue to innovate.</strong>
                </p>
              </div>
            </div>
          </div>
        );
        case 2.2221: // startup
        return (
          <div>
            <h2 align="center">The Future Awaits
            </h2>
            <p align="center" className="fs-5">
              You accept the offer from Tech Titans Corp., stepping into a new role as a Senior Developer with a focus on AI integration. Your journey as a software engineer has led you to new heights, and the challenges and opportunities that lie ahead are boundless. Congratulations on completing The Code Quest and shaping your career as a software engineer! Your adventure continues with new adventures and challenges in the world of technology.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 2.2222: // startup
        return (
          <div>
            <h2 align="center">The Future Awaits
            </h2>
            <p align="center" className="fs-5">
              You decide to stay at Startup Innovations, continuing to innovate and push the boundaries of what's possible in the world of software development. Your dedication to your craft and passion for innovation lead you to create even more groundbreaking features for the app, solidifying your reputation as a leader in the field.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
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
