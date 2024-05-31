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
            <h2 align="center">Career as a Web Developer</h2>
            <p align="center" className="fs-5">Choose your next step in your web development career, incorporating elements of Hawaii and its culture.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p><strong>Frontend Development - </strong>
                  Focus on building user interfaces and enhancing user experiences.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Backend Development - </strong>
                  Work on server-side logic and database management.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="top-text">
            <h2 align="center">Frontend Development</h2>
            <p align="center" className="fs-5">Choose a specialization within frontend development.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(3)}>
                <p><strong>React - </strong>
                  Build dynamic web applications with React.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(4)}>
                <p><strong>Vue - </strong>
                  Create interactive web interfaces using Vue.js.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="top-text">
            <h2 align="center">Backend Development</h2>
            <p align="center" className="fs-5">Choose a backend technology to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(5)}>
                <p><strong>Node.js - </strong>
                  Build scalable server-side applications with Node.js.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(6)}>
                <p><strong>Python/Django - </strong>
                  Create robust backend services with Python and Django.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="top-text">
            <h2 align="center">React</h2>
            <p align="center" className="fs-5">Choose a specific area of React development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(7)}>
                <p><strong>State Management - </strong>
                  Master state management with Redux or Context API.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(8)}>
                <p><strong>Component Libraries - </strong>
                  Use component libraries like Material-UI or Ant Design.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="top-text">
            <h2 align="center">Vue</h2>
            <p align="center" className="fs-5">Choose a specific area of Vue development to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(9)}>
                <p><strong>Vuex - </strong>
                  Manage state in Vue applications with Vuex.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(10)}>
                <p><strong>Nuxt.js - </strong>
                  Use Nuxt.js to create universal Vue applications.
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="top-text">
            <h2 align="center">Node.js</h2>
            <p align="center" className="fs-5">Choose a specific area of Node.js development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(11)}>
                <p><strong>API Development - </strong>
                  Create RESTful APIs with Node.js.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(12)}>
                <p><strong>Microservices - </strong>
                  Develop microservices architecture using Node.js.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="top-text">
            <h2 align="center">Python/Django</h2>
            <p align="center" className="fs-5">Choose a specific area of Python/Django development to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(13)}>
                <p><strong>Web Applications - </strong>
                  Build web applications using the Django framework.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(14)}>
                <p><strong>Data Analysis - </strong>
                  Use Django for data analysis and visualization.
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="top-text">
            <h2 align="center">State Management</h2>
            <p align="center" className="fs-5">Choose a state management library to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(15)}>
                <p><strong>Redux - </strong>
                  Master state management with Redux.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(16)}>
                <p><strong>Context API - </strong>
                  Manage state using React's Context API.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="top-text">
            <h2 align="center">Component Libraries</h2>
            <p align="center" className="fs-5">Choose a component library to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(17)}>
                <p><strong>Material-UI - </strong>
                  Build with Material-UI for a sleek, modern look.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(18)}>
                <p><strong>Ant Design - </strong>
                  Use Ant Design for robust and flexible components.
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="top-text">
            <h2 align="center">Vuex</h2>
            <p align="center" className="fs-5">Choose a specific aspect of Vuex to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(19)}>
                <p><strong>State Management - </strong>
                  Master state management with Vuex.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(20)}>
                <p><strong>Modules - </strong>
                  Use Vuex modules to organize your store.
                </p>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="top-text">
            <h2 align="center">Nuxt.js</h2>
            <p align="center" className="fs-5">Choose a specific aspect of Nuxt.js to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(21)}>
                <p><strong>SSR - </strong>
                  Use Server-Side Rendering (SSR) to improve performance.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(22)}>
                <p><strong>Static Site Generation - </strong>
                  Generate static sites with Nuxt.js for better SEO.
                </p>
              </div>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="top-text">
            <h2 align="center">API Development</h2>
            <p align="center" className="fs-5">Choose a specific aspect of API development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(23)}>
                <p><strong>REST - </strong>
                  Create RESTful APIs with Node.js.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(24)}>
                <p><strong>GraphQL - </strong>
                  Use GraphQL to build flexible and efficient APIs.
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="top-text">
            <h2 align="center">Microservices</h2>
            <p align="center" className="fs-5">Choose a specific aspect of microservices to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(25)}>
                <p><strong>Service Communication - </strong>
                  Ensure efficient communication between microservices.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(26)}>
                <p><strong>Scalability - </strong>
                  Design microservices for scalability and performance.
                </p>
              </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="top-text">
            <h2 align="center">Web Applications</h2>
            <p align="center" className="fs-5">Choose a specific aspect of web application development to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(27)}>
                <p><strong>Authentication - </strong>
                  Implement secure user authentication systems.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(28)}>
                <p><strong>Performance Optimization - </strong>
                  Optimize web application performance for better user experience.
                </p>
              </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="top-text">
            <h2 align="center">Data Analysis</h2>
            <p align="center" className="fs-5">Choose a specific area of data analysis to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(29)}>
                <p><strong>Data Visualization - </strong>
                  Use Django to create interactive data visualizations.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(30)}>
                <p><strong>Data Processing - </strong>
                  Process and analyze large datasets efficiently.
                </p>
              </div>
            </div>
          </div>
        );
      case 15:
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
      case 16:
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
      case 17:
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
      case 18:
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
      case 19:
        return (
          <div>
            <h2 align="center">State Management</h2>
            <p align="center" className="fs-5">
              You've chosen to master state management with Vuex. Your applications are now highly efficient and scalable.
              Congratulations! Your expertise in Vuex state management makes you a valuable asset to any development team.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 20:
        return (
          <div>
            <h2 align="center">Modules</h2>
            <p align="center" className="fs-5">
              You've chosen to use Vuex modules to organize your store. Your structured approach to state management has improved the maintainability of your projects.
              Congratulations! Your skills in using Vuex modules are highly valued in the industry.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 21:
        return (
          <div>
            <h2 align="center">Server-Side Rendering (SSR)</h2>
            <p align="center" className="fs-5">
              You've chosen to use Server-Side Rendering (SSR) with Nuxt.js. Your applications now perform better and provide a smoother user experience.
              Congratulations! Your expertise in SSR is highly valued, leading to better performance and SEO for your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 22:
        return (
          <div>
            <h2 align="center">Static Site Generation</h2>
            <p align="center" className="fs-5">
              You've chosen to generate static sites with Nuxt.js. Your applications are now faster and more secure, providing an excellent user experience.
              Congratulations! Your skills in static site generation have improved the performance and SEO of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 23:
        return (
          <div>
            <h2 align="center">REST</h2>
            <p align="center" className="fs-5">
              You've chosen to create RESTful APIs with Node.js. Your APIs are now highly efficient and easy to maintain.
              Congratulations! Your expertise in REST has made your applications more robust and scalable.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 24:
        return (
          <div>
            <h2 align="center">GraphQL</h2>
            <p align="center" className="fs-5">
              You've chosen to use GraphQL to build flexible and efficient APIs. Your ability to handle complex data requirements has improved the performance of your applications.
              Congratulations! Your skills in GraphQL have made you a sought-after developer in the industry.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 25:
        return (
          <div>
            <h2 align="center">Service Communication</h2>
            <p align="center" className="fs-5">
              You've chosen to ensure efficient communication between microservices. Your applications are now more reliable and scalable.
              Congratulations! Your expertise in microservices communication has enhanced the performance of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 26:
        return (
          <div>
            <h2 align="center">Scalability</h2>
            <p align="center" className="fs-5">
              You've chosen to design microservices for scalability and performance. Your applications can now handle higher loads and provide a better user experience.
              Congratulations! Your skills in scalability have made your applications more efficient and robust.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 27:
        return (
          <div>
            <h2 align="center">Authentication</h2>
            <p align="center" className="fs-5">
              You've chosen to implement secure user authentication systems. Your applications are now more secure, protecting user data effectively.
              Congratulations! Your expertise in authentication has made your applications more reliable and trustworthy.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 28:
        return (
          <div>
            <h2 align="center">Performance Optimization</h2>
            <p align="center" className="fs-5">
              You've chosen to optimize web application performance. Your applications now load faster and provide a smoother user experience.
              Congratulations! Your skills in performance optimization have enhanced the user satisfaction and efficiency of your projects.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 29:
        return (
          <div>
            <h2 align="center">Data Visualization</h2>
            <p align="center" className="fs-5">
              You've chosen to use Django to create interactive data visualizations. Your applications now provide insightful and engaging data presentations.
              Congratulations! Your expertise in data visualization has made your projects more informative and user-friendly.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 30:
        return (
          <div>
            <h2 align="center">Data Processing</h2>
            <p align="center" className="fs-5">
              You've chosen to process and analyze large datasets efficiently. Your applications now handle data more effectively, providing better insights.
              Congratulations! Your skills in data processing have improved the performance and reliability of your projects.
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
