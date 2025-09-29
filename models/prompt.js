import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId, // user will be in database too
        ref: 'User' // one to many relationship, a user can create different prompts
    },
    prompt: {
        type: String,
        required: [true, "Cannot leave this field empty"]
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    }   
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);
// either get the prompt that already exists, or create a new model thats going to be called
// prompt based on the promptschema

export default Prompt;
