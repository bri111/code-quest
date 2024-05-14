const DecisionPoints = () => {
  const [step, setStep] = React.useState(0);

  const handleDecision = (nextStep) => {
    setStep(nextStep);
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
              <div className="box" onClick={() => handleDecision(1-2)}>
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
              <div className="box" onClick={() => handleDecision(1-1-1)}>
                <p><strong>React.js with Node.js and MongoDB - </strong>
                  A modern, JavaScript-based stack that offers flexibility and scalability.</p>
              </div>
              <div className="box" onClick={() => handleDecision(1-1-2)}>
                <p><strong>Angular with ASP.NET Core and SQL Server -</strong>
                  A more traditional stack with strong enterprise support and tooling.</p>
              </div>
            </div>
          </div>
        );
      case 1-1-1: // tech giants
        return (
          <div>
            <h2 align="center">The Web App Development</h2>
            <p align="center" className="fs-5">You choose to use React.js with Node.js and MongoDB for
              the web app development. Your team starts making progress, but you encounter a challenge: </p>
            <p align="center" className="fs-5">Challenge: The web app's performance is not meeting expectations, especially when handling large amounts of data. Your team is divided on the best approach to optimize performance.</p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1-1-1-1)}>
                <p><b>Optimize the front-end -</b>
                  Focus on optimizing the React.js components and reducing unnecessary re-renders. This may involve refactoring code and implementing better state management.
                </p>
                <p align="center" className="fs-5">Task: Choose the technology stack for the web app.</p>

                <div className="box" onClick={() => handleDecision(1-1-1-2)}>
                  <p><b>Optimize the back-end - </b>
                    Improve the Node.js server's performance by optimizing database queries, caching data, and optimizing server-side code.                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 1-1-1-1: // tech giants
        return (
          <div>
            <h2 align="center">The Web App Development</h2>
            <p align="center" className="fs-5">You choose to use React.js with Node.js and MongoDB for
              the web app development. Your team starts making progress, but you encounter a challenge: </p>
            <p align="center" className="fs-5">Challenge: The web app's performance is not meeting expectations, especially when handling large amounts of data. Your team is divided on the best approach to optimize performance.</p>

            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1-1-1-1-1)}>
                <p><b>Optimize the front-end -</b>
                  Focus on optimizing the React.js components and reducing unnecessary re-renders. This may involve refactoring code and implementing better state management.
                </p>
                <p align="center" className="fs-5">Task: Choose the technology stack for the web app.</p>

                <div className="box" onClick={() => handleDecision(1-1-1-2)}>
                  <p><b>Optimize the back-end - </b>
                    Improve the Node.js server's performance by optimizing database queries, caching data, and optimizing server-side code.                  </p>
                </div>
              </div>
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
