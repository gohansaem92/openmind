import FeedCardAnswer from "./FeedCardAnswer";
import "../styles/Questions.css";
import messageIconBrown from "../assets/icons/Messages-brown.svg";
import emptyMessageIcon from "../assets/icons/Empty-message.svg";
import AnswerInputForm from "./AnswerInputForm";
import { useState } from "react";

export const AnswerList = ({ userData, questionList }) => {
    if (!questionList) {
        return <div>Loading...</div>;
    }
    console.log(questionList);
    return (
        <>
            {userData.questionCount > 0 ? (
                <div className="Questions-container">
                    <span className="Questions-numberOfQuestions">
                        <img src={messageIconBrown} alt="messageIconBrown" />{" "}
                        {userData.questionCount}개의 질문이 있습니다
                    </span>
                    {questionList.results.map((item) => {
                        return (
                            <FeedCardAnswer
                                key={item.id}
                                data={item}
                                userData={userData}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="Questions-container noQuestion">
                    <span className="Questions-numberOfQuestions">
                        <img src={messageIconBrown} alt="messageIconBrown" />{" "}
                        아직 질문이 없습니다
                    </span>
                    <img
                        className="Questions-emptyMessageIcon"
                        src={emptyMessageIcon}
                        alt="emptyMessageIcon"
                    />
                </div>
            )}
        </>
    );
};
