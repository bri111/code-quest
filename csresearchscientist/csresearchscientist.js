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
            <h2 align="center">Computer Science Researcher</h2>
            <p align="center" className="fs-5">Choose your next job as a CS researcher. Take a step into a day in the life of a researcher!</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1)}>
                <p><strong>University Research Lab - </strong>
                  A prestigious university lab offering a position to research artificial intelligence and machine learning.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(2)}>
                <p><strong>Industry Research Center -</strong>
                  A leading tech company offering a position to research cybersecurity and data privacy.
                </p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="top-text">
            <h2 align="center">University Research Lab</h2>
            <p align="center" className="fs-5">Choose your research project in the university lab.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(3)}>
                <p><strong>Natural Language Processing - </strong>
                  Develop algorithms to improve language understanding and generation.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(4)}>
                <p><strong>Computer Vision - </strong>
                  Explore techniques for image and video analysis.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="top-text">
            <h2 align="center">Industry Research Center</h2>
            <p align="center" className="fs-5">Choose your research focus in the industry lab.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(5)}>
                <p><strong>Cybersecurity - </strong>
                  Develop advanced methods to secure data and protect systems.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(6)}>
                <p><strong>Data Privacy - </strong>
                  Explore techniques to ensure data privacy and compliance with regulations.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="top-text">
            <h2 align="center">Natural Language Processing</h2>
            <p align="center" className="fs-5">Choose a specific application of NLP to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(7)}>
                <p><strong>Chatbots - </strong>
                  Develop intelligent chatbots for customer service.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(8)}>
                <p><strong>Sentiment Analysis - </strong>
                  Create algorithms to analyze public sentiment on social media.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="top-text">
            <h2 align="center">Computer Vision</h2>
            <p align="center" className="fs-5">Choose a specific area of computer vision to research.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(9)}>
                <p><strong>Object Detection - </strong>
                  Develop algorithms to detect objects in images or videos.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(10)}>
                <p><strong>Image Segmentation - </strong>
                  Explore techniques to segment images into meaningful parts.
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="top-text">
            <h2 align="center">Cybersecurity</h2>
            <p align="center" className="fs-5">Choose a specific cybersecurity focus.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(11)}>
                <p><strong>Network Security - </strong>
                  Develop methods to protect networks from attacks.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(12)}>
                <p><strong>Application Security - </strong>
                  Focus on securing software applications from vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="top-text">
            <h2 align="center">Data Privacy</h2>
            <p align="center" className="fs-5">Choose a specific aspect of data privacy to research.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(13)}>
                <p><strong>Privacy Preserving Algorithms - </strong>
                  Develop algorithms that protect user privacy while enabling data analysis.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(14)}>
                <p><strong>Regulatory Compliance - </strong>
                  Ensure systems comply with data privacy regulations like GDPR.
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="top-text">
            <h2 align="center">Chatbots</h2>
            <p align="center" className="fs-5">Choose an industry to apply your chatbot technology.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(15)}>
                <p><strong>Healthcare - </strong>
                  Develop chatbots to assist with patient care and information.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(16)}>
                <p><strong>Retail - </strong>
                  Create chatbots to improve customer service in retail.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="top-text">
            <h2 align="center">Sentiment Analysis</h2>
            <p align="center" className="fs-5">Choose a platform to focus your sentiment analysis on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(17)}>
                <p><strong>Twitter - </strong>
                  Analyze sentiment in tweets to gauge public opinion.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(18)}>
                <p><strong>Facebook - </strong>
                  Explore sentiment in Facebook posts and comments.
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="top-text">
            <h2 align="center">Object Detection</h2>
            <p align="center" className="fs-5">Choose your approach to object detection.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(19)}>
                <p><strong>Algorithm Design - </strong>
                  Focus on developing a new algorithm for object detection.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(20)}>
                <p><strong>Application Development - </strong>
                  Work on applying existing object detection algorithms to a specific real-world problem.
                </p>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="top-text">
            <h2 align="center">Image Segmentation</h2>
            <p align="center" className="fs-5">Choose a specific application for image segmentation.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(21)}>
                <p><strong>Medical Imaging - </strong>
                  Apply segmentation techniques to analyze medical images.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(22)}>
                <p><strong>Autonomous Vehicles - </strong>
                  Use segmentation to improve the vision systems of self-driving cars.
                </p>
              </div>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="top-text">
            <h2 align="center">Network Security</h2>
            <p align="center" className="fs-5">Choose a specific network security challenge to address.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(23)}>
                <p><strong>Intrusion Detection - </strong>
                  Develop systems to detect and prevent network intrusions.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(24)}>
                <p><strong>Encryption - </strong>
                  Create robust encryption methods to secure data transmission.
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="top-text">
            <h2 align="center">Application Security</h2>
            <p align="center" className="fs-5">Choose a specific aspect of application security to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(25)}>
                <p><strong>Vulnerability Assessment - </strong>
                  Develop tools to identify and mitigate application vulnerabilities.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(26)}>
                <p><strong>Secure Coding Practices - </strong>
                  Promote and develop secure coding standards and practices.
                </p>
              </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="top-text">
            <h2 align="center">Privacy Preserving Algorithms</h2>
            <p align="center" className="fs-5">Choose a specific type of privacy-preserving algorithm to develop.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(27)}>
                <p><strong>Federated Learning - </strong>
                  Develop federated learning algorithms to train models across decentralized data.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(28)}>
                <p><strong>Differential Privacy - </strong>
                  Create algorithms that ensure differential privacy in data analysis.
                </p>
              </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="top-text">
            <h2 align="center">Regulatory Compliance</h2>
            <p align="center" className="fs-5">Choose a specific regulatory framework to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(29)}>
                <p><strong>GDPR - </strong>
                  Ensure compliance with the General Data Protection Regulation.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(30)}>
                <p><strong>CCPA - </strong>
                  Focus on compliance with the California Consumer Privacy Act.
                </p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="top-text">
            <h2 align="center">Algorithm Design</h2>
            <p align="center" className="fs-5">Choose a real-world problem to apply your new algorithm.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(31)}>
                <p><strong>Wildlife Conservation - </strong>
                  Use your algorithm to monitor endangered species and help conservation efforts.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(32)}>
                <p><strong>Autonomous Vehicles - </strong>
                  Apply your algorithm to improve the safety and reliability of self-driving cars.
                </p>
              </div>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="top-text">
            <h2 align="center">Application Development</h2>
            <p align="center" className="fs-5">Choose a specific application to develop.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(33)}>
                <p><strong>Healthcare - </strong>
                  Develop applications to assist with medical imaging and diagnostics.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(34)}>
                <p><strong>Retail - </strong>
                  Create applications to enhance retail experiences with computer vision.
                </p>
              </div>
            </div>
          </div>
        );
      case 31:
        return (
          <div>
            <h2 align="center">Wildlife Conservation</h2>
            <p align="center" className="fs-5">
              You've chosen to use your object detection algorithm to monitor endangered species, particularly Hawaiian monk seals. Your efforts lead to significant improvements in tracking and protecting these animals, contributing to their conservation and increasing awareness about their plight.
              Congratulations! Your work is recognized by the scientific community and makes a real difference in wildlife conservation.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 32:
        return (
          <div>
            <h2 align="center">Autonomous Vehicles</h2>
            <p align="center" className="fs-5">
              You've chosen to apply your object detection algorithm to autonomous vehicles. Your work improves the safety and reliability of self-driving cars, reducing accidents and enhancing the overall performance of autonomous systems.
              Congratulations! Your contributions are celebrated in the tech industry, and you help pave the way for safer, more efficient transportation.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 33:
        return (
          <div>
            <h2 align="center">Healthcare</h2>
            <p align="center" className="fs-5">
              You've chosen to develop computer vision applications for healthcare. Your work assists in medical imaging and diagnostics, leading to early detection of diseases and improved patient outcomes.
              Congratulations! Your research has a profound impact on the medical field, saving lives and advancing healthcare technology.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 34:
        return (
          <div>
            <h2 align="center">Retail</h2>
            <p align="center" className="fs-5">
              You've chosen to develop computer vision applications for the retail industry. Your innovations enhance customer experiences, streamline operations, and boost sales.
              Congratulations! Your work is highly valued in the retail sector, leading to widespread adoption of your technology and transforming the shopping experience.
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
