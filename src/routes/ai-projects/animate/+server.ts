import { json } from "@sveltejs/kit";
import "dotenv/config"
// import { generate } from "$lib/replicate";
import Replicate from "replicate";

// console.log(process.env.REPLICATE_API_TOKEN)
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN as string,
});

type ReplicateModelName = `${string}/${string}:${string}`;

interface ReplicateInput {
    input: ModelInput
}

interface ModelInput {
    motion_module: string,
    prompt?: string
}

async function generate(prompt?: string) {
    let model: ReplicateModelName = "lucataco/animate-diff:1531004ee4c98894ab11f8a4ce6206099e732c1da15121987a8eef54828f0663"
    let repData: ReplicateInput;
    if (prompt === undefined) {
        repData = {
            input: {
                motion_module: "mm_sd_v14"
            }
        }
    } else {
        repData = {
            input: {
                motion_module: "mm_sd_v14",
                prompt: prompt,
            }
        }
    }
    console.log("Sending request")
    const output = await replicate.run(
        model,
        repData
    );
    // return new Response(JSON.stringify(output), {
    //     status: 200
    // })
    // console.log("Got response")
    // console.log(output)
    return new Response(
        JSON.stringify({
        message: output
    }), {status: 200})
}

// export const GET = () => {
//     return generate()
// }

export const POST = async ({request}) => {
    const formData = await request.formData()
    const prompt = String(formData.get('prompt'))
    console.log("Here is the prompt")
    console.log(prompt)
    return generate(prompt)
}
// export async function GET() {
//     // const res = generate();
//     return {
//         status: 200,
//         body: "hi"
//     }
// }