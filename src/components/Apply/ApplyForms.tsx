import React from 'react';
import {
  Box,
  Center,
  Flex,
  Button,
  Text,
  Heading,
  Icon,
  Fade,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react';
import { PiNumberCircleOne } from 'react-icons/pi';

const ApplyForms = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la presentación del formulario
  };

  return (
    <Center>
      <Flex direction="column" align="center">
        <Button
          as={Flex}
          direction="row"
          alignItems="center"
          bg="#000000"
          borderColor="#FFFFFF"
          borderWidth="1px"
          p={10}
          boxShadow="sm"
          width="230px"
          size="lg"
          border="1px"
          borderRadius="20px"
          fontSize="16px"
          _hover={{ bg: '#1FAFC8' }}
          _active={{ bg: '#1FAFC8' }}
          onClick={onToggle}
        >
          <Icon as={PiNumberCircleOne} boxSize={12} marginRight={2} />
          <Box>
            <Text fontWeight="bold" fontSize="lg" color="white">
              First Step
            </Text>
            <Text fontSize="md" color="#737373">
              Start-Up Registration
            </Text>
          </Box>
        </Button>

        <Fade in={isOpen}>
          <Box
            p="60px"
            color="white"
            mt="4"
            bg="#1e1e1e"
            borderWidth="1px"
            rounded="lg"
        

          >
            <Heading>Start-Up Registration Form</Heading>
            <br />
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Start-Up Name</FormLabel>
                <Input placeholder="Fantasy Name" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Company Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Website or Social Media Profile</FormLabel>
                <Input placeholder="Website/Profile URL" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Short Description</FormLabel>
                <Textarea placeholder="Describe what your startup does in one sentence" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Startup Slogan</FormLabel>
                <Input placeholder="Short Slogan" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Startup Status</FormLabel>
                <Select placeholder="Select status">
                  <option>Early Start-Up</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                </Select>
              </FormControl>
              {/* Campo para Madurez tecnológica */}
              <FormControl isRequired mt={4}>
                <FormLabel>Technology Readiness Level (TRL)</FormLabel>
                <Select placeholder="Select TRL">
                  <option>TRL-1: Basic principles</option>
                  <option>TRL-2: Technology concept formulated</option>
                  <option>TRL-3: Experimental proof of concept</option>
                  <option>TRL-4: Technology validated in lab</option>
                  <option>TRL-5: Technology validated in relevant environment</option>
                  <option>TRL-6 or higher</option>
                </Select>
                <FormHelperText>
                  Please describe the TRL level for your technology.
                </FormHelperText>
              </FormControl>

              {/* Campo para Nombre del representante o team leader */}
              <FormControl isRequired mt={4}>
                <FormLabel>Full Name of Legal Representative / Team Leader</FormLabel>
                <Input placeholder="Full Name" />
              </FormControl>

              {/* Campo para Detalles del representante o team leader */}
              <FormControl mt={4}>
                <FormLabel>Specialization Legal Representative / Team Leader</FormLabel>
                <Input placeholder="Specialization" />
              </FormControl>

              {/* Campo para Perfil de Linkedin o similar */}
              <FormControl isRequired mt={4}>
                <FormLabel>LinkedIn Profile of Legal Representative / Team Leader</FormLabel>
                <Input placeholder="LinkedIn Profile URL" />
              </FormControl>

              {/* Campo para Industria / sector productivo */}
              <FormControl isRequired mt={4}>
                <FormLabel>Industry / Productive Sector</FormLabel>
                <Select placeholder="Select Industry">
                  <option>HealthTech</option>
                  <option>Agro-FoodTech</option>
                  <option>GreenTech</option>
                  <option>SyntheticTech</option>
                  <option>MiningTech</option>
                </Select>
              </FormControl>

              {/* Campo para País de origen */}
              <FormControl isRequired mt={4}>
                <FormLabel>Country of Origin</FormLabel>
                <Select placeholder="Select Country">
                <option>Argentina</option>
                <option>Brazil</option>
                <option>Mexico</option>
                <option>Colombia</option>
                <option>Peru</option>
                <option>Venezuela</option>
                <option>Chile</option>
                <option>Ecuador</option>
                <option>Guatemala</option>
                <option>Cuba</option>
                <option>Bolivia</option>
                <option>Dominican Republic</option>
                <option>Honduras</option>
                <option>Paraguay</option>
                <option>El Salvador</option>
                <option>Nicaragua</option>
                <option>Costa Rica</option>
                <option>Puerto Rico</option>
                <option>Uruguay</option>
                <option>Panama</option>
                <option>Jamaica</option>
                <option>Trinidad and Tobago</option>
                  {/* Agregar más países según sea necesario */}
                </Select>
              </FormControl>

              <Button type="submit" mt={4} colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Flex>
    </Center>
  );
};

export default ApplyForms;
