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
               width: '100vw',
               height: '100vh',
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
   


const conclusion = () => {
    $('.next-btn-2').on('click', () => {
        $('.question-container').show()
        $('.three').show()
        $('.setTwo').hide()
    
       $('.setThree').show()
       $('.lastOne').show()
       $('.lastTwo').show()
       $('.lastThree').show()
       $('.lastFour').show()
       $('.lastOne').text(answers[2].answerOne)
       $('.lastTwo').text(answers[2].answerTwo)
       $('.lastThree').text(answers[2].answerThree)
       $('.lastFour').text(answers[2].answerFour)
       
        $('.two').hide()
        $('.secOne').hide()
        $('.secTwo').hide()
        $('.secThree').hide()
        $('.secFour').hide()
        $('.next-btn-2').hide()
    })   

    $('.lastOne').on('click', () => {
        $('.question-container').show()
        $('.conclusion').show()

        $('.lastOne').hide()
        $('.lastTwo').hide()
        $('.lastThree').hide()
        $('.lastFour').hide()
        $('.three').hide()

    })

}
const startQuiz = () => {
    $('.start-btn').on('click', () => {
        $('.one').show()
        $('.question-container').show()
        $('.setOne').show()
        $('.start-btn').hide()
        $('.answerOne').text(answers[0].answerOne)
        $('.answerTwo').text(answers[0].answerTwo)
        $('.answerThree').text(answers[0].answerThree)
        $('.answerFour').text(answers[0].answerFour)
        $('.setTwo').hide()
        $('.setThree').hide()

        $('.answerThree').on('click', () => [
            $('.next-btn').show()
        ])

        $('.next-btn').on('click', () => {
            
            $('.one').hide()
            $('.two').show()
            $('.next-btn').hide()
            $('.answerOne').hide()
            $('.answerTwo').hide()
            $('.answerThree').hide()
            $('.answerFour').hide()
            $('.setOne').hide()

            $('.question-container').show()
            $('.setTwo').show()
            $('.secOne').text(answers[1].answerOne)
            $('.secTwo').text(answers[1].answerTwo)
            $('.secThree').text(answers[1].answerThree)
            $('.secFour').text(answers[1].answerFour)

        })

        $('.secFour').on('click', () => {
            $('.next-btn-2').show()
        })

      
       

    })
    
}
startQuiz()
conclusion()



        
        













   
   

 




  

   






 














})