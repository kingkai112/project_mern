// for handleEdit and handleDelete
// it is going to have 3 types of requests 
// GET (read that request)
// PATCH (update)
// DELETE (to be able to delete it)

import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

// GET to be able to read one specific prompt

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt) return new Response("Prompt not found", { status: 404 })
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("failed to fetch", { status: 500 })
    }
}

// PATCH to be able to update 

export const PATCH = async(request, { params }) => {
    const { prompt, tag } = await request.json();
    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt) return new Response("prompt not found", { status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        
        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("failed to update", { status: 500 })
    }
} 

// DELETE 

export const DELETE = async(request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id)
        return new Response("Prompt deleted successful", { status: 200 })
    } catch (error) {
        return new Response("Prompt deletion faield", { status: 500 })
    }
}

