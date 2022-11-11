import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

const LogsPage = () => {
  return (
    <Box>
      <Text fontSize="xl">Logs</Text>
      <Divider mt="3px" mb="3px"  orientation='horizontal' style={{color:"red",size:"20"}} />
      <hr color="black" size="150px" />
      <br/>
      <iframe  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showTabs=1&showCalendars=0&src=YjMyZjA2YTg5MWIwZjdiYTBiM2JlZTJjN2VkOTliOTlhNmY3MTViMGNlMTZhYzVmZGVlZTcxMjdhM2MzMzgxZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%230B8043" style={{border:"solid 1px #777"}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
    </Box>
  )
}

export default LogsPage