import React from 'react'
import Author from '../components/Author'

import Image from 'next/image'
import Link from 'next/link'
import PsImg1 from '@public/post_img/test-image.jpg.webp'
import PsImg2 from '@public/post_img/test-image2.jpg.webp'

const page = () => {
  return (
    <div>
        <div className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author />
            </div>

            <div className="post py-10">
                <h1 className="font-bold text-green-900 text-5xl text-center pb-5">How long until a robot is doing your dishes?</h1>
            </div>
            <p className="text-green-600 text-3xl text-center pb-5">
              Imagine the biggest market for a physical product you can. Are you thinking of mobile phones? Cars? Property?
            </p>
            <div className="py-10">
            <Image src={PsImg1} alt="post image" width={900} height={600} />
            </div>
            <div className="content text-green-900 text-lg flex flex-col gap-4">
                They are all chunky markets but in the coming decades a new product will be rolled out that will dwarf those giants, says Geordie Rose, the chief executive of Sanctuary AI.

                The Vancouver-based firm is developing a humanoid robot called Phoenix which, when complete, will understand what we want, understand the way the world works and have the skills to carry out our commands.

                "The long term total addressable market is the biggest one that's ever existed in the history of business and technology - which is the labour market. It's all of the things we want done," he says.

                Before we get too ahead of ourselves, he qualifies that statement: "There is a long way to go from where we are today."

                Mr Rose is unwilling to put a time frame on when a robot might be in your house, doing your laundry or cleaning the bathroom. But others I have spoken to in the sector say it could be within ten years.

                Dozens of other firms around the world are working on the technology.

                In the UK, Dyson is investing in AI and robotics aimed at household chores.
            </div>


            <div className="py-10">
            <Image src={PsImg2} alt="post image" width={900} height={600} />
            </div>

            <div className="content text-green-900 text-lg flex flex-col gap-4">
              Perhaps the highest profile company in the market is Tesla, Elon Musk's electric car company.

              It is working on the Optimus humanoid robot, which Mr Musk says could be on sale to the public in a few years' time.

              We will see whether that turns out be the case. What we can say now is that leaps forward in artificial intelligence mean the development of humanoid robots is accelerating.

              "Ten years at the pace the technology is moving now is is an eternity. You know, every month, there's new developments in the AI world that are like fundamental change," says Mr Rose, who has a background in theoretical physics and previously founded a quantum computing company.

              Mainstream interest in AI exploded late last year when a powerful version of ChatGPT was made public. Its ability to generate all sorts of useful text and images has spawned rivals and a wave of investment in AI tech.

              But developing the AI that would allow a robot to complete useful tasks is a different and more difficult task.

              Unlike ChatGPT and its rivals, humanoid robots have to navigate the physical world and need to understand how objects in that world relate to each other.
            </div>

            <div className="content text-green-900 text-lg flex flex-col gap-4">
              A huge amount of work still needs to be done to build a robot that can cope with all the events that could occur in a home or busy workplace.

              "You cannot put a robot in an unstructured environment and then ask it to move around without basically destroying things. It's too much for technology to ask at this moment of time," says Prof Alireza Mohammadi, who established the Robotic Motion Intelligence Lab at the University of Michigan-Dearborn.

              He points out that you can put an AI through millions of training scenarios, but there's always a chance in the real world that it meets something it has never seen before and react in an unpredictable and perhaps dangerous way.

              Part of the problem, he says, is that humans have an intuitive understanding of context and consequences. For example we might guess that an over-excited dog might jump in front of us and make allowances for that.

              Building that into a robot is extremely difficult.

              "Within ten years we might have robots that are capable of walking around with some guidance, but not in completely unstructured environments," says Prof Mohammadi.

              But if those challenges can be overcome, then could humanoid robots start taking jobs currently done by humans?

              Mr Rose points out that there is a shortage of workers in many countries and his robots could one day fill those positions.

              Stewart Miller is the chief executive of the National Robotarium, a partnership between Heriot-Watt University and the University of Edinburgh, which focuses on AI and robotics.

              "Inevitably, there's going to be robots doing jobs that were done by human beings in the past... the question then is, what does that mean?" he says.

              "We will go through some growing pains. But when we think about it, we can start emphasising and concentrating on what human beings do best - freeing up that capacity to do that, and not having to spend time doing what machines
            </div>


          </div>
    </div>
  )
}

export default page