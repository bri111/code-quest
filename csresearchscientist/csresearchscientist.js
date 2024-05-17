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
        ); // home page
// tech giants
      case 1: // tech giants
        return (
          <div>
            <h2 align="center">University Research</h2>
            <p align="center" className="fs-5">
              You've joined the University Research Lab, where you'll be focusing on artificial intelligence and machine learning. Your first task is to choose a specific research project to work on:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.1)}>
                <p><strong>Computer Vision -</strong>
                  Explore techniques for image and video analysis.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.2)}>
                <p><strong>Natural Language Processing -</strong>
                  Develop algorithms to improve language understanding and generation.                </p>
              </div>
            </div>
          </div>
        );

      case 1.1: // tech giants
        return (
          <div>
            <h2 align="center">Natural Language Processing</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on Natural Language Processing (NLP). Your research project involves developing algorithms to improve language understanding and generation. As you delve deeper into your research, you come across a
              fundamental problem:
            </p>
            <p align="center" className="fs-5">
              Challenge 1: Your research team is split between two approaches to handle complex language structures:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.11)}>
                <p><strong>Transformer Architecture -</strong>
                  Use the latest transformer models for NLP, known for their effectiveness but high computational requirements.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.12)}>
                <p><strong>Graph Neural Networks
                  -</strong>
                  You've decided to explore Graph Neural Networks (GNNs) for your NLP research. This approach shows promise in handling complex language structures. As you delve deeper into your research, you encounter a new challenge:
                  Challenge 2: The dataset you're working with is sparse, making it challenging to train GNNs effectively. You have two options to address this:
                </p>
              </div>
            </div>
          </div>
        );
      case 1.11: // tech giants
        return (
          <div>
            <h2 align="center">The Transformer Path</h2>
            <p align="center" className="fs-5">
              You've chosen to use the Transformer Architecture for your NLP research. The implementation goes smoothly, and you make significant progress in improving language understanding. However, you face a new challenge:
            </p>
            <p align="center" className="fs-5">
              Challenge 2: Your model requires a large amount of annotated data for training, which is costly and time-consuming to acquire. You have two options to address this issue.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.11)}>
                <p><strong>Transformer Architecture -</strong>
                  Use the latest transformer models for NLP, known for their effectiveness but high computational requirements.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.12)}>
                <p><strong>Graph Neural Networks
                  -</strong>
                  You've decided to explore Graph Neural Networks (GNNs) for your NLP research. This approach shows promise in handling complex language structures. As you delve deeper into your research, you encounter a new challenge:
                  Challenge 2: The dataset you're working with is sparse, making it challenging to train GNNs effectively. You have two options to address this:
                </p>
              </div>
            </div>
          </div>
        );
       case 1.111: // tech giants
        return (
          <div>
            <h2 align="center">The Data Augmentation Journey</h2>
            <p align="center" className="fs-5">
              You've chosen to use data augmentation to address the data efficiency challenge. By applying various augmentation techniques, you successfully increase the size of your training dataset. As you continue your research, you encounter another obstacle:
            </p>
            <p align="center" className="fs-5">
              Challenge 3: Your research team is divided on the importance of model interpretability in NLP. Some argue that a more interpretable model is essential for understanding model decisions, while others prioritize performance regardless of interpretability. How do you approach this debate?            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.1111)}>
                <p><strong>Transformer Architecture -</strong>
                  Use the latest transformer models for NLP, known for their effectiveness but high computational requirements.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.1112)}>
                <p><strong>Graph Neural Networks
                  -</strong>
                  You've decided to explore Graph Neural Networks (GNNs) for your NLP research. This approach shows promise in handling complex language structures. As you delve deeper into your research, you encounter a new challenge:
                  Challenge 2: The dataset you're working with is sparse, making it challenging to train GNNs effectively. You have two options to address this:
                </p>
              </div>
            </div>
          </div>
        );
         case 1.1111:
        return (
          <div>
            <h2 align="center">The Performance Quest
            </h2>
            <p align="center" className="fs-5">
              You've chosen to prioritize improving the model's performance, even if it sacrifices some interpretability. Your dedication pays off as you achieve remarkable results in language understanding and generation. Your research receives acclaim in the academic community, and your work is cited in several influential papers.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
         case 1.1112:
        return (
          <div>
            <h2 align="center">The Quest for Interpretability
            </h2>
            <p align="center" className="fs-5">
              You've chosen to emphasize model interpretability in your NLP research. Despite the sacrifice in performance, your efforts lead to a breakthrough in creating a more interpretable model. This achievement gains recognition from the research community and opens up new opportunities for collaboration.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
      case 1.12: // tech giants
        return (
          <div>
            <h2 align="center">Transfer Learning Triumph</h2>
            <p align="center" className="fs-5">
              You've decided to utilize transfer learning to improve the efficiency of your NLP model. By leveraging pre-trained models and fine-tuning them on your specific task, you significantly reduce the amount of annotated data needed. Your research yields impressive results, and your work is recognized in the academic community.
            </p>
            <p align="center" className="fs-5">
              With your success in NLP research, new opportunities arise. You're presented with two options for your next research direction:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.1121)}>
                <p><strong>Multimodal AI -</strong>
                  Explore the intersection of language, vision, and other modalities to develop AI systems with a more comprehensive understanding of the world.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.1122)}>
                <p><strong>Ethical AI
                  -</strong>
                  Research ways to ensure AI systems are developed and used ethically, considering factors like bias, privacy, and transparency.
                </p>
              </div>
            </div>
          </div>
        );


      //END case
      case end: // startup
        return (
          <div>
            <h2 align="center">The Future Awaits
            </h2>
            <p align="center" className="fs-5">
              You decide to stay at Startup Innovations, continuing to innovate and push the boundaries of what's possible in the world of software development. Your dedication to your craft and passion for innovation lead you to create
              even more groundbreaking features for the app, solidifying your reputation as a leader in the field.
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
