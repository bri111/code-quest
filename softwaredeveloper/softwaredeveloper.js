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
            <h2 align="center">Career as a Software Developer</h2>
            <p align="center" className="fs-5">Choose your next step in your software development career.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p><strong>Web Development - </strong>
                  Focus on building websites and web applications.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Mobile Development - </strong>
                  Develop applications for mobile devices.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="top-text">
            <h2 align="center">Web Development</h2>
            <p align="center" className="fs-5">Choose a specialization within web development.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(3)}>
                <p><strong>Frontend Development - </strong>
                  Focus on the user interface and experience.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(4)}>
                <p><strong>Backend Development - </strong>
                  Work on server-side logic and databases.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="top-text">
            <h2 align="center">Mobile Development</h2>
            <p align="center" className="fs-5">Choose a platform to develop for.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(5)}>
                <p><strong>iOS Development - </strong>
                  Develop applications for Apple devices.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(6)}>
                <p><strong>Android Development - </strong>
                  Create applications for Android devices.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="top-text">
            <h2 align="center">Frontend Development</h2>
            <p align="center" className="fs-5">Choose a technology to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(7)}>
                <p><strong>React - </strong>
                  Build dynamic web applications with React.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(8)}>
                <p><strong>Angular - </strong>
                  Develop robust web apps with Angular.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="top-text">
            <h2 align="center">Backend Development</h2>
            <p align="center" className="fs-5">Choose a backend technology to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(9)}>
                <p><strong>Node.js - </strong>
                  Build scalable server-side applications with Node.js.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(10)}>
                <p><strong>Python - </strong>
                  Create robust backend services with Python.
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="top-text">
            <h2 align="center">iOS Development</h2>
            <p align="center" className="fs-5">Choose a specific area of iOS development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(11)}>
                <p><strong>UI/UX Design - </strong>
                  Focus on creating intuitive and beautiful user interfaces.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(12)}>
                <p><strong>Performance Optimization - </strong>
                  Ensure your apps run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="top-text">
            <h2 align="center">Android Development</h2>
            <p align="center" className="fs-5">Choose a specific area of Android development to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(13)}>
                <p><strong>Kotlin - </strong>
                  Develop modern Android apps using Kotlin.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(14)}>
                <p><strong>Java - </strong>
                  Create robust Android applications with Java.
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="top-text">
            <h2 align="center">React</h2>
            <p align="center" className="fs-5">Choose a specific aspect of React development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(15)}>
                <p><strong>State Management - </strong>
                  Master state management with Redux or Context API.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(16)}>
                <p><strong>Component Libraries - </strong>
                  Use component libraries like Material-UI or Ant Design.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="top-text">
            <h2 align="center">Angular</h2>
            <p align="center" className="fs-5">Choose a specific area of Angular development to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(17)}>
                <p><strong>Reactive Forms - </strong>
                  Build dynamic forms with Angular Reactive Forms.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(18)}>
                <p><strong>NgRx - </strong>
                  Manage state in Angular applications with NgRx.
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="top-text">
            <h2 align="center">Node.js</h2>
            <p align="center" className="fs-5">Choose a specific area of Node.js development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(19)}>
                <p><strong>API Development - </strong>
                  Create RESTful APIs with Node.js.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(20)}>
                <p><strong>Microservices - </strong>
                  Develop microservices architecture using Node.js.
                </p>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="top-text">
            <h2 align="center">Python</h2>
            <p align="center" className="fs-5">Choose a specific area of Python development to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(21)}>
                <p><strong>Django - </strong>
                  Build web applications using the Django framework.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(22)}>
                <p><strong>Flask - </strong>
                  Create lightweight web applications with Flask.
                </p>
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="top-text">
            <h2 align="center">State Management</h2>
            <p align="center" className="fs-5">Choose a state management library to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(23)}>
                <p><strong>Redux - </strong>
                  Master state management with Redux.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(24)}>
                <p><strong>Context API - </strong>
                  Manage state using React's Context API.
                </p>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="top-text">
            <h2 align="center">Component Libraries</h2>
            <p align="center" className="fs-5">Choose a component library to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(25)}>
                <p><strong>Material-UI - </strong>
                  Build with Material-UI for a sleek, modern look.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(26)}>
                <p><strong>Ant Design - </strong>
                  Use Ant Design for robust and flexible components.
                </p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="top-text">
            <h2 align="center">Reactive Forms</h2>
            <p align="center" className="fs-5">Choose a specific aspect of reactive forms to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(27)}>
                <p><strong>Form Validation - </strong>
                  Implement robust form validation techniques.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(28)}>
                <p><strong>Dynamic Forms - </strong>
                  Create dynamic forms that change based on user input.
                </p>
              </div>
            </div>
          </div>
        );
      case 18:
        return (
          <div className="top-text">
            <h2 align="center">NgRx</h2>
            <p align="center" className="fs-5">Choose a specific area of NgRx to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(29)}>
                <p><strong>State Management - </strong>
                  Master state management with NgRx.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(30)}>
                <p><strong>Effects - </strong>
                  Handle side effects with NgRx Effects.
                </p>
              </div>
            </div>
          </div>
        );
      case 23:
        return (
          <div>
            <h2 align="center">Redux</h2>
            <p align="center" className="fs-5">
              You've chosen to specialize in state management with Redux. Your expertise allows you to build highly efficient and maintainable React applications.
              Congratulations! Your skills in managing application state are highly valued, leading to better job opportunities and professional growth.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 24:
        return (
          <div>
            <h2 align="center">Context API</h2>
            <p align="center" className="fs-5">
              You've chosen to master state management using React's Context API. Your ability to handle application state effectively enhances the performance and user experience of your applications.
              Congratulations! Your knowledge of Context API makes you a sought-after developer in the industry.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 25:
        return (
          <div>
            <h2 align="center">Material-UI</h2>
            <p align="center" className="fs-5">
              You've chosen to specialize in Material-UI. Your applications now have a sleek, modern look that appeals to users.
              Congratulations! Your design skills with Material-UI are recognized, and you land exciting projects that showcase your talents.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 26:
        return (
          <div>
            <h2 align="center">Ant Design</h2>
            <p align="center" className="fs-5">
              You've chosen to use Ant Design for your projects. Your ability to build robust and flexible components sets you apart in the field.
              Congratulations! Your proficiency with Ant Design earns you a reputation as a top-notch developer.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 27:
        return (
          <div>
            <h2 align="center">Form Validation</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on form validation. Your applications are now highly reliable, with fewer errors and better user input handling.
              Congratulations! Your expertise in form validation makes your applications stand out for their robustness.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 28:
        return (
          <div>
            <h2 align="center">Dynamic Forms</h2>
            <p align="center" className="fs-5">
              You've chosen to create dynamic forms. Your applications are now more interactive and responsive to user input.
              Congratulations! Your skill in building dynamic forms is highly appreciated, leading to more engaging user experiences.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 29:
        return (
          <div>
            <h2 align="center">NgRx State Management</h2>
            <p align="center" className="fs-5">
              You've chosen to master state management with NgRx. Your applications are now highly efficient and scalable.
              Congratulations! Your expertise in NgRx state management makes you a valuable asset to any development team.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 30:
        return (
          <div>
            <h2 align="center">NgRx Effects</h2>
            <p align="center" className="fs-5">
              You've chosen to handle side effects with NgRx Effects. Your applications are now more reliable and easier to maintain.
              Congratulations! Your knowledge of NgRx Effects enhances your ability to build complex applications with ease.
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
