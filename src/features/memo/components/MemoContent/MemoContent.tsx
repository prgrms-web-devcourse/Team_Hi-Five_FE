import {
  Stack,
  Flex,
  Center,
  Spinner,
  Box,
  Textarea,
  Input,
} from "@chakra-ui/react";

import { useMemoData } from "@/features/memo/hooks";

type MemoContentProps = {
  memoId?: string;
  scheduleId?: string;
};

export const MemoContent = ({ memoId, scheduleId }: MemoContentProps) => {
  console.log(memoId);
  console.log(scheduleId);
  const { data: memo, isLoading } = useMemoData({
    memoId: memoId ? Number(memoId) : null,
    scheduleId: Number(scheduleId),
  });

  console.log(memo);
  return (
    <Stack>
      {isLoading && (
        <Center py="8">
          <Spinner color="cyan.500" />
        </Center>
      )}
      <Flex direction="column">
        <Box minHeight="40px">
          <Input
            fontSize="md"
            color="gray.600"
            fontWeight="bold"
            variant="flushed"
            value={memo?.title}
            disabled
          />
        </Box>
        <Box marginTop="1rem">
          <Textarea
            minH={500}
            maxH={500}
            fontSize="sm"
            color="gray.500"
            isReadOnly
            variant="unstyled"
            value={memo?.content}
          />
        </Box>
      </Flex>
    </Stack>
  );
};
