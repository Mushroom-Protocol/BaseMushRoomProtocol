import * as React from "react";
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";

const data = {
  industria: [
    "Health Tech",
    "Agro Tech",
    "Food Tech",
    "Green Tech",
    "Mining Tech"
  ],
  usuario: ["MariaNFT", "juanito123", "Anónimo", "MariaNFT", "Raul2345"],
  capitalEntregado: ["$2000", "$1700", "$1200", "$750", "$720"]
};

const TableTopUser4iIndustria = () => {
  return (
    <ChakraProvider>
      <Box
        border="1px"
        p="6"
        rounded="xl"
        w="600px"
        borderWidth="8px"
        borderRadius="xl"
        borderColor="#1FAFC8"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Industria</Th>
              <Th>Usuario</Th>
              <Th>Capital Entregado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.industria.map((industry, index) => (
              <Tr key={index}>
                <Td>{industry}</Td>
                <Td>{data.usuario[index]}</Td>
                <Td>{data.capitalEntregado[index]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default TableTopUser4iIndustria;
