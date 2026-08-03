import Navbar from "../components/Navbar";
import QuestionList from "../components/QuestionList";
import questions from "../questions";

const QuestionBank = () => {
  return (
    <div>

      <Navbar />

      <h1>Question Bank</h1>

      <QuestionList questions={questions} />

    </div>
  );
};

export default QuestionBank;