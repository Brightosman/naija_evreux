"use client";

import React from 'react'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateNotice = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ notice: "", tag: "" });


    const createNotice = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
        const response = await fetch("/api/notice/new", {
            method: "POST",
            body: JSON.stringify({
            notice: post.notice,
            userId: session?.user.id,
            tag: post.tag,
            }),
        });

        if (response.ok) {
            router.push("/");
        }
        } catch (error) {
        console.log(error);
        } finally {
        setIsSubmitting(false);
        }
    };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createNotice}
    />
  )
}

export default CreateNotice