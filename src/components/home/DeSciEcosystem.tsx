import {
  Center,
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const DeSciEcosystem = () => {
  const data = [
    {
      tag: "Health Tech",
      treasury: "$20,000",
      projects: "1",
      raised: "$12,000",
      industry: "Health",
    },
    {
      tag: "AgroFood Tech",
      treasury: "$20,000",
      projects: "1",
      raised: "$12,000",
      industry: "Agriculture",
    },
    {
      tag: "Green Tech",
      treasury: "$40,000",
      projects: "1",
      raised: "$30,000",
      industry: "Sustainability",
    },
    {
      tag: "Synthetic Tech",
      treasury: "$0",
      projects: "0",
      raised: "$0",
      industry: "Data & Energy",
    },
    {
      tag: "Mining Tech",
      treasury: "$0",
      projects: "0",
      raised: "$0",
      industry: "Mining",
    },
  ];

  return (
  <Center>
    <Flex
      
      color="#FFFFFF"
      flexDirection="column"
      alignItems="center"
      width="1024px"
      height="450px"
      top="50px"
    >
      <Text fontSize="36px" mt="20px">
        DeSci Ecosystem
      </Text>
      <Table
        borderColor="#1FAFC8"
        borderWidth="1px"
        variant="unstyled"
        size="md"
        width="85%"
        mt="20px"
        borderRadius="15px"
      >
        <Thead>
          <Tr>
            <Th fontSize="18px" color="#FFFFFF" textTransform="capitalize">
              Tag
            </Th>
            <Th fontSize="18px" color="#FFFFFF" textTransform="capitalize">
              Treasury
            </Th>
            <Th fontSize="18px" color="#FFFFFF" textTransform="capitalize">
              N° Projects
            </Th>
            <Th fontSize="18px" color="#FFFFFF" textTransform="capitalize">
              $ Raised
            </Th>
            <Th fontSize="18px" color="#FFFFFF" textTransform="capitalize">
              Industry
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td fontSize="16px" color="#737373">
                {row.tag}
              </Td>
              <Td fontSize="16px" color="#737373">
                {row.treasury}
              </Td>
              <Td fontSize="16px" color="#737373">
                {row.projects}
              </Td>
              <Td fontSize="16px" color="#737373">
                {row.raised}
              </Td>
              <Td fontSize="16px" color="#737373">
                {row.industry}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  </Center>
  );
};

export default DeSciEcosystem;
