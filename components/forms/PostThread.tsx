"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";

import { usePathname, useRouter } from "next/navigation";
import { ThreadValidationSchema } from "@/lib/validations/thread";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const PostThread = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof ThreadValidationSchema>>({
    resolver: zodResolver(ThreadValidationSchema),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  return <h1 className="head-text">Post Thread From</h1>;
};

export default PostThread;
