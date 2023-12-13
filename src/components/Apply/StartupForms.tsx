import React, { useState } from "react";
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
  Collapse,
  Input,
  Select,
  Textarea,
  FormHelperText,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import { backend } from "../../declarations/backend"

const StartupForms = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [formData, setFormData] = useState({
  startUpName: "",
  email: "",
  website: "",
  startUpSlogan: "",
  shortDes: "Descripción breve",
  logo: "", // Asegúrate de proporcionar un array válido aquí
  status: "Activa",
  tlr: "1",
  fullNameTl: "Nombre completo del líder técnico",
  specializationTL: "Especialización del líder técnico",
  linkedinTL: "Enlace al perfil de LinkedIn del líder técnico",
  industry: "Industria",
  country: "País",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    console.log(await backend.signUpStartup(formData))
  };

  return (
    <Center>
      <Flex direction="row" align="center" gap={5} >
      <Flex direction="column" align="center">
      
        <Button
          as={Flex}
          direction="row"
          alignItems="center"
          bg="#000000"
          borderColor="#1FAFC8"
          borderWidth="1px"
          p={10}
          boxShadow="sm"
          width="230px"
          size="lg"
          borderRadius="20px"
          fontSize="16px"
          _hover={{ bg: '#1FAFC8' }}
          _active={{ bg: '#1FAFC8' }}
          onClick={onToggle}
        >
          <Icon as={BsFillRocketTakeoffFill} boxSize={12} marginRight={6} />
          <Box>
            <Text fontWeight="bold" fontSize="lg" color="white">
              Start-Up
            </Text>
            <Text fontWeight="bold" fontSize="lg" color="#737373">
              Registration
            </Text>
          </Box>
        </Button>

        <Collapse in={isOpen} animateOpacity>

          <Box
            p="60px"
            color="white"
            mt="4"
            bg="#000000"
            borderWidth="1px"
            rounded="lg"
        

          >
            <Heading>Start-Up Registration Form</Heading>
            <Text>*Form open to established startups and research that are taking the first steps towards a startup.</Text>
            <br />
            <form onSubmit={handleSubmit}>


              <FormControl isRequired>
                <FormLabel>Start-Up Name</FormLabel>
                <Input id="startupName" name="startUpName" value={formData.startUpName} onChange={handleChange} placeholder="Brand Name" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Email</FormLabel>
                <Input id="emailCompany" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Website or Social Media Profile</FormLabel>
                <Input id="Website" placeholder="Website/Profile URL" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Startup Slogan</FormLabel>
                <Input id="startupSlogan" placeholder="e.g. Biotechnology for Life" />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Short Description</FormLabel>
                <Input id="shortDes" placeholder="Describe what your startup does in a paragraph" />
              </FormControl>

              <FormControl mt={4}>
                  <FormLabel>Upload Logo</FormLabel>
                  <InputGroup>
                    <Input id="uploadLogo" type="file" placeholder="Upload Logo" />
                    <InputRightElement width="5rem">
                      <Button h="1.75rem" size="sm" colorScheme="teal">
                        Upload
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText>Recommended size 200x200 px</FormHelperText>
                </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Startup Status</FormLabel>
                <Select id="startupStatus" placeholder="Select status">
                <option value="ResearchStage" selected>Research stage</option>
                <option value="EarlyStartUp">Early Start-Up</option>
                <option value="PreSeed" >Pre-seed</option>
                <option value="Seed">Seed</option>
                </Select>
              </FormControl>
              {/* Campo para Madurez tecnológica */}
              <FormControl isRequired mt={4}>
                <FormLabel>Technology Readiness Level (TRL)</FormLabel>
                <Select id="tlr" placeholder="Select TRL">
                  <option value="1" selected>TRL-1: Basic principles</option>
                  <option value="2">TRL-2: Technology concept formulated</option>
                  <option value="3">TRL-3: Experimental proof of concept</option>
                  <option value="4">TRL-4: Technology validated in lab</option>
                  <option value="5">TRL-5: Technology validated in relevant environment</option>
                  <option value="6">TRL-6 or higher</option>
                </Select>
                <FormHelperText>
                  Please describe the TRL level for your technology.
                </FormHelperText>
              </FormControl>

              {/* Campo para Nombre del representante o team leader */}
              <FormControl isRequired mt={4}>
                <FormLabel>Full Name of Legal Representative / Team Leader</FormLabel>
                <Input id="fullNameTL" placeholder="Full Name" />
              </FormControl>

              {/* Campo para Detalles del representante o team leader */}
              <FormControl isRequired mt={4}>
                <FormLabel>Specialization Legal Representative / Team Leader</FormLabel>
                <Input id="specializationTL" placeholder="Specialization" />
              </FormControl>

              {/* Campo para Perfil de Linkedin o similar */}
              <FormControl isRequired mt={4}>
                <FormLabel>LinkedIn Profile of Legal Representative / Team Leader</FormLabel>
                <Input id="linkedinTL" placeholder="LinkedIn Profile URL" />
              </FormControl>

              {/* Campo para Industria / sector productivo */}
              <FormControl isRequired mt={4}>
                <FormLabel>Industry / Productive Sector</FormLabel>
                <Select id="industry" placeholder="Select Industry">
                  <option value="HealthTech" selected>HealthTech</option>
                  <option value="Agri-FoodTech">Agri-foodTech</option>
                  <option value="GreenTech">GreenTech</option>
                  <option value="SyntheticTech">SyntheticTech</option>
                  <option value="MiningTech">MiningTech</option>
                </Select>
              </FormControl>

              {/* Campo para País de origen */}
              <FormControl isRequired mt={4}>
                <FormLabel>Country of Origin</FormLabel>
                <Select id="country" name="country">
                  <option value="ar">Argentina</option>
                  <option value="bo">Bolivia</option>
                  <option value="br">Brasil</option>
                  <option value="cl">Chile</option>
                  <option value="co">Colombia</option>
                  <option value="cr">Costa Rica</option>
                  <option value="cu">Cuba</option>
                  <option value="do">República Dominicana</option>
                  <option value="ec">Ecuador</option>
                  <option value="sv">El Salvador</option>
                  <option value="gt">Guatemala</option>
                  <option value="hn">Honduras</option>
                  <option value="mx">México</option>
                  <option value="ni">Nicaragua</option>
                  <option value="pa">Panamá</option>
                  <option value="py">Paraguay</option>
                  <option value="pe">Perú</option>
                  <option value="pr">Puerto Rico</option>
                  <option value="uy">Uruguay</option>
                  <option value="ve">Venezuela</option>
                  {/* Agregar más países según sea necesario */}
                </Select>
              </FormControl>

              <Button type="submit" mt={4} colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Collapse>
        </Flex>
        <Flex direction="column" align="center">
          <Tooltip label="The information you enter in this form will be published for the sponsors." textColor="#FFFFFF" bg="#000000" fontSize="md" placement="right-start">
            <Box>
              <IoInformationCircleOutline size={25} color="#737373" />
            </Box>
          </Tooltip>
      </Flex>
      </Flex>
    </Center>
  );
};
export default StartupForms;
