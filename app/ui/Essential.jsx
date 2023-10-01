import { Flex, Stack, Img, Text, Button, Container } from "@chakra-ui/react";
import React from "react";

const Essential = () => {
  return (
    <Flex
      bgImage="url('/img/bg.jpg')"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      minH="707px"
    >
      <Container maxW="1180px">
        <Flex direction={{ base: 'column-reverse', md: 'row' }} mx="auto" justify="center" align="center" gap="20" w="full" pt={10}>
          <Stack flex="1" color="white" maxW="541px" justify="center" mt="-8">
            <Img src="/img/about11.png" h="full" />
          </Stack>

          <Stack flex="1" justify="center" maxW="600px">
            <Text
              color="white"
              fontSize="48px"
              fontWeight="bold"
              lineHeight="68px"
            >
              <Text as="span" color="brand.600" mr="1">
                We pay you </Text>
               commissions every week
            </Text>

            <Text color={'white'}>
              Would an extra <Text fontSize={'19px'} as={'span'} fontWeight={'semibold'}>$</Text>2,000 + per month help?
            </Text>
            <a href="/#start_now">
              <Button
                h="58px"
                lineHeight="30px"
                colorScheme="orange"
                bg="brand.500"
                type="submit"
                maxW="204px"
                mt="8"
                borderRadius="29px"
                display="flex"
                justifyContent="space-between"
                pl="9"
              >
                <Text fontSize="16px">Start today</Text>
                <Img ml={3} src="/icons/button.svg" alt="Right Icon" w="9" h="9" />
              </Button>
            </a>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Essential;
