"use client";

import { Loader, PlusIcon } from "lucide-react";
import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { DataFilters } from "./data-filters";
import { DottedSeparator } from "@/components/dotted-separator";

import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import { useGetTasks } from "../api/use-get-tasks";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export const TaskViewSwitcher = () => {
  const [view, setView] = useQueryState("task-view", {
    defaultValue: "table",
  });

  const workspaceId = useWorkspaceId();
  const { open } = useCreateTaskModal();

  const { data: tasks, isLoading: isLoadingTasks } = useGetTasks({
    workspaceId,
  });

  return (
    <Tabs
      defaultValue={view}
      onValueChange={setView}
      className="flex-1 w-full border rounded-lg"
    >
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger value="table" className="h-8 w-full lg:w-auto">
              Table
            </TabsTrigger>
            <TabsTrigger value="kanban" className="h-8 w-full lg:w-auto">
              Kanban
            </TabsTrigger>
            <TabsTrigger value="calender" className="h-8 w-full lg:w-auto">
              Calender
            </TabsTrigger>
          </TabsList>
          <Button size="sm" className="w-full lg:w-auto" onClick={open}>
            <PlusIcon className="mr-2 size-4" />
            New
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <DataFilters />
        <DottedSeparator className="my-4" />
        {isLoadingTasks ? (
          <div className="w-full border rounded-lg h-[200px] flex flex-col items-center justify-center">
            <Loader className="size-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            <TabsContent value="table" className="mt-0">
              {JSON.stringify(tasks)}
            </TabsContent>
            <TabsContent value="kanban" className="mt-0">
              {JSON.stringify(tasks)}
            </TabsContent>
            <TabsContent value="calender" className="mt-0">
              {JSON.stringify(tasks)}
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  );
};
