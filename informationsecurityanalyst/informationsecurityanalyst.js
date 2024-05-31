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
      case 1:
        return (
          <div className="top-text">
            <h2 align="center">Network Security</h2>
            <p align="center" className="fs-5">Choose a specialization within network security.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(3)}>
                <p><strong>Intrusion Detection - </strong>
                  Focus on detecting and preventing unauthorized access to networks.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(4)}>
                <p><strong>Firewall Management - </strong>
                  Specialize in configuring and managing firewalls to protect networks.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="top-text">
            <h2 align="center">Application Security</h2>
            <p align="center" className="fs-5">Choose a focus area within application security.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(5)}>
                <p><strong>Secure Coding - </strong>
                  Develop secure coding practices to prevent vulnerabilities.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(6)}>
                <p><strong>Vulnerability Assessment - </strong>
                  Conduct assessments to identify and fix security vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="top-text">
            <h2 align="center">Intrusion Detection</h2>
            <p align="center" className="fs-5">Choose a specific aspect of intrusion detection to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(7)}>
                <p><strong>SIEM Systems - </strong>
                  Implement and manage Security Information and Event Management systems.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(8)}>
                <p><strong>Network Monitoring - </strong>
                  Focus on real-time monitoring of network traffic for suspicious activity.
                </p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="top-text">
            <h2 align="center">Firewall Management</h2>
            <p align="center" className="fs-5">Choose a specific area of firewall management to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(9)}>
                <p><strong>Policy Configuration - </strong>
                  Develop and implement firewall policies to protect network resources.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(10)}>
                <p><strong>Threat Analysis - </strong>
                  Analyze and respond to threats identified by firewall systems.
                </p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="top-text">
            <h2 align="center">Secure Coding</h2>
            <p align="center" className="fs-5">Choose a specific aspect of secure coding to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(11)}>
                <p><strong>Code Reviews - </strong>
                  Conduct code reviews to ensure secure coding practices are followed.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(12)}>
                <p><strong>Automated Testing - </strong>
                  Implement automated testing tools to detect security issues.
                </p>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="top-text">
            <h2 align="center">Vulnerability Assessment</h2>
            <p align="center" className="fs-5">Choose a specific area of vulnerability assessment to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(13)}>
                <p><strong>Penetration Testing - </strong>
                  Conduct penetration tests to identify security weaknesses.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(14)}>
                <p><strong>Risk Management - </strong>
                  Assess and manage security risks to minimize impact.
                </p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="top-text">
            <h2 align="center">SIEM Systems</h2>
            <p align="center" className="fs-5">Choose a specific SIEM system to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(15)}>
                <p><strong>Splunk - </strong>
                  Implement and manage Splunk for security monitoring.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(16)}>
                <p><strong>QRadar - </strong>
                  Use QRadar for comprehensive threat detection and response.
                </p>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="top-text">
            <h2 align="center">Network Monitoring</h2>
            <p align="center" className="fs-5">Choose a specific tool for network monitoring.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(17)}>
                <p><strong>Wireshark - </strong>
                  Use Wireshark for packet analysis and monitoring.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(18)}>
                <p><strong>Snort - </strong>
                  Implement Snort for real-time network traffic analysis.
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="top-text">
            <h2 align="center">Policy Configuration</h2>
            <p align="center" className="fs-5">Choose a specific focus within firewall policy configuration.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(19)}>
                <p><strong>Access Control - </strong>
                  Define and implement access control policies.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(20)}>
                <p><strong>Traffic Filtering - </strong>
                  Configure traffic filtering rules to block malicious traffic.
                </p>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="top-text">
            <h2 align="center">Threat Analysis</h2>
            <p align="center" className="fs-5">Choose a specific area of threat analysis to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(21)}>
                <p><strong>Incident Response - </strong>
                  Develop incident response strategies for detected threats.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(22)}>
                <p><strong>Threat Intelligence - </strong>
                  Use threat intelligence to proactively identify threats.
                </p>
              </div>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="top-text">
            <h2 align="center">Code Reviews</h2>
            <p align="center" className="fs-5">Choose a specific aspect of code reviews to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(23)}>
                <p><strong>Manual Reviews - </strong>
                  Conduct thorough manual code reviews for security issues.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(24)}>
                <p><strong>Automated Code Analysis - </strong>
                  Use automated tools for code analysis and security checks.
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="top-text">
            <h2 align="center">Automated Testing</h2>
            <p align="center" className="fs-5">Choose a specific tool for automated security testing.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(25)}>
                <p><strong>SAST - </strong>
                  Implement Static Application Security Testing tools.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(26)}>
                <p><strong>DAST - </strong>
                  Use Dynamic Application Security Testing tools for runtime analysis.
                </p>
              </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="top-text">
            <h2 align="center">Penetration Testing</h2>
            <p align="center" className="fs-5">Choose a specific type of penetration testing to specialize in.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(27)}>
                <p><strong>Web Application Testing - </strong>
                  Focus on identifying vulnerabilities in web applications.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(28)}>
                <p><strong>Network Penetration Testing - </strong>
                  Conduct penetration tests on network infrastructure.
                </p>
              </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="top-text">
            <h2 align="center">Risk Management</h2>
            <p align="center" className="fs-5">Choose a specific aspect of risk management to focus on.</p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(29)}>
                <p><strong>Risk Assessment - </strong>
                  Perform comprehensive risk assessments to identify potential threats.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(30)}>
                <p><strong>Risk Mitigation - </strong>
                  Develop strategies to mitigate identified risks.
                </p>
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div>
            <h2 align="center">Splunk</h2>
            <p align="center" className="fs-5">
              You've chosen to specialize in Splunk for security monitoring. Your expertise in implementing and managing Splunk helps organizations detect and respond to threats efficiently.
              Congratulations! Your skills in Splunk are highly valued, leading to significant career advancement.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 16:
        return (
          <div>
            <h2 align="center">QRadar</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on QRadar for comprehensive threat detection and response. Your ability to implement QRadar helps organizations stay ahead of potential threats.
              Congratulations! Your expertise in QRadar is recognized, leading to exciting opportunities in the field of cybersecurity.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 17:
        return (
          <div>
            <h2 align="center">Wireshark</h2>
            <p align="center" className="fs-5">
              You've chosen to specialize in Wireshark for packet analysis and monitoring. Your skills in using Wireshark help organizations understand and protect their network traffic.
              Congratulations! Your expertise in Wireshark is highly valued, leading to improved network security in your organization.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 18:
        return (
          <div>
            <h2 align="center">Snort</h2>
            <p align="center" className="fs-5">
              You've chosen to implement Snort for real-time network traffic analysis. Your ability to detect and respond to threats using Snort helps safeguard organizational networks.
              Congratulations! Your proficiency with Snort makes you a crucial asset in maintaining network security.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 19:
        return (
          <div>
            <h2 align="center">Access Control</h2>
            <p align="center" className="fs-5">
              You've chosen to specialize in access control. Your ability to define and implement robust access control policies ensures that only authorized users can access sensitive resources.
              Congratulations! Your expertise in access control enhances the security posture of your organization.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 20:
        return (
          <div>
            <h2 align="center">Traffic Filtering</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on traffic filtering. Your skills in configuring filtering rules effectively block malicious traffic and protect network resources.
              Congratulations! Your proficiency in traffic filtering is crucial for maintaining a secure network environment.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 21:
        return (
          <div>
            <h2 align="center">Incident Response</h2>
            <p align="center" className="fs-5">
              You've chosen to develop incident response strategies. Your ability to respond swiftly and effectively to security incidents helps minimize damage and recover from attacks.
              Congratulations! Your expertise in incident response is highly valued, ensuring the security and resilience of your organization.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 22:
        return (
          <div>
            <h2 align="center">Threat Intelligence</h2>
            <p align="center" className="fs-5">
              You've chosen to use threat intelligence to proactively identify threats. Your ability to gather and analyze threat data helps your organization stay ahead of potential attacks.
              Congratulations! Your proficiency in threat intelligence enhances your organization's security capabilities.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 23:
        return (
          <div>
            <h2 align="center">Manual Reviews</h2>
            <p align="center" className="fs-5">
              You've chosen to conduct thorough manual code reviews. Your attention to detail and ability to identify security issues ensure that applications are secure and reliable.
              Congratulations! Your expertise in manual code reviews is recognized, leading to improved software security in your organization.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 24:
        return (
          <div>
            <h2 align="center">Automated Code Analysis</h2>
            <p align="center" className="fs-5">
              You've chosen to use automated tools for code analysis. Your ability to integrate automated security checks into the development process ensures that vulnerabilities are detected early.
              Congratulations! Your proficiency in automated code analysis enhances the security and efficiency of your development workflow.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 25:
        return (
          <div>
            <h2 align="center">SAST</h2>
            <p align="center" className="fs-5">
              You've chosen to implement Static Application Security Testing (SAST) tools. Your expertise in using SAST tools helps identify and fix security issues in the code before deployment.
              Congratulations! Your skills in SAST are highly valued, ensuring the security and integrity of your organization's applications.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 26:
        return (
          <div>
            <h2 align="center">DAST</h2>
            <p align="center" className="fs-5">
              You've chosen to use Dynamic Application Security Testing (DAST) tools for runtime analysis. Your ability to identify vulnerabilities during application runtime ensures comprehensive security coverage.
              Congratulations! Your proficiency in DAST enhances the security and reliability of your organization's applications.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 27:
        return (
          <div>
            <h2 align="center">Web Application Testing</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on web application penetration testing. Your ability to identify and exploit vulnerabilities in web applications helps secure them from potential attacks.
              Congratulations! Your expertise in web application testing is highly valued, leading to more secure and robust applications.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 28:
        return (
          <div>
            <h2 align="center">Network Penetration Testing</h2>
            <p align="center" className="fs-5">
              You've chosen to conduct penetration tests on network infrastructure. Your skills in identifying weaknesses in network security help organizations strengthen their defenses.
              Congratulations! Your proficiency in network penetration testing ensures the resilience and security of network systems.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 29:
        return (
          <div>
            <h2 align="center">Risk Assessment</h2>
            <p align="center" className="fs-5">
              You've chosen to perform comprehensive risk assessments. Your ability to identify and evaluate potential threats ensures that appropriate security measures are implemented.
              Congratulations! Your expertise in risk assessment helps your organization proactively manage security risks.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
            </div>
          </div>
        );
      case 30:
        return (
          <div>
            <h2 align="center">Risk Mitigation</h2>
            <p align="center" className="fs-5">
              You've chosen to develop strategies to mitigate identified risks. Your ability to implement effective risk mitigation measures ensures the ongoing security and resilience of your organization.
              Congratulations! Your proficiency in risk mitigation is highly valued, leading to a more secure organizational environment.
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
