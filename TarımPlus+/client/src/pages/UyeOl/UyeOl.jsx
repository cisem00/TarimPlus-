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
import { setAuth, fetchUser, setUser } from "../../reducers/authSlice";
import { useState } from "react";
import { useDispatch, } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import baseUrl from "../../data/baseUrl";
import axios from "axios";

export default function UyeOl() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
    email: "",
    date_of_birth: ""
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
      console.log(JSON.stringify(formData));
      const response = await axios.post(baseUrl + "/auth/register", formData, {
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
          //localStorage.setItem("user", parseRes.userId);
          navigate("/");

          toast({
            title: "Giriş başarılı.",
            description: `Tekrardan hoşgeldiniz!`,
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

        console.log("User registered successfully.");

        toast({
          title: "Kayıt olma işlemi başarılı.",
          description: "TarımPlus+'a hoşgeldiniz!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.800", "gray.900")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color="white">
            Üye Ol
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
                <FormControl id="firstName" isRequired>
                  <FormLabel>İsim</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Soyisim</FormLabel>
                  <Input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="username" isRequired>
              <FormLabel>Kullanıcı adı</FormLabel>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="dateOfBirth" isRequired>
              <FormLabel>Doğum Tarihi</FormLabel>
              <Input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email adresi</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Şifre</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={handleSubmit}
              >
                 Üye Ol
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
               Zaten üye misiniz? Giriş yapmak için{" "}
                <Link to="/giris" style={{ color: "#38A169" }}>
                  buraya
                </Link>{" "}
                tıklayınız!
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
