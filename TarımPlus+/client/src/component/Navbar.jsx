import { CloseIcon, HamburgerIcon, } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Badge,
  Flex,
  IconButton,
  Stack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Center,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';
import DesktopNavbar from './DesktopNavbar.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLogged,
  logOut,
  getUser
} from '../reducers/authSlice.js';
import { USER_BADGE_COLORS } from '../data/options.js';
import logo from '../images/logo2.png';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const isLogged = useSelector(getIsLogged);
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box position="sticky" top="0" zIndex={'5'} margin="0" padding="0" >
      <Flex
        bgGradient='linear(to-r, green.500, green.900)'
        //bg={useColorModeValue('green.900', 'green.900')}
        color={useColorModeValue('gray.700', 'white')}
        h={'64px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/">
            <Image
              ml={30}
              mt={20}
              borderRadius='full'
              boxSize='250px'
              src={logo}
            />
          </Link>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            ml={10}
          >
            <DesktopNavbar />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          alignItems="center"
          direction={'row'}
          spacing={5}
        >

          {!isLogged && (
            <>
              <Link to="/uyeol">
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  mr="5"
                  fontWeight={600}
                  color={'white'}
                  bgGradient="linear(to-r, green.300, green.600)"
                  _hover={{ bgGradient: 'linear(to-r, green.200, green.500)' }}
                >
                  Üye Ol
                </Button>
              </Link>
              <Link to="/giris">
                <Button
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'sm'}
                  mr="5"
                  fontWeight={600}
                  color={'white'}
                  bgGradient="linear(to-r, green.300, green.600)"
                  _hover={{ bgGradient: 'linear(to-r, green.200, green.500)' }}
                >
                   Giriş Yap
                </Button>
              </Link>
            </>
          )}
          {isLogged && (
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                mr="5"
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  p={'1'}
                  bgGradient="linear(to-r, blue.300, blue.600)"
                  _hover={{ bgGradient: 'linear(to-r, blue.200, blue.500)' }}
                >
                </Avatar>
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    color={'white'}
                    colorScheme="blue"
                    bgGradient="linear(to-r, blue.300, blue.600)"
                    _hover={{ bgGradient: 'linear(to-r, blue.200, blue.500)' }}
                    name={user ? `${user.name} ${user.surname}` : null}
                    size={'xl'}
                  />
                </Center>
                <br />
                <Center>
                  <Text fontWeight={'600'}>
                    {user && `${user.name} ${user.surname}`}
                  </Text>
                </Center>
                <Center>
                  <Badge colorScheme={USER_BADGE_COLORS[user?.sub_tier]} m="1">
                    {user?.sub_tier}
                  </Badge>
                </Center>
                {/* <br /> */}
                <MenuDivider />
                <Center>
                  <Text>{user && `Credits: ${user.credit_count}`}</Text>
                </Center>
                <MenuDivider />
                <Center>
                  <Text>
                    {user && `You have ${user.match_credit} free matches`}
                  </Text>
                </Center>
                <MenuDivider />
                
                {/* <MenuItem icon={<ColorModeSwitcher />}>Toggle Theme </MenuItem> */}
                <MenuDivider />
                <Link to="/profile">
                  <MenuItem>My Profile</MenuItem>
                </Link>
                <MenuItem>Settings</MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(logOut());
                    navigate('/');
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
              <Modal
                isOpen={isOpenModal}
                onClose={onCloseModal}
                size={'2xl'}
                closeOnOverlayClick={false}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Notifications</ModalHeader>
                  <ModalCloseButton />

                  <ModalFooter>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Menu>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

