$(() => {

    let imageIndex = 0
    let numImages = $('.images').children().length -1

    $('.next').on('click', () => {

        $('.images').children().eq(imageIndex).css('display', 'none')

        if(imageIndex < numImages) {
            imageIndex ++
        } else {
            imageIndex = 0
        }

        $('.images').children().eq(imageIndex).css('display', 'block')

    })

    $('.previous').on('click', () => {

        $('.images').children().eq(imageIndex).css('display', 'none')

        if(imageIndex > 0){
            imageIndex --
        } else {
            imageIndex = numImages
        }

        $('.images').children().eq(imageIndex).css('display', 'block')

    })


    const linkHover = () => {
        $('.li-links').css('color','black')
        
    }
    linkHover()


    const textArea = () => {
        $('textarea').focus( () => {
            $(this).css('background','none')
        }) 
    }
    textArea()

    

    const expand = () => {
        $('.expand').click(() =>{
            $('.div-about-me').animate({
               width: '+=50px',
               height: '+=600px',
               padding: '50px'
            }, 1000)
            $('.after').show().animate({opacity: 1}, 2000)
        })
    }
    expand()


   answers = [
    {answerOne: 'blue', answerTwo: 'green', answerThree: 'yellow', answerFour: 'orange' },
    {answerOne: "5'8", answerTwo: "5'4", answerThree: "4'11", answerFour: "5'1" },
    {answerOne: 'Debo', answerTwo: 'Jedi', answerThree: 'Gus', answerFour: 'Kodak' }
   ] 
   


   const startQuiz = () => {
    $('.start-btn').on('click', () => {
        $('.one').show()
        $('.question-container').show()
       $('.answerOne').text(answers[0].answerOne)
       $('.answerTwo').text(answers[0].answerTwo)
        $('.answerThree').text(answers[0].answerThree)
        $('.answerFour').text(answers[0].answerFour)
        
        
        $('.start-btn').hide()
        // $('.next-btn').show()
        $('.answerThree').on('click', () =>{
            $('.next-btn').show()
        })

        $('.next-btn').on('click', () => {
            $('.two').show()
            $('.one').hide()
            $('.next-btn').hide()
            $('.question-container').show()
           $('.answerOne').text(answers[1].answerOne)
           $('.answerTwo').text(answers[1].answerTwo)
            $('.answerThree').text(answers[1].answerThree)
            $('.answerFour').text(answers[1].answerFour)
    
        })

        $('.answerFour').on('click', () =>{
            $('.next-btn-2').show()
    
        })

        $('.next-btn-2').on('click', () => {
            $('.two').hide()
            $('.three').show()
            $('.question-container').show()
            $('.answerOne').text(answers[2].answerOne)
            $('.answerTwo').text(answers[2].answerTwo)
             $('.answerThree').text(answers[2].answerThree)
             $('.answerFour').text(answers[2].answerFour)

        })

        $('.answerOne').on('click', () => {
           $('.three').hide()
           $('.answer-button').hide()
           $('.controls').hide()
           
            $('.conclusion').show()
        })

        
    })
   }
   startQuiz()





//    answerOne()
//    secondQuestion()
//    answerTwo()
//    conclusion()



//   lastQuestion()

//    const showQuestion = (quest, answer) => {
//     for (i=0; i< questions.length; i++) {
//         quest = questions.question[i]
//         answer = questions.answers[i]
//         const $show = $('.answer')
//         $show.appendTo($('.question-container'))
//     }
// }
//  showQuestion(quest,answer)




   
   

 




    // const resetState = () => {
    //     clearStatusClass(document.body)
    //     nextButton.classList.add('hide')
    //     while (answerButton.firstChild){
    //         answerButton.removeChild(answerButton.firstChild)
    //     }
    // }

    // const select = (e) => {
    //     const selectedButton = e.target
    //     const correct =selectedButton.dataset.correct

    //     setStatusClass(document.body,correct)
    //     Array.from(answerButton.children).forEach((button) => {
    //         setStatusClass(button,button.dataset.correct)
    //     })
    //     if(shuffleQuestions.length > currentQuestionIndex +1){
    //         nextButton.classList.remove('hide')
    //     } else {
    //         startButton.innerText = 'restart'
    //         startButton.classList.remove('hide')
    //     }
    //     if (selectedButton.dataset = correct) {
    //         quizScore++
    //     }
    //     document.getElementById('right-answers').innerText=quizScore
    // }
    // select()

    // const setStatus = (element,correct) => {
    //     clearStatusClass(element)
    //     if(correct){
    //         element.classList.add('correct')
    //     } else {
    //         element.classList.add('wrong')
    //     }
    // }
    // setStatus()

    // const clearStatus = (element) => {
    //     element.classList.remove('correct')
    //     element.classList.remove('wrong')
    // }
    // clearStatus()





    // const setNextQuestion = () => {
    //     resetState()
    //     showQuestion(shuffleQuestions[currentQuestionIndex])

    // }


    // nextButton.addEventListener('click', () => {
    //     currentQuestionIndex++
    //     setNextQuestion()
    // })


    // const showQuestion = (question) => {
    //     questionElement.innerText = question.question;
    //     question.answers.forEach((answer => {
    //         const button =document.createElement('button')
    //         button.innerText=answer.text;
    //         button.classList.add('btn')
    //         if (answer.correct) {
    //             button.dataset.correct =answer.correct
    //         }
    //         button.addEventListener('click', selectAnswer) 
    //         answerButton.appendChild(button)
    //     }))
    // }



    // const startQuiz = () => {
    //     startButton.classList.add('hide')
    //     shuffleQuestions= questions.sort(() => Math.random() -0.5 )
    //     currentQuestionIndex=0
    //     questionContainer.classList.remove('hide')
    //     setNextQuestion()
    //     quizScore=0
    // }

    // startButton.addEventListener('click', startQuiz())

   






 














})