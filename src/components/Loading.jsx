import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' w="70%" />
            <Skeleton height='20px' w="80%"/>
            <Skeleton height='20px' w="60%"/>
            <Skeleton height='20px' w="20%"/>
            <Skeleton height='20px' w="40%"/>
            <Skeleton height='20px' />
            <Skeleton height='20px' w="60%"/>
            <Skeleton height='20px' w="20%"/>
            <Skeleton height='20px' w="40%"/>
            <Skeleton height='20px' w="60%"/>
            <Skeleton height='20px' w="20%"/>
            <Skeleton height='20px' />
        </Stack>
    </div>
  )
}

export default Loading