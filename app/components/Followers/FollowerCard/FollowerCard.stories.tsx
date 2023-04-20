import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import FollowerCard from "./FollowerCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FollowerCard> = {
  title: "FollowerCard",
  component: FollowerCard,
};

export default meta;
type Story = StoryObj<typeof FollowerCard>;

export const Facebook: Story = {
  args: {
    socialMediaIcon: <FaFacebookSquare color="178FF5" fontSize={"20px"} />,
    username: "@madras",
    followers: "1987",
    days: 12,
  },
};

export const Twitter: Story = {
  args: {
    socialMediaIcon: <FaTwitter color="178FF5" fontSize={"20px"} />,
    username: "@nathan",
    followers: "1987",
    days: 12,
  },
};
export const Instagram: Story = {
  args: {
    socialMediaIcon: <FaInstagram color="orange" fontSize={"20px"} />,
    username: "@nathan",
    followers: "1987",
    days: 12,
  },
};

export const Youtube: Story = {
  args: {
    socialMediaIcon: <FaYoutube color="red" fontSize={"20px"} />,
    username: "@nathan",
    followers: "1987",
    days: 12,
  },
};
