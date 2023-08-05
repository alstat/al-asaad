import Replicate from "replicate";
// import dotenv from "dotenv";
// console.log(import.meta.env)
// console.log(dotenv.config())

const replicate = new Replicate({
    auth: import.meta.env.VITE_REPLICATE_API_TOKEN as string,
});
console.log(replicate)
type ReplicateModelName = `${string}/${string}:${string}`;

interface ReplicateInput {
    input: ModelInput
}

interface ModelInput {
    motion_module: string,
    prompt?: string
}

export async function generate(model: ReplicateModelName = "lucataco/animate-diff:1531004ee4c98894ab11f8a4ce6206099e732c1da15121987a8eef54828f0663", prompt?: string) {
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
                motion_module: "mm_sd_v14"
            }
        }
    }

    const output = await replicate.run(
        model,
        repData
    );
    return output;    
}