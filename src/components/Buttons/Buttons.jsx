import { Button } from "@chakra-ui/react";

const GrowBoxButton = ({ children, ...props }) => {
  return (
    <Button
      position="relative"
      zIndex={1}
      background="#50dd94" // Color de fondo inicial
      color="#000" // Color de texto inicial
      border="2px solid #50dd94" // Color de borde
      padding="16px 20px"
      fontSize="16px"
      fontWeight="bold"
      lineHeight="1"
      letterSpacing="0.02em"
      borderRadius="3px"
      transition="0.3s ease-in-out"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
      cursor="pointer"
      whiteSpace="nowrap"
      wordBreak="break-word"
      overflow="hidden"
      mb={9}
      _hover={{
        color: "#000", // Color del texto al hacer hover"
      }}
      sx={{
        "::after": {
          content: '""',
          background: "#fff", // Fondo blanco al hacer hover
          position: "absolute",
          zIndex: -1,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: "scale(0, 0)", // Inicialmente oculto
          transition: "all 0.3s ease",
        },
        ":hover::after": {
          transform: "scale(1, 1)", // Aparece el fondo blanco en hover
          transition: "all 0.3s ease-out",
        },
      }}
      {...props} // Spread operator para aceptar props adicionales
    >
      {children}
    </Button>
  );
};

export default GrowBoxButton;
