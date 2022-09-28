import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { useParams } from 'react-router';
import  copy  from 'copy-to-clipboard'
import moment from 'moment';
import { Link, useNavigate , useLocation  } from 'react-router-dom';
import { postAnswer , deleteQuestion , voteQuestion} from '../../actions/question';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

import './question.css';
const QuestionDetail = () => {

    const  { id } = useParams();
    const questionsList = useSelector(state => state.questionsReducer);
    const location = useLocation()
    const url = 'http://localhost:3000/'


    // var questionsList = [{ 
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:"kumar",
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
    // },{ 
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes:4,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:"kumar",
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
    // },{ 
    //     _id: '3',
    //     upVotes: 6,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:"kumar",
    //         answeredOn:"jan 2",
    //         userId:2,
    //     }]
    // }]
    const [Answer, setAnswer] = useState('');
    const Navigate = useNavigate();
    const dispatch =useDispatch();
    const User =useSelector((state) => (state.currentUserReducer))
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question');
            Navigate('/Auth')

        }
        else{
            if(Answer === ''){
            alert('Enter an Answer before Submitting')
        }
        else{
            dispatch(postAnswer({ id, noOfAnswers : answerLength + 1 ,answerBody : Answer, userAnswered: User.result.name , userId:User.result._id }))
        }
    }
    }

    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied Url : '+url+location.pathname)
    }
    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }
    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }

  return (
    <div className='question-details-page'>
        { 
            questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
            {questionsList.data.filter(question => question._id === id ).map(question => (
                <div key={question._id}>
                    <section className="question-details-container">
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                            <div className="question-votes">
                            <FontAwesomeIcon icon={faSortUp} alt='upvotes' className='votes-icon' onClick={handleUpVote} />
                            <p>{question.upVote.length -question.downVote.length}</p>
                            <FontAwesomeIcon icon={faSortDown} alt='downvotes'className='votes-icon'  onClick={handleDownVote}/>
                            </div>
                            <div style={{width:"100%"}}>
                            <p className="question-body">{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            { question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            )) }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type="button" onClick={handleShare}>share</button>
                                                {
                                                    User?.result?._id === question?.userId && (
                                                        <button type="button" onClick={handleDelete}>delete</button>
                                                    )
                                                }
                                                
                                            </div>
                                            <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/User/${question?.userId}`} className='user-link' style={{color: "#0086d8"}}>
                                                    <Avatar  backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar> 
                                                    <div>{question.userPosted}</div>
                                                </Link>
                                        </div>
                                        </div>
                                        
                            </div>
                        </div>
                    </section>
                    {
                        question.noOfAnswers !== 0 && (
                            <section>
                                <h3>{question.noOfAnswers} Answers</h3>
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section> )
                    }
                    <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={ (e) => {handlePostAns( e , question.answer.length)}}>
                                    <textarea name="" id="" rows="10" onChange={ e => setAnswer(e.target.value)}></textarea><br />
                                    <input type="submit" className='post-ans-btn' value="Post Your Answer"/>
                                </form>
                                <p>
                                    Browse other questions tagged 
                                    { question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className="ans-tag"> {tag} </Link>
                                    )) }
                                    or 
                                    <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}> ask your own question.</Link>
                                </p>
                    </section>
                </div>
            ))}
            </>
        }
    </div>
  )
}

export default QuestionDetail