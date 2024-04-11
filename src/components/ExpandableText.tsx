import {ReactNode, useState} from "react";
import {Text, Button, VStack} from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}

function ExpandableText({ children }: Props) {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return;

    if (children.length <= limit) {
        return <Text>{children}</Text>
    }

    const summary = children.substring(0, limit);
    return (
        <VStack align="start">
            <Text>
                {expanded ? children : `${summary}...`}
            </Text>
            <Button
                size="sm"
                fontWeight="bold"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Show less' : 'Read More'}
            </Button>
        </VStack>
    );
}

export default ExpandableText;