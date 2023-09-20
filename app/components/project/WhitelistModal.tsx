import React from "react";

// components
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "~/components/shared/Dialog";
import Input from "~/components/shared/Input";
import Icon from "~/components/shared/Icon";
import { ScrollArea } from "~/components/shared/ScrollArea";

export default function WhitelistModal({
  project,
  trigger,
}: {
  project: any;
  trigger: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <strong className="text-lg font-bold">Whitelist</strong>
        </DialogHeader>
        <div className="flex flex-1 flex-col gap-y-8">
          <div className="relative flex flex-1 items-center">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Icon
              icon="search"
              className="absolute left-3 text-muted-foreground"
            />
          </div>

          <ScrollArea className="w-full h-72">
            {project &&
              project
                .filter((item: any) => item.includes(searchQuery))
                .map((address: any) => (
                  <div
                    key={address}
                    className="flex flex-1 pb-4 mb-4 border-b border-solid border-border last:border-none font-semibold"
                  >
                    {address}
                  </div>
                ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
