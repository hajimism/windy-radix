import { Label } from "@radix-ui/react-label";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ".";

const DialogDemo = () => {
  const [formState, setState] = useState({
    name: "Pedro Duarte",
    username: "@peduarte",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={formState.name}
              onChange={(e) => setState({ ...formState, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={formState.username}
              onChange={(e) =>
                setState({ ...formState, username: e.target.value })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const meta: Meta<typeof DialogDemo> = {
  title: "components/Dialog",
  component: DialogDemo,
};

export default meta;

type Story = StoryObj<typeof DialogDemo>;

export const Primary: Story = {
  args: {},
};
