import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from "@chakra-ui/react";
  import { setAuth, fetchUser, setUser } from "../reducers/authSlice";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import baseUrl from "../data/baseUrl";
  import axios from "axios";
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
  
    });
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async () => {
      try {
        console.log(JSON.stringify(formData))
        const response = await axios.post(baseUrl + "/auth/add_ilan", formData, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const parseRes = await response.json();
  
          if (parseRes.token) {
            dispatch(
              setAuth({
                token: parseRes.token,
                isLogged: true,
              })
            );
            localStorage.setItem("token", parseRes.token);
            navigate("/");
  
            toast({
              title: "İlan yaratıldı.",
              description: `İlan yaratıldı!`,
              status: "success",
              duration: 2000,
              isClosable: true,
            });
  
            const user = await dispatch(fetchUser(parseRes.userId));
  
            dispatch(
              setUser({
                user: user.payload,
              })
            );
          }
  
          console.log("İlan başarıyla oluşturuldu.");
  
          toast({
            title: "İlan yaratıldı.",
            description: "İlan yaratıldı!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          console.error("İlan oluşturulamadı.");
        }
      } catch (error) {
        console.error("İlan oluşturmada hata ortaya çıktı:", error);
      }
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.800", "grey.900")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              İlanınızı Yaratın
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "green.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Title" isRequired>
                    <FormLabel> Başlık</FormLabel>
                    <Input
                      type="text"
                      name="Title"
                      value={formData.Title}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="Fiyat" isRequired>
                    <FormLabel>Belirlenen ücret</FormLabel>
                    <Input
                     type="int"
                     name="Fiyat"
                     value={formData.Fiyat}
                     onChange={handleInputChange}
                   />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="Description">
                    <FormLabel>İlanınızı detaylandırın</FormLabel>
                    <Input
                      type="text"
                      name="Description"
                      value={formData.Description}
                      onChange={handleInputChange}
                    />
                  </FormControl>
              <Box>
                  <FormControl id="ilan_type">
                    <FormLabel>İlanı hangi tip profil için oluşturduğunuzu belirtiniz. </FormLabel>
                    <Input
                      type="text"
                      name="ilan_type"
                      value={formData.ilan_type}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="İlan oluşturuluyor"
                  size="lg"
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.600",
                  }}
                  onClick={handleSubmit}
                >
                 İlanı Yarat
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }