"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export function AppTab() {
  const router = useRouter();

  return (
    <Tabs defaultValue="mechanics" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="mechanics">Mechanics</TabsTrigger>
        <TabsTrigger value="hmi">HMI</TabsTrigger>
      </TabsList>
      <TabsContent value="mechanics">
        <Card>
          <CardHeader>
            <CardTitle>Mechanics</CardTitle>
            <CardDescription>
              Learn about the purpose of the Case Erector Parameter.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            This is the content for the mechanics tab. You can see the mechanics
            information with click button below
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/mechanics")}>
              Go To Mechanics
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="hmi">
        <Card>
          <CardHeader>
            <CardTitle>HMI</CardTitle>
            <CardDescription>
              Learn about the purpose of the Case Erector Parameter.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            This is the content for the HMI tabs. You can see the hmi parameter
            with click this button below.
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/hmi/carton")}>
              See More HMI
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
