import { Box, HStack, VStack } from "@chakra-ui/react";

const Item = (props: Parameters<typeof Box>[0]) => {
  return (
    <Box
      as="button"
      padding={"2"}
      width={"100%"}
      textAlign="center"
      _hover={{ bgColor: "#2f2f2f" }}
      {...props}
    />
  );
};

const Sidebar = () => {
  return (
    <>
      <HStack as="header" paddingTop="4px" height={"46px"}></HStack>
      <VStack
        position={"fixed"}
        top={"50px"}
        left={0}
        width="200px"
        height="100vh"
        color={"#ffffff"}
        bgColor={"#31866e"}
        spacing={1}
      >
        <Item>ホーム</Item>
        <Item>課題</Item>
        <Item>課題の追加</Item>
        <Item>ボード</Item>
        <Item>ガントチャート</Item>
        <Item>Wiki</Item>
        <Item>設定</Item>
      </VStack>
      <Box
        marginLeft={"200px"}
        padding={"2"}
        height="100%"
        color={"#ffffff"}
        bgColor="#2f2f2f"
      >
        aaaaaa
      </Box>
    </>
  );
};

export default Sidebar;
