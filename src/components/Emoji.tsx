import top from "../assets/top.png";
import good from "../assets/good.png";
import bad from "../assets/bad.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bad, alt: "bad" },
    4: { src: good, alt: "good" },
    5: { src: top, alt: "top" },
  };

  if (rating === 0) return;
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={2} />;
};

export default Emoji;
