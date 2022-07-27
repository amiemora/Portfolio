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
    





 














})