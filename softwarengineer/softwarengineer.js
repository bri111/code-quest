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
          <div>
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
            <h2 align="center">The On-Device Training
            </h2>
            <p align="center" className="fs-5">
              You've chosen to implement on-device training for the ML models, prioritizing user privacy. This approach requires careful optimization to ensure that the models can be trained efficiently on the user's device without draining battery or consuming too much storage. Your team works hard to optimize the training process, and after several iterations,
              you successfully deploy the new personalized recommendations and predictive features.            </p>
            <p align="center" className="fs-5">
              As a result of your successful implementation, you're offered a new role as a Technical Architect, focusing on designing and overseeing the implementation of complex software solutions. Your journey as a software engineer has been full of challenges and successes, and you've made a significant impact on the app and its users.
            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.21222: // tech giants
        return (
          <div>
            <h2 align="center">The Successful Integration
            </h2>
            <p align="center" className="fs-5">
              You've chosen to implement server-side training for the ML models, prioritizing powerful and personalized recommendations. Your team successfully integrates the ML features into the app, and users are thrilled with the personalized experience. As a result of your successful project, you're recognized as a key contributor and are offered a promotion to Technical Architect.
            </p>
            <p align="center" className="fs-5">
              Congratulations on completing The Code Quest and shaping your career as a software engineer! Your journey has been full of challenges and decisions, and your choices have led to exciting opportunities and growth.            </p>

            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button> {/* Button to go back to home */}
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
