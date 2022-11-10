import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

const LogsPage = () => {
  return (
    <Box>
      <Text fontSize="xl">Logs</Text>
      <Divider mt="3px" mb="3px"  orientation='horizontal' style={{color:"red",size:"20"}} />
      <hr color="black" size="150px" />
      <br/>
      <iframe  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showTabs=1&showCalendars=1&src=c3VqZWV0a3VtYXJ5YWRhdjIwMjAyMEBnbWFpbC5jb20&src=YjMyZjA2YTg5MWIwZjdiYTBiM2JlZTJjN2VkOTliOTlhNmY3MTViMGNlMTZhYzVmZGVlZTcxMjdhM2MzMzgxZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YmhoNXM2a2c3ZWowZGJiMTczanV0aGwwdGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZmFtaWx5MDA1MTczMDk5NjYyODk4MjcxOTNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23E67C73&color=%23D50000&color=%2333B679&color=%23AD1457&color=%230B8043" style={{border:"solid 1px #777"}} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
    </Box>
  )
}

export default LogsPage