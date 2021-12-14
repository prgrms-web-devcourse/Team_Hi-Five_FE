import { Text, Flex, Spacer } from "@chakra-ui/react";
import { IoPersonSharp } from "react-icons/io5";

import { TextWithIcon } from "@/components/TextWithIcon";

type VoteThumbnailProps = {
  title?: string;
  memberCount?: number;
};

export const VoteThumbnail = ({ title, memberCount }: VoteThumbnailProps) => {
  return (
    <Flex direction="column" height="full">
      <Text fontSize="md" color="gray.600" isTruncated>
        {title}
      </Text>
      <Spacer flexGrow={1} />
      <TextWithIcon justifyContent="flex-end" icon={<IoPersonSharp />}>
        {memberCount}명 참여
      </TextWithIcon>
    </Flex>
  );
};
