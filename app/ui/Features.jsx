import { Stack, Box, Text, VStack, Grid } from "@chakra-ui/react";
import Image from "next/image";

const Features = () => {
  const freeText = [
    {
      description: "Free E-Commerce Websites",
      link: "/icons/free1.svg",
    },

    {
      description: (
        <>
          Free landing pages <br /> (Like the one you are on now)
        </>
      ),
      link: "/icons/free2.svg",
    },
    {
      description: "Free Marketing Videos",
      link: "/icons/free3.svg",
    },
    {
      description: "Free online Training",
      link: "/icons/free4.svg",
    },
    {
      description: "Free Social Media Graphics  & Posts",
      link: "/icons/free5.svg",
    },
    {
      description: "Everything that you need for success in your new business.",
      link: "/icons/free6.svg",
    },
  ];

  return (
    <VStack w="full" mx="auto">
      <Box mt="50px" mb="50px" textAlign="center">
        <Text fontSize={{base: '35px', md:"52px"}} lineHeight={{md:"64px"}} fontWeight="bold">
          What do you get for{" "}
          $20 a month?
        </Text>
        <Text fontSize={{md:"36px"}} lineHeight="64px" fontWeight="medium">
          <Text as="span" fontFamily="default">
            (
          </Text>
          Includes product AND shipping
          <Text as="span" fontFamily="default">
            )
          </Text>
        </Text>
      </Box>

      <Grid
        gap="4"
        templateColumns={{ base: 'repeat(1, 1fr)', md: "repeat(3, 1fr)" }}
        alignItems="flex-start"
        mb="120px"
      >
        {freeText.map((free, index) => (
          <Stack
            p={4}
            rounded="15px"
            border="1px solid #727da133"
            minH="165px"
            color="#1c1c1c"
            maxW="349px"
            key={index}
            spacing="4"
            transition="all 0.4s ease-in-out"
            _hover={{
              bg: "#071c09",
              color: "white",
              transition: "all 0.4s ease-in-out",
            }}
          >
            <Image
              src={free.link}
              alt={free.description}
              width={50}
              height={50}
            />

            <Text fontSize="18px" fontWeight="semibold" lineHeight="33px">
              {free.description}
            </Text>
          </Stack>
        ))}
      </Grid>
    </VStack>
  );
};

export default Features;
