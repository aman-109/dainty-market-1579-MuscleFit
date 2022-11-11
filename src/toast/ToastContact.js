import { Box, Button, useToast } from "@chakra-ui/react"


/* export function ToastExample1({children,name,des}) {
    const toast = useToast()
    return (
      <Box
        onMouseEnter={() =>
          toast({
            title: name,
            description: des,
            status: 'info',
            duration: 6000,
            isClosable: true,
          })
        }
      >
        {children}
      </Box>
    )
  } */

export const toastExample = (name,des,status) => {
  const toast = useToast()
  toast({
    title: name,
    description: des,
    status: 'info',
    duration: 6000,
    isClosable: true,
  })

}