import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      bg="#071c09"
      as="footer"
      color="white"
      fontSize="16px"
      lineHeight="33px"
      minH="73"
      alignItems="center"
      justify="center"
    >
      <Text fontSize="18px" fontWeight="medium">
        Copyright ©️ 2023 JoinGoNow
      </Text>
    </Stack>
  );
};

export default Footer;
