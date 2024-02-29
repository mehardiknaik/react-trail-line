import { Meta, StoryObj } from "@storybook/react/dist";
import TailLine, { TailLineItem, TailLineProps } from "./index";
import React from "react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<TailLineProps> = {
  title: "Example/TailLine",
  component: TailLine,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<TailLineProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    items: [
      {
        status: "complete",
        message: "Order Placed",
        time: "12-jan",
        completed: 100,
        orderId: 243298395,
      },
      {
        status: "complete",
        message: "Payment Received",
        completed: 100,
        time: "13-jan",
      },
      {
        status: "inprogress",
        becon: true,
        completed: 50,
        message: "Shipped",
        time: "15-jan",
      },
      { status: "todo", message: "Item Received", time: "17-jan" },
      { status: "reject", message: "Item returned", time: "--" },
    ],
    Content: (x) => (
      <div className="mr-4">
        <div className="text-nowrap">{x?.message}</div>
        {x?.orderId && (
          <div className="text-muted-foreground text-sm">
            Order Id- {x?.orderId}
          </div>
        )}
        <div className="text-gray-400 text-xs">{x?.time}</div>
      </div>
    ),
    horizantal: true,
  },
};
