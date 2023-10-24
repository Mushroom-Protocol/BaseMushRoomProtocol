import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading
} from "@chakra-ui/react";

const DeSciEcosystem = () => {
  const data = [
    {
      tag: "Health Tech",
      treasury: "$20,000",
      projects: "1",
      raised: "$12,000",
      industry: "Health"
    },
    {
      tag: "Agro Tech",
      treasury: "$20,000",
      projects: "1",
      raised: "$12,000",
      industry: "Agriculture"
    },
    {
      tag: "Food Tech",
      treasury: "$0",
      projects: "0",
      raised: "$0",
      industry: "Food"
    },
    {
      tag: "Green Tech",
      treasury: "$1",
      projects: "0",
      raised: "$0",
      industry: "Sustainability"
    },
    {
      tag: "Mining Tech",
      treasury: "$2",
      projects: "0",
      raised: "$0",
      industry: "Mining"
    }
  ];

  return (
    <>
    <Flex
      color="#FFFFFF"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100%"
      height="80vh"  
      align="center"
      justify="center"
    >
      
      <Heading>
         DeSci Ecosystem
      </Heading>
      <Flex p={3}></Flex>
      <Box
      borderColor="#1FAFC8"
      borderWidth="6px"
      width="85%"
      borderRadius="lg"
      >
      <Table
        width="100%"
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
      </Box>
    </Flex>
    </>
  );
};

export default DeSciEcosystem;
