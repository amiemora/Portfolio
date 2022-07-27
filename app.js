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

    const h1appear = () => {
        $('.h1-greeting').hide(2000)
        $('.h1-greeting').show('slow')

    }
    h1appear()














})