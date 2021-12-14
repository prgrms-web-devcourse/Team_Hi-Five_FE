import { Box, Flex, Spacer } from "@chakra-ui/react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import { ActionsMenu } from "@/components/ActionsMenu";
import { User } from "@/components/User";

type dataType = {
  content: "string";
  id: 0;
  ownerAge: 0;
  ownerGender: "string";
  ownerId: 0;
  ownerNickname: "string";
  title: "string";
};

type MemoHeaderProps = {
  memoId?: string;
};

export const MemoHeader = ({ memoId }: MemoHeaderProps) => {
  const data = {
    content: "mycontent",
    id: 0,
    ownerAge: 22,
    ownerGender: "남성",
    ownerId: 0,
    ownerNickname: "mynick",
    title: "mytitle",
  };

  const { ownerNickname, ownerAge, ownerGender, ownerId } = data;

  return (
    <Box padding={1} height="100px">
      <Flex height="100px" alignItems="center">
        <User size="md" />
        <Spacer />
        <ActionsMenu icon={<IoEllipsisHorizontalSharp />}>
          <Box onClick={() => console.log("삭제")}>삭제</Box>
          <Box onClick={() => console.log("수정")}>수정</Box>
          <Box>취소</Box>
        </ActionsMenu>
      </Flex>
    </Box>
  );
};
