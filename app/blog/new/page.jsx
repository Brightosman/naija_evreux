"use client";

import React from 'react'
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import BlogForm from '../components/BlogForm';

const NewBlog = () => {
    const CLOUD_NAME = 'dcz2vqrqt'
    const UPLOAD_PRESET = 'nigerians_in_eure_blog'

    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ title: "", subTitle: "", image1Url: "", image2Url: "", image3Url: "", content1: "" , content2: "" , content3: "" , tag: "" });

    const newBlog = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
        const response = await fetch("/api/blog/new", {
            method: "POST",
            body: JSON.stringify({
            title: post.title,
            subTitle: post.subTitle,
            image1Url: post.image1Url,
            image2Url: post.image2Url,
            image3Url: post.image3Url,
            content1: post.content1,
            content2: post.content2,
            content3: post.content3,
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
    <BlogForm
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={newBlog}
    />
  )
}

export default NewBlog