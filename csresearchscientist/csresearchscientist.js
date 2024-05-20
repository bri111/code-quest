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
// university research
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
      case 1.112: //research
        return (
          <div>
            <h2 align="center">Transfer Learning Triumph</h2>
            <p align="center" className="fs-5">
              You've decided to utilize transfer learning to improve the efficiency of your NLP model. By leveraging pre-trained models and fine-tuning them on your specific task, you significantly reduce the amount of annotated data needed. Your research yields impressive results, and your work is recognized in the academic community.
            </p>
            <p align="center" className="fs-5">
              Chapter 6: With your success in NLP research, new opportunities arise. You're presented with two options for your next research direction:
            </p>
              <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.1121)}>
                <p><strong>Multimodal AI -</strong>
                  Explore the intersection of language, vision, and other modalities to develop AI systems with a more comprehensive understanding of the world.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.1122)}>
                <p><strong>Ethical AI -</strong>
                  Research ways to ensure AI systems are developed and used ethically, considering factors like bias, privacy, and transparency.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.1121: //research
        return (
          <div>
            <h2 align="center">Multimodal Frontier</h2>
            <p align="center" className="fs-5">
              You've chosen to explore Multimodal AI, diving into the complexities of integrating language, vision, and other modalities. Your research leads to groundbreaking advancements in understanding and synthesizing multimodal data,
              propelling you to the forefront of AI research.
              Your contributions to the field of AI have not gone unnoticed. Your work has paved the way for new technologies that revolutionize how AI systems perceive and interact with the world. You are hailed as a visionary in the field, leaving a lasting impact on the future of AI.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );
        case 1.1122: //research
        return (
          <div>
            <h2 align="center">Ethical AI Journey</h2>
            <p align="center" className="fs-5">
              You've chosen to focus on Ethical AI for your next research direction. Your work in this field leads to the development of frameworks and guidelines that promote the responsible development and deployment of AI systems. Your research contributes to shaping the future of AI by ensuring it is developed and used in a way that aligns with ethical principles and societal values.
              Your contributions to the field of AI and Ethical AI are recognized globally. You become a leading voice in the discussion surrounding AI ethics, advocating for transparency, fairness, and accountability in AI systems. Your research leaves a lasting impact, shaping the future of AI for the better.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
            </div>
          </div>
        );

      case 1.12: // research
        return (
          <div>
            <h2 align="center">Graph Neural Networks</h2>
            <p align="center" className="fs-5">
              You've decided to explore Graph Neural Networks (GNNs) for your NLP research. This approach shows promise in handling complex language structures. As you delve deeper into your research, you encounter a new challenge:
            </p>
            <p align="center" className="fs-5">
              Challenge 2: The dataset you're working with is sparse, making it challenging to train GNNs effectively. You have two options to address this:            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.121)}>
                <p><strong>Data Augmentation -</strong>
                  Generate synthetic data to supplement the sparse dataset.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.122)}>
                <p><strong>Transfer Learning -</strong>
                  Use pre-trained models or knowledge from related tasks to enhance model performance.
                </p>
              </div>
            </div>
          </div>
        );
      case 1.121: // tech giants
        return (
          <div>
            <h2 align="center">Data Augmentation</h2>
            <p align="center" className="fs-5">
              You've chosen to use data augmentation to address the issue of data sparsity in your NLP research. By generating synthetic data, you're able to supplement your dataset and improve the training of your Graph Neural Networks (GNNs). As your research progresses, you face another challenge:
            </p>
            <p align="center" className="fs-5">
              Challenge 3: Model Interpretability
              Your GNN models are performing well, but stakeholders require interpretability. You have two options:            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.1211)}>
                <p><strong>Feature Visualization -</strong>
                  Visualize the learned features of your model to gain insights into its inner workings.                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.1212)}>
                <p><strong>Explainable AI -</strong>
                  Use techniques such as attention mechanisms to explain the model's decisions.                </p>
              </div>
            </div>
          </div>
        );
      case 1.1211: // tech giants
        return (
          <div>
            <h2 align="center">Feature Visualization
            </h2>
            <p align="center" className="fs-5">
              You've chosen to use feature visualization to gain insights into the inner workings of your Graph Neural Network (GNN) model. By visualizing the learned features, you hope to better understand how the model processes and represents language. As you delve into feature visualization, you make a groundbreaking discovery:
            </p>
            <p align="center" className="fs-5">
              Discovery: Semantics Encoding
              Through feature visualization, you discover that the GNN has learned to encode semantic relationships between words in a novel way, akin to how humans perceive meaning in language. This discovery opens up new possibilities for NLP research and garners attention from the academic community.
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.12111)}>
                <p><strong>Feature Visualization -</strong>
                  Visualize the learned features of your model to gain insights into its inner workings.                </p>
              </div>
            </div>
          </div>
        );
          case 1.12111: // startup
            return (
              <div>
                <h2 align="center">Academic Recognition</h2>
                <p align="center" className="fs-5">
                  Your research on semantics encoding in GNNs gains widespread recognition in the academic community. You're invited to present your findings at prestigious conferences and collaborate with leading researchers in the field.
                  Congratulations, you've made a significant contribution to the field of Natural Language Processing! Your journey as a computer science researcher continues, filled with exciting new challenges and discoveries.
                </p>
                <div className="inner-container">
                  <button onClick={goHome}>Go back to home</button>
                  {/* Button to go back to home */}
                </div>
              </div>
            );
      case 1.1212: // tech giants
        return (
          <div>
            <h2 align="center">Explainable AI
            </h2>
            <p align="center" className="fs-5">
              You've decided to implement Explainable AI techniques to make your Graph Neural Networks (GNNs) more interpretable. By using attention mechanisms and other explainability techniques, you're able to provide insights into how your models make decisions. As your research project nears completion, you're faced with a final decision:
            </p>
            <p align="center" className="fs-5">
              Final Challenge:
              You have the option to focus your research on:
            </p>
            <div className="inner-container">
              <div className="box" onClick={() => handleDecision(1.12121)}>
                <p><strong>Applications -</strong>
                  Apply your models to real-world problems, such as improving chatbots or information retrieval systems.
                </p>
              </div>
              <div className="box" onClick={() => handleDecision(1.12122)}>
                <p><strong>Theory -</strong>
                  Dive deeper into the theoretical aspects of Graph Neural Networks, aiming to advance the understanding of their capabilities and limitations.
                </p>
              </div>
            </div>
          </div>
        );
        case 1.12121: // startup
          return (
            <div>
              <h2 align="center">Real-World Applications</h2>
              <p align="center" className="fs-5">
                You've chosen to focus your research on real-world applications of Graph Neural Networks (GNNs) in Natural Language Processing (NLP). Your work leads to advancements in chatbot technology, information retrieval systems, and
                other practical NLP applications.
              </p>
              <p align="center" className="fs-5">
                Conclusion: Research Impact
                Your research has a significant impact on the field of NLP, improving the understanding and generation of language. Your work is recognized by the academic community and industry alike, leading to invitations to speak at conferences and collaborate on groundbreaking projects.
              </p>
              <div className="inner-container">
                <button onClick={goHome}>Go back to home</button>
                {/* Button to go back to home */}
              </div>
            </div>
          );
        case 1.12122: // startup
        return (
          <div>
            <h2 align="center">Real-World Applications</h2>
            <p align="center" className="fs-5">
              You've chosen to focus your research on the theoretical aspects of Graph Neural Networks (GNNs). By advancing the understanding of GNN capabilities and limitations, you aim to contribute to the broader field of NLP. Your theoretical research leads to a breakthrough in understanding how GNNs can better model semantic relationships in language, leading to improved performance in various NLP tasks.
            </p>
            <p align="center" className="fs-5">
              Conclusion: Research Impact
              Your groundbreaking research on Graph Neural Networks revolutionizes the field of Natural Language Processing, paving the way for more interpretable and effective models. Your work is recognized worldwide, and you become a leading authority in the field, shaping the future of AI and NLP research.
            </p>
            <div className="inner-container">
              <button onClick={goHome}>Go back to home</button>
              {/* Button to go back to home */}
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
