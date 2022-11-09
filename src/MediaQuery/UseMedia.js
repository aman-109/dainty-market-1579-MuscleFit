import { useMediaQuery } from '@chakra-ui/react'

export const useMedia = () => {

    const [smallScreen] = useMediaQuery('(min-width: 480px)')
    const [mediumScreen] = useMediaQuery('(min-width: 800px)')
    const [largeScreen] = useMediaQuery('(min-width: 3000px)')
    console.log("large",smallScreen)
    console.log("mid",mediumScreen)
    console.log("small",smallScreen)

    return { smallScreen,mediumScreen,largeScreen }
}


// for using media query in your page do---
// const { smallScreen,mediumScreen,largeScreen } = useMedia()

//rule for use
//always use screen sizes in accending order in return else it will throw bug

//notice don't use largeScreen this is only for me